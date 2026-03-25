
(function () {
  const bank = window.QUESTION_BANK;
  const el = {
    sectionSelect: document.getElementById('sectionSelect'),
    difficultySelect: document.getElementById('difficultySelect'),
    modeSelect: document.getElementById('modeSelect'),
    countInput: document.getElementById('countInput'),
    shuffleQuestions: document.getElementById('shuffleQuestions'),
    startBtn: document.getElementById('startBtn'),
    restartBtn: document.getElementById('restartBtn'),
    welcomeView: document.getElementById('welcomeView'),
    quizView: document.getElementById('quizView'),
    resultView: document.getElementById('resultView'),
    viewTitle: document.getElementById('viewTitle'),
    viewSubtitle: document.getElementById('viewSubtitle'),
    bankInfo: document.getElementById('bankInfo'),
    sectionList: document.getElementById('sectionList'),
    progressText: document.getElementById('progressText'),
    progressMeta: document.getElementById('progressMeta'),
    progressFill: document.getElementById('progressFill'),
    answerState: document.getElementById('answerState'),
    questionBadge: document.getElementById('questionBadge'),
    difficultyBadge: document.getElementById('difficultyBadge'),
    questionStem: document.getElementById('questionStem'),
    optionsContainer: document.getElementById('optionsContainer'),
    feedbackBox: document.getElementById('feedbackBox'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    submitBtn: document.getElementById('submitBtn'),
    paletteGrid: document.getElementById('paletteGrid'),
    scoreHero: document.getElementById('scoreHero'),
    resultStats: document.getElementById('resultStats'),
    reviewList: document.getElementById('reviewList'),
    retryBtn: document.getElementById('retryBtn'),
    reviewWrongBtn: document.getElementById('reviewWrongBtn'),
    reviewAllBtn: document.getElementById('reviewAllBtn'),
    quickCountButtons: document.getElementById('quickCountButtons')
  };

  const difficultyLabel = {
    easy: 'Dễ',
    medium: 'Trung bình',
    hard: 'Khó'
  };

  const state = {
    session: null,
    reviewWrongOnly: false,
    lastConfig: null
  };

  function shuffleArray(input) {
    const arr = input.slice();
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getAllQuestions(sectionId, difficulty) {
    let sections = bank.sections;
    if (sectionId !== 'ALL') {
      sections = sections.filter(s => s.id === sectionId);
    }
    let pool = sections.flatMap(s => s.questions.map(q => ({ ...q })));
    if (difficulty !== 'all') {
      pool = pool.filter(q => q.difficulty === difficulty);
    }
    return pool;
  }

  function sectionTitleById(sectionId) {
    const section = bank.sections.find(s => s.id === sectionId);
    return section ? section.title : 'Tất cả phần';
  }

  function saveConfig() {
    if (!state.lastConfig) return;
    localStorage.setItem('aspnet-core-bank-config', JSON.stringify(state.lastConfig));
  }

  function loadConfig() {
    try {
      const raw = localStorage.getItem('aspnet-core-bank-config');
      if (!raw) return;
      const cfg = JSON.parse(raw);
      if (cfg.sectionId) el.sectionSelect.value = cfg.sectionId;
      if (cfg.difficulty) el.difficultySelect.value = cfg.difficulty;
      if (cfg.mode) el.modeSelect.value = cfg.mode;
      if (cfg.count) el.countInput.value = cfg.count;
      if (typeof cfg.shuffle === 'boolean') el.shuffleQuestions.checked = cfg.shuffle;
    } catch (err) {
      console.warn(err);
    }
  }

  function renderBankInfo() {
    const rows = [
      ['Tổng phần', String(bank.meta.totalSections)],
      ['Tổng câu hỏi', String(bank.meta.totalQuestions)],
      ['Chuẩn mỗi phần', '45 dễ / 75 TB / 30 khó']
    ];
    el.bankInfo.innerHTML = rows.map(([label, value]) => (
      `<div class="meta-row"><span>${label}</span><span>${value}</span></div>`
    )).join('');
  }

  function renderSectionList() {
    el.sectionList.innerHTML = bank.sections.map(section => `
      <div class="section-item">
        <strong>${section.id} - ${section.title}</strong>
        <small>${section.questionCount} câu · ${section.difficultyCount.easy} dễ · ${section.difficultyCount.medium} TB · ${section.difficultyCount.hard} khó</small>
      </div>
    `).join('');
  }

  function populateSectionSelect() {
    const options = [
      { id: 'ALL', title: 'Tất cả phần' },
      ...bank.sections.map(s => ({ id: s.id, title: `${s.id} - ${s.title}` }))
    ];
    el.sectionSelect.innerHTML = options.map(opt => `<option value="${opt.id}">${opt.title}</option>`).join('');
  }

  function currentQuestion() {
    if (!state.session) return null;
    return state.session.questions[state.session.currentIndex];
  }

  function computeStats() {
    const stats = {
      total: state.session.questions.length,
      answered: 0,
      correct: 0,
      wrong: 0,
      unanswered: 0,
      byDifficulty: {
        easy: { total: 0, correct: 0 },
        medium: { total: 0, correct: 0 },
        hard: { total: 0, correct: 0 }
      }
    };

    state.session.questions.forEach((q, index) => {
      const answer = state.session.answers[index];
      stats.byDifficulty[q.difficulty].total += 1;
      if (!answer) {
        stats.unanswered += 1;
        return;
      }
      stats.answered += 1;
      if (answer === q.correct) {
        stats.correct += 1;
        stats.byDifficulty[q.difficulty].correct += 1;
      } else {
        stats.wrong += 1;
      }
    });

    return stats;
  }

  function getModeLabel(mode) {
    return mode === 'exam' ? 'Thi thử' : 'Luyện tập';
  }

  function startQuiz() {
    const sectionId = el.sectionSelect.value;
    const difficulty = el.difficultySelect.value;
    const mode = el.modeSelect.value;
    const requestedCount = Number(el.countInput.value || 20);
    const shuffle = el.shuffleQuestions.checked;
    let pool = getAllQuestions(sectionId, difficulty);

    if (shuffle) {
      pool = shuffleArray(pool);
    }

    const count = Math.max(5, Math.min(requestedCount, pool.length));
    const questions = pool.slice(0, count);

    state.session = {
      config: { sectionId, difficulty, mode, count, shuffle },
      questions,
      answers: {},
      currentIndex: 0,
      submitted: false
    };
    state.lastConfig = { sectionId, difficulty, mode, count, shuffle };
    state.reviewWrongOnly = false;
    saveConfig();
    showQuiz();
    renderQuestion();
  }

  function showQuiz() {
    el.welcomeView.hidden = true;
    el.quizView.hidden = false;
    el.resultView.hidden = true;
    el.restartBtn.hidden = false;
    el.viewTitle.textContent = `${getModeLabel(state.session.config.mode)} · ${sectionTitleById(state.session.config.sectionId)}`;
    el.viewSubtitle.textContent = `Số câu: ${state.session.questions.length} · Bộ lọc độ khó: ${el.difficultySelect.options[el.difficultySelect.selectedIndex].text}`;
  }

  function showWelcome() {
    el.welcomeView.hidden = false;
    el.quizView.hidden = true;
    el.resultView.hidden = true;
    el.restartBtn.hidden = true;
    el.viewTitle.textContent = 'Sẵn sàng luyện tập';
    el.viewSubtitle.textContent = 'Chọn phần học, số câu và chế độ rồi nhấn “Bắt đầu”.';
  }

  function answerLabel(question, label) {
    return `${label}. ${question.options[label]}`;
  }

  function renderQuestion() {
    const q = currentQuestion();
    if (!q) return;

    const index = state.session.currentIndex;
    const answered = state.session.answers[index];
    const stats = computeStats();

    el.progressText.textContent = `Câu ${index + 1} / ${state.session.questions.length}`;
    el.progressMeta.textContent = `${state.session.config.sectionId === 'ALL' ? q.sectionId : q.sectionId} · ${q.sectionTitle}`;
    el.progressFill.style.width = `${((index + 1) / state.session.questions.length) * 100}%`;
    el.answerState.textContent = `${stats.answered} đã chọn · ${stats.correct} đúng`;
    el.questionBadge.textContent = q.sectionId;
    el.difficultyBadge.textContent = difficultyLabel[q.difficulty] || q.difficulty;
    el.questionStem.textContent = q.stem;

    const showFeedback = state.session.config.mode === 'practice' && answered;
    el.feedbackBox.hidden = !showFeedback;
    el.feedbackBox.className = 'feedback';
    if (showFeedback) {
      const isCorrect = answered === q.correct;
      el.feedbackBox.classList.add(isCorrect ? 'success' : 'error');
      el.feedbackBox.innerHTML = `
        <strong>${isCorrect ? 'Đúng rồi.' : 'Chưa chính xác.'}</strong>
        <div>Đáp án đúng: <strong>${answerLabel(q, q.correct)}</strong></div>
        <div>Giải thích: ${q.explanation}</div>
      `;
    }

    el.optionsContainer.innerHTML = Object.keys(q.options).map(label => {
      const selected = answered === label;
      const isCorrect = label === q.correct;
      let className = 'option-btn';
      if (selected) className += ' selected';
      if (showFeedback && isCorrect) className += ' correct';
      if (showFeedback && selected && !isCorrect) className += ' wrong';

      const disabled = state.session.config.mode === 'practice' && !!answered ? 'disabled' : '';
      return `
        <button type="button" class="${className}" data-label="${label}" ${disabled}>
          <span class="option-label">${label}</span>
          <span class="option-content">${q.options[label]}</span>
        </button>
      `;
    }).join('');

    el.optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => selectAnswer(btn.dataset.label));
    });

    el.prevBtn.disabled = index === 0;
    const isLast = index === state.session.questions.length - 1;
    el.nextBtn.hidden = isLast;
    el.submitBtn.hidden = !isLast;
    el.nextBtn.disabled = state.session.config.mode === 'practice' && !answered;
    el.submitBtn.disabled = state.session.config.mode === 'practice' && !answered;

    renderPalette();
  }

  function selectAnswer(label) {
    const index = state.session.currentIndex;
    state.session.answers[index] = label;
    renderQuestion();
  }

  function gotoQuestion(index) {
    if (index < 0 || index >= state.session.questions.length) return;
    state.session.currentIndex = index;
    renderQuestion();
  }

  function renderPalette() {
    const mode = state.session.config.mode;
    el.paletteGrid.innerHTML = state.session.questions.map((q, index) => {
      const answer = state.session.answers[index];
      let className = 'palette-btn';
      if (index === state.session.currentIndex) className += ' current';
      if (answer) className += ' answered';
      if (mode === 'practice' && answer) {
        className += answer === q.correct ? ' correct' : ' wrong';
      }
      return `<button type="button" class="${className}" data-index="${index}">${index + 1}</button>`;
    }).join('');

    el.paletteGrid.querySelectorAll('.palette-btn').forEach(btn => {
      btn.addEventListener('click', () => gotoQuestion(Number(btn.dataset.index)));
    });
  }

  function submitQuiz() {
    state.session.submitted = true;
    renderResults();
  }

  function renderResults() {
    const stats = computeStats();
    const total = stats.total;
    const score = stats.correct;
    const percent = total ? ((score / total) * 100).toFixed(1) : '0.0';

    el.quizView.hidden = true;
    el.resultView.hidden = false;
    el.welcomeView.hidden = true;

    el.viewTitle.textContent = 'Kết quả bài làm';
    el.viewSubtitle.textContent = `${getModeLabel(state.session.config.mode)} · ${sectionTitleById(state.session.config.sectionId)} · ${total} câu`;

    el.scoreHero.innerHTML = `
      <div class="hero-item"><span>Điểm số</span><strong>${score} / ${total}</strong></div>
      <div class="hero-item"><span>Tỷ lệ đúng</span><strong>${percent}%</strong></div>
      <div class="hero-item"><span>Chưa trả lời</span><strong>${stats.unanswered}</strong></div>
    `;

    const statCards = [
      ['Đã chọn', stats.answered],
      ['Đúng', stats.correct],
      ['Sai', stats.wrong],
      ['Dễ đúng', `${stats.byDifficulty.easy.correct} / ${stats.byDifficulty.easy.total}`],
      ['TB đúng', `${stats.byDifficulty.medium.correct} / ${stats.byDifficulty.medium.total}`],
      ['Khó đúng', `${stats.byDifficulty.hard.correct} / ${stats.byDifficulty.hard.total}`]
    ];
    el.resultStats.innerHTML = statCards.map(([label, value]) => `
      <div class="stat-card"><span>${label}</span><strong>${value}</strong></div>
    `).join('');

    renderReview();
  }

  function renderReview() {
    const cards = [];
    state.session.questions.forEach((q, index) => {
      const userAnswer = state.session.answers[index];
      const isCorrect = userAnswer === q.correct;
      if (state.reviewWrongOnly && isCorrect) return;

      cards.push(`
        <article class="review-card">
          <div class="review-meta">
            <span class="badge">${q.sectionId}</span>
            <span class="badge subtle">${difficultyLabel[q.difficulty]}</span>
            <span class="badge subtle">Câu ${index + 1}</span>
          </div>
          <h4>${q.stem}</h4>
          <div class="review-answer">
            <div class="line ${isCorrect ? 'correct' : 'wrong'}">
              <strong>Bạn chọn:</strong> ${userAnswer ? answerLabel(q, userAnswer) : 'Chưa trả lời'}
            </div>
            <div class="line correct">
              <strong>Đáp án đúng:</strong> ${answerLabel(q, q.correct)}
            </div>
            <div class="line">
              <strong>Giải thích:</strong> ${q.explanation}
            </div>
          </div>
        </article>
      `);
    });

    el.reviewList.innerHTML = cards.join('') || '<div class="card">Không có câu nào để hiển thị theo bộ lọc hiện tại.</div>';
  }

  function bindEvents() {
    el.startBtn.addEventListener('click', startQuiz);
    el.restartBtn.addEventListener('click', showWelcome);
    el.prevBtn.addEventListener('click', () => gotoQuestion(state.session.currentIndex - 1));
    el.nextBtn.addEventListener('click', () => gotoQuestion(state.session.currentIndex + 1));
    el.submitBtn.addEventListener('click', submitQuiz);
    el.retryBtn.addEventListener('click', () => {
      if (!state.session) return;
      el.sectionSelect.value = state.session.config.sectionId;
      el.difficultySelect.value = state.session.config.difficulty;
      el.modeSelect.value = state.session.config.mode;
      el.countInput.value = state.session.config.count;
      el.shuffleQuestions.checked = state.session.config.shuffle;
      startQuiz();
    });
    el.reviewWrongBtn.addEventListener('click', () => {
      state.reviewWrongOnly = true;
      renderReview();
    });
    el.reviewAllBtn.addEventListener('click', () => {
      state.reviewWrongOnly = false;
      renderReview();
    });
    el.quickCountButtons.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        el.countInput.value = btn.dataset.count;
      });
    });
  }

  function init() {
    populateSectionSelect();
    renderBankInfo();
    renderSectionList();
    bindEvents();
    loadConfig();
    showWelcome();
  }

  init();
})();
