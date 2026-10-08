(()=>{
 'use strict';
 const $=id=>document.getElementById(id),C=window.SPMCore,D=window.SPM_DATA;
 if(!C||!D||!Array.isArray(D.questions)||!D.questions.length){const p=document.createElement('p');p.className='fatal';p.textContent='Không tải được bộ câu hỏi. Hãy giải nén đầy đủ thư mục và mở lại index.html.';$('main').replaceChildren(p);return;}
 const bank=D.questions,parts=D.parts,KEY='spm-session-v2',WRONG='spm-wrong-v2';
 const read=key=>{try{return localStorage.getItem(key)}catch{return null}};
 let storageAlerted=false;
 function write(key,value){try{localStorage.setItem(key,value)}catch{if(!storageAlerted){storageAlerted=true;toast('Trình duyệt không cho lưu tiến độ. Bạn vẫn có thể làm bài bình thường.');}}}
 let session=C.restore(read(KEY),bank),wrong=new Set();
 try{const w=JSON.parse(read(WRONG));if(Array.isArray(w))wrong=new Set(w.filter(id=>bank.some(q=>q.id===id)))}catch{}
 let toastTimer;
 function toast(message){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,5000);}
 function save(){if(session)write(KEY,JSON.stringify(session));}
 function view(name){for(const id of ['home','quiz','results'])$(id).hidden=id!==name;}
 function selectedParts(){return [...document.querySelectorAll('#chapters input:checked')].map(x=>Number(x.value));}
 function updateSelection(){const chosen=selectedParts();const count=bank.filter(q=>chosen.includes(q.part)).length;$('selected-count').textContent=count;$('start').disabled=!count;const all=chosen.length===parts.length;$('select-all').textContent=all?'Bỏ chọn tất cả':'Chọn tất cả';}
 function updateWrong(){const count=wrong.size;$('home-retry').textContent=count?`Làm lại ${count} câu sai`:'Chưa có câu sai để ôn';$('home-retry').disabled=!count;}
 function showHome(moveFocus=false){view('home');updateWrong();$('resume-box').hidden=!session;if(session){const score=C.score(session);$('resume-text').textContent=session.finished?`Bài trước: ${score.correct}/${score.total} câu đúng.`:`Bài đã lưu: ${score.total-score.unanswered}/${score.total} câu đã chọn.`;$('resume').textContent=session.finished?'Xem lại bài trước':'Tiếp tục bài đã lưu';}updateSelection();if(moveFocus)$('home-title').focus({preventScroll:true});window.scrollTo(0,0);}
 function config(ids){return{parts:ids?parts.map(p=>p.id):selectedParts(),ids,mode:ids?'practice':document.querySelector('input[name=mode]:checked').value,shuffleQuestions:$('shuffle-questions').checked,shuffleOptions:$('shuffle-options').checked};}
 function begin(ids){session=C.makeSession(bank,config(ids));if(!session.items.length){toast('Hãy chọn ít nhất một phần để bắt đầu.');return;}save();renderQuiz(true);}
 function updateHistory(q,persist=true){const answer=session.answers[q.id];if(answer===undefined)return;if(answer===q.correct)wrong.delete(q.id);else wrong.add(q.id);if(persist)write(WRONG,JSON.stringify([...wrong]));}
 function renderGrid(){
  const container=$('question-grid');container.replaceChildren();
  session.items.forEach((q,i)=>{const b=document.createElement('button');const answered=session.answers[q.id]!==undefined;const checked=session.finished||session.checked.includes(q.id);let state=answered?'Đã chọn':'Chưa trả lời';b.className='qnav';if(answered)b.classList.add('answered');if(checked&&answered){const good=session.answers[q.id]===q.correct;b.classList.add(good?'correct':'wrong');state=good?'Đúng':'Sai';}if(i===session.index){b.classList.add('active');b.setAttribute('aria-current','step');}b.textContent=i+1;b.setAttribute('aria-label',`Câu ${i+1}: ${state}`);b.addEventListener('click',()=>{session.index=i;save();renderQuiz(true)});container.append(b);});
 }
 function renderQuiz(focus=false){
  if(!session)return;const active=document.activeElement;const focusAnswer=active&&active.name==='answer'?Number(active.value):null;view('quiz');const q=session.items[session.index],answer=session.answers[q.id],revealed=session.finished||session.checked.includes(q.id),p=parts.find(p=>p.id===q.part),score=C.score(session);
  $('mode-label').textContent=session.finished?'Xem lại bài':session.mode==='exam'?'Tự kiểm tra':'Luyện tập';$('question-part').textContent=`Part ${p.roman} · ${p.title}`;$('question-number').textContent=`Câu ${session.index+1} / ${session.items.length}`;$('question-title').textContent=q.question;
  $('options').replaceChildren();q.options.forEach((text,i)=>{const label=document.createElement('label');label.className='option';const input=document.createElement('input');input.type='radio';input.name='answer';input.value=i;input.checked=i===answer;input.disabled=revealed;const letter=document.createElement('span');letter.className='letter';letter.textContent='ABCD'[i];letter.setAttribute('aria-hidden','true');const span=document.createElement('span');span.className='option-text';span.textContent=text;label.append(input,letter,span);
   if(revealed){if(i===q.correct){label.classList.add('positive');const mark=document.createElement('span');mark.className='answer-mark';mark.textContent='✓ Đáp án đúng';span.append(mark);}else if(i===answer){label.classList.add('negative');const mark=document.createElement('span');mark.className='answer-mark';mark.textContent='✕ Bạn đã chọn';span.append(mark);}}
   input.addEventListener('change',()=>{if(session.finished||session.checked.includes(q.id))return;session.answers[q.id]=i;save();renderQuiz();});$('options').append(label);
  });
  if(focusAnswer!==null&&!revealed&&!focus){const replacement=$('options').querySelector(`input[value="${focusAnswer}"]`);if(replacement)replacement.focus({preventScroll:true});}
  const exp=$('explanation');exp.hidden=!revealed;exp.replaceChildren();if(revealed){const title=document.createElement('strong');title.textContent=answer===undefined?'Chưa trả lời · Đáp án đã được mở':answer===q.correct?'Chính xác.':'Chưa đúng. Hãy xem lại ý trong slide.';const content=document.createElement('p');content.textContent=q.explanation;const source=document.createElement('span');source.className='source';source.textContent=`Nguồn: slide ${q.slides.join(', ')} · ${p.english}`;exp.append(title,content,source);}
  $('check').hidden=session.mode==='exam'||session.finished;$('check').disabled=answer===undefined||revealed;$('question-status').textContent=revealed?(session.finished?'Đang xem lại đáp án':'Đáp án đã được kiểm tra'):answer===undefined?'Chọn một đáp án để tiếp tục.':'Đã chọn đáp án.';
  $('prev').disabled=session.index===0;$('next').disabled=session.index===session.items.length-1;
  const answered=score.total-score.unanswered;$('progress-label').textContent=`${answered}/${score.total}`;$('progress').max=score.total;$('progress').value=answered;$('progress-detail').textContent=session.finished?`${score.correct} đúng · ${score.wrong} sai · ${score.unanswered} chưa làm`:`${score.unanswered} câu chưa trả lời`;$('submit').textContent=session.finished?'Xem kết quả':'Nộp bài & chấm điểm';renderGrid();
  if(focus){$('question-title').focus({preventScroll:true});window.scrollTo(0,0);const active=$('question-grid').querySelector('.active');if(active){const grid=$('question-grid');grid.scrollTop=Math.max(0,active.offsetTop-grid.offsetTop-grid.clientHeight/2);}}
 }
 function showResults(focus=true){
  if(!session)return;view('results');const score=C.score(session);$('score-percent').textContent=`${score.percent}%`;$('score-fraction').textContent=`${score.correct} / ${score.total} câu trả lời đúng`;$('correct-count').textContent=score.correct;$('wrong-count').textContent=score.wrong;$('unanswered-count').textContent=score.unanswered;$('retry').disabled=!score.wrong;$('retry').textContent=score.wrong?`Làm lại ${score.wrong} câu sai`:'Không có câu sai';
  $('part-results').replaceChildren();for(const p of parts){const items=session.items.filter(q=>q.part===p.id);if(!items.length)continue;const s=C.score({items,answers:session.answers});const row=document.createElement('div');row.className='part-result';const title=document.createElement('span');title.textContent=`Part ${p.roman} · ${p.title}`;const count=document.createElement('strong');count.textContent=`${s.correct}/${s.total}`;row.append(title,count);$('part-results').append(row);}
  if(focus){$('results-title').focus({preventScroll:true});window.scrollTo(0,0);}
 }
 function finish(){session.finished=true;session.review=false;for(const q of session.items)updateHistory(q,false);write(WRONG,JSON.stringify([...wrong]));save();showResults();}
 $('chapters').replaceChildren();for(const p of parts){const label=document.createElement('label');label.className='chapter';const input=document.createElement('input');input.type='checkbox';input.value=p.id;input.checked=true;input.setAttribute('aria-label',`Chọn Part ${p.roman}: ${p.title}`);const content=document.createElement('div');content.className='chapter-content';const kicker=document.createElement('div');kicker.className='chapter-kicker';kicker.textContent=`PART ${p.roman}`;const h=document.createElement('h3');h.textContent=p.title;const english=document.createElement('span');english.className='english';english.textContent=p.english;const count=document.createElement('span');count.className='count';count.textContent=`${bank.filter(q=>q.part===p.id).length} câu · slide ${p.range}`;content.append(kicker,h,english,count);label.append(input,content);input.addEventListener('change',updateSelection);$('chapters').append(label);}
 $('bank-total').textContent=bank.length;
 $('select-all').addEventListener('click',()=>{const all=selectedParts().length===parts.length;for(const input of document.querySelectorAll('#chapters input'))input.checked=!all;updateSelection()});
 $('start').addEventListener('click',()=>begin());$('home-retry').addEventListener('click',()=>begin([...wrong]));
 $('resume').addEventListener('click',()=>{if(session.finished)showResults();else renderQuiz(true)});
 $('back-home').addEventListener('click',()=>{save();showHome(true)});
 $('prev').addEventListener('click',()=>{if(session.index>0){session.index--;save();renderQuiz(true)}});
 $('next').addEventListener('click',()=>{if(session.index<session.items.length-1){session.index++;save();renderQuiz(true)}});
 $('check').addEventListener('click',()=>{const q=session.items[session.index];if(session.answers[q.id]===undefined||session.checked.includes(q.id)||session.finished)return;session.checked.push(q.id);updateHistory(q);save();renderQuiz()});
 $('submit').addEventListener('click',()=>{if(session.finished){session.review=false;save();showResults();return;}const score=C.score(session);$('finish-message').textContent=score.unanswered?`Bạn còn ${score.unanswered} câu chưa trả lời. Các câu này sẽ tính là chưa làm khi chấm điểm. Bạn có thể tiếp tục làm hoặc nộp bài ngay.`:`Bạn đã chọn đáp án cho đủ ${score.total} câu. Nộp bài để xem điểm và lời giải.`;const dialog=$('finish-dialog');dialog.returnValue='';dialog.showModal();});
 $('finish-dialog').addEventListener('close',()=>{if($('finish-dialog').returnValue==='submit'&&session&&!session.finished)finish()});
 $('review').addEventListener('click',()=>{session.index=0;session.review=true;save();renderQuiz(true)});
 $('retry').addEventListener('click',()=>{const ids=C.wrongIds(session);if(ids.length)begin(ids)});
 $('new-session').addEventListener('click',()=>showHome(true));
 showHome();
})();
