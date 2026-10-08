window.SPM_DATA = {
  "parts": [
    {
      "id": 1,
      "roman": "I",
      "title": "Khái niệm & nguyên tắc",
      "english": "Key concepts & principles",
      "range": "4–22"
    },
    {
      "id": 2,
      "roman": "II",
      "title": "Độ đo & đo lường phần mềm",
      "english": "Project Metrics and Software Measurement",
      "range": "23–46"
    },
    {
      "id": 3,
      "roman": "III",
      "title": "Lập kế hoạch dự án",
      "english": "Software Project Planning",
      "range": "47–57"
    },
    {
      "id": 4,
      "roman": "IV",
      "title": "Phân tích & quản lý rủi ro",
      "english": "Risk Analysis & Management",
      "range": "58–66"
    },
    {
      "id": 5,
      "roman": "V",
      "title": "Lập lịch & theo dõi dự án",
      "english": "Project Scheduling and Tracking",
      "range": "67–76"
    },
    {
      "id": 6,
      "roman": "VI",
      "title": "Đảm bảo chất lượng phần mềm",
      "english": "Software Quality Assurance",
      "range": "77–83"
    }
  ],
  "questions": [
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 1,
      "question": "[SCRUM] Công việc nào sau đây không phải sự kiện thuộc Scrum?",
      "options": [
        "Product Backlog refinement",
        "Sprint Review",
        "Sprint Retrospective",
        "Sprint Planning"
      ],
      "correct": 0,
      "explanation": "Product Backlog refinement là hoạt động liên tục, không phải Scrum event. Daily Scrum là sự kiện chính thức. Đã thay Daily standup ở đề gốc vì tên này có thể chỉ Daily Scrum, khiến cả bốn lựa chọn gốc đều là sự kiện.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2020 — Scrum Events; Daily Scrum",
          "url": "https://scrumguides.org/scrum-guide.html"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] Công việc nào sau đây không phải sự kiện thuộc Scrum?",
      "id": "QLDA-001"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 2,
      "question": "[SCRUM] Kết quả mà Scrum Team có trách nhiệm tạo ra trong mỗi Sprint là gì?",
      "options": [
        "Tài liệu kịch bản kiểm thử của Sprint",
        "Một Increment có giá trị, hữu ích và đạt Definition of Done",
        "Danh sách các Sprint Backlog items chưa hoàn thành",
        "Các bản thiết kế giao diện người dùng User Interfaces"
      ],
      "correct": 1,
      "explanation": "Scrum Team chịu trách nhiệm tạo Increment có giá trị và hữu ích mỗi Sprint; công việc phải đạt Definition of Done mới thuộc Increment. Đã đổi bàn giao cuối Sprint thành kết quả mỗi Sprint vì có thể phát hành trước khi Sprint kết thúc.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2020 — Scrum Team; Increment; Definition of Done",
          "url": "https://scrumguides.org/scrum-guide.html"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] Sản phẩm nào sau đây được bàn giao vào cuối mỗi Sprint ?",
      "id": "QLDA-002"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 3,
      "question": "[UML] Quan hệ kết hợp (association) giữa các lớp định nghĩa mối liên quan nào giữa các lớp?",
      "options": [
        "Quan hệ phụ thuộc khi một lớp dùng định nghĩa của lớp khác",
        "Quan hệ ngữ nghĩa cho phép liên kết giữa các instance của các lớp",
        "Quan hệ kế thừa giữa lớp chuyên biệt và lớp tổng quát",
        "Quan hệ bao gồm hành vi giữa hai use case"
      ],
      "correct": 1,
      "explanation": "Association xác định quan hệ ngữ nghĩa có thể tồn tại giữa các instance có kiểu, qua các links. Đã làm rõ lựa chọn Tương tác trong đề gốc để không đồng nhất Association với Interaction.",
      "slides": [],
      "refs": [
        {
          "title": "OMG UML 2.5.1 — 11.5.3 Associations; trang 199",
          "url": "https://www.omg.org/spec/UML/2.5.1/PDF"
        }
      ],
      "adapted": true,
      "originalQuestion": "[UML] Quan hệ kết hợp (association) giữa các lớp định nghĩa mối liên quan nào giữa các lớp?",
      "id": "QLDA-003"
    },
    {
      "part": 3,
      "sourceType": "exam",
      "examNumber": 4,
      "question": "Theo slide 72, WBS cung cấp tập nhiệm vụ làm điểm xuất phát để xây dựng công cụ nào trong lập kế hoạch thời gian?",
      "options": [
        "Biểu đồ thời gian Gantt",
        "Bảng phân loại rủi ro",
        "Công thức ước lượng FP",
        "Báo cáo tổng kết chất lượng"
      ],
      "correct": 0,
      "explanation": "Slide 72 nêu timeline chart bắt đầu từ tập nhiệm vụ trong WBS. Đã sửa câu hỏi để phân biệt việc lập lịch với việc WBS cũng có thể phục vụ ước lượng chi phí.",
      "slides": [
        48,
        57,
        72
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "WBS (Work Breakdown Structure) là một bước trong hoạt động nào ?",
      "id": "QLDA-004"
    },
    {
      "part": 5,
      "sourceType": "exam",
      "examNumber": 5,
      "question": "Trong các lựa chọn, phương pháp nào được slide 71 nêu để lập lịch dự án?",
      "options": [
        "FP (Function Point based Estimation)",
        "COCOMO Model (Constructive Cost Model)",
        "CPM (Critical Path Method)",
        "LOC (Line-Of-Code based Estimation)"
      ],
      "correct": 2,
      "explanation": "Slide 71 nêu PERT và CPM để lập lịch; COCOMO, FP và LOC được nêu ở phần ước lượng chi phí/nỗ lực. Đã giới hạn theo phương pháp lập lịch được slide 71 nêu, vì COCOMO cũng có thể ước lượng thời gian phát triển.",
      "slides": [
        57,
        71
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Sử dụng kỹ thuật nào để ước lượng lịch biểu cho dự án phát triển phần mềm ?",
      "id": "QLDA-005"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 6,
      "question": "[SCRUM] Theo Scrum Guide 2017, Product Owner sắp xếp các items trong Product Backlog hướng đến mục đích chính nào?",
      "options": [
        "Đưa mọi item rủi ro cao lên trước, bất kể mục tiêu",
        "Tối ưu hóa giá trị và đạt các mục tiêu của sản phẩm",
        "Làm cho các items có cùng mức độ phức tạp",
        "Phân bổ số lượng items bằng nhau cho từng thành viên"
      ],
      "correct": 1,
      "explanation": "Product Owner chịu trách nhiệm sắp thứ tự Product Backlog nhằm đạt mục tiêu và tối ưu hóa giá trị. Đã hỏi mục đích thay cho một tiêu chí bắt buộc duy nhất: độ phức tạp và rủi ro vẫn có thể ảnh hưởng thứ tự.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2017 — The Product Owner; trang 6",
          "url": "https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] Các danh mục cần hoàn thành (items) trong Product Backlog nên được sắp xếp dựa theo tiêu chí nào ?",
      "id": "QLDA-006"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 7,
      "question": "[SCRUM] Với User Story được viết theo mẫu “Là [vai trò], tôi muốn [chức năng] để [mục đích]”, câu chuyện cung cấp những thông tin nào?",
      "options": [
        "Tất cả các đáp án",
        "Ai sẽ là người sử dụng chức năng",
        "Chức năng người dùng mong muốn là gì",
        "Mục đích của người sử dụng là gì"
      ],
      "correct": 0,
      "explanation": "Mẫu đã cho nêu người dùng, chức năng mong muốn và mục đích của họ, nên C bao quát A, B, D. Đã bổ sung mẫu vào câu hỏi; Scrum Guide không bắt buộc dùng User Story hay mẫu trình bày này.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2020 — Purpose of the Scrum Guide; Product Backlog",
          "url": "https://scrumguides.org/scrum-guide.html"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] User story trong Product Backlog cho biết các thông tin gì ?",
      "id": "QLDA-007"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 8,
      "question": "[SCRUM] Theo Scrum Guide 2017, nhận định nào đúng về thành viên có kỹ năng kiểm thử trong Scrum?",
      "options": [
        "Họ có quyền chấp nhận sản phẩm thay cho Product Owner",
        "Họ chỉ tham gia sau khi Development Team kết thúc Sprint",
        "Họ có thể thuộc Development Team, không có vai trò Tester riêng",
        "Họ phải thuộc một đội kiểm thử tách khỏi Development Team"
      ],
      "correct": 2,
      "explanation": "Development Team có kỹ năng liên chức năng, có thể có chuyên môn kiểm thử, nhưng Scrum không quy định chức danh hay tiểu đội riêng cho kiểm thử. Đã sửa câu hỏi về nhiệm vụ chính để tránh hiểu rằng Scrum không có công việc kiểm thử.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2017 — The Development Team; trang 7",
          "url": "https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] Trong môi trường phát triển phần mềm linh hoạt Agile, nhiệm vụ chính của một tester là gì ?",
      "id": "QLDA-008"
    },
    {
      "part": 6,
      "sourceType": "exam",
      "examNumber": 9,
      "question": "Phần mềm phải hoạt động ổn định để người dùng có thể tin tưởng khi sử dụng. Thuộc tính nào dưới đây trực tiếp phù hợp với yêu cầu này?",
      "options": [
        "Tin cậy",
        "Dễ sử dụng",
        "Bảo trì được",
        "Chiếm ít tài nguyên hệ thống"
      ],
      "correct": 0,
      "explanation": "Tin cậy thuộc nhóm dependability mà Sommerville xem là thuộc tính thiết yếu. Đã thay cách hỏi 'quan trọng nhất' bằng yêu cầu cụ thể; không có một thuộc tính đứng đầu cho mọi loại phần mềm.",
      "slides": [
        40,
        41,
        42,
        44
      ],
      "refs": [
        {
          "title": "Ian Sommerville — Chapter 1: Introduction (slide tác giả, liên kết từ website sách)",
          "url": "https://www.slideshare.net/slideshow/ch1-introduction-42645973/42645973"
        }
      ],
      "adapted": true,
      "originalQuestion": "Thuộc tính nào là quan trọng nhất đối với một phần mềm tốt ?",
      "id": "QLDA-009"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 10,
      "question": "[SCRUM] Theo Scrum Guide 2017, thành phần đội Scrum bao gồm?",
      "options": [
        "Scrum Master, Development Team, Tester",
        "Product Stakeholders, Product Owner, Scrum Master",
        "Scrum Master, Team Leader, Developers",
        "Product Owner, Development Team, Scrum Master"
      ],
      "correct": 3,
      "explanation": "Scrum Guide 2017 xác định Scrum Team gồm Product Owner, Development Team và Scrum Master. Đã ghi rõ phiên bản: bản 2020 dùng tên Developers thay cho Development Team.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2017 — The Scrum Team; trang 6",
          "url": "https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf"
        },
        {
          "title": "Scrum Guide 2020 — Scrum Team",
          "url": "https://scrumguides.org/scrum-guide.html"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] Thành phần đội Scrum bao gồm ?",
      "id": "QLDA-010"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 11,
      "question": "Trong kiểm thử đơn vị theo Sommerville, một thành phần được kiểm thử có thể thuộc dạng nào?",
      "options": [
        "Hàm hoặc phương thức riêng lẻ",
        "Tất cả các đáp án",
        "Thành phần tổ hợp có giao diện xác định",
        "Lớp đối tượng có thuộc tính và phương thức"
      ],
      "correct": 1,
      "explanation": "Chapter 8 của Sommerville nêu các dạng đơn vị này. Đã giới hạn nghĩa component vào thành phần được kiểm thử đơn vị và thay các ví dụ cơ sở dữ liệu/middleware chưa rõ phạm vi trong đề gốc.",
      "slides": [],
      "refs": [
        {
          "title": "Ian Sommerville — Chapter 8: Software Testing (slide tác giả)",
          "url": "https://www.slideshare.net/slideshow/ch8testing/43151512"
        }
      ],
      "adapted": true,
      "originalQuestion": "Thành phần phần mềm (software component) có thể là ?",
      "id": "QLDA-011"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 12,
      "question": "Trong mô hình thác nước được Sommerville trình bày, sau giai đoạn Implementation and unit testing, hệ thống chuyển sang giai đoạn nào?",
      "options": [
        "Tích hợp và kiểm thử hệ thống",
        "Đặc tả yêu cầu phần mềm",
        "Vận hành và bảo trì",
        "Thiết kế phần mềm"
      ],
      "correct": 0,
      "explanation": "Trình tự mô hình này đặt Integration and system testing sau Implementation and unit testing. Đã chỉ định mô hình và mức kiểm thử, thay vì giả định mọi kiểm thử chỉ xảy ra sau một bước chung.",
      "slides": [
        12
      ],
      "refs": [
        {
          "title": "Ian Sommerville — Chapter 2: Software Processes (slide tác giả)",
          "url": "https://www.slideshare.net/slideshow/ch2-sw-processes/43151501"
        },
        {
          "title": "Ian Sommerville — Chapter 8: Software Testing (slide tác giả)",
          "url": "https://www.slideshare.net/slideshow/ch8testing/43151512"
        }
      ],
      "adapted": true,
      "originalQuestion": "Hoạt động kiểm thử được tiến hành sau bước nào trong tiến trình dự án phát triển phần mềm ?",
      "id": "QLDA-012"
    },
    {
      "part": 5,
      "sourceType": "exam",
      "examNumber": 13,
      "question": "Theo hướng dẫn 40–20–40 của Pressman, cách phân phối nỗ lực nào phù hợp?",
      "options": [
        "40% lập kế hoạch, 20% thiết kế, 40% viết mã và bảo trì",
        "40% phân tích nghiệp vụ, 20% thiết kế, 40% viết mã và kiểm thử",
        "40% phân tích và thiết kế, 20% viết mã, 40% kiểm thử",
        "40% phân tích yêu cầu, 20% viết mã, 40% bảo trì"
      ],
      "correct": 2,
      "explanation": "Pressman mô tả hướng dẫn 40% analysis/design, 20% coding, 40% testing; slide 68 nhắc quy tắc này. Đã làm rõ 'cài đặt' là viết mã và ghi đây là hướng dẫn, không phải tỷ lệ bắt buộc cho mọi dự án.",
      "slides": [
        68
      ],
      "refs": [
        {
          "title": "Roger S. Pressman, Software Engineering: A Practitioner's Approach, 5e (McGraw-Hill; bản PDF lưu trên website khác)",
          "url": "https://3cs1106mdb.wordpress.com/wp-content/uploads/2013/08/software-engineering-5th-edition-roger-pressman1.pdf"
        }
      ],
      "adapted": true,
      "originalQuestion": "Nguyên lý 40-20-40 phân bổ nỗ lực trong quy trình phát triển phần mềm có ý nghĩa nào?",
      "id": "QLDA-013"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 14,
      "question": "[SCRUM] Hoạt động Scrum Retrospective diễn ra vào thời điểm nào ?",
      "options": [
        "Tại cuối mỗi Sprint",
        "Bất cứ khi nào Scrum Master đề nghị",
        "Bất cứ khi nào đội Scrum thấy cần",
        "Bất cứ khi nào Product Owner yêu cầu"
      ],
      "correct": 0,
      "explanation": "Sprint Retrospective diễn ra sau Sprint Review và trước Sprint Planning tiếp theo; nó kết thúc Sprint. Vì vậy B là lựa chọn đúng.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2017 — Sprint Retrospective; trang 14",
          "url": "https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf"
        }
      ],
      "adapted": false,
      "originalQuestion": "[SCRUM] Hoạt động Scrum Retrospective diễn ra vào thời điểm nào ?",
      "id": "QLDA-014"
    },
    {
      "part": 4,
      "sourceType": "exam",
      "examNumber": 15,
      "question": "Các loại rủi ro dự án phát triển phần mềm có thể gặp ?",
      "options": [
        "Rủi ro quản lý",
        "Rủi ro kỹ thuật",
        "Không loại nào",
        "Cả rủi ro kỹ thuật, và rủi ro quản lý"
      ],
      "correct": 3,
      "explanation": "Slide 12 yêu cầu đánh giá cả rủi ro kỹ thuật và quản lý. Slide 60 còn phân loại rủi ro dự án, kỹ thuật, kinh doanh; D đúng nhưng không phải danh sách đầy đủ mọi nhóm.",
      "slides": [
        12,
        60
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Các loại rủi ro dự án phát triển phần mềm có thể gặp ?",
      "id": "QLDA-015"
    },
    {
      "part": 2,
      "sourceType": "exam",
      "examNumber": 16,
      "question": "Kỹ thuật đo trực tiếp phần mềm có thể dựa vào các yếu tố nào sau đây để đo ?",
      "options": [
        "LOC (Line of Code), Tốc độ vận hành, Kích cỡ bộ nhớ, Số khiếm khuyết phát hiện trong một khoảng thời gian nhất định",
        "LOC (Line of Code) và FP (Function Point)",
        "Chỉ dựa trên KLOC (Kilo Line of Code)",
        "Dựa trên FP (Function Point)"
      ],
      "correct": 0,
      "explanation": "Pressman §4.3 liệt kê LOC, tốc độ thực thi, bộ nhớ và defects theo thời gian là phép đo trực tiếp.",
      "slides": [
        29,
        30,
        31
      ],
      "refs": [
        {
          "title": "Roger S. Pressman, Software Engineering: A Practitioner's Approach, 5e (McGraw-Hill; bản PDF lưu trên website khác)",
          "url": "https://3cs1106mdb.wordpress.com/wp-content/uploads/2013/08/software-engineering-5th-edition-roger-pressman1.pdf"
        }
      ],
      "adapted": false,
      "originalQuestion": "Kỹ thuật đo trực tiếp phần mềm có thể dựa vào các yếu tố nào sau đây để đo ?",
      "id": "QLDA-016"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 17,
      "question": "[SCRUM] Khi nào một Sprint có thể bị huỷ bỏ ?",
      "options": [
        "Khi Sprint Goal trở nên lỗi thời; Product Owner có quyền hủy",
        "Không thể huỷ bỏ một Sprint",
        "Bất cứ khi nào Product Owner tuyên bố, không cần xét Sprint Goal",
        "Khi các Developers không thể hoàn thành nhiệm vụ"
      ],
      "correct": 0,
      "explanation": "Sprint có thể bị hủy khi Sprint Goal trở nên lỗi thời; chỉ Product Owner có quyền hủy. Không hoàn thành nhiệm vụ không tự động là lý do hủy. Đã thay điều kiện items không còn cần bằng Sprint Goal và làm rõ quyền không đồng nghĩa hủy tùy tiện.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2017 — Cancelling a Sprint; trang 10",
          "url": "https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] Khi nào một Sprint có thể bị huỷ bỏ ?",
      "id": "QLDA-017"
    },
    {
      "part": 2,
      "sourceType": "exam",
      "examNumber": 18,
      "question": "Kỹ thuật đo gián tiếp phần mềm có thể đưa ra chỉ số phản ánh khía cạnh nào về phần mềm ?",
      "options": [
        "Kích cỡ phần mềm",
        "Phạm vi phần mềm",
        "Quy mô phần mềm",
        "Về tính năng, độ phức tạp, chất lượng, tính hiệu quả, độ tin cậy, khả năng bảo trì được"
      ],
      "correct": 3,
      "explanation": "Pressman §4.3 nêu chức năng, chất lượng, phức tạp, hiệu quả, tin cậy và bảo trì thuộc phép đo gián tiếp.",
      "slides": [
        31,
        40,
        41
      ],
      "refs": [
        {
          "title": "Roger S. Pressman, Software Engineering: A Practitioner's Approach, 5e (McGraw-Hill; bản PDF lưu trên website khác)",
          "url": "https://3cs1106mdb.wordpress.com/wp-content/uploads/2013/08/software-engineering-5th-edition-roger-pressman1.pdf"
        }
      ],
      "adapted": false,
      "originalQuestion": "Kỹ thuật đo gián tiếp phần mềm có thể đưa ra chỉ số phản ánh khía cạnh nào về phần mềm ?",
      "id": "QLDA-018"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 19,
      "question": "[SCRUM] Ai là người quyết định nội dung và thứ tự các danh mục trong Product Backlog?",
      "options": [
        "Development Team",
        "Product Owner",
        "Scrum Master",
        "Scrum Team"
      ],
      "correct": 1,
      "explanation": "Product Owner chịu trách nhiệm cuối cùng về nội dung và thứ tự Product Backlog. Họ có thể ủy quyền việc thực hiện, nhưng vẫn giữ accountability.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2017 — The Product Owner; trang 6",
          "url": "https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf"
        }
      ],
      "adapted": false,
      "originalQuestion": "[SCRUM] Ai là người quyết định nội dung và thứ tự các danh mục trong Product Backlog?",
      "id": "QLDA-019"
    },
    {
      "part": 3,
      "sourceType": "exam",
      "examNumber": 20,
      "question": "Một nhiệm vụ cần 20 giờ-người. Hai người có năng suất tương đương, chia đều công việc và làm song song hoàn toàn, không có phụ thuộc hay chi phí phối hợp. Đội mất bao nhiêu giờ?",
      "options": [
        "10 giờ",
        "2 giờ",
        "4 giờ",
        "5 giờ"
      ],
      "correct": 0,
      "explanation": "Thời lượng theo các giả thiết đã nêu = 20/2 = 10 giờ. Đã bổ sung giả thiết chia đều và song song; trong dự án thực, tổng nỗ lực không tự xác định được thời lượng.",
      "slides": [
        52,
        68,
        75
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Một nhiệm vụ cần 20 man-hours để hoàn thành thì đội 2 người mất bao nhiêu giờ để hoàn thành ?",
      "id": "QLDA-020"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 21,
      "question": "[SCRUM] Nhiệm vụ chính của Scrum Team là gì ?",
      "options": [
        "Tạo ra một Increment có giá trị và hữu ích mỗi Sprint",
        "Thực hiện các cuộc họp để cải tiến quy trình",
        "Tạo ra các Product Backlog mới",
        "Giám sát và báo cáo các hoạt động của dự án"
      ],
      "correct": 0,
      "explanation": "Toàn bộ Scrum Team chịu trách nhiệm tạo Increment có giá trị, hữu ích mỗi Sprint. Đã sửa D: tinh chỉnh Product Backlog không phải lập trước Sprint Backlog cho Sprint tiếp theo; Sprint Backlog hình thành qua Sprint Planning.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2020 — Scrum Team; Sprint Planning; Sprint Backlog",
          "url": "https://scrumguides.org/scrum-guide.html"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] Nhiệm vụ chính của Scrum Team là gì ?",
      "id": "QLDA-021"
    },
    {
      "part": 5,
      "sourceType": "exam",
      "examNumber": 22,
      "question": "Biểu đồ Gantt hỗ trợ người Quản lý dự án việc gì?",
      "options": [
        "Không đáp án nào",
        "Đảm bảo chất lượng sản phẩm phần mềm",
        "Theo dõi tiến độ hoàn thành của dự án",
        "Giám sát rủi ro dự án"
      ],
      "correct": 2,
      "explanation": "Biểu đồ thời gian/Gantt biểu diễn nhiệm vụ, nỗ lực, thời lượng và ngày bắt đầu, hỗ trợ theo dõi tiến độ; các hoạt động theo dõi được liệt kê ở slide 74.",
      "slides": [
        72,
        73,
        74
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Biểu đồ Gantt hỗ trợ người Quản lý dự án việc gì?",
      "id": "QLDA-022"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 23,
      "question": "Cấu trúc dữ liệu cho phần mềm được thiết kế trong giai đoạn nào ?",
      "options": [
        "Thiết kế thủ tục (Procedural Design)",
        "Thiết kế kiến trúc (Architectural Design)",
        "Thiết kế giao diện (Interface Design)",
        "Thiết kế dữ liệu (Data Design)"
      ],
      "correct": 3,
      "explanation": "Pressman §13.1: data design chuyển mô hình miền thông tin thành cấu trúc dữ liệu.",
      "slides": [],
      "refs": [
        {
          "title": "Roger S. Pressman, Software Engineering: A Practitioner's Approach, 5e (McGraw-Hill; bản PDF lưu trên website khác)",
          "url": "https://3cs1106mdb.wordpress.com/wp-content/uploads/2013/08/software-engineering-5th-edition-roger-pressman1.pdf"
        }
      ],
      "adapted": false,
      "originalQuestion": "Cấu trúc dữ liệu cho phần mềm được thiết kế trong giai đoạn nào ?",
      "id": "QLDA-023"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 24,
      "question": "[SCRUM] Theo Scrum Guide 2020, trách nhiệm chính của Scrum Master là gì?",
      "options": [
        "Thiết lập Scrum và giúp Scrum Team cải thiện hiệu quả trong framework",
        "Trực tiếp phân công công việc mỗi ngày cho từng Developer",
        "Quyết định nội dung và thứ tự Product Backlog thay cho Product Owner",
        "Phê duyệt từng thay đổi kỹ thuật trong Sprint Backlog của Developers"
      ],
      "correct": 0,
      "explanation": "Scrum Master chịu trách nhiệm thiết lập Scrum và về hiệu quả Scrum Team, giúp mọi người hiểu và thực hành Scrum. Đã thay các lựa chọn hỗ trợ có thể cùng đúng bằng các trách nhiệm được phân biệt rõ, không coi Scrum Master là người chỉ huy công việc.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2017 — Scrum Master Service; trang 7–8",
          "url": "https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf"
        },
        {
          "title": "Scrum Guide 2020 — Scrum Master",
          "url": "https://scrumguides.org/scrum-guide.html"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] Nhiệm vụ chính của Scrum Master là gì ?",
      "id": "QLDA-024"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 25,
      "question": "Nếu không bị hủy, một Sprint kết thúc khi nào?",
      "options": [
        "Khi tất cả các Sprint Backlog items được hoàn thành",
        "Khi việc kiểm thử kết thúc",
        "Khi Product Owner đề nghị",
        "Khi quãng thời gian cho một Sprint kết thúc"
      ],
      "correct": 3,
      "explanation": "Trong trường hợp Sprint không bị hủy, Sprint kết thúc khi hết timebox cố định, không phụ thuộc hoàn thành tất cả items hay kết thúc kiểm thử. Hủy Sprint sớm là trường hợp riêng khi Sprint Goal trở nên lỗi thời. Đã bổ sung điều kiện không bị hủy để tách ngoại lệ hủy Sprint trước thời hạn.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2017 — Scrum Events; The Sprint; trang 9–10",
          "url": "https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] Trong Scrum, khi nào một Sprint kết thúc ?",
      "id": "QLDA-025"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 26,
      "question": "[SCRUM] Việc gì xảy ra khi tất cả Sprint items không thể hoàn thành ?",
      "options": [
        "Sprint nên bị huỷ bỏ",
        "Sprint nên được kéo dài thêm thời gian",
        "Bắt đầu Sprint mới với các items chưa hoàn thành trước",
        "Sprint kết thúc với những Sprint items đã hoàn thành \"done\""
      ],
      "correct": 3,
      "explanation": "Sprint không được kéo dài chỉ vì còn items chưa hoàn thành. Chỉ công việc đạt Done thuộc Increment; item chưa Done quay lại Product Backlog để xét cho tương lai, không tự động được chọn cho Sprint mới.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2020 — The Sprint; Definition of Done",
          "url": "https://scrumguides.org/scrum-guide.html"
        }
      ],
      "adapted": false,
      "originalQuestion": "[SCRUM] Việc gì xảy ra khi tất cả Sprint items không thể hoàn thành ?",
      "id": "QLDA-026"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 27,
      "question": "Hoạt động nào dưới đây không có timebox chính thức do Scrum Guide quy định?",
      "options": [
        "Sprint Review",
        "Sắp xếp và tinh chỉnh Product Backlog",
        "Sprint",
        "Daily Scrum"
      ],
      "correct": 1,
      "explanation": "Ở đây giới hạn thời gian được hiểu là timebox chính thức do Scrum Guide quy định. Refinement là hoạt động liên tục không có timebox đó; Sprint, Daily Scrum và Sprint Review đều có. Nhóm vẫn có thể tự giới hạn buổi refinement. Đã làm rõ đây là timebox chính thức, không phải hoạt động được phép kéo dài vô hạn.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2017 — Scrum Events; Product Backlog; trang 9, 15",
          "url": "https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] Hoạt động nào dưới đây không có giới hạn thời gian?",
      "id": "QLDA-027"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 28,
      "question": "[SCRUM] Theo Scrum Guide 2020, thời lượng tối đa của một Sprint là bao lâu?",
      "options": [
        "Một tuần",
        "Sáu tuần",
        "Hai tuần",
        "Một tháng theo lịch"
      ],
      "correct": 3,
      "explanation": "Sprint có thời lượng cố định một tháng hoặc ít hơn. Đã sửa đơn vị tuần thành tháng theo lịch: bốn tuần không đồng nhất chính xác với một tháng.",
      "slides": [],
      "refs": [
        {
          "title": "Scrum Guide 2020 — The Sprint",
          "url": "https://scrumguides.org/scrum-guide.html"
        }
      ],
      "adapted": true,
      "originalQuestion": "[SCRUM] Thời gian tối đa hợp lý cho một Sprint là bao nhiêu tuần?",
      "id": "QLDA-028"
    },
    {
      "part": 3,
      "sourceType": "exam",
      "examNumber": 29,
      "question": "Xét toàn bộ lập kế hoạch dự án trong bài giảng, người quản lý cần xem xét những nội dung nào trước khi triển khai?",
      "options": [
        "Các rủi ro và ảnh hưởng có thể gặp",
        "Kích thước ước tính của phần mềm",
        "Công việc, nguồn lực và thời gian cần thiết",
        "Tất cả các đáp án"
      ],
      "correct": 3,
      "explanation": "Slide 48 nêu công việc/nguồn lực/thời gian, slides 56 và 61 đề cập ước lượng và rủi ro. Đã mở rõ phạm vi câu hỏi là toàn bộ lập kế hoạch, thay vì chỉ trích ba ước lượng của slide 48.",
      "slides": [
        48,
        56,
        61,
        76
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Trước khi dự án bắt đầu, người quản lý dự án phải ước lượng những gì?",
      "id": "QLDA-029"
    },
    {
      "part": 6,
      "sourceType": "exam",
      "examNumber": 30,
      "question": "Phương án nào liệt kê đầy đủ cả hai kỹ thuật kiểm thử đơn vị và tích hợp mà Developer có thể thực hiện?",
      "options": [
        "Không đáp án nào đúng",
        "Kiểm thử đơn vị",
        "Kiểm thử tích hợp",
        "Kiểm thử tích hợp và kiểm thử đơn vị"
      ],
      "correct": 3,
      "explanation": "Development testing do nhóm phát triển thực hiện gồm kiểm thử đơn vị, thành phần và hệ thống tích hợp. Vì vậy cả unit và integration đều có thể do developer thực hiện; không phải chỉ unit. Đã hỏi phương án liệt kê đầy đủ cả hai kỹ thuật; từng kỹ thuật riêng lẻ cũng có thể do Developer thực hiện.",
      "slides": [],
      "refs": [
        {
          "title": "Ian Sommerville — Chapter 8: Software Testing (slide tác giả)",
          "url": "https://www.slideshare.net/slideshow/ch8testing/43151512"
        }
      ],
      "adapted": true,
      "originalQuestion": "Kỹ thuật kiểm thử nào được Developer dùng để kiểm thử mã nguồn ?",
      "id": "QLDA-030"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 31,
      "question": "Câu hỏi nào dưới đây không thuộc nguyên lý W5HH ở slide 19?",
      "options": [
        "Why is the system being developed?",
        "Which programming language is most popular worldwide?",
        "What will be done, by When?",
        "Who is responsible for a function?"
      ],
      "correct": 1,
      "explanation": "W5HH hỏi Why, What/When, Who, Where, How và How much; không hỏi ngôn ngữ phổ biến nhất toàn cầu. Đã thay lựa chọn C: câu gốc về vị trí tổ chức của stakeholders vẫn thuộc ý nghĩa Where nên không thể dùng làm phương án ngoài nguyên lý.",
      "slides": [
        19
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Câu hỏi nào không tồn tại trong nguyên lý W5HH?",
      "id": "QLDA-031"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 32,
      "question": "Quản lý dự án phần mềm hiệu quả tập trung vào bốn yếu tố (4P) bao gồm: People, Product, Project, và ...?",
      "options": [
        "Participants",
        "Profit",
        "Process",
        "Plan"
      ],
      "correct": 2,
      "explanation": "Bốn yếu tố trên slide 5 là People, Product, Process và Project.",
      "slides": [
        5
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Quản lý dự án phần mềm hiệu quả tập trung vào bốn yếu tố (4P) bao gồm: People, Product, Project, và ...?",
      "id": "QLDA-032"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 33,
      "question": "BA có thể dùng những dạng prototype nào để trao đổi và làm rõ yêu cầu, với điều kiện mỗi dạng minh họa được chức năng hoặc hành vi đang cần trao đổi?",
      "options": [
        "Mô hình trên giấy hoặc mô hình giao diện trên máy tính",
        "Phần mềm hiện thực một tập con các chức năng",
        "Phần mềm sẵn có trình diễn được hành vi mong muốn",
        "Tất cả các đáp án đều đúng"
      ],
      "correct": 3,
      "explanation": "Prototype có thể hỗ trợ làm rõ yêu cầu qua mô hình và minh họa chức năng. Đã làm rõ điều kiện cho phần mềm sẵn có, đồng thời rút gọn các lựa chọn chồng nội dung của đề gốc.",
      "slides": [
        11
      ],
      "refs": [
        {
          "title": "Ian Sommerville — Chapter 2: Software Processes (slide tác giả)",
          "url": "https://www.slideshare.net/slideshow/ch2-sw-processes/43151501"
        }
      ],
      "adapted": true,
      "originalQuestion": "BA có thể sử dụng các prototype ở những dạng nào dưới đây làm phương tiện trao đổi với khách hàng để làm rõ yêu cầu chức năng phần mềm ?",
      "id": "QLDA-033"
    },
    {
      "part": 3,
      "sourceType": "exam",
      "examNumber": 34,
      "question": "Các nguồn lực cần Người quản lý dự án phần mềm quan tâm bao gồm: Con người, Công cụ phần cứng-phần mềm, và ...?",
      "options": [
        "Nguồn vốn",
        "Người dùng cuối",
        "Các thành phần phần mềm dùng lại",
        "Kinh phí"
      ],
      "correct": 2,
      "explanation": "Kim tự tháp slide 50 gồm People, Reusable software components và Hardware/software tools.",
      "slides": [
        50
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Các nguồn lực cần Người quản lý dự án phần mềm quan tâm bao gồm: Con người, Công cụ phần cứng-phần mềm, và ...?",
      "id": "QLDA-034"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 35,
      "question": "[UML] Use case A có quan hệ «include» hướng từ A đến use case B. Quan hệ này có nghĩa là gì?",
      "options": [
        "A và B chỉ liên kết với cùng một actor",
        "A kế thừa đặc điểm của B qua quan hệ generalization",
        "B mở rộng A tại extension point qua quan hệ extend",
        "A bao gồm các hành vi của B"
      ],
      "correct": 3,
      "explanation": "Include chèn hành vi của use case được bao gồm B vào hành vi của use case bao gồm A. Đề gốc chỉ hiển thị <> nên thiếu dữ kiện; bản luyện tập chủ động chọn include với hướng A→B và thay các lựa chọn chồng nghĩa. Đây không phải khôi phục chắc chắn nội dung bị thiếu.",
      "slides": [],
      "refs": [
        {
          "title": "OMG UML 2.5.1 — 18.1.3.2 Extends; 18.1.3.3 Includes; trang 640–641",
          "url": "https://www.omg.org/spec/UML/2.5.1/PDF"
        }
      ],
      "adapted": true,
      "originalQuestion": "[UML] Use case A có quan hệ <> với use case B có nghĩa là ?",
      "id": "QLDA-035"
    },
    {
      "part": 3,
      "sourceType": "exam",
      "examNumber": 36,
      "question": "Số lượng người cần có đối với một dự án phần mềm chỉ xác định được sau khi ?",
      "options": [
        "Có ước lượng về rủi ro dự án",
        "Có ước lượng về công sức phát triển",
        "Có ước lượng về chi phí dự án",
        "Có ước lượng về thời gian của dự án"
      ],
      "correct": 1,
      "explanation": "Slide 52: số người chỉ xác định sau khi ước lượng nỗ lực phát triển theo tháng-người.",
      "slides": [
        52
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Số lượng người cần có đối với một dự án phần mềm chỉ xác định được sau khi ?",
      "id": "QLDA-036"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 37,
      "question": "[UML] Biểu đồ trường hợp sử dụng (Use case diagram) biểu diễn khía cạnh nào của hệ thống ?",
      "options": [
        "Trình tự thông điệp chi tiết giữa các lifeline",
        "Các chức năng và hành vi hệ thống cung cấp cho actor",
        "Cấu trúc tĩnh của hệ thống",
        "Kiến trúc triển khai của hệ thống"
      ],
      "correct": 1,
      "explanation": "Use case dùng để nắm bắt yêu cầu về những gì hệ thống phải làm và đặc tả hành vi được cung cấp cho actor, không mô tả cấu trúc nội bộ. Đã gộp hành vi và yêu cầu chức năng vào D để loại sự chồng nghĩa giữa A và D của đề gốc.",
      "slides": [],
      "refs": [
        {
          "title": "OMG UML 2.5.1 — 18.1.1 Summary; 18.1.3.1 Use Cases and Actors; trang 639–640",
          "url": "https://www.omg.org/spec/UML/2.5.1/PDF"
        }
      ],
      "adapted": true,
      "originalQuestion": "[UML] Biểu đồ trường hợp sử dụng (Use case diagram) biểu diễn khía cạnh nào của hệ thống ?",
      "id": "QLDA-037"
    },
    {
      "part": 2,
      "sourceType": "exam",
      "examNumber": 38,
      "question": "DRE (Defect Removal Efficiency) được xác định bằng công thức: DRE = E / (E + D) trong đó, E: số lỗi được phát hiện trước khi bàn giao cho người dùng cuối, D: số lỗi số khiếm khuyết được phát hiện sau khi bàn giao. Giá trị lý tưởng của DRE là bao nhiêu ?",
      "options": [
        "1",
        "0,5",
        "0",
        "0,1"
      ],
      "correct": 0,
      "explanation": "Slide 46 xác định giá trị lý tưởng của DRE là 1.",
      "slides": [
        46
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "DRE (Defect Removal Efficiency) được xác định bằng công thức: DRE = E / (E + D) trong đó, E: số lỗi được phát hiện trước khi bàn giao cho người dùng cuối, D: số lỗi số khiếm khuyết được phát hiện sau khi bàn giao. Giá trị lý tưởng của DRE là bao nhiêu ?",
      "id": "QLDA-038"
    },
    {
      "part": 2,
      "sourceType": "exam",
      "examNumber": 39,
      "question": "Việc đo lường sản phẩm công việc phần mềm nên được tiến hành như thế nào theo các mục tiêu đo lường trong bài giảng?",
      "options": [
        "Xuyên suốt quá trình khi có sản phẩm và thuộc tính phù hợp để đo",
        "Chỉ sau khi cài đặt phần mềm cho người dùng",
        "Chỉ trước khi phân tích yêu cầu",
        "Chỉ trước khi lập kế hoạch dự án"
      ],
      "correct": 0,
      "explanation": "Slides 25 và 40 nêu đo lường để hỗ trợ quyết định khi dự án tiến triển và đánh giá yêu cầu, thiết kế, mã, kiểm thử. Đã thay đáp án chỉ đo sau khi hoàn tất bằng việc đo trên các sản phẩm phù hợp trong quá trình phát triển.",
      "slides": [
        25,
        26,
        40
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Việc đo lường sản phẩm phần mềm được tiến hành khi nào ?",
      "id": "QLDA-039"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 40,
      "question": "Thứ tự các giai đoạn trong mô hình thác nước mà Sommerville trình bày là gì?",
      "options": [
        "Yêu cầu; tích hợp và kiểm thử hệ thống; thiết kế; hiện thực và kiểm thử đơn vị; vận hành và bảo trì",
        "Yêu cầu; thiết kế; hiện thực và kiểm thử đơn vị; tích hợp và kiểm thử hệ thống; vận hành và bảo trì",
        "Thiết kế; yêu cầu; tích hợp và kiểm thử hệ thống; hiện thực và kiểm thử đơn vị; vận hành và bảo trì",
        "Yêu cầu; thiết kế; vận hành và bảo trì; hiện thực và kiểm thử đơn vị; tích hợp và kiểm thử hệ thống"
      ],
      "correct": 1,
      "explanation": "Đây là trình tự năm giai đoạn của mô hình thác nước trong Chapter 2 của Sommerville. Đã chỉ định mô hình và bỏ vị trí planning tách riêng vốn khiến A/B của đề gốc có thể được hiểu khác nhau.",
      "slides": [
        48,
        49
      ],
      "refs": [
        {
          "title": "Ian Sommerville — Chapter 2: Software Processes (slide tác giả)",
          "url": "https://www.slideshare.net/slideshow/ch2-sw-processes/43151501"
        }
      ],
      "adapted": true,
      "originalQuestion": "Thứ tự các bước trong một dự án phát triển phần mềm cổ điển ?",
      "id": "QLDA-040"
    },
    {
      "part": 4,
      "sourceType": "exam",
      "examNumber": 41,
      "question": "Theo thực hành Formal risk management được nêu tại slide 21, tập rủi ro trọng tâm được đề cập là gì?",
      "options": [
        "Top 20 rủi ro dự án",
        "Top 10 rủi ro dự án",
        "Top 5 rủi ro dự án",
        "Top 15 rủi ro dự án"
      ],
      "correct": 1,
      "explanation": "Slide 21 nêu top ten risks. Đã thêm phạm vi 'theo slide 21' để tránh hiểu rằng mọi dự án chỉ được phép theo dõi đúng 10 rủi ro.",
      "slides": [
        21
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Số lượng rủi ro cần theo dõi ?",
      "id": "QLDA-041"
    },
    {
      "part": 4,
      "sourceType": "exam",
      "examNumber": 42,
      "question": "Các khía cạnh quan trọng cần theo dõi đối với một rủi ro dự án ?",
      "options": [
        "Không đáp án nào đúng",
        "Tác nhân và nguồn gốc",
        "Thời điểm và thời lượng xảy ra",
        "Khả năng xảy ra và mức độ gây thiệt hại"
      ],
      "correct": 3,
      "explanation": "Slides 21 và 63 yêu cầu xét khả năng xảy ra và tác động/hậu quả nếu rủi ro xảy ra.",
      "slides": [
        21,
        63
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Các khía cạnh quan trọng cần theo dõi đối với một rủi ro dự án ?",
      "id": "QLDA-042"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 43,
      "question": "Khái niệm “constraints” trong đặc tả yêu cầu phần mềm có nghĩa gì ?",
      "options": [
        "Không đáp án nào đúng",
        "Các dịch vụ mà hệ thống phải cung cấp",
        "Các dịch vụ mà hệ thống phải cung cấp và các ràng buộc mà hệ thống phải tuân theo",
        "Các ràng buộc mà hệ thống phải tuân theo"
      ],
      "correct": 3,
      "explanation": "Constraints là các ràng buộc phải tuân theo, khác với các dịch vụ chức năng mà hệ thống cung cấp.",
      "slides": [
        10,
        49
      ],
      "refs": [
        {
          "title": "Ian Sommerville — Chapter 4: Requirements Engineering (slide tác giả)",
          "url": "https://www.slideshare.net/slideshow/ch4-req-eng/43151505"
        }
      ],
      "adapted": false,
      "originalQuestion": "Khái niệm “constraints” trong đặc tả yêu cầu phần mềm có nghĩa gì ?",
      "id": "QLDA-043"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 44,
      "question": "Tài liệu nào đặc tả các dịch vụ, chức năng và ràng buộc của phần mềm cần xây dựng, làm cơ sở đánh giá phần mềm có đáp ứng yêu cầu hay không?",
      "options": [
        "Bản đặc tả yêu cầu phần mềm",
        "Bản ước lượng kế hoạch dự án",
        "Bản mô tả bối cảnh hệ thống tổng thể",
        "Bản thiết kế chi tiết"
      ],
      "correct": 0,
      "explanation": "Bản đặc tả yêu cầu phần mềm mô tả điều phần mềm phải đáp ứng; slides 40 và 82 đặt yêu cầu làm nền tảng chất lượng. Đã ghi rõ đối tượng là phần mềm và làm rõ A là bối cảnh tổng thể để tách khỏi đặc tả yêu cầu hệ thống.",
      "slides": [
        40,
        82
      ],
      "refs": [
        {
          "title": "Ian Sommerville — Chapter 4: Requirements Engineering (slide tác giả)",
          "url": "https://www.slideshare.net/slideshow/ch4-req-eng/43151505"
        }
      ],
      "adapted": true,
      "originalQuestion": "Danh sách các dịch vụ mà hệ thống phải giải quyết, các ràng buộc mà hệ thống phải tuân theo, được mô tả chi tiết trong tài liệu nào sau đây ?",
      "id": "QLDA-044"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 45,
      "question": "Các loại hoạt động trong giai đoạn bảo trì phần mềm ?",
      "options": [
        "Sửa đổi; Thích nghi hóa; Nâng cấp",
        "Mã hóa; Kiểm thử; Bảo trì",
        "Phân tích hệ thống; Lập kế hoạch phần mềm; Phân tích yêu cầu phần mềm",
        "Thiết kế phần mềm; Mã hóa; Kiểm thử phần mềm"
      ],
      "correct": 0,
      "explanation": "Slide 41 mô tả sửa lỗi, thích nghi môi trường và nâng cấp theo yêu cầu. C khớp ba nhóm này; không nên hiểu đây là danh sách đầy đủ mọi phân loại bảo trì khác.",
      "slides": [
        41
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Các loại hoạt động trong giai đoạn bảo trì phần mềm ?",
      "id": "QLDA-045"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 46,
      "question": "Theo cách phân chia của Pressman, các hoạt động chính trong pha định nghĩa ở giai đoạn đầu gồm những gì?",
      "options": [
        "Thiết kế phần mềm; mã hóa; kiểm thử phần mềm",
        "Kỹ nghệ hệ thống/thông tin; lập kế hoạch phần mềm; phân tích yêu cầu phần mềm",
        "Mã hóa; kiểm thử; bảo trì",
        "Sửa lỗi; thích nghi; nâng cấp"
      ],
      "correct": 1,
      "explanation": "Pressman §2.1.2 nêu ba hoạt động của definition phase. Đã đổi 'các hoạt động kỹ thuật' thành 'các hoạt động chính trong pha định nghĩa' vì lập kế hoạch còn có nội dung quản lý.",
      "slides": [],
      "refs": [
        {
          "title": "Roger S. Pressman, Software Engineering: A Practitioner's Approach, 5e (McGraw-Hill; bản PDF lưu trên website khác)",
          "url": "https://3cs1106mdb.wordpress.com/wp-content/uploads/2013/08/software-engineering-5th-edition-roger-pressman1.pdf"
        }
      ],
      "adapted": true,
      "originalQuestion": "Các hoạt động kỹ thuật trong giai đoạn đầu của dự án phần mềm ?",
      "id": "QLDA-046"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 47,
      "question": "Trong câu hỏi này, phân tích nghiệp vụ được giới hạn ở việc làm rõ các dịch vụ và ràng buộc của phần mềm để bàn giao yêu cầu cho nhóm phát triển. Work product nào phù hợp nhất?",
      "options": [
        "Bản ước lượng kế hoạch phần mềm",
        "Bản mô tả hệ thống tổng thể",
        "Bản thiết kế chi tiết",
        "Bản đặc tả yêu cầu phần mềm"
      ],
      "correct": 3,
      "explanation": "Với phạm vi đã nêu, đầu ra cần bàn giao là yêu cầu phần mềm, không phải giải pháp thiết kế hay ước lượng. Đã xác định rõ phạm vi phân tích nghiệp vụ; đề gốc không quy định phạm vi nên chưa thể chọn duy nhất A hay D.",
      "slides": [
        10,
        14,
        15,
        40
      ],
      "refs": [
        {
          "title": "Ian Sommerville — Chapter 4: Requirements Engineering (slide tác giả)",
          "url": "https://www.slideshare.net/slideshow/ch4-req-eng/43151505"
        }
      ],
      "adapted": true,
      "originalQuestion": "Work product của hoạt động phân tích nghiệp vụ là gì ?",
      "id": "QLDA-047"
    },
    {
      "part": 3,
      "sourceType": "exam",
      "examNumber": 48,
      "question": "Theo slide 53, khái niệm Off-the-shelf components được mô tả thế nào?",
      "options": [
        "Thành phần có liên quan nhưng nhóm chỉ có kinh nghiệm hạn chế và phải sửa nhiều",
        "Phần mềm hiện có mua từ bên thứ ba hoặc đã phát triển nội bộ cho dự án trước",
        "Thành phần mới phải xây dựng riêng cho nhu cầu dự án hiện tại",
        "Thành phần tương tự từ dự án trước mà nhóm có đầy đủ kinh nghiệm miền ứng dụng"
      ],
      "correct": 1,
      "explanation": "Slide 53 nêu cả hai nguồn: mua từ bên thứ ba và phần mềm nội bộ từ dự án quá khứ. Đã bổ sung phần bị thiếu trong D và tách A/C theo partial/full-experience.",
      "slides": [
        53,
        54
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Khái niệm \"Off-the-shelf components\" có nghĩa là gì ?",
      "id": "QLDA-048"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 49,
      "question": "Tập nào gồm đúng sáu hoạt động khung được trình bày tại slide 12?",
      "options": [
        "Giao tiếp khách hàng; lập kế hoạch; phân tích rủi ro; kỹ nghệ; xây dựng/phát hành; tiếp thị sản phẩm",
        "Giao tiếp khách hàng; lập kế hoạch; phân tích rủi ro; kỹ nghệ; tuyển dụng nhân sự; đánh giá khách hàng",
        "Giao tiếp khách hàng; lập kế hoạch; quản lý tài chính; kỹ nghệ; xây dựng/phát hành; đánh giá khách hàng",
        "Giao tiếp khách hàng; lập kế hoạch; phân tích rủi ro; kỹ nghệ; xây dựng/phát hành; đánh giá khách hàng"
      ],
      "correct": 3,
      "explanation": "Slide 12 liệt kê đúng sáu hoạt động ở A. Đã thay các chuỗi bốn bước và điều kiện 'quy mô lớn' không được nguồn xác nhận bằng tập hoạt động khung có căn cứ.",
      "slides": [
        12,
        14,
        15
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Thực hiện các bước kỹ thuật nào để phát triển phần mềm quy mô lớn ?",
      "id": "QLDA-049"
    },
    {
      "part": 4,
      "sourceType": "exam",
      "examNumber": 50,
      "question": "Các thuộc tính nào của rủi ro dự án phần mềm ?",
      "options": [
        "Tính không chắc chắn và gây thiệt hại khi xảy ra",
        "Tính linh hoạt và không kiểm soát được",
        "Không đáp án nào đúng",
        "Tính chắc chắn và không gây thiệt hại khi xảy ra"
      ],
      "correct": 0,
      "explanation": "Slide 59: rủi ro luôn có uncertainty và loss nếu trở thành hiện thực.",
      "slides": [
        59
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Các thuộc tính nào của rủi ro dự án phần mềm ?",
      "id": "QLDA-050"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 51,
      "question": "[UML] Biểu đồ tuần tự (Sequence diagram) biểu diễn khía cạnh nào của hệ thống ?",
      "options": [
        "Trạng thái của hệ thống",
        "Cấu trúc tĩnh của hệ thống",
        "Thành phần kiến trúc của hệ thống",
        "Hành vi của hệ thống"
      ],
      "correct": 3,
      "explanation": "Sequence diagram mô tả Interaction bằng trình tự Messages trao đổi giữa Lifelines, nên biểu diễn khía cạnh hành vi của hệ thống.",
      "slides": [],
      "refs": [
        {
          "title": "OMG UML 2.5.1 — 17.8 Sequence Diagrams; trang 595",
          "url": "https://www.omg.org/spec/UML/2.5.1/PDF"
        }
      ],
      "adapted": false,
      "originalQuestion": "[UML] Biểu đồ tuần tự (Sequence diagram) biểu diễn khía cạnh nào của hệ thống ?",
      "id": "QLDA-051"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 52,
      "question": "[UML] Phát biểu nào sai trong số các phát biểu về tác nhân (actor) của hệ thống ?",
      "options": [
        "Một thiết bị phần cứng có thể là tác nhân của hệ thống",
        "Tác nhân của một hệ thống luôn là con người",
        "Một phần mềm khác có thể là một tác nhân của hệ thống",
        "Các tác nhân được phân biệt theo vai trò khi tham gia hệ thống"
      ],
      "correct": 1,
      "explanation": "Actor biểu diễn vai trò tương tác với subject, không bị giới hạn ở con người. Phần mềm hoặc thiết bị bên ngoài có thể đóng vai trò actor nếu tương tác với hệ thống đang xét; do đó A sai.",
      "slides": [],
      "refs": [
        {
          "title": "OMG UML 2.5.1 — 18.1.3.1 Use Cases and Actors; 18.2.1 Actor; trang 640, 647",
          "url": "https://www.omg.org/spec/UML/2.5.1/PDF"
        }
      ],
      "adapted": false,
      "originalQuestion": "[UML] Phát biểu nào sai trong số các phát biểu về tác nhân (actor) của hệ thống ?",
      "id": "QLDA-052"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 53,
      "question": "[UML] Biểu đồ lớp (Class diagram) biểu diễn khía cạnh nào của hệ thống ?",
      "options": [
        "Các ràng buộc phi chức năng đối với hệ thống",
        "Sự tương tác của các phần tử hệ thống theo trình tự thời gian",
        "Sự cộng tác giữa các phần tử trong hệ thống",
        "Cấu trúc tĩnh của hệ thống"
      ],
      "correct": 3,
      "explanation": "Class diagram là biểu đồ cấu trúc, mô tả các lớp cùng các quan hệ cấu trúc tĩnh; nó không thể hiện trình tự thông điệp như sequence diagram.",
      "slides": [],
      "refs": [
        {
          "title": "OMG UML 2.5.1 — Annex A — Diagram taxonomy; trang 685",
          "url": "https://www.omg.org/spec/UML/2.5.1/PDF"
        }
      ],
      "adapted": false,
      "originalQuestion": "[UML] Biểu đồ lớp (Class diagram) biểu diễn khía cạnh nào của hệ thống ?",
      "id": "QLDA-053"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 54,
      "question": "Nhận định nào đúng về việc sử dụng các mô hình quy trình phát triển phần mềm trong thực tế theo Sommerville?",
      "options": [
        "Có thể kết hợp các yếu tố của nhiều mô hình tùy dự án",
        "Các mô hình luôn mâu thuẫn nên không thể có yếu tố chung",
        "Mỗi dự án bắt buộc chỉ dùng một mô hình và không được kết hợp",
        "Tên mô hình không ảnh hưởng cách tổ chức các hoạt động phát triển"
      ],
      "correct": 0,
      "explanation": "Sommerville nêu quy trình thực tế có thể kết hợp yếu tố của nhiều mô hình. Đã bỏ cặp đáp án 'bổ sung' và 'độc lập nhưng kết hợp' vốn chồng ý và chưa định nghĩa rõ.",
      "slides": [
        11
      ],
      "refs": [
        {
          "title": "Ian Sommerville — Chapter 2: Software Processes (slide tác giả)",
          "url": "https://www.slideshare.net/slideshow/ch2-sw-processes/43151501"
        }
      ],
      "adapted": true,
      "originalQuestion": "Các Mô hình phát triển phần mềm có quan hệ với nhau như thế nào?",
      "id": "QLDA-054"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 55,
      "question": "Cách phát triển nào tổ chức công việc thành các lần lặp và cung cấp các phần chức năng tăng trưởng, phù hợp với hướng phát triển Agile?",
      "options": [
        "Chỉ áp dụng công cụ sinh mã thế hệ thứ tư",
        "Chỉ tạo bản mẫu để trình diễn rồi ngừng phát triển",
        "Thác nước với các pha cố định thực hiện một lượt",
        "Phát triển lặp và tăng trưởng"
      ],
      "correct": 3,
      "explanation": "Phát triển lặp/tăng trưởng cho phép phát triển và cung cấp chức năng qua các increment. Đã thêm lựa chọn này để thay câu gốc thiếu mô hình phù hợp; không đồng nhất bản mẫu hoặc RAD với Scrum.",
      "slides": [
        11
      ],
      "refs": [
        {
          "title": "Ian Sommerville — Chapter 2: Software Processes (slide tác giả)",
          "url": "https://www.slideshare.net/slideshow/ch2-sw-processes/43151501"
        }
      ],
      "adapted": true,
      "originalQuestion": "Mô hình nào dưới đây phù hợp với tư tưởng phát triển phần mềm linh hoạt Agile và có thể áp dụng trong quy trình SCRUM?",
      "id": "QLDA-055"
    },
    {
      "part": 3,
      "sourceType": "exam",
      "examNumber": 56,
      "question": "Loại tài nguyên nào cần ước lượng cho dự án phần mềm ?",
      "options": [
        "Công cụ phần cứng và phần mềm",
        "Con người",
        "Tất cả các đáp án đều đúng",
        "Thành phần phần mềm dùng lại"
      ],
      "correct": 2,
      "explanation": "Ba loại ở A, B, C là đúng các tầng của kim tự tháp nguồn lực slide 50.",
      "slides": [
        50,
        51
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Loại tài nguyên nào cần ước lượng cho dự án phần mềm ?",
      "id": "QLDA-056"
    },
    {
      "part": 4,
      "sourceType": "exam",
      "examNumber": 57,
      "question": "Thông tin nào không được thể hiện thành cột riêng trong bảng rủi ro minh họa ở slide 64?",
      "options": [
        "Khả năng xảy ra",
        "Chi phí khắc phục thiệt hại khi rủi ro xảy ra",
        "Tên rủi ro",
        "Loại rủi ro"
      ],
      "correct": 1,
      "explanation": "Bảng mẫu có Risks, Category, Probability, Impact và RMMM, không có cột chi phí khắc phục. Đã giới hạn câu hỏi vào bảng mẫu; điều này không cấm một bảng rủi ro khác thêm thông tin chi phí.",
      "slides": [
        64
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Thông tin nào không thuộc nội dung Bảng rủi ro dự án?",
      "id": "QLDA-057"
    },
    {
      "part": 5,
      "sourceType": "exam",
      "examNumber": 58,
      "question": "Mục nào dưới đây không phải nhiệm vụ, mốc hoặc sản phẩm bàn giao trong định nghĩa task set của slide 69?",
      "options": [
        "Xác suất một rủi ro xảy ra",
        "Phiên bản phần mềm cần bàn giao",
        "Mốc dự án cần đạt",
        "Nhiệm vụ kỹ nghệ phần mềm cần thực hiện"
      ],
      "correct": 0,
      "explanation": "Task set gồm work tasks, milestones và deliverables; xác suất là thuộc tính rủi ro. Đã thay phương án loại hoạt động kỹ thuật giảm thiểu rủi ro, vì hoạt động đó vẫn có thể là một nhiệm vụ của dự án.",
      "slides": [
        12,
        69,
        76
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Yếu tố nào không thuộc tập nhiệm vụ (task set) trong dự án phần mềm ?",
      "id": "QLDA-058"
    },
    {
      "part": 4,
      "sourceType": "exam",
      "examNumber": 59,
      "question": "Rủi ro dự án được ước lượng theo các tiêu chí nào ?",
      "options": [
        "Theo khả năng xảy ra và mức độ thiệt hại khi rủi ro xảy ra",
        "Theo chi phí cho các hoạt động ngăn chặn và giảm thiểu rủi ro",
        "Theo phân loại các rủi ro có thể xảy ra đối với một dự án phần mềm",
        "Theo nỗ lực cho hoạt động kiểm soát rủi ro"
      ],
      "correct": 0,
      "explanation": "Slide 63 đánh giá mỗi rủi ro theo xác suất trở thành hiện thực và hậu quả của vấn đề nếu xảy ra.",
      "slides": [
        63
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Rủi ro dự án được ước lượng theo các tiêu chí nào ?",
      "id": "QLDA-059"
    },
    {
      "part": 5,
      "sourceType": "exam",
      "examNumber": 60,
      "question": "Lập lịch (project scheduling) trong quản lý dự án phần mềm là hoạt động gì ?",
      "options": [
        "Cấp phát nhân lực và thời gian biểu cho các hoạt động kỹ nghệ",
        "Phân rã chức năng hệ thống và ước lượng chi phí dự án",
        "Xác định các tài nguyên và quy trình thực hiện dự án",
        "Ước lượng nỗ lực và thời gian hoàn thành dự án"
      ],
      "correct": 0,
      "explanation": "D gần định nghĩa slide 68 nhất: phân bổ nỗ lực ước lượng cho các nhiệm vụ cụ thể trong thời gian dự án. A là ước lượng đầu vào, chưa phải định nghĩa lập lịch.",
      "slides": [
        68
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Lập lịch (project scheduling) trong quản lý dự án phần mềm là hoạt động gì ?",
      "id": "QLDA-060"
    },
    {
      "part": 3,
      "sourceType": "exam",
      "examNumber": 61,
      "question": "Hoạt động nào thuộc thực hiện xây dựng phần mềm, thay vì xây dựng kế hoạch dự án?",
      "options": [
        "Xác định chi phí và lịch biểu dự án",
        "Xác định rủi ro và kỹ thuật tránh hoặc giảm thiểu rủi ro",
        "Xác định phạm vi và nguồn lực dự án",
        "Lập trình hiện thực các chức năng phần mềm"
      ],
      "correct": 3,
      "explanation": "Slides 48 và 76 xác định phạm vi, nguồn lực, rủi ro, chi phí và lịch trong planning; lập trình là thực hiện xây dựng. Đã thay 'phân tích nghiệp vụ' vì hiểu nghiệp vụ và phạm vi cũng có thể hỗ trợ lập kế hoạch.",
      "slides": [
        48,
        49,
        76
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Hoạt động nào sau đây không thuộc nhiệm vụ lập kế hoạch dự án phần mềm ?",
      "id": "QLDA-061"
    },
    {
      "part": 3,
      "sourceType": "exam",
      "examNumber": 62,
      "question": "Theo phân nhóm nguồn lực ở slides 53–55, mục nào thuộc nguồn lực môi trường thay vì bốn nhóm nguồn lực phần mềm?",
      "options": [
        "Thành phần mới cần xây dựng cho dự án hiện tại",
        "Công cụ phần mềm trong môi trường phát triển",
        "Thành phần phần mềm từ dự án quá khứ",
        "Phần mềm sẵn có từ bên thứ ba"
      ],
      "correct": 1,
      "explanation": "Slide 54 vẫn liệt kê New components trong bốn software-resource categories, còn slide 55 xếp phần cứng/phần mềm môi trường vào environmental resources. Đã hỏi đúng phân nhóm của bài, thay vì coi thành phần mới đã là tài sản được tái sử dụng.",
      "slides": [
        50,
        53,
        54,
        55
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Loại tài nguyên nào không thuộc loại thành phần phần mềm dùng lại ?",
      "id": "QLDA-062"
    },
    {
      "part": 5,
      "sourceType": "exam",
      "examNumber": 63,
      "question": "Hoạt động nào sau đây không thuộc hoạt động theo dõi giám sát dự án ?",
      "options": [
        "Tiến hành các cuộc họp định kỳ để thành viên đội dự án có thể báo tiến độ và các vấn đề gặp phải",
        "So sánh ngày bắt đầu dự kiến và ngày bắt đầu thực tế đối với từng nhiệm vụ trong bảng dự án",
        "Phân rã các nhiệm vụ và lập lịch dự án",
        "Xác định xem các cột mốc dự án có đạt được theo đúng lịch biểu hay không"
      ],
      "correct": 2,
      "explanation": "C là hoạt động phân rã/lập lịch. A/B/D là các cách theo dõi lịch được liệt kê ở slide 74.",
      "slides": [
        71,
        74
      ],
      "refs": [],
      "adapted": false,
      "originalQuestion": "Hoạt động nào sau đây không thuộc hoạt động theo dõi giám sát dự án ?",
      "id": "QLDA-063"
    },
    {
      "part": 1,
      "sourceType": "exam",
      "examNumber": 64,
      "question": "Theo khung ba pha chung của Pressman, công việc kỹ nghệ phần mềm được chia thành những pha nào?",
      "options": [
        "Định nghĩa, thiết kế, thực thi",
        "Thiết kế, cài đặt, kiểm thử",
        "Định nghĩa, phát triển, hỗ trợ",
        "Nghiên cứu khả thi, phân tích, triển khai"
      ],
      "correct": 2,
      "explanation": "Pressman §2.1.2 nêu definition, development và support. Đã chỉ định khung ba pha của tác giả để tránh coi đây là cách chia duy nhất cho mọi vòng đời phần mềm.",
      "slides": [],
      "refs": [
        {
          "title": "Roger S. Pressman, Software Engineering: A Practitioner's Approach, 5e (McGraw-Hill; bản PDF lưu trên website khác)",
          "url": "https://3cs1106mdb.wordpress.com/wp-content/uploads/2013/08/software-engineering-5th-edition-roger-pressman1.pdf"
        }
      ],
      "adapted": true,
      "originalQuestion": "Vòng đời phần mềm trải qua các giai đoạn từ lúc hình thành đến khi bị huỷ bỏ, các giai đoạn đó là gì ?",
      "id": "QLDA-064"
    },
    {
      "part": 5,
      "sourceType": "exam",
      "examNumber": 65,
      "question": "Thông tin nào không được thể hiện thành cột riêng trong Bảng dự án minh họa tại slide 73?",
      "options": [
        "Người được phân công thực hiện",
        "Các nhiệm vụ và nhiệm vụ cấp dưới",
        "Nỗ lực phân bổ theo person-day",
        "Chi phí cho từng nhiệm vụ"
      ],
      "correct": 3,
      "explanation": "Ảnh bảng mẫu có Work tasks, Assigned person và Effort allocated, không có cột chi phí. Đã giới hạn câu hỏi vào mẫu slide 73; bảng dự án nói chung vẫn có thể bổ sung chi phí.",
      "slides": [
        73
      ],
      "refs": [],
      "adapted": true,
      "originalQuestion": "Thông tin nào không thuộc Bảng dự án ?",
      "id": "QLDA-065"
    },
    {
      "part": 1,
      "sourceId": "SPM-003",
      "sourceType": "slides",
      "question": "Vai trò nào xác định các vấn đề kinh doanh?",
      "options": [
        "End-users",
        "Practitioners",
        "Senior managers",
        "Project managers"
      ],
      "correct": 2,
      "explanation": "Senior managers xác định các vấn đề kinh doanh.",
      "slides": [
        6
      ],
      "id": "SLIDE-SPM-003"
    },
    {
      "part": 1,
      "sourceId": "SPM-004",
      "sourceType": "slides",
      "question": "Vai trò nào lập kế hoạch, động viên, tổ chức và kiểm soát người thực hiện?",
      "options": [
        "Senior managers",
        "Customers",
        "End-users",
        "Project managers"
      ],
      "correct": 3,
      "explanation": "Project hoặc technical managers chịu trách nhiệm quản lý practitioners qua các hoạt động này.",
      "slides": [
        6
      ],
      "id": "SLIDE-SPM-004"
    },
    {
      "part": 1,
      "sourceId": "SPM-005",
      "sourceType": "slides",
      "question": "Ai cung cấp kỹ năng kỹ thuật để xây dựng phần mềm?",
      "options": [
        "End-users",
        "Senior managers",
        "Practitioners",
        "Customers"
      ],
      "correct": 2,
      "explanation": "Practitioners mang đến kỹ năng kỹ thuật cần thiết cho việc xây dựng phần mềm.",
      "slides": [
        6
      ],
      "id": "SLIDE-SPM-005"
    },
    {
      "part": 1,
      "sourceId": "SPM-006",
      "sourceType": "slides",
      "question": "Ai xác định yêu cầu đối với phần mềm?",
      "options": [
        "Practitioners",
        "Technical managers",
        "Customers",
        "End-users"
      ],
      "correct": 2,
      "explanation": "Customers chỉ định các yêu cầu của phần mềm.",
      "slides": [
        6
      ],
      "id": "SLIDE-SPM-006"
    },
    {
      "part": 1,
      "sourceId": "SPM-007",
      "sourceType": "slides",
      "question": "Ai tương tác với phần mềm sau khi phát hành?",
      "options": [
        "Practitioners",
        "Project managers",
        "End-users",
        "Senior managers"
      ],
      "correct": 2,
      "explanation": "End-users sử dụng và tương tác với phần mềm sau khi phát hành.",
      "slides": [
        6
      ],
      "id": "SLIDE-SPM-007"
    },
    {
      "part": 1,
      "sourceId": "SPM-008",
      "sourceType": "slides",
      "question": "Một dự án cần phân biệt vấn đề kinh doanh, yêu cầu phần mềm và kỹ năng xây dựng. Bộ phân công nào đúng theo ba vai trò tương ứng?",
      "options": [
        "Practitioners: kinh doanh; senior managers: yêu cầu; customers: kỹ thuật",
        "Senior managers: kinh doanh; customers: yêu cầu; practitioners: kỹ thuật",
        "Customers: kinh doanh; practitioners: yêu cầu; senior managers: kỹ thuật",
        "End-users: kinh doanh; managers: yêu cầu; customers: kỹ thuật"
      ],
      "correct": 1,
      "explanation": "Slide 6 phân biệt ba trách nhiệm: business issues, requirements và technical skills.",
      "slides": [
        6
      ],
      "id": "SLIDE-SPM-008"
    },
    {
      "part": 1,
      "sourceId": "SPM-009",
      "sourceType": "slides",
      "question": "Technical manager muốn vừa tổ chức người thực hiện vừa giúp họ chuyển ý tưởng thành sản phẩm. Ghép vai trò và năng lực nào thích hợp?",
      "options": [
        "Senior manager với năng lực Information objectives",
        "Customer với năng lực Context",
        "Project manager với năng lực Organization",
        "End-user với năng lực Customer evaluation"
      ],
      "correct": 2,
      "explanation": "Slide 6 giao quản lý practitioners cho project manager; slide 7 gọi việc tổ chức quy trình chuyển ý tưởng thành sản phẩm là Organization.",
      "slides": [
        6,
        7
      ],
      "id": "SLIDE-SPM-009"
    },
    {
      "part": 1,
      "sourceId": "SPM-011",
      "sourceType": "slides",
      "question": "Phân biệt nào đúng giữa customers và end-users theo bài?",
      "options": [
        "Customers tổ chức nhóm; end-users cung cấp kỹ năng kỹ thuật",
        "Customers đánh giá nhân sự; end-users lập kế hoạch dự án",
        "Customers viết mã; end-users xác định vấn đề kinh doanh",
        "Customers nêu yêu cầu; end-users tương tác khi phần mềm được phát hành"
      ],
      "correct": 3,
      "explanation": "Hai nhóm được mô tả theo việc chỉ định yêu cầu và việc tương tác với phần mềm trong sử dụng thực tế.",
      "slides": [
        6
      ],
      "id": "SLIDE-SPM-011"
    },
    {
      "part": 1,
      "sourceId": "SPM-012",
      "sourceType": "slides",
      "question": "Practitioners đã được xác định nhưng trách nhiệm từng chức năng vẫn chưa rõ. Khi áp dụng W5HH, điều nào cần bổ sung trước khi coi phân công đã đầy đủ?",
      "options": [
        "Chỉ ghi users tương tác sau khi phát hành",
        "Chỉ ghi senior managers xác định business issues",
        "Nêu ai chịu trách nhiệm từng chức năng",
        "Chỉ ghi practitioners cung cấp kỹ năng kỹ thuật"
      ],
      "correct": 2,
      "explanation": "Biết nhóm vai trò không thay thế câu hỏi Who chịu trách nhiệm một chức năng trên slide 19.",
      "slides": [
        6,
        19
      ],
      "id": "SLIDE-SPM-012"
    },
    {
      "part": 1,
      "sourceId": "SPM-013",
      "sourceType": "slides",
      "question": "Năng lực Motivation của trưởng nhóm là gì?",
      "options": [
        "Xác định mọi vấn đề kinh doanh của tổ chức",
        "Khuyến khích người kỹ thuật làm việc hết khả năng",
        "Chỉ chấp nhận những ý tưởng vượt mọi ràng buộc",
        "Tự thực hiện toàn bộ công việc kỹ thuật của nhóm"
      ],
      "correct": 1,
      "explanation": "Motivation là khả năng thúc đẩy người kỹ thuật phát huy tốt nhất năng lực của mình.",
      "slides": [
        7
      ],
      "id": "SLIDE-SPM-013"
    },
    {
      "part": 1,
      "sourceId": "SPM-014",
      "sourceType": "slides",
      "question": "Năng lực Organization của trưởng nhóm là gì?",
      "options": [
        "Loại bỏ quy trình để mỗi người làm theo ý mình",
        "Đánh giá phản hồi của người dùng sau mỗi lần cài đặt",
        "Điều chỉnh hoặc tạo quy trình để biến ý tưởng thành sản phẩm",
        "Chỉ giao nhiệm vụ dựa trên chức danh của từng người"
      ],
      "correct": 2,
      "explanation": "Organization hướng đến định hình quy trình hiện có hoặc tạo quy trình mới để chuyển ý tưởng ban đầu thành sản phẩm cuối.",
      "slides": [
        7
      ],
      "id": "SLIDE-SPM-014"
    },
    {
      "part": 1,
      "sourceId": "SPM-015",
      "sourceType": "slides",
      "question": "Năng lực Innovation của trưởng nhóm khuyến khích điều gì?",
      "options": [
        "Chỉ làm theo ý tưởng của người lãnh đạo",
        "Tránh mọi ý tưởng chưa có ở dự án trước",
        "Thay đổi yêu cầu mà không cần xét giới hạn",
        "Sáng tạo trong các giới hạn của sản phẩm"
      ],
      "correct": 3,
      "explanation": "Bài nhấn mạnh tạo điều kiện sáng tạo ngay cả khi phải làm việc trong các giới hạn đã thiết lập.",
      "slides": [
        7
      ],
      "id": "SLIDE-SPM-015"
    },
    {
      "part": 1,
      "sourceId": "SPM-016",
      "sourceType": "slides",
      "question": "Trưởng nhóm chọn dùng quy trình hiện có sau khi điều chỉnh nó, thay vì tạo quy trình mới. Nhận định nào đúng theo năng lực Organization?",
      "options": [
        "Dùng quy trình hiện có khiến Motivation không cần thiết",
        "Chỉ tạo quy trình mới mới được xem là Organization",
        "Điều chỉnh quy trình chỉ là vai trò của end-users",
        "Cả điều chỉnh và tạo mới quy trình đều thuộc năng lực này"
      ],
      "correct": 3,
      "explanation": "Slide 7 nêu mold existing processes hoặc invent new ones.",
      "slides": [
        7
      ],
      "id": "SLIDE-SPM-016"
    },
    {
      "part": 1,
      "sourceId": "SPM-017",
      "sourceType": "slides",
      "question": "Trưởng nhóm dùng cả sự thúc đẩy và sự khích lệ để thành viên phát huy năng lực. Đây là minh họa cho năng lực nào?",
      "options": [
        "Risk analysis",
        "Motivation",
        "Scope definition",
        "Organization"
      ],
      "correct": 1,
      "explanation": "Bài mô tả Motivation có thể khuyến khích người kỹ thuật bằng cách push hoặc pull.",
      "slides": [
        7
      ],
      "id": "SLIDE-SPM-017"
    },
    {
      "part": 1,
      "sourceId": "SPM-018",
      "sourceType": "slides",
      "question": "Nhóm đã xác định các giới hạn do bối cảnh hệ thống lớn hơn. Trưởng nhóm nên xử lý các ý tưởng mới thế nào để đồng thời phù hợp Context và Innovation?",
      "options": [
        "Khuyến khích sáng tạo trong các giới hạn đã xác định",
        "Giữ sáng tạo bằng cách tự bỏ mọi giới hạn của context",
        "Giữ context bằng cách chấm dứt việc đề xuất ý tưởng",
        "Đổi mọi ý tưởng thành dữ liệu đầu ra rồi không xét giới hạn"
      ],
      "correct": 0,
      "explanation": "Slide 10 xác định ràng buộc context; slide 7 khuyến khích sáng tạo trong bounds của sản phẩm.",
      "slides": [
        7,
        10
      ],
      "id": "SLIDE-SPM-018"
    },
    {
      "part": 1,
      "sourceId": "SPM-019",
      "sourceType": "slides",
      "question": "Nhóm đã được khuyến khích để giữ nhân sự ổn định nhưng không có quy trình chuyển ý tưởng thành sản phẩm. Kết hợp nào mô tả đúng tình trạng?",
      "options": [
        "Đã có Organization nên không cần kiểm soát turnover",
        "Đã hỗ trợ momentum nhưng còn thiếu Organization",
        "Đã có Motivation nên mọi ý tưởng tự thành sản phẩm",
        "Đã có Innovation nên không cần quy trình triển khai"
      ],
      "correct": 1,
      "explanation": "Slide 17 hỗ trợ giảm turnover để giữ momentum; slide 7 cần Organization để chuyển ý tưởng thành sản phẩm.",
      "slides": [
        7,
        17
      ],
      "id": "SLIDE-SPM-019"
    },
    {
      "part": 1,
      "sourceId": "SPM-020",
      "sourceType": "slides",
      "question": "Trong phương án tổ chức thứ nhất, ai chịu trách nhiệm phối hợp khi các cá nhân làm các nhiệm vụ chức năng và ít làm việc chung?",
      "options": [
        "Software manager",
        "Các end-users sau phát hành",
        "Một leader chính thức của từng team",
        "Khách hàng của từng chức năng"
      ],
      "correct": 0,
      "explanation": "Phương án thứ nhất giao việc phối hợp cho software manager, người có thể còn quản lý dự án khác.",
      "slides": [
        8
      ],
      "id": "SLIDE-SPM-020"
    },
    {
      "part": 1,
      "sourceId": "SPM-021",
      "sourceType": "slides",
      "question": "Điều kiện m < n xuất hiện trong phương án tổ chức nào?",
      "options": [
        "Tất cả nhóm có cấu trúc chính thức giống nhau",
        "Các cá nhân tạo thành những nhóm không chính thức",
        "Mỗi cá nhân làm một dự án độc lập",
        "Mỗi nhóm chỉ có một trưởng nhóm cấp cao"
      ],
      "correct": 1,
      "explanation": "Phương án thứ hai phân n người vào m nhiệm vụ với m < n để hình thành informal teams.",
      "slides": [
        8
      ],
      "id": "SLIDE-SPM-021"
    },
    {
      "part": 1,
      "sourceId": "SPM-022",
      "sourceType": "slides",
      "question": "Đặc điểm nào thuộc cách tổ chức nhóm không chính thức?",
      "options": [
        "Mọi nhóm bắt buộc có cấu trúc chung",
        "Không có software manager điều phối",
        "Mỗi người chỉ làm việc hoàn toàn độc lập",
        "Có thể chỉ định trưởng nhóm ad hoc"
      ],
      "correct": 3,
      "explanation": "Phương án informal teams có thể bổ nhiệm team leader ad hoc, còn phối hợp giữa nhóm thuộc software manager.",
      "slides": [
        8
      ],
      "id": "SLIDE-SPM-022"
    },
    {
      "part": 1,
      "sourceId": "SPM-023",
      "sourceType": "slides",
      "question": "Trong cách tổ chức thành các nhóm có cấu trúc chung, ai kiểm soát phối hợp?",
      "options": [
        "Cả team và software project manager",
        "Chỉ senior managers của tổ chức",
        "Chỉ customers của dự án",
        "Chỉ một team leader ad hoc"
      ],
      "correct": 0,
      "explanation": "Phương án thứ ba chia trách nhiệm phối hợp cho cả nhóm và người quản lý dự án phần mềm.",
      "slides": [
        8
      ],
      "id": "SLIDE-SPM-023"
    },
    {
      "part": 1,
      "sourceId": "SPM-024",
      "sourceType": "slides",
      "question": "Điểm nào phân biệt nhóm có cấu trúc chung với nhóm không chính thức?",
      "options": [
        "Mỗi team chỉ được giao một chức năng cố định",
        "Cấu trúc team được xác định cho mọi nhóm trong dự án",
        "Số người luôn nhỏ hơn số nhiệm vụ chức năng",
        "Software manager không còn tham gia phối hợp"
      ],
      "correct": 1,
      "explanation": "Phương án thứ ba quy định cấu trúc cụ thể áp dụng cho tất cả các nhóm làm trong dự án.",
      "slides": [
        8
      ],
      "id": "SLIDE-SPM-024"
    },
    {
      "part": 1,
      "sourceId": "SPM-025",
      "sourceType": "slides",
      "question": "Có 12 người được tổ chức thành 3 nhóm; mỗi nhóm nhận một hoặc nhiều nhiệm vụ và có cấu trúc xác định chung. Dữ kiện nào quyết định đây là phương án t teams thay vì chỉ informal teams?",
      "options": [
        "Mỗi nhóm có cấu trúc được xác định chung cho dự án",
        "Chỉ việc manager cũng có thể quan tâm dự án khác",
        "Chỉ việc mỗi người đã có một nhiệm vụ chức năng",
        "Chỉ việc số nhóm nhỏ hơn số người trong dự án"
      ],
      "correct": 0,
      "explanation": "Slide 8 đặc trưng phương án thứ ba bằng cấu trúc nhóm chung và cơ chế phối hợp team cùng project manager.",
      "slides": [
        8
      ],
      "id": "SLIDE-SPM-025"
    },
    {
      "part": 1,
      "sourceId": "SPM-027",
      "sourceType": "slides",
      "question": "Trong phương án informal teams, leader ad hoc đã được chỉ định. Ai vẫn chịu trách nhiệm phối hợp giữa các team?",
      "options": [
        "Software manager",
        "Chỉ leader của team lớn nhất",
        "Chỉ practitioners mới tham gia",
        "Mỗi customer tự phối hợp"
      ],
      "correct": 0,
      "explanation": "Bổ nhiệm leader ad hoc không thay đổi trách nhiệm phối hợp giữa các team của software manager.",
      "slides": [
        8
      ],
      "id": "SLIDE-SPM-027"
    },
    {
      "part": 1,
      "sourceId": "SPM-029",
      "sourceType": "slides",
      "question": "Điều kiện nào cần có ở một nhóm hiệu suất cao?",
      "options": [
        "Các thành viên có kỹ năng giống hệt nhau",
        "Các thành viên tránh trao đổi công việc",
        "Các thành viên tin tưởng lẫn nhau",
        "Các thành viên đều có chức danh quản lý"
      ],
      "correct": 2,
      "explanation": "Sự tin tưởng giữa các thành viên là một yêu cầu của high-performance team.",
      "slides": [
        9
      ],
      "id": "SLIDE-SPM-029"
    },
    {
      "part": 1,
      "sourceId": "SPM-030",
      "sourceType": "slides",
      "question": "Phân bố kỹ năng của nhóm cần phù hợp với điều gì?",
      "options": [
        "Vị trí tổ chức của người quản lý",
        "Cơ chế phối hợp giữa các nhóm",
        "Cấu trúc các nhóm không chính thức",
        "Bài toán cần giải quyết"
      ],
      "correct": 3,
      "explanation": "Bài yêu cầu distribution of skills phải phù hợp với problem.",
      "slides": [
        9
      ],
      "id": "SLIDE-SPM-030"
    },
    {
      "part": 1,
      "sourceId": "SPM-031",
      "sourceType": "slides",
      "question": "Để giữ sự gắn kết, nhóm có thể xử lý người làm giảm sự gắn kết thế nào?",
      "options": [
        "Loại họ khỏi team nếu cần",
        "Bỏ yêu cầu tin tưởng giữa thành viên",
        "Tăng số nhiệm vụ độc lập cho mọi người",
        "Giao họ toàn quyền điều phối"
      ],
      "correct": 0,
      "explanation": "Slide nêu mavericks có thể cần bị loại nếu muốn duy trì team cohesiveness.",
      "slides": [
        9
      ],
      "id": "SLIDE-SPM-031"
    },
    {
      "part": 1,
      "sourceId": "SPM-033",
      "sourceType": "slides",
      "question": "Nhóm tin tưởng nhau nhưng thiếu kỹ năng cho bài toán; một thành viên khác lại làm giảm sự gắn kết. Hướng xem xét nào bao quát hai vấn đề theo bài?",
      "options": [
        "Chỉ tăng trust vì trust thay thế được mọi kỹ năng",
        "Chỉ tăng chức danh quản lý vì số cấp quyết định hiệu suất",
        "Cải thiện phân bố kỹ năng và cân nhắc cohesiveness",
        "Chỉ giữ mọi thành viên vì gắn kết không phải điều kiện"
      ],
      "correct": 2,
      "explanation": "Slide 9 yêu cầu kỹ năng phù hợp và có thể loại mavericks để duy trì cohesiveness.",
      "slides": [
        9
      ],
      "id": "SLIDE-SPM-033"
    },
    {
      "part": 1,
      "sourceId": "SPM-035",
      "sourceType": "slides",
      "question": "Mục nào xem xét phần mềm trong hệ thống hoặc bối cảnh kinh doanh lớn hơn?",
      "options": [
        "Context",
        "Function and performance",
        "Problem decomposition",
        "Information objectives"
      ],
      "correct": 0,
      "explanation": "Context xét vị trí phần mềm trong hệ thống, sản phẩm hoặc bối cảnh kinh doanh lớn hơn.",
      "slides": [
        10
      ],
      "id": "SLIDE-SPM-035"
    },
    {
      "part": 1,
      "sourceId": "SPM-036",
      "sourceType": "slides",
      "question": "Câu hỏi nào thuộc Information objectives?",
      "options": [
        "Nhóm nên chọn mô hình quy trình nào?",
        "Dữ liệu nào cần làm đầu vào và tạo ra ở đầu ra?",
        "Dự án cần bao nhiêu người quản lý cấp cao?",
        "Ai chịu trách nhiệm tổ chức nhóm lập trình?"
      ],
      "correct": 1,
      "explanation": "Information objectives xác định các đối tượng dữ liệu đầu vào và đầu ra mà khách hàng nhìn thấy.",
      "slides": [
        10
      ],
      "id": "SLIDE-SPM-036"
    },
    {
      "part": 1,
      "sourceId": "SPM-037",
      "sourceType": "slides",
      "question": "Function and performance xem xét nội dung nào?",
      "options": [
        "Dữ liệu người dùng thấy ở đầu vào, đầu ra",
        "Biến đổi dữ liệu và đặc tính hiệu năng",
        "Bối cảnh hệ thống lớn hơn và ràng buộc",
        "Phân rã bài toán trong phân tích yêu cầu"
      ],
      "correct": 1,
      "explanation": "Phần này hỏi phần mềm thực hiện chức năng biến đổi dữ liệu thế nào và có đặc tính hiệu năng đặc biệt không.",
      "slides": [
        10
      ],
      "id": "SLIDE-SPM-037"
    },
    {
      "part": 1,
      "sourceId": "SPM-038",
      "sourceType": "slides",
      "question": "Phân rã bài toán là trọng tâm của hoạt động nào?",
      "options": [
        "Đánh giá doanh thu tổ chức",
        "Phân tích yêu cầu phần mềm",
        "Quản lý biến động nhân sự",
        "Theo dõi earned value hằng tháng"
      ],
      "correct": 1,
      "explanation": "Bài xác định phân rã bài toán là hoạt động cốt lõi của software requirements analysis.",
      "slides": [
        10
      ],
      "id": "SLIDE-SPM-038"
    },
    {
      "part": 1,
      "sourceId": "SPM-039",
      "sourceType": "slides",
      "question": "Phân tích đã mô tả vị trí phần mềm trong hệ thống lớn và cách biến đổi dữ liệu, nhưng chưa nêu dữ liệu người dùng nhìn thấy. Bộ đánh giá nào đúng?",
      "options": [
        "Đã có Information objectives; còn thiếu Context và Function",
        "Đã có Context và Information objectives; chỉ thiếu Function",
        "Chỉ có Function; Context không xét hệ thống lớn hơn",
        "Đã có Context và Function; còn thiếu Information objectives"
      ],
      "correct": 3,
      "explanation": "Slide 10 phân biệt context, chức năng biến đổi dữ liệu và dữ liệu đầu vào/đầu ra customer-visible.",
      "slides": [
        10
      ],
      "id": "SLIDE-SPM-039"
    },
    {
      "part": 1,
      "sourceId": "SPM-040",
      "sourceType": "slides",
      "question": "Đội phân tích đã liệt kê dữ liệu vào và báo cáo ra nhưng chưa mô tả cách chuyển đổi. Nội dung scope nào còn thiếu?",
      "options": [
        "Information objectives",
        "Function and performance",
        "Team cohesiveness",
        "Organizational location"
      ],
      "correct": 1,
      "explanation": "Biến đổi input thành output được hỏi trong Function and performance.",
      "slides": [
        10
      ],
      "id": "SLIDE-SPM-040"
    },
    {
      "part": 1,
      "sourceId": "SPM-042",
      "sourceType": "slides",
      "question": "Một đặc tính tốc độ xử lý đặc biệt cần được xét trong scope. Mục nào phù hợp nhất?",
      "options": [
        "Postmortem analysis",
        "Information objectives",
        "Function and performance",
        "Team structure"
      ],
      "correct": 2,
      "explanation": "Các special performance characteristics thuộc nội dung Function and performance.",
      "slides": [
        10
      ],
      "id": "SLIDE-SPM-042"
    },
    {
      "part": 1,
      "sourceId": "SPM-043",
      "sourceType": "slides",
      "question": "Tài liệu chỉ ghi dữ liệu vào/ra và mục tiêu tốc độ, rồi tuyên bố scope đầy đủ. Câu hỏi nào làm lộ một phần phạm vi còn bỏ ngỏ?",
      "options": [
        "Có thêm bao nhiêu đối tượng dữ liệu đầu ra của người dùng?",
        "Có thêm đặc tính hiệu năng đặc biệt nào cần xử lý?",
        "Phần mềm nằm trong bối cảnh lớn hơn nào và chịu ràng buộc gì?",
        "Có thêm dữ liệu đầu vào nào mà khách hàng cung cấp?"
      ],
      "correct": 2,
      "explanation": "Tài liệu có information objectives và performance nhưng chưa có context và constraints phát sinh.",
      "slides": [
        10
      ],
      "id": "SLIDE-SPM-043"
    },
    {
      "part": 1,
      "sourceId": "SPM-044",
      "sourceType": "slides",
      "question": "Tập nào chỉ gồm các mô hình process được liệt kê trong bài?",
      "options": [
        "People, Product, Project",
        "Linear sequential, prototyping, incremental",
        "Customer communication, planning, engineering",
        "Trust, motivation, organization"
      ],
      "correct": 1,
      "explanation": "Slide 11 liệt kê ba mô hình này cùng Spiral, component-based development và fourth generation techniques.",
      "slides": [
        11
      ],
      "id": "SLIDE-SPM-044"
    },
    {
      "part": 1,
      "sourceId": "SPM-045",
      "sourceType": "slides",
      "question": "Mục nào là mô hình process trong danh sách, thay vì hoạt động framework?",
      "options": [
        "Risk analysis",
        "Customer evaluation",
        "Spiral model",
        "Construction and release"
      ],
      "correct": 2,
      "explanation": "Spiral được liệt kê là mô hình process; ba mục kia là framework activities.",
      "slides": [
        11
      ],
      "id": "SLIDE-SPM-045"
    },
    {
      "part": 1,
      "sourceId": "SPM-046",
      "sourceType": "slides",
      "question": "Cặp nào đều thuộc danh sách mô hình process?",
      "options": [
        "Postmortem analysis và earned value tracking",
        "Formal risk management và defect tracking",
        "Component-based development và fourth generation techniques",
        "Information objectives và customer communication"
      ],
      "correct": 2,
      "explanation": "Hai mô hình này có mặt trong danh sách của slide 11.",
      "slides": [
        11
      ],
      "id": "SLIDE-SPM-046"
    },
    {
      "part": 1,
      "sourceId": "SPM-047",
      "sourceType": "slides",
      "question": "Một bảng đặt Planning ngang hàng với Prototyping như hai mô hình process. Lỗi phân loại nào cần sửa?",
      "options": [
        "Planning là đối tượng dữ liệu",
        "Planning là framework activity",
        "Prototyping là vai trò nhân sự",
        "Prototyping là chỉ tiêu nhân sự"
      ],
      "correct": 1,
      "explanation": "Planning nằm trong framework activities, còn prototyping nằm trong danh sách mô hình process.",
      "slides": [
        11,
        12
      ],
      "id": "SLIDE-SPM-047"
    },
    {
      "part": 1,
      "sourceId": "SPM-048",
      "sourceType": "slides",
      "question": "Hoạt động nào thiết lập việc thu thập yêu cầu giữa nhóm phát triển và khách hàng?",
      "options": [
        "Construction and release",
        "Customer communication",
        "Customer evaluation",
        "Engineering"
      ],
      "correct": 1,
      "explanation": "Customer communication bao gồm các nhiệm vụ tạo requirements elicitation hiệu quả.",
      "slides": [
        12
      ],
      "id": "SLIDE-SPM-048"
    },
    {
      "part": 1,
      "sourceId": "SPM-049",
      "sourceType": "slides",
      "question": "Xác định nguồn lực và mốc thời gian thuộc hoạt động nào?",
      "options": [
        "Engineering",
        "Construction and release",
        "Customer evaluation",
        "Planning"
      ],
      "correct": 3,
      "explanation": "Planning định nghĩa resources, timelines và thông tin dự án khác.",
      "slides": [
        12
      ],
      "id": "SLIDE-SPM-049"
    },
    {
      "part": 1,
      "sourceId": "SPM-051",
      "sourceType": "slides",
      "question": "Tạo các biểu diễn của ứng dụng thuộc hoạt động nào?",
      "options": [
        "Customer evaluation",
        "Planning",
        "Engineering",
        "Risk analysis"
      ],
      "correct": 2,
      "explanation": "Engineering thực hiện các nhiệm vụ xây dựng representations của ứng dụng.",
      "slides": [
        12
      ],
      "id": "SLIDE-SPM-051"
    },
    {
      "part": 1,
      "sourceId": "SPM-052",
      "sourceType": "slides",
      "question": "Bộ công việc nào thuộc Construction and release?",
      "options": [
        "Đánh giá rủi ro, chọn nhân sự và điều chỉnh ngân sách",
        "Lấy phản hồi, xác định context và phân tích dữ liệu",
        "Thu thập yêu cầu, lập scope và phân công vai trò",
        "Xây dựng, kiểm thử, cài đặt và hỗ trợ người dùng"
      ],
      "correct": 3,
      "explanation": "Construction and release gồm construct, test, install và user support.",
      "slides": [
        12
      ],
      "id": "SLIDE-SPM-052"
    },
    {
      "part": 1,
      "sourceId": "SPM-053",
      "sourceType": "slides",
      "question": "Mục đích của Customer evaluation là gì?",
      "options": [
        "Thu nhận phản hồi khách hàng qua đánh giá phần mềm",
        "Xác định mọi ràng buộc của bối cảnh kinh doanh",
        "Xây dựng một bộ quy trình mới cho tổ chức",
        "Thiết lập toàn bộ kỹ năng của các practitioners"
      ],
      "correct": 0,
      "explanation": "Customer evaluation lấy customer feedback từ việc đánh giá các biểu diễn phần mềm.",
      "slides": [
        12
      ],
      "id": "SLIDE-SPM-053"
    },
    {
      "part": 1,
      "sourceId": "SPM-054",
      "sourceType": "slides",
      "question": "Biểu diễn ứng dụng đã được xây dựng, nhưng sản phẩm chưa được kiểm thử hay cài đặt. Phân biệt nào đúng?",
      "options": [
        "Có kết quả Engineering, chưa đủ Construction and release",
        "Có kết quả Customer evaluation, không còn cần kiểm thử",
        "Có kết quả Planning, đã đủ Construction and release",
        "Có kết quả Risk analysis, đã hoàn tất hỗ trợ người dùng"
      ],
      "correct": 0,
      "explanation": "Engineering tạo representations; Construction and release gồm xây dựng, kiểm thử, cài đặt và hỗ trợ.",
      "slides": [
        12
      ],
      "id": "SLIDE-SPM-054"
    },
    {
      "part": 1,
      "sourceId": "SPM-055",
      "sourceType": "slides",
      "question": "Customer evaluation được bài giảng mô tả là lấy phản hồi dựa trên những gì?",
      "options": [
        "Chỉ phân công nhân sự chưa có phần mềm để đánh giá",
        "Chỉ danh sách nguồn lực trước khi có biểu diễn ứng dụng",
        "Chỉ rủi ro quản lý, không xét biểu diễn hay triển khai",
        "Biểu diễn tạo khi engineering và được triển khai khi construction"
      ],
      "correct": 3,
      "explanation": "Slide 12 đề cập representations created during engineering và implemented during construction.",
      "slides": [
        12
      ],
      "id": "SLIDE-SPM-055"
    },
    {
      "part": 1,
      "sourceId": "SPM-057",
      "sourceType": "slides",
      "question": "Customer communication và Customer evaluation khác nhau thế nào?",
      "options": [
        "Một bên thu thập yêu cầu; bên kia thu phản hồi qua đánh giá",
        "Một bên quản lý nhân sự; bên kia xác định business issues",
        "Một bên kiểm thử mã; bên kia định nghĩa nguồn lực",
        "Một bên tạo biểu diễn; bên kia hỗ trợ người dùng"
      ],
      "correct": 0,
      "explanation": "Communication nhằm requirements elicitation, evaluation nhằm customer feedback dựa trên representations.",
      "slides": [
        12
      ],
      "id": "SLIDE-SPM-057"
    },
    {
      "part": 1,
      "sourceId": "SPM-058",
      "sourceType": "slides",
      "question": "Nhóm đã review mini-specs đúng đắn và nhất quán rồi cho rằng không cần kiểm thử khi xây dựng. Kết luận nào phù hợp?",
      "options": [
        "Kiểm thử chỉ thuộc Customer communication nên có thể bỏ khi xây dựng",
        "Review yêu cầu không thay thế kiểm thử trong Construction and release",
        "Kiểm thử chỉ cần nếu không có mini-specs trong scoping document",
        "Review mini-specs tự động hoàn thành mọi nhiệm vụ Construction"
      ],
      "correct": 1,
      "explanation": "Slide 15 review mini-specs; slide 12 vẫn yêu cầu test trong Construction and release.",
      "slides": [
        12,
        15
      ],
      "id": "SLIDE-SPM-058"
    },
    {
      "part": 1,
      "sourceId": "SPM-061",
      "sourceType": "slides",
      "question": "CPF được viết đầy đủ là gì?",
      "options": [
        "Critical Project Feedback",
        "Construction Planning Flow",
        "Customer Product Function",
        "Common Process Framework"
      ],
      "correct": 3,
      "explanation": "Slide 14 dùng CPF cho Common Process Framework.",
      "slides": [
        14
      ],
      "id": "SLIDE-SPM-061"
    },
    {
      "part": 1,
      "sourceId": "SPM-063",
      "sourceType": "slides",
      "question": "Bước đầu tiên trong ví dụ Customer communication cho dự án nhỏ là gì?",
      "options": [
        "Họp để cài đặt phần mềm",
        "Lập danh sách vấn đề cần làm rõ",
        "Sửa ngay statement of scope",
        "Review scope với các bên"
      ],
      "correct": 1,
      "explanation": "Chuỗi nhiệm vụ bắt đầu bằng Develop list of clarification issues.",
      "slides": [
        14
      ],
      "id": "SLIDE-SPM-063"
    },
    {
      "part": 1,
      "sourceId": "SPM-064",
      "sourceType": "slides",
      "question": "Sau khi lập danh sách clarification issues, bước kế tiếp là gì?",
      "options": [
        "Cài đặt bản phát hành đầu tiên",
        "Tự chốt scope mà không thảo luận",
        "Đánh giá nhân sự của các nhà cung cấp",
        "Gặp khách hàng để giải quyết các vấn đề"
      ],
      "correct": 3,
      "explanation": "Bước tiếp theo là Meet with customer to address clarification issues.",
      "slides": [
        14
      ],
      "id": "SLIDE-SPM-064"
    },
    {
      "part": 1,
      "sourceId": "SPM-065",
      "sourceType": "slides",
      "question": "Statement of scope trong ví dụ dự án nhỏ được xây dựng bằng cách nào?",
      "options": [
        "Cùng khách hàng xây dựng",
        "Chỉ end-users tự lập sau phát hành",
        "Chỉ practitioners lập trước khi hỏi",
        "Senior managers lập thay mọi bên"
      ],
      "correct": 0,
      "explanation": "Slide yêu cầu Jointly develop a statement of scope sau cuộc gặp làm rõ.",
      "slides": [
        14
      ],
      "id": "SLIDE-SPM-065"
    },
    {
      "part": 1,
      "sourceId": "SPM-066",
      "sourceType": "slides",
      "question": "Ví dụ nhỏ review statement of scope; ví dụ chi tiết review mini-specs rồi review scoping document. Khác biệt nào đúng?",
      "options": [
        "Cả hai chỉ review sau khi phần mềm được cài đặt",
        "Ví dụ nhỏ bắt buộc review từng mini-spec trước scope",
        "Ví dụ chi tiết không cần review tài liệu phạm vi",
        "Ví dụ chi tiết có review ở cả mức mini-spec và tài liệu phạm vi"
      ],
      "correct": 3,
      "explanation": "Slide 15 có hai mức review; slide 14 chỉ nêu review statement of scope.",
      "slides": [
        14,
        15
      ],
      "id": "SLIDE-SPM-066"
    },
    {
      "part": 1,
      "sourceId": "SPM-067",
      "sourceType": "slides",
      "question": "Thứ tự nào đúng trong ba bước cuối của ví dụ dự án nhỏ?",
      "options": [
        "Cùng lập scope → review → sửa khi cần",
        "Sửa → cùng lập scope → review",
        "Review → sửa → cùng lập scope",
        "Cùng lập scope → sửa → bỏ review"
      ],
      "correct": 0,
      "explanation": "Slide đặt review sau xây dựng và sửa sau review.",
      "slides": [
        14
      ],
      "id": "SLIDE-SPM-067"
    },
    {
      "part": 1,
      "sourceId": "SPM-068",
      "sourceType": "slides",
      "question": "Sau khi review phạm vi, các bên yêu cầu điều chỉnh. Hai ví dụ phân rã Customer communication dẫn đến lựa chọn nào?",
      "options": [
        "Chỉ sửa ở ví dụ nhỏ vì ví dụ chi tiết là bất biến",
        "Giữ nguyên ở cả hai vì review đồng nghĩa đóng mọi thay đổi",
        "Sửa tài liệu phạm vi khi cần trong cả hai ví dụ",
        "Chỉ sửa ở ví dụ chi tiết vì ví dụ nhỏ không review"
      ],
      "correct": 2,
      "explanation": "Cả slides 14 và 15 kết thúc bằng modify scope/scoping document as required.",
      "slides": [
        14,
        15
      ],
      "id": "SLIDE-SPM-068"
    },
    {
      "part": 1,
      "sourceId": "SPM-069",
      "sourceType": "slides",
      "question": "Chuỗi Customer communication chi tiết bắt đầu bằng nhiệm vụ nào?",
      "options": [
        "Conduct cuộc họp chính thức",
        "Review yêu cầu của khách hàng",
        "Sửa scoping document",
        "Assemble các mini-specs"
      ],
      "correct": 1,
      "explanation": "Bước đầu của slide 15 là Review the customer request.",
      "slides": [
        15
      ],
      "id": "SLIDE-SPM-069"
    },
    {
      "part": 1,
      "sourceId": "SPM-070",
      "sourceType": "slides",
      "question": "Sau khi review customer request, cần làm gì theo chuỗi nhiệm vụ được nêu?",
      "options": [
        "Lập kế hoạch và lịch họp chính thức có điều phối",
        "Assemble scope trước khi nghiên cứu giải pháp",
        "Cài đặt hệ thống tại nơi sử dụng",
        "Review ngay từng mini-spec đã hoàn thành"
      ],
      "correct": 0,
      "explanation": "Bước kế tiếp là Plan and schedule a formal, facilitated meeting with the customer.",
      "slides": [
        15
      ],
      "id": "SLIDE-SPM-070"
    },
    {
      "part": 1,
      "sourceId": "SPM-071",
      "sourceType": "slides",
      "question": "Nghiên cứu trước cuộc họp chính thức nhằm làm rõ điều gì?",
      "options": [
        "Earned value của các tháng đã qua",
        "Mức turnover trong ba tháng gần nhất",
        "Số defects đã đóng sau khi cài đặt",
        "Giải pháp đề xuất và các cách tiếp cận hiện có"
      ],
      "correct": 3,
      "explanation": "Research được thực hiện để specify the proposed solution and existing approaches.",
      "slides": [
        15
      ],
      "id": "SLIDE-SPM-071"
    },
    {
      "part": 1,
      "sourceId": "SPM-072",
      "sourceType": "slides",
      "question": "Những gì được chuẩn bị trước khi conduct cuộc họp chính thức?",
      "options": [
        "Báo cáo postmortem và bản cài đặt",
        "Working document và agenda",
        "Danh sách defects đóng và mở",
        "Cấu trúc team và bảng earned value"
      ],
      "correct": 1,
      "explanation": "Slide yêu cầu chuẩn bị working document và agenda trước cuộc họp.",
      "slides": [
        15
      ],
      "id": "SLIDE-SPM-072"
    },
    {
      "part": 1,
      "sourceId": "SPM-073",
      "sourceType": "slides",
      "question": "Mini-specs cần phản ánh các khía cạnh nào?",
      "options": [
        "Data, function và behavior",
        "People, technology và finance",
        "Schedule, staff và earned value",
        "Cost, turnover và sponsorship"
      ],
      "correct": 0,
      "explanation": "Mini-specs phản ánh data, function và behavioral features của phần mềm.",
      "slides": [
        15
      ],
      "id": "SLIDE-SPM-073"
    },
    {
      "part": 1,
      "sourceId": "SPM-074",
      "sourceType": "slides",
      "question": "Review mini-specs kiểm tra các tiêu chí nào?",
      "options": [
        "Đúng đắn, nhất quán, không mơ hồ",
        "Nhanh, ít người, nhiều chức năng",
        "Có ngân sách, có leader, có nhà tài trợ",
        "Ít chữ, nhiều hình, không dữ liệu"
      ],
      "correct": 0,
      "explanation": "Slide yêu cầu correctness, consistency và lack of ambiguity.",
      "slides": [
        15
      ],
      "id": "SLIDE-SPM-074"
    },
    {
      "part": 1,
      "sourceId": "SPM-075",
      "sourceType": "slides",
      "question": "Các mini-specs được tập hợp thành tài liệu gì?",
      "options": [
        "Monthly earned value report",
        "Personnel turnover register",
        "User training manual",
        "Scoping document"
      ],
      "correct": 3,
      "explanation": "Chuỗi nhiệm vụ nêu Assemble the mini-specs into a scoping document.",
      "slides": [
        15
      ],
      "id": "SLIDE-SPM-075"
    },
    {
      "part": 1,
      "sourceId": "SPM-076",
      "sourceType": "slides",
      "question": "Nhóm chuẩn bị working document và agenda rồi coi chúng là scoping document cuối cùng. Bước nào chưa diễn ra theo chuỗi slide 15?",
      "options": [
        "Chỉ đổi tên working document là đã đủ toàn bộ scope",
        "Chỉ tính turnover trước khi chấp nhận scoping document",
        "Chỉ bỏ agenda để tài liệu được xem là scope cuối cùng",
        "Họp, cùng tạo/review mini-specs rồi tập hợp thành scope"
      ],
      "correct": 3,
      "explanation": "Working document và agenda có trước meeting; scoping document được assemble từ mini-specs sau meeting.",
      "slides": [
        15
      ],
      "id": "SLIDE-SPM-076"
    },
    {
      "part": 1,
      "sourceId": "SPM-077",
      "sourceType": "slides",
      "question": "Một mini-spec mô tả chức năng rõ ràng nhưng mâu thuẫn với mini-spec khác. Tiêu chí review nào bị vi phạm?",
      "options": [
        "Sponsorship",
        "Consistency",
        "Availability",
        "Turnover"
      ],
      "correct": 1,
      "explanation": "Consistency là tiêu chí kiểm tra sự nhất quán của mini-specs.",
      "slides": [
        15
      ],
      "id": "SLIDE-SPM-077"
    },
    {
      "part": 1,
      "sourceId": "SPM-078",
      "sourceType": "slides",
      "question": "Một mini-spec dùng mô tả có thể hiểu theo nhiều cách. Tiêu chí nào cần cải thiện?",
      "options": [
        "Empirical estimation",
        "Staff stability",
        "Earned value",
        "Lack of ambiguity"
      ],
      "correct": 3,
      "explanation": "Review mini-specs phải bảo đảm không mơ hồ.",
      "slides": [
        15
      ],
      "id": "SLIDE-SPM-078"
    },
    {
      "part": 1,
      "sourceId": "SPM-079",
      "sourceType": "slides",
      "question": "Nhóm tiến hành họp chính thức trước rồi mới soạn agenda cho cuộc họp đó. Lỗi trình tự là gì?",
      "options": [
        "Mini-specs phải được lập sau cài đặt",
        "Scoping document phải thay thế working document",
        "Customer request chỉ được review cuối cùng",
        "Agenda phải được chuẩn bị trước cuộc họp"
      ],
      "correct": 3,
      "explanation": "Slide đặt việc chuẩn bị working document và agenda trước Conduct the meeting.",
      "slides": [
        15
      ],
      "id": "SLIDE-SPM-079"
    },
    {
      "part": 1,
      "sourceId": "SPM-083",
      "sourceType": "slides",
      "question": "Một dự án không biết rõ ranh giới sản phẩm cần xây dựng. Vấn đề nào trong danh sách của John Reel phù hợp nhất?",
      "options": [
        "Chosen technology thay đổi",
        "Users kháng cự sử dụng sản phẩm",
        "Product scope được định nghĩa kém",
        "Sponsorship đã bị mất"
      ],
      "correct": 2,
      "explanation": "Ranh giới sản phẩm không rõ phản ánh poorly defined product scope.",
      "slides": [
        16
      ],
      "id": "SLIDE-SPM-083"
    },
    {
      "part": 1,
      "sourceId": "SPM-084",
      "sourceType": "slides",
      "question": "Các thay đổi được xử lý thiếu kiểm soát là vấn đề nào?",
      "options": [
        "Business needs đã được xác định rõ",
        "Managers áp dụng lessons learned",
        "Team có đủ kỹ năng thích hợp",
        "Changes are managed poorly"
      ],
      "correct": 3,
      "explanation": "Quản lý thay đổi kém là một trong mười vấn đề được liệt kê.",
      "slides": [
        16
      ],
      "id": "SLIDE-SPM-084"
    },
    {
      "part": 1,
      "sourceId": "SPM-085",
      "sourceType": "slides",
      "question": "Nền tảng đã chọn thay đổi giữa dự án là vấn đề nào?",
      "options": [
        "Product scope is poorly defined",
        "Users are resistant",
        "Sponsorship is lost",
        "The chosen technology changes"
      ],
      "correct": 3,
      "explanation": "Slide 16 nêu sự thay đổi của công nghệ được chọn là vấn đề có thể xảy ra.",
      "slides": [
        16
      ],
      "id": "SLIDE-SPM-085"
    },
    {
      "part": 1,
      "sourceId": "SPM-086",
      "sourceType": "slides",
      "question": "Nhu cầu kinh doanh ban đầu không rõ, rồi tiếp tục thay đổi. Nguy cơ nào được phản ánh?",
      "options": [
        "End-users đã tương tác sau phát hành",
        "Business needs change hoặc ill-defined",
        "Engineering tạo nhiều representations",
        "Team áp dụng distribution of skills"
      ],
      "correct": 1,
      "explanation": "Bài liệt kê business needs thay đổi hoặc không được định nghĩa rõ.",
      "slides": [
        16
      ],
      "id": "SLIDE-SPM-086"
    },
    {
      "part": 1,
      "sourceId": "SPM-087",
      "sourceType": "slides",
      "question": "Yêu cầu hoàn thành vào ngày không khả thi là vấn đề nào?",
      "options": [
        "Sponsorship is lost",
        "Deadlines are unrealistic",
        "Users are resistant",
        "Technology changes"
      ],
      "correct": 1,
      "explanation": "Thời hạn không thực tế thuộc danh sách What can go wrong in a project.",
      "slides": [
        16
      ],
      "id": "SLIDE-SPM-087"
    },
    {
      "part": 1,
      "sourceId": "SPM-088",
      "sourceType": "slides",
      "question": "Người dùng phản đối sử dụng phần mềm là vấn đề nào?",
      "options": [
        "Resources đã được xác định",
        "Users are resistant",
        "Scope đã được review",
        "Practitioners có kỹ năng"
      ],
      "correct": 1,
      "explanation": "Sự kháng cự của users là vấn đề được nêu ở slide 16.",
      "slides": [
        16
      ],
      "id": "SLIDE-SPM-088"
    },
    {
      "part": 1,
      "sourceId": "SPM-089",
      "sourceType": "slides",
      "question": "Mất sự hỗ trợ của nhà tài trợ là vấn đề nào?",
      "options": [
        "Customer evaluation tạo nhiều phản hồi",
        "Team thiếu tài liệu training sau release",
        "Sponsorship is lost hoặc chưa được thu xếp đúng",
        "Information objectives có nhiều đầu vào"
      ],
      "correct": 2,
      "explanation": "Sponsorship bị mất hoặc không được đạt đúng cách ngay từ đầu nằm trong danh sách.",
      "slides": [
        16
      ],
      "id": "SLIDE-SPM-089"
    },
    {
      "part": 1,
      "sourceId": "SPM-090",
      "sourceType": "slides",
      "question": "Có đủ người nhưng thiếu kỹ năng cần thiết là vấn đề nào?",
      "options": [
        "Team thiếu người có kỹ năng phù hợp",
        "Scope đã được phân rã rõ",
        "Deadlines đã được xác định thực tế",
        "Users đã tham gia đánh giá"
      ],
      "correct": 0,
      "explanation": "Danh sách nhấn mạnh appropriate skills, không chỉ số lượng người.",
      "slides": [
        16
      ],
      "id": "SLIDE-SPM-090"
    },
    {
      "part": 1,
      "sourceId": "SPM-091",
      "sourceType": "slides",
      "question": "Bỏ qua kinh nghiệm đã rút ra là vấn đề nào?",
      "options": [
        "Business needs không rõ",
        "Tránh best practices và lessons learned",
        "Đổi technology đã chọn",
        "Mất sponsorship đã có"
      ],
      "correct": 1,
      "explanation": "Bài nêu việc tránh best practices và lessons learned có thể khiến dự án thất bại.",
      "slides": [
        16
      ],
      "id": "SLIDE-SPM-091"
    },
    {
      "part": 1,
      "sourceId": "SPM-092",
      "sourceType": "slides",
      "question": "Để xử lý tình trạng hiểu sai nhu cầu ngay từ đầu, nguyên tắc nào phù hợp trực tiếp?",
      "options": [
        "Start on the right foot",
        "People-aware program management",
        "Conduct a postmortem analysis",
        "Track monthly earned value"
      ],
      "correct": 0,
      "explanation": "Start on the right foot yêu cầu nỗ lực hiểu bài toán trước khi đặt mục tiêu và kỳ vọng.",
      "slides": [
        16,
        17
      ],
      "id": "SLIDE-SPM-092"
    },
    {
      "part": 1,
      "sourceId": "SPM-093",
      "sourceType": "slides",
      "question": "Vấn đề deadline không thực tế đối lập trực tiếp với yêu cầu nào khi bắt đầu dự án?",
      "options": [
        "Tạo representations của ứng dụng",
        "Thu feedback khi postmortem",
        "Theo dõi defects đóng và mở",
        "Đặt mục tiêu và kỳ vọng thực tế"
      ],
      "correct": 3,
      "explanation": "Slide 17 nhấn mạnh realistic objectives and expectations khi khởi đầu đúng.",
      "slides": [
        16,
        17
      ],
      "id": "SLIDE-SPM-093"
    },
    {
      "part": 1,
      "sourceId": "SPM-094",
      "sourceType": "slides",
      "question": "Start on the right foot yêu cầu làm gì trước khi đặt mục tiêu?",
      "options": [
        "Thu earned value của tháng đầu",
        "Nỗ lực hiểu bài toán cần giải quyết",
        "Chốt lịch dù chưa hiểu vấn đề",
        "Chỉ định mọi người cùng một kỹ năng"
      ],
      "correct": 1,
      "explanation": "Hiểu problem là nền tảng để đặt mục tiêu và kỳ vọng thực tế.",
      "slides": [
        17
      ],
      "id": "SLIDE-SPM-094"
    },
    {
      "part": 1,
      "sourceId": "SPM-095",
      "sourceType": "slides",
      "question": "Mục tiêu và kỳ vọng khi khởi đầu đúng cần được đặt cho ai?",
      "options": [
        "Chỉ senior managers",
        "Mọi người sẽ tham gia dự án",
        "Chỉ project manager",
        "Chỉ practitioners mới tuyển"
      ],
      "correct": 1,
      "explanation": "Slide 17 yêu cầu kỳ vọng thực tế cho everyone who will be involved in the project.",
      "slides": [
        17
      ],
      "id": "SLIDE-SPM-095"
    },
    {
      "part": 1,
      "sourceId": "SPM-096",
      "sourceType": "slides",
      "question": "Duy trì động lực cần dùng khuyến khích để đạt mục tiêu nhân sự nào?",
      "options": [
        "Dời toàn bộ hoạt động review đến cuối",
        "Tăng số cấp phê duyệt cho từng tác vụ",
        "Giảm turnover nhân sự xuống mức tối thiểu",
        "Thay thành viên liên tục để tăng ý tưởng"
      ],
      "correct": 2,
      "explanation": "Bài yêu cầu incentives để giữ turnover of personnel ở mức thấp nhất.",
      "slides": [
        17
      ],
      "id": "SLIDE-SPM-096"
    },
    {
      "part": 1,
      "sourceId": "SPM-097",
      "sourceType": "slides",
      "question": "Vai trò của nhóm khi duy trì động lực dự án là gì?",
      "options": [
        "Nhấn mạnh chất lượng ở mọi nhiệm vụ",
        "Chỉ xét chất lượng khi phần mềm đã phát hành",
        "Trì hoãn các nhiệm vụ có thể đo lường",
        "Chuyển mọi quyết định kỹ thuật cho khách hàng"
      ],
      "correct": 0,
      "explanation": "Team nên emphasize quality in every task it performs.",
      "slides": [
        17
      ],
      "id": "SLIDE-SPM-097"
    },
    {
      "part": 1,
      "sourceId": "SPM-098",
      "sourceType": "slides",
      "question": "Quản lý cấp cao cần làm gì để duy trì động lực dự án?",
      "options": [
        "Tạo điều kiện để team làm việc ít bị cản trở",
        "Thay đổi toàn bộ thành viên mỗi tháng",
        "Buộc team bỏ chất lượng để giữ nhịp độ",
        "Kiểm soát chi tiết từng thao tác kỹ thuật"
      ],
      "correct": 0,
      "explanation": "Slide diễn đạt senior management should stay out of the team’s way.",
      "slides": [
        17
      ],
      "id": "SLIDE-SPM-098"
    },
    {
      "part": 1,
      "sourceId": "SPM-100",
      "sourceType": "slides",
      "question": "Manager muốn duy trì momentum nhưng chỉ xem turnover toàn tổ chức, không xem từng supplier/developer. Điều chỉnh nào kết hợp đúng hai nội dung của bài?",
      "options": [
        "Chỉ tăng số nhiệm vụ mà không xét turnover của đơn vị",
        "Bỏ incentives vì turnover đã có một số chung toàn tổ chức",
        "Giữ incentives và theo dõi turnover ba tháng của từng đơn vị",
        "Chỉ đổi cấu trúc nhóm và bỏ metrics về nhân sự"
      ],
      "correct": 2,
      "explanation": "Slide 17 dùng incentives giảm turnover; slide 21 theo dõi average turnover ba tháng cho từng supplier/developer.",
      "slides": [
        17,
        21
      ],
      "id": "SLIDE-SPM-100"
    },
    {
      "part": 1,
      "sourceId": "SPM-101",
      "sourceType": "slides",
      "question": "Tiến độ dự án phần mềm được theo dõi thông qua gì?",
      "options": [
        "Chỉ số nhân viên đã được giao công việc",
        "Chỉ các ngày hoàn thành dự kiến của dự án",
        "Sản phẩm công việc và phép đo quy trình, dự án",
        "Chỉ danh sách chức năng trong tài liệu phạm vi"
      ],
      "correct": 2,
      "explanation": "Progress được theo dõi qua work products, với process và project measures hỗ trợ đánh giá.",
      "slides": [
        18
      ],
      "id": "SLIDE-SPM-101"
    },
    {
      "part": 1,
      "sourceId": "SPM-102",
      "sourceType": "slides",
      "question": "Thông điệp của Make smart decisions là gì?",
      "options": [
        "Tăng mọi cấp phê duyệt",
        "Chỉ quyết định sau phát hành",
        "Keep it simple",
        "Luôn chọn cách phức tạp hơn"
      ],
      "correct": 2,
      "explanation": "Slide 18 tóm tắt việc ra quyết định thông minh bằng keep it simple.",
      "slides": [
        18
      ],
      "id": "SLIDE-SPM-102"
    },
    {
      "part": 1,
      "sourceId": "SPM-103",
      "sourceType": "slides",
      "question": "Postmortem analysis cần có cơ chế như thế nào để rút lessons learned?",
      "options": [
        "Ngẫu nhiên khi manager còn thời gian",
        "Chỉ dùng khi khách hàng khiếu nại",
        "Nhất quán cho từng dự án",
        "Chỉ áp dụng cho dự án đầu tiên"
      ],
      "correct": 2,
      "explanation": "Bài yêu cầu consistent mechanism for extracting lessons learned for each project.",
      "slides": [
        18
      ],
      "id": "SLIDE-SPM-103"
    },
    {
      "part": 1,
      "sourceId": "SPM-104",
      "sourceType": "slides",
      "question": "Trong tổng kết dự án, cần so sánh những lịch nào?",
      "options": [
        "Lịch kế hoạch và lịch thực tế",
        "Chức danh manager và chức danh customer",
        "Tên công nghệ và tên sản phẩm",
        "Số team và số máy tính"
      ],
      "correct": 0,
      "explanation": "Postmortem đánh giá planned and actual schedules.",
      "slides": [
        18
      ],
      "id": "SLIDE-SPM-104"
    },
    {
      "part": 1,
      "sourceId": "SPM-105",
      "sourceType": "slides",
      "question": "Tổng kết dự án cần lấy phản hồi từ ai?",
      "options": [
        "Chỉ các end-users chưa dùng phần mềm",
        "Thành viên team và customers",
        "Chỉ người cung cấp công cụ",
        "Chỉ những senior managers"
      ],
      "correct": 1,
      "explanation": "Slide yêu cầu feedback from team members and customers.",
      "slides": [
        18
      ],
      "id": "SLIDE-SPM-105"
    },
    {
      "part": 1,
      "sourceId": "SPM-106",
      "sourceType": "slides",
      "question": "Kết quả postmortem cần được lưu như thế nào?",
      "options": [
        "Chỉ trao đổi miệng một lần",
        "Chỉ giữ trong trí nhớ manager",
        "Ghi nhận bằng văn bản",
        "Chỉ gửi bản cài đặt cho khách hàng"
      ],
      "correct": 2,
      "explanation": "Bài nêu record findings in written form.",
      "slides": [
        18
      ],
      "id": "SLIDE-SPM-106"
    },
    {
      "part": 1,
      "sourceId": "SPM-107",
      "sourceType": "slides",
      "question": "Nhóm kết thúc dự án bằng cách thu metrics nhưng không phân tích. Bước nào trong postmortem còn thiếu?",
      "options": [
        "Chốt scope trước khi review",
        "Xóa lịch thực tế của dự án",
        "Đổi toàn bộ process models",
        "Phân tích software project metrics"
      ],
      "correct": 3,
      "explanation": "Postmortem yêu cầu collect and analyze software project metrics.",
      "slides": [
        18
      ],
      "id": "SLIDE-SPM-107"
    },
    {
      "part": 1,
      "sourceId": "SPM-108",
      "sourceType": "slides",
      "question": "Một nhóm dùng work products để xem tiến độ khi dự án đang chạy và so sánh lịch kế hoạch/thực tế khi tổng kết. Hai mục đích khác nhau nào đúng?",
      "options": [
        "Cả hai chỉ là xác định context trước khi có yêu cầu",
        "Theo dõi tiến độ hiện tại và rút bài học sau dự án",
        "Theo dõi chỉ dành sau dự án, tổng kết chỉ dành trước dự án",
        "Cả hai chỉ là động viên để giảm turnover nhân sự"
      ],
      "correct": 1,
      "explanation": "Slide 18 phân biệt Track progress và Postmortem analysis.",
      "slides": [
        18
      ],
      "id": "SLIDE-SPM-108"
    },
    {
      "part": 1,
      "sourceId": "SPM-110",
      "sourceType": "slides",
      "question": "Nguyên tắc nào phù hợp khi công việc đã hoàn tất và cần học cho các dự án sau?",
      "options": [
        "Start on the right foot",
        "Conduct a postmortem analysis",
        "Define information objectives",
        "Maintain momentum"
      ],
      "correct": 1,
      "explanation": "Postmortem thiết lập cơ chế rút lessons learned cho từng dự án.",
      "slides": [
        17,
        18
      ],
      "id": "SLIDE-SPM-110"
    },
    {
      "part": 1,
      "sourceId": "SPM-111",
      "sourceType": "slides",
      "question": "Câu hỏi Why trong W5HH tìm hiểu điều gì?",
      "options": [
        "Lý do hệ thống được phát triển",
        "Kỹ thuật triển khai từng công việc",
        "Vị trí tổ chức của người thực hiện",
        "Lượng mỗi nguồn lực cần dùng"
      ],
      "correct": 0,
      "explanation": "Why is the system being developed hỏi lý do phát triển hệ thống.",
      "slides": [
        19
      ],
      "id": "SLIDE-SPM-111"
    },
    {
      "part": 1,
      "sourceId": "SPM-112",
      "sourceType": "slides",
      "question": "Cặp What và When trong W5HH giúp xác định nội dung nào?",
      "options": [
        "Lý do kinh doanh và số defects",
        "Người phụ trách và vị trí tổ chức",
        "Việc sẽ làm và thời điểm thực hiện",
        "Phương pháp kỹ thuật và nguồn lực"
      ],
      "correct": 2,
      "explanation": "Slide hỏi What will be done, by When.",
      "slides": [
        19
      ],
      "id": "SLIDE-SPM-112"
    },
    {
      "part": 1,
      "sourceId": "SPM-113",
      "sourceType": "slides",
      "question": "Câu hỏi Who trong W5HH tập trung vào điều gì?",
      "options": [
        "Ai đã từng tham gia dự án cũ",
        "Ai đề xuất công nghệ của thị trường",
        "Ai chịu trách nhiệm một chức năng",
        "Ai sẽ sử dụng phần mềm sau release"
      ],
      "correct": 2,
      "explanation": "Who is responsible for a function hỏi trách nhiệm đối với chức năng.",
      "slides": [
        19
      ],
      "id": "SLIDE-SPM-113"
    },
    {
      "part": 1,
      "sourceId": "SPM-114",
      "sourceType": "slides",
      "question": "Where trong W5HH được hiểu theo nghĩa nào?",
      "options": [
        "Máy chủ được cài ở quốc gia nào",
        "Người phụ trách ở vị trí nào trong tổ chức",
        "Phần mềm được lưu ở thư mục nào",
        "Người dùng ngồi tại phòng nào"
      ],
      "correct": 1,
      "explanation": "Bài nêu Where are they organizationally located, tức vị trí trong tổ chức.",
      "slides": [
        19
      ],
      "id": "SLIDE-SPM-114"
    },
    {
      "part": 1,
      "sourceId": "SPM-115",
      "sourceType": "slides",
      "question": "How trong W5HH tìm hiểu những khía cạnh nào?",
      "options": [
        "Cách làm về kỹ thuật và quản lý",
        "Chỉ số giờ một thành viên có mặt",
        "Chỉ cách viết giao diện người dùng",
        "Chỉ lý do hệ thống được đề xuất"
      ],
      "correct": 0,
      "explanation": "How hỏi job được thực hiện technically and managerially thế nào.",
      "slides": [
        19
      ],
      "id": "SLIDE-SPM-115"
    },
    {
      "part": 1,
      "sourceId": "SPM-116",
      "sourceType": "slides",
      "question": "How much trong W5HH xác định điều gì?",
      "options": [
        "Mức thích thú của người dùng",
        "Vị trí của manager trong tổ chức",
        "Lượng cần thiết của từng nguồn lực",
        "Số chức năng đã được nhận xét"
      ],
      "correct": 2,
      "explanation": "How much of each resource is needed hỏi nhu cầu lượng của mỗi resource.",
      "slides": [
        19
      ],
      "id": "SLIDE-SPM-116"
    },
    {
      "part": 1,
      "sourceId": "SPM-118",
      "sourceType": "slides",
      "question": "Nhóm chỉ ghi người chịu trách nhiệm mà chưa ghi vị trí của họ trong tổ chức. Câu hỏi W5HH nào còn thiếu?",
      "options": [
        "How much",
        "When",
        "Where",
        "Why"
      ],
      "correct": 2,
      "explanation": "Who xử lý người chịu trách nhiệm; Where làm rõ organizational location.",
      "slides": [
        19
      ],
      "id": "SLIDE-SPM-118"
    },
    {
      "part": 1,
      "sourceId": "SPM-120",
      "sourceType": "slides",
      "question": "Bản ghi đã có “ai phụ trách”, “thuộc bộ phận nào” và “cần bao nhiêu nguồn lực” nhưng chưa nêu cách làm kỹ thuật/quản lý. Đánh giá W5HH nào đúng?",
      "options": [
        "Có Who, Where, How much; thiếu How",
        "Có How, When, Why; thiếu Who",
        "Có Who, What, How; thiếu Where",
        "Có Where, When, How much; thiếu Why"
      ],
      "correct": 0,
      "explanation": "Các câu trả lời tương ứng Who, Where và How much; cách làm kỹ thuật/quản lý thuộc How.",
      "slides": [
        19
      ],
      "id": "SLIDE-SPM-120"
    },
    {
      "part": 1,
      "sourceId": "SPM-121",
      "sourceType": "slides",
      "question": "Nhóm biết mục tiêu và người chịu trách nhiệm nhưng chưa xác định công việc cùng hạn hoàn thành. Cặp câu hỏi nào cần bổ sung?",
      "options": [
        "Who và How much",
        "Where và How",
        "What và When",
        "Why và Where"
      ],
      "correct": 2,
      "explanation": "What xác định việc làm, When xác định thời điểm của công việc đó.",
      "slides": [
        19
      ],
      "id": "SLIDE-SPM-121"
    },
    {
      "part": 1,
      "sourceId": "SPM-122",
      "sourceType": "slides",
      "question": "Khái niệm dự án nhấn mạnh điều gì?",
      "options": [
        "Mọi hoạt động hằng ngày không có điểm kết thúc",
        "Chỉ một sản phẩm đã phát hành thành công",
        "Tập hợp thao tác của một nhiệm vụ rõ để đạt mục tiêu",
        "Một phòng ban tồn tại lâu dài trong tổ chức"
      ],
      "correct": 2,
      "explanation": "Project là well-defined task gồm collection of operations nhằm đạt goal.",
      "slides": [
        20
      ],
      "id": "SLIDE-SPM-122"
    },
    {
      "part": 1,
      "sourceId": "SPM-123",
      "sourceType": "slides",
      "question": "Đặc trưng nào phù hợp với một dự án?",
      "options": [
        "Có thời điểm bắt đầu và kết thúc",
        "Không cần mục tiêu riêng",
        "Là hoạt động thường nhật không giới hạn",
        "Chỉ cần nguồn lực tài chính"
      ],
      "correct": 0,
      "explanation": "Bài nêu project có start time và end time.",
      "slides": [
        20
      ],
      "id": "SLIDE-SPM-123"
    },
    {
      "part": 1,
      "sourceId": "SPM-124",
      "sourceType": "slides",
      "question": "Khi nào project kết thúc theo định nghĩa được trình bày?",
      "options": [
        "Khi tổ chức đổi tên",
        "Khi số người tham gia tăng",
        "Khi có một cuộc họp review",
        "Khi mục tiêu đạt được"
      ],
      "correct": 3,
      "explanation": "Project ends when its goal is achieved.",
      "slides": [
        20
      ],
      "id": "SLIDE-SPM-124"
    },
    {
      "part": 1,
      "sourceId": "SPM-125",
      "sourceType": "slides",
      "question": "Một nhiệm vụ có đủ người và kinh phí nhưng không có mục tiêu riêng hay thời điểm kết thúc. Tại sao chưa thể dựa vào nguồn lực để kết luận đó là project?",
      "options": [
        "Có nhân lực đồng nghĩa mục tiêu đã được xác định",
        "Đủ nguồn lực luôn đủ chứng minh đó là project",
        "Có kinh phí đồng nghĩa thời điểm kết thúc đã rõ",
        "Nguồn lực không thay thế đặc trưng mục tiêu và thời gian"
      ],
      "correct": 3,
      "explanation": "Slide 20 nêu nhiều đặc trưng đồng thời, gồm mục tiêu riêng, start/end time và adequate resources.",
      "slides": [
        20
      ],
      "id": "SLIDE-SPM-125"
    },
    {
      "part": 1,
      "sourceId": "SPM-126",
      "sourceType": "slides",
      "question": "Tập nguồn lực nào phù hợp với danh sách trong bài?",
      "options": [
        "Chỉ mã nguồn, giao diện, lịch họp và hợp đồng",
        "Chỉ nhân lực, văn phòng, thương hiệu và doanh thu",
        "Thời gian, nhân lực, tài chính, vật liệu, kho tri thức",
        "Chỉ khách hàng, người dùng, test và feedback"
      ],
      "correct": 2,
      "explanation": "Project cần adequate resources về time, manpower, finance, material và knowledge-bank.",
      "slides": [
        20
      ],
      "id": "SLIDE-SPM-126"
    },
    {
      "part": 1,
      "sourceId": "SPM-127",
      "sourceType": "slides",
      "question": "Hoạt động nào phù hợp hơn với khái niệm project được mô tả?",
      "options": [
        "Công việc có mục tiêu riêng và thời gian xác định",
        "Vận hành mỗi ngày không có mục tiêu kết thúc",
        "Tác vụ thường nhật lặp lại vô thời hạn",
        "Một bộ phận lâu dài không có thời điểm đóng"
      ],
      "correct": 0,
      "explanation": "Project khác routine activity hoặc day-to-day operations và có start, end.",
      "slides": [
        20
      ],
      "id": "SLIDE-SPM-127"
    },
    {
      "part": 1,
      "sourceId": "SPM-128",
      "sourceType": "slides",
      "question": "Phạm vi Software Project trong định nghĩa của bài kéo dài từ đâu đến đâu?",
      "options": [
        "Thu thập yêu cầu đến kiểm thử và bảo trì",
        "Chỉ gồm họp scope và phân công nhóm",
        "Chỉ gồm cài đặt và đào tạo người dùng",
        "Chỉ bắt đầu từ viết mã đến biên dịch"
      ],
      "correct": 0,
      "explanation": "Định nghĩa bao quát complete procedure từ requirement gathering đến testing and maintenance.",
      "slides": [
        20
      ],
      "id": "SLIDE-SPM-128"
    },
    {
      "part": 1,
      "sourceId": "SPM-131",
      "sourceType": "slides",
      "question": "Định nghĩa Software Project có nhắc execution methodologies. Điều kiện nào phản ánh đầy đủ việc phát triển thay vì chỉ liệt kê các công đoạn?",
      "options": [
        "Chỉ có phương pháp, không cần sản phẩm dự kiến hay giới hạn thời gian",
        "Chỉ liệt kê yêu cầu và kiểm thử, không cần phương pháp hay thời gian",
        "Chỉ có thời gian, không cần phương pháp hay mục tiêu sản phẩm",
        "Thực hiện theo phương pháp trong thời gian xác định để đạt sản phẩm dự kiến"
      ],
      "correct": 3,
      "explanation": "Slide 20 liên kết procedure, methodologies, specified period và intended software product.",
      "slides": [
        20
      ],
      "id": "SLIDE-SPM-131"
    },
    {
      "part": 1,
      "sourceId": "SPM-132",
      "sourceType": "slides",
      "question": "Formal risk management đề cập tập rủi ro nào của dự án?",
      "options": [
        "Mười rủi ro hàng đầu",
        "Mười tài liệu về đào tạo",
        "Mười chức năng đã cài đặt",
        "Mười thành viên đông kinh nghiệm"
      ],
      "correct": 0,
      "explanation": "Slide 21 yêu cầu nhận diện top ten risks for this project.",
      "slides": [
        21
      ],
      "id": "SLIDE-SPM-132"
    },
    {
      "part": 1,
      "sourceId": "SPM-133",
      "sourceType": "slides",
      "question": "Với mỗi rủi ro trong Formal risk management, cần xem xét hai yếu tố nào?",
      "options": [
        "Thời gian họp và độ dài tài liệu",
        "Số người dùng và tên biểu mẫu",
        "Khả năng xảy ra và tác động nếu xảy ra",
        "Tên customer và vị trí tổ chức"
      ],
      "correct": 2,
      "explanation": "Bài nêu chance that the risk will become và impact if it does.",
      "slides": [
        21
      ],
      "id": "SLIDE-SPM-133"
    },
    {
      "part": 1,
      "sourceId": "SPM-134",
      "sourceType": "slides",
      "question": "Ước lượng thực nghiệm chi phí và lịch cần thông tin nào về ứng dụng?",
      "options": [
        "Kích thước ước tính hiện tại của ứng dụng",
        "Số team có cấu trúc chung trong dự án",
        "Số defects hiện đang đóng của ứng dụng",
        "Vị trí tổ chức của người phụ trách"
      ],
      "correct": 0,
      "explanation": "Slide liên hệ empirical estimation với current estimated size of the application software.",
      "slides": [
        21
      ],
      "id": "SLIDE-SPM-134"
    },
    {
      "part": 1,
      "sourceId": "SPM-135",
      "sourceType": "slides",
      "question": "Quản lý dự án dựa trên metric nhằm mục đích gì?",
      "options": [
        "Cảnh báo sớm các vấn đề đang phát triển",
        "Thay thế mọi yêu cầu của khách hàng",
        "Chỉ xác định cấu trúc của software team",
        "Chỉ ghi lại các vấn đề sau phát hành"
      ],
      "correct": 0,
      "explanation": "Metrics program cung cấp early indication of evolving problems.",
      "slides": [
        21
      ],
      "id": "SLIDE-SPM-135"
    },
    {
      "part": 1,
      "sourceId": "SPM-136",
      "sourceType": "slides",
      "question": "Earned value được theo dõi theo chu kỳ nào?",
      "options": [
        "Sau mỗi lần nhập liệu",
        "Hằng tháng",
        "Hằng giờ",
        "Hằng năm"
      ],
      "correct": 1,
      "explanation": "Slide 21 đề cập monthly earned value metrics.",
      "slides": [
        21
      ],
      "id": "SLIDE-SPM-136"
    },
    {
      "part": 1,
      "sourceId": "SPM-137",
      "sourceType": "slides",
      "question": "Theo dõi khuyết tật cần ghi các trạng thái nào?",
      "options": [
        "Chỉ defects chưa từng được báo cáo",
        "Chỉ tên người dùng đã phát hiện",
        "Đang mở và đã đóng",
        "Chỉ defects của dự án trước"
      ],
      "correct": 2,
      "explanation": "Bài yêu cầu track and report defects found và số defects currently closed/open.",
      "slides": [
        21
      ],
      "id": "SLIDE-SPM-137"
    },
    {
      "part": 1,
      "sourceId": "SPM-138",
      "sourceType": "slides",
      "question": "Quản lý chú trọng con người theo dõi chỉ số nhân sự nào?",
      "options": [
        "Nỗ lực phát triển ước lượng cho tháng tới",
        "Số nhiệm vụ hoàn thành ba tháng gần nhất",
        "Turnover trung bình ba tháng gần nhất",
        "Số người được phân công trong tháng gần nhất"
      ],
      "correct": 2,
      "explanation": "Slide nêu average staff turnover for the past three months.",
      "slides": [
        21
      ],
      "id": "SLIDE-SPM-138"
    },
    {
      "part": 1,
      "sourceId": "SPM-140",
      "sourceType": "slides",
      "question": "Báo cáo có earned value hằng tháng và turnover ba tháng nhưng không có kích thước ước tính hiện tại. Critical practice nào thiếu dữ liệu trực tiếp được nêu?",
      "options": [
        "Defect tracking against quality targets",
        "Earned value tracking",
        "Empirical cost and schedule estimation",
        "People-aware program management"
      ],
      "correct": 2,
      "explanation": "Slide 21 gắn current estimated size với empirical cost and schedule estimation; hai practice kia đã có dữ liệu.",
      "slides": [
        21
      ],
      "id": "SLIDE-SPM-140"
    },
    {
      "part": 1,
      "sourceId": "SPM-141",
      "sourceType": "slides",
      "question": "Báo cáo defects đã có số tìm thấy, số mở và số đóng nhưng không có dữ liệu thực thi kiểm thử từ lúc khởi đầu. Theo slide 21, còn thiếu gì?",
      "options": [
        "Theo dõi thực thi kiểm thử từ khi chương trình bắt đầu",
        "Chỉ số lượt turnover của từng supplier/developer",
        "Chỉ kích thước ước tính hiện tại của ứng dụng",
        "Chỉ số lượng biểu diễn ứng dụng do Engineering tạo"
      ],
      "correct": 0,
      "explanation": "Slide 21 liệt kê execution test from program inception cùng defect counts và open/closed status.",
      "slides": [
        21
      ],
      "id": "SLIDE-SPM-141"
    },
    {
      "part": 1,
      "sourceId": "SPM-142",
      "sourceType": "slides",
      "question": "Một nhóm ghi tên mười rủi ro hàng đầu nhưng không xem khả năng và tác động. Practice nào chưa được thực hiện đầy đủ?",
      "options": [
        "Earned value tracking",
        "Formal risk management",
        "People-aware program management",
        "Customer communication"
      ],
      "correct": 1,
      "explanation": "Formal risk management không chỉ liệt kê top ten risks mà còn xem chance và impact.",
      "slides": [
        21
      ],
      "id": "SLIDE-SPM-142"
    },
    {
      "part": 1,
      "sourceId": "SPM-143",
      "sourceType": "slides",
      "question": "Hai suppliers có tỷ lệ turnover ba tháng khác nhau nhưng báo cáo chỉ giữ một mức chung. Thông tin nào không còn được phản ánh đúng theo People-aware management?",
      "options": [
        "Danh sách vai trò của người dùng sau bàn giao",
        "Turnover riêng của từng đơn vị tham gia",
        "Các đối tượng dữ liệu vào/ra của ứng dụng",
        "Những biểu diễn ứng dụng khách hàng đánh giá"
      ],
      "correct": 1,
      "explanation": "Slide 21 yêu cầu average staff turnover for each supplier/developer, không chỉ một mức gộp.",
      "slides": [
        21
      ],
      "id": "SLIDE-SPM-143"
    },
    {
      "part": 1,
      "sourceId": "SPM-156",
      "sourceType": "slides",
      "question": "Khách hàng đã xác định yêu cầu, nhưng technical manager còn cần thúc đẩy nhóm phát huy năng lực. Ghép nào đúng với việc thứ hai?",
      "options": [
        "End-user sử dụng Context",
        "Senior manager sử dụng Information objectives",
        "Project manager sử dụng Motivation",
        "Customer sử dụng Engineering"
      ],
      "correct": 2,
      "explanation": "Project manager phải motivate practitioners; Motivation là năng lực thúc đẩy họ làm việc tốt nhất.",
      "slides": [
        6,
        7
      ],
      "id": "SLIDE-SPM-156"
    },
    {
      "part": 1,
      "sourceId": "SPM-157",
      "sourceType": "slides",
      "question": "Trưởng nhóm khuyến khích sáng tạo, nhưng nhóm thiếu tin tưởng nhau. Kết luận nào phù hợp với bài?",
      "options": [
        "Trust chỉ là nhiệm vụ của customers",
        "Trust chỉ cần khi không có giới hạn sản phẩm",
        "Innovation chưa thay thế điều kiện trust của team hiệu suất cao",
        "Innovation làm cho trust không còn cần thiết"
      ],
      "correct": 2,
      "explanation": "Slide 7 nêu innovation là năng lực leader; slide 9 vẫn yêu cầu thành viên trust nhau để có high-performance team.",
      "slides": [
        7,
        9
      ],
      "id": "SLIDE-SPM-157"
    },
    {
      "part": 1,
      "sourceId": "SPM-158",
      "sourceType": "slides",
      "question": "Một dự án đã có t teams với cấu trúc chung. Dữ kiện này tự nó chưa bảo đảm điều kiện nào của high-performance team?",
      "options": [
        "Mỗi team được giao nhiệm vụ chức năng",
        "Team và manager cùng phối hợp",
        "Kỹ năng phù hợp với bài toán",
        "Mọi team có cấu trúc được xác định"
      ],
      "correct": 2,
      "explanation": "Cấu trúc ở slide 8 không khẳng định distribution of skills phù hợp với problem như slide 9 yêu cầu.",
      "slides": [
        8,
        9
      ],
      "id": "SLIDE-SPM-158"
    },
    {
      "part": 1,
      "sourceId": "SPM-159",
      "sourceType": "slides",
      "question": "Trao đổi về đầu vào, đầu ra và ràng buộc hệ thống lớn phục vụ hoạt động và mục đích nào?",
      "options": [
        "Customer communication để làm rõ scope",
        "Risk analysis để tạo monthly earned value",
        "Construction and release để tính turnover",
        "Customer evaluation để tổ chức t teams"
      ],
      "correct": 0,
      "explanation": "Customer communication thu thập yêu cầu; input, output và context là các câu hỏi xác định scope.",
      "slides": [
        10,
        12
      ],
      "id": "SLIDE-SPM-159"
    },
    {
      "part": 1,
      "sourceId": "SPM-160",
      "sourceType": "slides",
      "question": "Khi lập statement of scope, bước nào bảo đảm các bên cùng xem xét?",
      "options": [
        "Review statement of scope với all concerned",
        "Chỉ kiểm thử các chức năng đã lập trình",
        "Bỏ phần context để giảm độ dài tài liệu",
        "Thay scope bằng danh sách leader ad hoc"
      ],
      "correct": 0,
      "explanation": "Slide 14 yêu cầu review scope với tất cả bên liên quan, sau khi cùng xây dựng statement.",
      "slides": [
        10,
        14
      ],
      "id": "SLIDE-SPM-160"
    },
    {
      "part": 1,
      "sourceId": "SPM-161",
      "sourceType": "slides",
      "question": "Dự án chọn Incremental model và cần lập nguồn lực, timelines. Phân biệt nào đúng?",
      "options": [
        "Incremental là activity; Planning là model",
        "Cả hai là vai trò của project players",
        "Cả hai là information objectives",
        "Incremental là model; Planning là activity"
      ],
      "correct": 3,
      "explanation": "Slide 11 liệt kê Incremental model; slide 12 xác định Planning là hoạt động framework về nguồn lực và timelines.",
      "slides": [
        11,
        12
      ],
      "id": "SLIDE-SPM-161"
    },
    {
      "part": 1,
      "sourceId": "SPM-162",
      "sourceType": "slides",
      "question": "Formal meeting tạo mini-specs về data, function, behavior thuộc phân rã hoạt động nào?",
      "options": [
        "Construction and release",
        "Customer communication",
        "Risk analysis",
        "Customer evaluation"
      ],
      "correct": 1,
      "explanation": "Slide 15 mang tiêu đề phân rã customer communication; mini-specs phục vụ làm rõ yêu cầu và scope.",
      "slides": [
        12,
        15
      ],
      "id": "SLIDE-SPM-162"
    },
    {
      "part": 1,
      "sourceId": "SPM-163",
      "sourceType": "slides",
      "question": "Lập mini-specs và so sánh lịch kế hoạch/thực tế sau dự án thuộc hai nội dung nào?",
      "options": [
        "Customer communication và Postmortem analysis",
        "Engineering và Maintain momentum",
        "Customer evaluation và Start on the right foot",
        "Risk analysis và Make smart decisions"
      ],
      "correct": 0,
      "explanation": "Mini-specs thuộc chuỗi customer communication; so sánh schedules nằm trong postmortem.",
      "slides": [
        15,
        18
      ],
      "id": "SLIDE-SPM-163"
    },
    {
      "part": 1,
      "sourceId": "SPM-164",
      "sourceType": "slides",
      "question": "Hoạt động nào giúp rút và ghi lại lessons learned cho dự án sau?",
      "options": [
        "Information objectives",
        "Informal team assignment",
        "Construction and release",
        "Postmortem analysis"
      ],
      "correct": 3,
      "explanation": "Postmortem thiết lập cơ chế rút lessons learned, đánh giá dữ liệu và ghi findings bằng văn bản.",
      "slides": [
        16,
        18
      ],
      "id": "SLIDE-SPM-164"
    },
    {
      "part": 1,
      "sourceId": "SPM-165",
      "sourceType": "slides",
      "question": "Để vừa giữ momentum vừa theo dõi biến động nhân sự, cặp hành động nào phù hợp?",
      "options": [
        "Bỏ chất lượng từng task và xem số mini-specs đã lập",
        "Chỉ tăng số tasks và xem số customer-visible outputs",
        "Thay nhân sự hằng tháng và xem lịch họp formal meeting",
        "Dùng incentives giảm turnover và xem turnover trung bình ba tháng"
      ],
      "correct": 3,
      "explanation": "Slide 17 yêu cầu giảm personnel turnover; slide 21 theo dõi average staff turnover trong ba tháng.",
      "slides": [
        17,
        21
      ],
      "id": "SLIDE-SPM-165"
    },
    {
      "part": 1,
      "sourceId": "SPM-166",
      "sourceType": "slides",
      "question": "Đã có số liệu sản phẩm và quy trình để đo tiến độ. Practice nào dùng số liệu để cảnh báo sớm vấn đề?",
      "options": [
        "People-aware program management",
        "Formal meeting preparation",
        "Metric-based project management",
        "Customer communication"
      ],
      "correct": 2,
      "explanation": "Slide 18 cho phép measures để assess progress; slide 21 dùng metrics program để early indication of evolving problems.",
      "slides": [
        18,
        21
      ],
      "id": "SLIDE-SPM-166"
    },
    {
      "part": 1,
      "sourceId": "SPM-167",
      "sourceType": "slides",
      "question": "Dự án đã xác định thời gian, nhân lực và tài chính. Theo W5HH, cần hỏi gì để lượng hóa nhu cầu?",
      "options": [
        "Where",
        "Who",
        "Why",
        "How much"
      ],
      "correct": 3,
      "explanation": "Slide 20 liệt kê resources cần thiết; How much hỏi lượng mỗi resource cần dùng.",
      "slides": [
        19,
        20
      ],
      "id": "SLIDE-SPM-167"
    },
    {
      "part": 1,
      "sourceId": "SPM-168",
      "sourceType": "slides",
      "question": "Dự án chưa rõ thời điểm bắt đầu và kết thúc. Câu hỏi W5HH nào làm rõ thời gian?",
      "options": [
        "Who",
        "How much",
        "When",
        "Where"
      ],
      "correct": 2,
      "explanation": "Project có start và end time; When trong W5HH hỏi thời điểm công việc sẽ hoàn thành.",
      "slides": [
        19,
        20
      ],
      "id": "SLIDE-SPM-168"
    },
    {
      "part": 1,
      "sourceId": "SPM-170",
      "sourceType": "slides",
      "question": "Ngoài phân tích rủi ro kỹ thuật/quản lý, Formal risk management cần những thông tin nào?",
      "options": [
        "Số người cùng làm việc trong các informal teams",
        "Chỉ đầu vào và đầu ra của từng chức năng phần mềm",
        "Top ten risks cùng khả năng và tác động của chúng",
        "Chỉ vị trí của các project managers trong tổ chức"
      ],
      "correct": 2,
      "explanation": "Risk analysis xét technical và management risks; Formal risk management nêu top ten risks, chance và impact.",
      "slides": [
        12,
        21
      ],
      "id": "SLIDE-SPM-170"
    },
    {
      "part": 2,
      "question": "Đo lường phần mềm hỗ trợ các mục tiêu nào?",
      "options": [
        "Ước lượng, chất lượng, năng suất và bảo đảm không có thay đổi",
        "Ước lượng, chất lượng, năng suất và kiểm soát dự án",
        "Ước lượng, chất lượng, năng suất và loại bỏ mọi rủi ro",
        "Ước lượng, chất lượng, năng suất và thay thế phân tích yêu cầu"
      ],
      "correct": 1,
      "explanation": "Slide 25 nêu bốn mục tiêu hỗ trợ của đo lường phần mềm.",
      "slides": [
        25
      ],
      "sourceId": "SPM-171",
      "sourceType": "slides",
      "id": "SLIDE-SPM-171"
    },
    {
      "part": 2,
      "question": "Measure là gì?",
      "options": [
        "Quy trình phân tích xu hướng và rút ra kết luận",
        "Hành động xác định một đại lượng định lượng",
        "Chỉ báo định lượng về một thuộc tính",
        "Tổ hợp các metric tạo hiểu biết về tình trạng dự án"
      ],
      "correct": 2,
      "explanation": "Measure cung cấp chỉ báo định lượng về mức độ, lượng, kích thước hoặc thuộc tính tương tự.",
      "slides": [
        27
      ],
      "sourceId": "SPM-179",
      "sourceType": "slides",
      "id": "SLIDE-SPM-179"
    },
    {
      "part": 2,
      "question": "Measurement khác measure thế nào?",
      "options": [
        "Measurement là tên khác của mọi chỉ báo quản lý",
        "Measurement chỉ được dùng cho chi phí dự án",
        "Measurement là hành động xác định một measure",
        "Measurement luôn là tổ hợp nhiều metric"
      ],
      "correct": 2,
      "explanation": "Slide 27 phân biệt hành động đo với đại lượng đo được.",
      "slides": [
        27
      ],
      "sourceId": "SPM-180",
      "sourceType": "slides",
      "id": "SLIDE-SPM-180"
    },
    {
      "part": 2,
      "question": "Metric định lượng điều gì?",
      "options": [
        "Cách tổ chức công việc giữa các thành viên dự án",
        "Quy trình xác định nguồn lực trước khi lập kế hoạch",
        "Trình tự thực hiện các hoạt động xác định phép đo",
        "Mức độ sở hữu một thuộc tính"
      ],
      "correct": 3,
      "explanation": "Metric đo định lượng mức độ sở hữu một thuộc tính của hệ thống, thành phần hoặc quá trình.",
      "slides": [
        27
      ],
      "sourceId": "SPM-181",
      "sourceType": "slides",
      "id": "SLIDE-SPM-181"
    },
    {
      "part": 2,
      "question": "Indicator là gì?",
      "options": [
        "Mọi số đếm riêng lẻ, dù không cho hiểu biết về đối tượng",
        "Metric hoặc tổ hợp metric cung cấp hiểu biết",
        "Chỉ nhận xét chủ quan, không thể dùng metric định lượng",
        "Chỉ phép đo kích thước và không được phối hợp metric"
      ],
      "correct": 1,
      "explanation": "Indicator cung cấp insight và có thể là một metric hoặc kết hợp nhiều metric.",
      "slides": [
        27
      ],
      "sourceId": "SPM-183",
      "sourceType": "slides",
      "id": "SLIDE-SPM-183"
    },
    {
      "part": 2,
      "question": "Năm đặc trưng miền thông tin của FP là gì?",
      "options": [
        "Inquiries, files, thời hạn, rủi ro và kiểm thử",
        "Inputs, thiết kế, lỗi, chi phí và độ tin cậy",
        "Inputs, outputs, mã nguồn, nhân sự và ngân sách",
        "Inputs, outputs, inquiries, files và external interfaces"
      ],
      "correct": 3,
      "explanation": "Slide 33 liệt kê đúng năm loại miền thông tin này.",
      "slides": [
        33
      ],
      "sourceId": "SPM-208",
      "sourceType": "slides",
      "id": "SLIDE-SPM-208"
    },
    {
      "part": 2,
      "question": "Đặc điểm nào xác định user inquiry?",
      "options": [
        "Input trực tuyến tạo output tức thời",
        "Báo cáo định kỳ được xuất cho người dùng vào cuối tháng",
        "Input chỉ cập nhật dữ liệu mà không tạo phản hồi tức thời",
        "Giao diện máy đọc được truyền dữ liệu sang hệ thống khác"
      ],
      "correct": 0,
      "explanation": "Slide 35 định nghĩa inquiry bằng on-line input và immediate on-line output.",
      "slides": [
        35
      ],
      "sourceId": "SPM-214",
      "sourceType": "slides",
      "id": "SLIDE-SPM-214"
    },
    {
      "part": 2,
      "question": "Công thức FP nào được trình bày trong bài giảng?",
      "options": [
        "FP = count total ÷ [0.65 + 0.01 × ΣFi]",
        "FP = count total + [0.65 + 0.01 × ΣFi]",
        "FP = count total × [0.65 + 0.01 × ΣFi]",
        "FP = count total × [1 + 0.65 × ΣFi]"
      ],
      "correct": 2,
      "explanation": "Slide 36 cho FP bằng count total nhân hệ số 0.65 + 0.01ΣFi.",
      "slides": [
        36
      ],
      "sourceId": "SPM-220",
      "sourceType": "slides",
      "id": "SLIDE-SPM-220"
    },
    {
      "part": 2,
      "question": "Nếu count total = 100 và ΣFi = 35, FP bằng bao nhiêu?",
      "options": [
        "135",
        "65",
        "35",
        "100"
      ],
      "correct": 3,
      "explanation": "Hệ số = 0.65 + 0.01×35 = 1; FP = 100.",
      "slides": [
        36
      ],
      "sourceId": "SPM-223",
      "sourceType": "slides",
      "id": "SLIDE-SPM-223"
    },
    {
      "part": 2,
      "question": "Chất lượng hệ thống phụ thuộc những sản phẩm công việc nào?",
      "options": [
        "Bảng rủi ro, phiếu rủi ro, mốc, danh mục nguồn lực",
        "Phạm vi, ước lượng nỗ lực, phân công, lịch trình",
        "Ngày bắt đầu, ngày kết thúc, đơn vị công, nhân lực",
        "Đặc tả yêu cầu, thiết kế, mã nguồn, ca kiểm thử"
      ],
      "correct": 3,
      "explanation": "Slide 40 liên hệ chất lượng với yêu cầu, thiết kế, mã và tests.",
      "slides": [
        40
      ],
      "sourceId": "SPM-239",
      "sourceType": "slides",
      "id": "SLIDE-SPM-239"
    },
    {
      "part": 2,
      "question": "Correctness thể hiện điều gì?",
      "options": [
        "Thân thiện với người dùng khi học hệ thống",
        "Chống chịu tấn công cố ý hoặc vô tình",
        "Thực hiện chức năng được yêu cầu",
        "Dễ sửa đổi khi khách hàng thay đổi yêu cầu"
      ],
      "correct": 2,
      "explanation": "Slide 41 định nghĩa correctness bằng mức độ phần mềm thực hiện required function.",
      "slides": [
        41
      ],
      "sourceId": "SPM-243",
      "sourceType": "slides",
      "id": "SLIDE-SPM-243"
    },
    {
      "part": 2,
      "question": "MTTC là loại metric thiên về đại lượng nào?",
      "options": [
        "Số trường dữ liệu trong báo cáo",
        "Thời gian thực hiện thay đổi",
        "Xác suất xuất hiện một cuộc tấn công",
        "Trọng số của giao diện ngoài"
      ],
      "correct": 1,
      "explanation": "MTTC là mean-time-to-change, một metric time-oriented.",
      "slides": [
        41
      ],
      "sourceId": "SPM-247",
      "sourceType": "slides",
      "id": "SLIDE-SPM-247"
    },
    {
      "part": 2,
      "question": "Usability lượng hóa điều gì?",
      "options": [
        "Mức độ chính xác của chi phí thiết bị",
        "Mức độ thân thiện với người dùng",
        "Mức độ phức tạp của mọi tệp vật lý",
        "Mức độ ổn định của cơ cấu quản lý"
      ],
      "correct": 1,
      "explanation": "Slide 44 mô tả usability là attempt to quantify user-friendliness.",
      "slides": [
        44
      ],
      "sourceId": "SPM-260",
      "sourceType": "slides",
      "id": "SLIDE-SPM-260"
    },
    {
      "part": 2,
      "question": "Có 90 lỗi được phát hiện trước bàn giao và 10 defects sau bàn giao. DRE bằng bao nhiêu?",
      "options": [
        "0.9",
        "0.1",
        "1.1",
        "9"
      ],
      "correct": 0,
      "explanation": "DRE = 90/(90+10) = 0.9.",
      "slides": [
        46
      ],
      "sourceId": "SPM-273",
      "sourceType": "slides",
      "id": "SLIDE-SPM-273"
    },
    {
      "part": 3,
      "question": "Lập kế hoạch giúp quản lý ước lượng những nội dung nào?",
      "options": [
        "Chỉ thời gian kiểm thử, bỏ qua các công việc khác",
        "Chỉ nỗ lực lập trình, bỏ qua tài nguyên và chi phí",
        "Chỉ chi phí mua công cụ, bỏ qua nỗ lực và thời gian",
        "Nguồn lực, chi phí và lịch trình"
      ],
      "correct": 3,
      "explanation": "Slide 48 nêu reasonable estimates of resources, cost, schedule.",
      "slides": [
        48
      ],
      "sourceId": "SPM-283",
      "sourceType": "slides",
      "id": "SLIDE-SPM-283"
    },
    {
      "part": 3,
      "question": "Ước lượng thời gian dự án bao phủ khoảng nào?",
      "options": [
        "Chỉ thời gian khách hàng đọc hướng dẫn",
        "Chỉ thời gian chạy một chương trình",
        "Chỉ thời gian họp khởi động",
        "Từ lúc bắt đầu đến lúc kết thúc dự án"
      ],
      "correct": 3,
      "explanation": "Slide 48 nêu time that will elapse from start to finish.",
      "slides": [
        48
      ],
      "sourceId": "SPM-286",
      "sourceType": "slides",
      "id": "SLIDE-SPM-286"
    },
    {
      "part": 3,
      "question": "Phạm vi phần mềm mô tả những nội dung nào?",
      "options": [
        "Dữ liệu/điều khiển, chức năng, hiệu năng, ràng buộc, giao diện, độ tin cậy",
        "Nhiệm vụ, mốc, sản phẩm bàn giao, ngày bắt đầu, ngày kết thúc, đơn vị công",
        "Mô tả, sẵn có, lúc cần, thời lượng dùng, người cung cấp, chi phí mua",
        "Nhân lực, vị trí tổ chức, chuyên môn, kinh nghiệm, kỹ năng, thời lượng"
      ],
      "correct": 0,
      "explanation": "Slide 49 mô tả đầy đủ các khía cạnh của software scope.",
      "slides": [
        49
      ],
      "sourceId": "SPM-288",
      "sourceType": "slides",
      "id": "SLIDE-SPM-288"
    },
    {
      "part": 3,
      "question": "Câu hỏi “Ai sử dụng giải pháp?” giúp làm rõ nội dung nào?",
      "options": [
        "Phạm vi phần mềm",
        "Nỗ lực phát triển",
        "Nguồn lực môi trường",
        "Hiệu quả lọc lỗi"
      ],
      "correct": 0,
      "explanation": "Slide 49 đưa câu hỏi này vào Obtaining Information of Software Scope.",
      "slides": [
        49
      ],
      "sourceId": "SPM-289",
      "sourceType": "slides",
      "id": "SLIDE-SPM-289"
    },
    {
      "part": 3,
      "question": "Câu hỏi nào làm rõ giá trị kinh tế của giải pháp?",
      "options": [
        "Giải pháp thành công mang lại lợi ích kinh tế gì?",
        "Có nguồn khác cung cấp giải pháp hay không?",
        "Ai sẽ sử dụng giải pháp sau khi phát triển?",
        "Ai đứng sau yêu cầu thực hiện công việc này?"
      ],
      "correct": 0,
      "explanation": "Slide 49 hỏi economic benefit of a successful solution.",
      "slides": [
        49
      ],
      "sourceId": "SPM-290",
      "sourceType": "slides",
      "id": "SLIDE-SPM-290"
    },
    {
      "part": 3,
      "question": "“Ai đứng sau yêu cầu công việc?” tìm hiểu điều gì?",
      "options": [
        "Đo thời gian trung bình sửa lỗi",
        "Tính xác suất đẩy lùi tấn công",
        "Làm rõ nguồn khởi xướng yêu cầu",
        "Xác định số dòng mã phải viết"
      ],
      "correct": 2,
      "explanation": "Slide 49 dùng câu hỏi who is behind the request để thu thập scope information.",
      "slides": [
        49
      ],
      "sourceId": "SPM-291",
      "sourceType": "slides",
      "id": "SLIDE-SPM-291"
    },
    {
      "part": 3,
      "question": "Câu hỏi nào giúp tìm hiểu nguồn giải pháp thay thế?",
      "options": [
        "Có bao nhiêu màn hình cần kiểm thử hôm nay?",
        "Có bao nhiêu files vật lý trên máy phát triển?",
        "Có bao nhiêu lỗi được đếm trên KLOC?",
        "Có nguồn khác cung cấp giải pháp không?"
      ],
      "correct": 3,
      "explanation": "Slide 49 hỏi Is there another source for the solution?",
      "slides": [
        49
      ],
      "sourceId": "SPM-292",
      "sourceType": "slides",
      "id": "SLIDE-SPM-292"
    },
    {
      "part": 3,
      "question": "Đánh giá tính khả thi được thực hiện sau bước nào?",
      "options": [
        "Sau khi đã hiểu phạm vi",
        "Sau khi đã bỏ mọi ràng buộc",
        "Sau khi đã kết thúc toàn bộ dự án",
        "Sau khi mọi nhân viên rời nhóm"
      ],
      "correct": 0,
      "explanation": "Slide 49 nêu Once scope is understood, nhóm xác định có thực hiện được hay không.",
      "slides": [
        49
      ],
      "sourceId": "SPM-293",
      "sourceType": "slides",
      "id": "SLIDE-SPM-293"
    },
    {
      "part": 3,
      "question": "Đánh giá tính khả thi tập trung vào điều gì?",
      "options": [
        "Chỉ lập danh sách đầu ra mà không xét ràng buộc khác",
        "Chỉ xác định nhóm sẽ sử dụng công cụ phát triển nào",
        "Khẳng định mọi yêu cầu đều khả thi trước khi hiểu phạm vi",
        "Khả năng thực hiện trong phạm vi đã hiểu"
      ],
      "correct": 3,
      "explanation": "Feasibility kiểm tra can be done within the dimensions just noted.",
      "slides": [
        49
      ],
      "sourceId": "SPM-294",
      "sourceType": "slides",
      "id": "SLIDE-SPM-294"
    },
    {
      "part": 3,
      "question": "Nhiệm vụ lập kế hoạch phần mềm thứ hai là gì?",
      "options": [
        "Ước lượng nguồn lực phát triển",
        "Đánh giá defects sau bàn giao cho người dùng cuối",
        "Đánh giá thái độ người dùng khi đã sử dụng hiệu quả",
        "Tính hiệu quả lọc lỗi xuyên suốt các hoạt động quá trình"
      ],
      "correct": 0,
      "explanation": "Slide 50 gọi resource estimation là second software planning task.",
      "slides": [
        50
      ],
      "sourceId": "SPM-295",
      "sourceType": "slides",
      "id": "SLIDE-SPM-295"
    },
    {
      "part": 3,
      "question": "Công cụ phát triển và cấu phần tích hợp lại thuộc các nhóm nguồn lực nào?",
      "options": [
        "Cả hai đều chỉ là công cụ vì cùng được gọi là phần mềm",
        "Cả hai đều thuộc nhân lực vì cùng cần người thực hiện",
        "Một thuộc công cụ môi trường, một thuộc cấu phần tái sử dụng",
        "Một thuộc chuyên môn nhân lực, một thuộc vị trí tổ chức"
      ],
      "correct": 2,
      "explanation": "Hình phân biệt software tools với reusable software components dù cả hai cùng là phần mềm.",
      "slides": [
        50
      ],
      "sourceId": "SPM-298",
      "sourceType": "slides",
      "id": "SLIDE-SPM-298"
    },
    {
      "part": 3,
      "question": "Trong hồ sơ nguồn lực, “máy chủ A” là đặc trưng nào?",
      "options": [
        "Mô tả nguồn lực",
        "Thời lượng áp dụng",
        "Thời điểm cần dùng",
        "Tình trạng sẵn có"
      ],
      "correct": 0,
      "explanation": "“Máy chủ A” mô tả nguồn lực; tình trạng sẵn có, lúc cần và thời lượng dùng là các đặc trưng khác.",
      "slides": [
        51
      ],
      "sourceId": "SPM-302",
      "sourceType": "slides",
      "id": "SLIDE-SPM-302"
    },
    {
      "part": 3,
      "question": "Bốn đặc trưng cần xác định cho mỗi nguồn lực là gì?",
      "options": [
        "Mô tả, lúc cần, thời lượng dùng và số trường báo cáo",
        "Sẵn có, lúc cần, thời lượng dùng và mức độ thân thiện",
        "Mô tả, sẵn có, lúc cần và thời lượng dùng",
        "Mô tả, sẵn có, lúc cần và số defects sau bàn giao"
      ],
      "correct": 2,
      "explanation": "Bốn đặc trưng là description, availability, time required và duration applied.",
      "slides": [
        51
      ],
      "sourceId": "SPM-303",
      "sourceType": "slides",
      "id": "SLIDE-SPM-303"
    },
    {
      "part": 3,
      "question": "“Cần máy chủ từ đầu tháng 6” thể hiện đặc trưng nào?",
      "options": [
        "Mức kỹ năng của người dùng cuối",
        "Mô tả độ tin cậy của phần mềm",
        "Thời điểm nguồn lực được yêu cầu",
        "Khoảng thời gian nguồn lực được sử dụng"
      ],
      "correct": 2,
      "explanation": "Time when resource will be required xác định lúc bắt đầu cần.",
      "slides": [
        51
      ],
      "sourceId": "SPM-305",
      "sourceType": "slides",
      "id": "SLIDE-SPM-305"
    },
    {
      "part": 3,
      "question": "“Dùng công cụ trong ba tháng” thể hiện đặc trưng nào?",
      "options": [
        "Thời điểm cần bắt đầu sử dụng nguồn lực",
        "Thời lượng sử dụng nguồn lực",
        "Mô tả loại công cụ được lựa chọn cho dự án",
        "Tình trạng có thể sử dụng nguồn lực hay không"
      ],
      "correct": 1,
      "explanation": "Duration of time resource will be applied thể hiện thời lượng sử dụng.",
      "slides": [
        51
      ],
      "sourceId": "SPM-306",
      "sourceType": "slides",
      "id": "SLIDE-SPM-306"
    },
    {
      "part": 3,
      "question": "Lập kế hoạch nhân lực bắt đầu bằng việc gì?",
      "options": [
        "Chỉ xác nhận thiết bị và bỏ qua kỹ năng thành viên",
        "Xét phạm vi và chọn kỹ năng cần thiết",
        "Chọn số người trước khi ước lượng nỗ lực phát triển",
        "Chọn chức danh cao nhất mà không xét chuyên môn"
      ],
      "correct": 1,
      "explanation": "Slide 52 nêu evaluating scope and selecting skills required.",
      "slides": [
        52
      ],
      "sourceId": "SPM-309",
      "sourceType": "slides",
      "id": "SLIDE-SPM-309"
    },
    {
      "part": 3,
      "question": "Nhân lực cần được đặc tả theo hai khía cạnh nào?",
      "options": [
        "Tình trạng sẵn có và chi phí mua",
        "Thời điểm cần và thời lượng dùng",
        "Quy mô sản phẩm và độ phức tạp",
        "Vị trí tổ chức và chuyên môn"
      ],
      "correct": 3,
      "explanation": "Slide 52 yêu cầu organizational position và specialty.",
      "slides": [
        52
      ],
      "sourceId": "SPM-310",
      "sourceType": "slides",
      "id": "SLIDE-SPM-310"
    },
    {
      "part": 3,
      "question": "Dự án nhỏ có thể tổ chức người thực hiện thế nào?",
      "options": [
        "Luôn cần một nhóm chuyên biệt cho từng nhiệm vụ",
        "Một người làm các nhiệm vụ, tham vấn chuyên gia khi cần",
        "Không cần tham vấn dù thiếu kỹ năng chuyên môn",
        "Một người chỉ được quản lý và không được làm kỹ thuật"
      ],
      "correct": 1,
      "explanation": "Slide 52 cho phép single individual perform all tasks, consulting specialists as required.",
      "slides": [
        52
      ],
      "sourceId": "SPM-313",
      "sourceType": "slides",
      "id": "SLIDE-SPM-313"
    },
    {
      "part": 3,
      "question": "Có bao nhiêu nhóm nguồn lực phần mềm tái sử dụng?",
      "options": [
        "Ba",
        "Hai",
        "Bốn",
        "Năm"
      ],
      "correct": 2,
      "explanation": "Bài giảng nêu four software resource categories.",
      "slides": [
        53
      ],
      "sourceId": "SPM-316",
      "sourceType": "slides",
      "id": "SLIDE-SPM-316"
    },
    {
      "part": 3,
      "question": "Full-experience components có đặc điểm gì?",
      "options": [
        "Phải viết hoàn toàn mới và không được tái sử dụng",
        "Chỉ là công cụ phần cứng mà nhóm từng mua",
        "Tương tự phần mềm hiện tại và nhóm có đầy đủ kinh nghiệm trong miền ứng dụng",
        "Không liên quan phần mềm hiện tại và nhóm chưa biết miền ứng dụng"
      ],
      "correct": 2,
      "explanation": "Slide 53 nêu similarity và full experience in application area.",
      "slides": [
        53
      ],
      "sourceId": "SPM-319",
      "sourceType": "slides",
      "id": "SLIDE-SPM-319"
    },
    {
      "part": 3,
      "question": "Tài sản full-experience có thể gồm những gì?",
      "options": [
        "Chỉ dữ liệu kiểm thử, không tính mã và thiết kế cũ",
        "Chỉ mã nguồn, không tính các đặc tả và thiết kế cũ",
        "Chỉ thiết kế, không tính các đặc tả và dữ liệu kiểm thử",
        "Đặc tả, thiết kế, mã và dữ liệu kiểm thử"
      ],
      "correct": 3,
      "explanation": "Slide 53 liệt kê specifications, designs, code, test data.",
      "slides": [
        53
      ],
      "sourceId": "SPM-320",
      "sourceType": "slides",
      "id": "SLIDE-SPM-320"
    },
    {
      "part": 3,
      "question": "Full-experience và partial-experience khác nhau theo tiêu chí nào?",
      "options": [
        "Kinh nghiệm miền ứng dụng và mức sửa đổi cần thiết",
        "Chỉ công cụ dùng để tạo tài sản, không cần xét sửa đổi",
        "Chỉ số thành viên của nhóm, không cần xem miền ứng dụng",
        "Chỉ nơi lưu tài sản cũ, không cần xem kinh nghiệm nhóm"
      ],
      "correct": 0,
      "explanation": "Slides 53–54 đối chiếu full/limited experience và similar/related requiring substantial modification.",
      "slides": [
        53,
        54
      ],
      "sourceId": "SPM-322",
      "sourceType": "slides",
      "id": "SLIDE-SPM-322"
    },
    {
      "part": 3,
      "question": "Tài sản cũ cần sửa nhiều, nhóm ít kinh nghiệm miền ứng dụng thuộc loại nào?",
      "options": [
        "Partial-experience components",
        "Human resources",
        "New components",
        "Full-experience components"
      ],
      "correct": 0,
      "explanation": "Tình huống khớp mô tả partial-experience trên slide 54.",
      "slides": [
        54
      ],
      "sourceId": "SPM-325",
      "sourceType": "slides",
      "id": "SLIDE-SPM-325"
    },
    {
      "part": 3,
      "question": "New components là gì?",
      "options": [
        "Phần mềm hiện có có thể mua từ một nhà cung cấp bên thứ ba",
        "Thành phần liên quan cần sửa nhiều mà nhóm chỉ có kinh nghiệm hạn chế",
        "Thành phần phải xây riêng cho dự án hiện tại",
        "Thành phần từ dự án tương tự mà nhóm đã có đầy đủ kinh nghiệm"
      ],
      "correct": 2,
      "explanation": "Slide 54 định nghĩa must be built specifically for needs of current project.",
      "slides": [
        54
      ],
      "sourceId": "SPM-326",
      "sourceType": "slides",
      "id": "SLIDE-SPM-326"
    },
    {
      "part": 3,
      "question": "Nguồn lực môi trường cần xác định hai thông tin nào?",
      "options": [
        "Chỉ thời điểm sử dụng, không cần xác nhận sẵn có",
        "Chỉ phần cứng cần thiết, không phải xem xét phần mềm",
        "Chỉ danh sách tên thiết bị, bỏ qua thời điểm sử dụng",
        "Khoảng thời gian cần và khả năng sẵn có"
      ],
      "correct": 3,
      "explanation": "Slide 55 yêu cầu prescribe time window và verify availability.",
      "slides": [
        55
      ],
      "sourceId": "SPM-331",
      "sourceType": "slides",
      "id": "SLIDE-SPM-331"
    },
    {
      "part": 3,
      "question": "Những nhóm biến nào ảnh hưởng chi phí và nỗ lực phần mềm?",
      "options": [
        "Chỉ môi trường và chính trị, bỏ qua con người cùng kỹ thuật",
        "Chỉ kỹ thuật và môi trường, bỏ qua con người cùng chính trị",
        "Con người, kỹ thuật, môi trường và chính trị",
        "Chỉ con người và kỹ thuật, bỏ qua môi trường cùng chính trị"
      ],
      "correct": 2,
      "explanation": "Slide 56 liệt kê human, technical, environmental, political variables.",
      "slides": [
        56
      ],
      "sourceId": "SPM-337",
      "sourceType": "slides",
      "id": "SLIDE-SPM-337"
    },
    {
      "part": 3,
      "question": "Cơ sở lịch sử nào được đề xuất để ước lượng?",
      "options": [
        "Chỉ các dự án không liên quan miền ứng dụng",
        "Mọi dự án chưa xác định phạm vi",
        "Chỉ kế hoạch chưa từng được triển khai",
        "Các dự án tương tự đã hoàn thành"
      ],
      "correct": 3,
      "explanation": "Slide 56 đề xuất base estimates on similar completed projects.",
      "slides": [
        56
      ],
      "sourceId": "SPM-338",
      "sourceType": "slides",
      "id": "SLIDE-SPM-338"
    },
    {
      "part": 3,
      "question": "Có thể dùng loại mô hình nào để ước lượng chi phí và nỗ lực?",
      "options": [
        "Chỉ metric thái độ người dùng đối với hệ thống",
        "Chỉ bảng đếm lỗi trước và sau bàn giao phần mềm",
        "Một hoặc nhiều mô hình thực nghiệm",
        "Chỉ công thức xác suất tấn công và đẩy lùi tấn công"
      ],
      "correct": 2,
      "explanation": "Slide 56 đề xuất one or more empirical models.",
      "slides": [
        56
      ],
      "sourceId": "SPM-340",
      "sourceType": "slides",
      "id": "SLIDE-SPM-340"
    },
    {
      "part": 3,
      "question": "Phân rã để ước lượng dựa trên cách tiếp cận nào?",
      "options": [
        "Chỉ chọn công cụ tự động",
        "Chia để trị",
        "Tính tất cả như một khối không phân biệt",
        "Chỉ chờ dự án hoàn thành"
      ],
      "correct": 1,
      "explanation": "Slide 57 mô tả divide and conquer.",
      "slides": [
        57
      ],
      "sourceId": "SPM-344",
      "sourceType": "slides",
      "id": "SLIDE-SPM-344"
    },
    {
      "part": 3,
      "question": "Phân rã để ước lượng tách dự án theo những nội dung nào?",
      "options": [
        "Chỉ thời điểm họp, không xét hoạt động kỹ nghệ phần mềm",
        "Chức năng chính và hoạt động liên quan",
        "Chỉ chức danh trong nhóm, không xét chức năng sản phẩm",
        "Chỉ thiết bị sẵn có, không xét công việc phải thực hiện"
      ],
      "correct": 1,
      "explanation": "Slide 57 nêu major functions and related software engineering activities.",
      "slides": [
        57
      ],
      "sourceId": "SPM-345",
      "sourceType": "slides",
      "id": "SLIDE-SPM-345"
    },
    {
      "part": 3,
      "question": "Hai hướng ước lượng gắn với phân rã là gì?",
      "options": [
        "Dựa trên MTTC và DRE",
        "Dựa trên LOC và FP",
        "Dựa trên correctness và integrity",
        "Dựa trên threat và security"
      ],
      "correct": 1,
      "explanation": "Slide 57 ghi LOC-based, FP-based estimation.",
      "slides": [
        57
      ],
      "sourceId": "SPM-347",
      "sourceType": "slides",
      "id": "SLIDE-SPM-347"
    },
    {
      "part": 3,
      "question": "Trong phân nhóm kỹ thuật ở slide 57, COCOMO là ví dụ cho nhóm nào?",
      "options": [
        "Phân loại thành phần tái sử dụng",
        "Mô hình thực nghiệm",
        "Kỹ thuật phân rã dựa trên FP",
        "Kỹ thuật phân rã dựa trên LOC"
      ],
      "correct": 1,
      "explanation": "Slide 57 đặt COCOMO Model trong empirical estimation models.",
      "slides": [
        57
      ],
      "sourceId": "SPM-348",
      "sourceType": "slides",
      "id": "SLIDE-SPM-348"
    },
    {
      "part": 3,
      "question": "Công cụ ước lượng tự động triển khai các kỹ thuật nào?",
      "options": [
        "Chỉ kiểm tra khả năng sẵn có của các công cụ môi trường",
        "Kỹ thuật phân rã hoặc mô hình thực nghiệm",
        "Chỉ phân loại kinh nghiệm nhóm đối với thành phần tái sử dụng",
        "Chỉ bảng đặc tả nguồn lực với bốn đặc trưng cần thiết"
      ],
      "correct": 1,
      "explanation": "Slide 57 nêu automated tools implement decomposition techniques or empirical models.",
      "slides": [
        57
      ],
      "sourceId": "SPM-350",
      "sourceType": "slides",
      "id": "SLIDE-SPM-350"
    },
    {
      "part": 4,
      "question": "Rủi ro nào đe dọa kế hoạch dự án?",
      "options": [
        "Rủi ro kỹ thuật",
        "Rủi ro kinh doanh",
        "Rủi ro thiết kế",
        "Rủi ro dự án"
      ],
      "correct": 3,
      "explanation": "Rủi ro dự án đe dọa kế hoạch và có thể làm trễ lịch, tăng chi phí.",
      "slides": [
        60
      ],
      "sourceId": "SPM-355",
      "sourceType": "slides",
      "id": "SLIDE-SPM-355"
    },
    {
      "part": 4,
      "question": "Khó triển khai giao diện, đe dọa chất lượng thuộc loại rủi ro nào?",
      "options": [
        "Rủi ro ngân sách",
        "Rủi ro khách hàng",
        "Rủi ro kinh doanh",
        "Rủi ro kỹ thuật"
      ],
      "correct": 3,
      "explanation": "Slide xếp vấn đề giao diện và triển khai vào rủi ro kỹ thuật.",
      "slides": [
        60
      ],
      "sourceId": "SPM-357",
      "sourceType": "slides",
      "id": "SLIDE-SPM-357"
    },
    {
      "part": 4,
      "question": "Rủi ro kinh doanh đe dọa điều gì?",
      "options": [
        "Khả năng tồn tại của phần mềm sẽ xây dựng",
        "Khả năng tuân thủ đặc tả giao diện phần mềm",
        "Khả năng đáp ứng lịch triển khai phần mềm",
        "Khả năng phân bổ nhân lực phát triển phần mềm"
      ],
      "correct": 0,
      "explanation": "Slide định nghĩa business risks là đe dọa viability của phần mềm.",
      "slides": [
        60
      ],
      "sourceId": "SPM-358",
      "sourceType": "slides",
      "id": "SLIDE-SPM-358"
    },
    {
      "part": 4,
      "question": "Rủi ro kỹ thuật có thể gây hệ quả nào đối với triển khai?",
      "options": [
        "Chỉ làm thay đổi quy mô thị trường dự kiến",
        "Chỉ thay đổi mức tải nguồn lực của kế hoạch",
        "Việc triển khai khó khăn hoặc không thể thực hiện",
        "Chỉ phát sinh bất đồng lịch họp khách hàng"
      ],
      "correct": 2,
      "explanation": "Slide nêu implementation có thể trở nên difficult or impossible.",
      "slides": [
        60
      ],
      "sourceId": "SPM-359",
      "sourceType": "slides",
      "id": "SLIDE-SPM-359"
    },
    {
      "part": 4,
      "question": "Nhận diện rủi ro nhằm mục đích gì?",
      "options": [
        "Xếp mức xác suất và hậu quả cho từng rủi ro",
        "Tinh chỉnh điều kiện thành các điều kiện con",
        "Xác định có hệ thống các đe dọa đối với kế hoạch",
        "Chuẩn bị chi phí và lịch trình cho dự phòng"
      ],
      "correct": 2,
      "explanation": "Risk identification là systematic attempt to specify threats to the project plan.",
      "slides": [
        61
      ],
      "sourceId": "SPM-361",
      "sourceType": "slides",
      "id": "SLIDE-SPM-361"
    },
    {
      "part": 4,
      "question": "Rủi ro do tổng kích thước phần mềm thuộc mục checklist nào?",
      "options": [
        "Môi trường phát triển",
        "Định nghĩa quy trình",
        "Đặc điểm khách hàng",
        "Quy mô sản phẩm"
      ],
      "correct": 3,
      "explanation": "Product size xét rủi ro gắn với quy mô toàn bộ phần mềm xây dựng hoặc sửa đổi.",
      "slides": [
        61
      ],
      "sourceId": "SPM-362",
      "sourceType": "slides",
      "id": "SLIDE-SPM-362"
    },
    {
      "part": 4,
      "question": "Ràng buộc quản lý vì thị trường thuộc mục checklist nào?",
      "options": [
        "Môi trường phát triển",
        "Công nghệ xây dựng",
        "Quy mô nhân sự",
        "Ảnh hưởng kinh doanh"
      ],
      "correct": 3,
      "explanation": "Business impact xét các ràng buộc quản lý đặt ra cho thị trường.",
      "slides": [
        61
      ],
      "sourceId": "SPM-363",
      "sourceType": "slides",
      "id": "SLIDE-SPM-363"
    },
    {
      "part": 4,
      "question": "Khó giao tiếp kịp thời với khách hàng thuộc mục checklist nào?",
      "options": [
        "Quy mô sản phẩm",
        "Đặc điểm khách hàng",
        "Định nghĩa quy trình",
        "Kinh nghiệm nhân viên"
      ],
      "correct": 1,
      "explanation": "Customer characteristics xét mức độ hiểu biết và khả năng giao tiếp kịp thời.",
      "slides": [
        61
      ],
      "sourceId": "SPM-364",
      "sourceType": "slides",
      "id": "SLIDE-SPM-364"
    },
    {
      "part": 4,
      "question": "Tổ chức không tuân theo quy trình đã mô tả thuộc mục checklist nào?",
      "options": [
        "Quy mô sản phẩm",
        "Đặc điểm khách hàng",
        "Định nghĩa quy trình",
        "Ảnh hưởng kinh doanh"
      ],
      "correct": 2,
      "explanation": "Process definition xét cả mức độ định nghĩa và tuân thủ quy trình.",
      "slides": [
        62
      ],
      "sourceId": "SPM-365",
      "sourceType": "slides",
      "id": "SLIDE-SPM-365"
    },
    {
      "part": 4,
      "question": "Công cụ phát triển có chất lượng thấp thuộc mục checklist nào?",
      "options": [
        "Môi trường phát triển",
        "Đặc điểm khách hàng",
        "Quy mô sản phẩm",
        "Công nghệ xây dựng"
      ],
      "correct": 0,
      "explanation": "Development environment xét tính sẵn có và chất lượng của công cụ.",
      "slides": [
        62
      ],
      "sourceId": "SPM-366",
      "sourceType": "slides",
      "id": "SLIDE-SPM-366"
    },
    {
      "part": 4,
      "question": "Công nghệ mới và phức tạp thuộc mục checklist nào?",
      "options": [
        "Đặc điểm khách hàng",
        "Công nghệ xây dựng",
        "Ảnh hưởng kinh doanh",
        "Định nghĩa quy trình"
      ],
      "correct": 1,
      "explanation": "Technology to be built xét độ phức tạp và tính mới của công nghệ.",
      "slides": [
        62
      ],
      "sourceId": "SPM-367",
      "sourceType": "slides",
      "id": "SLIDE-SPM-367"
    },
    {
      "part": 4,
      "question": "Kinh nghiệm kỹ thuật của kỹ sư được xét trong mục checklist nào?",
      "options": [
        "Môi trường công cụ phát triển",
        "Mức độ hiểu biết khách hàng",
        "Quy mô và kinh nghiệm nhân viên",
        "Các ràng buộc của thị trường"
      ],
      "correct": 2,
      "explanation": "Staff size and experience xét kinh nghiệm kỹ thuật và dự án của người làm việc.",
      "slides": [
        62
      ],
      "sourceId": "SPM-368",
      "sourceType": "slides",
      "id": "SLIDE-SPM-368"
    },
    {
      "part": 4,
      "question": "Có thể bỏ qua rủi ro chỉ vì xác suất thấp không?",
      "options": [
        "Không, vì mọi rủi ro đều chắc chắn xảy ra",
        "Không, còn phải xem hậu quả của nó",
        "Có, xác suất thấp đồng nghĩa không tổn thất",
        "Có, hậu quả chỉ xét khi đã xảy ra"
      ],
      "correct": 1,
      "explanation": "Slide yêu cầu đánh giá cả xác suất lẫn hậu quả, không chỉ một chiều.",
      "slides": [
        63
      ],
      "sourceId": "SPM-372",
      "sourceType": "slides",
      "id": "SLIDE-SPM-372"
    },
    {
      "part": 4,
      "question": "Vì sao không thể cho rằng số Impact càng lớn thì hậu quả càng nặng?",
      "options": [
        "Thang gộp xác suất với tác động thành một mức số duy nhất",
        "Chú giải đặt 1 là thảm họa và 4 là không đáng kể",
        "Thang ghi 1 là không đáng kể còn 4 là hậu quả thảm họa",
        "Thang chỉ so sánh tác động khi hai rủi ro có cùng xác suất"
      ],
      "correct": 1,
      "explanation": "Thang tác động trong hình không tăng độ nghiêm trọng theo trị số.",
      "slides": [
        64
      ],
      "sourceId": "SPM-383",
      "sourceType": "slides",
      "id": "SLIDE-SPM-383"
    },
    {
      "part": 4,
      "question": "Tinh chỉnh rủi ro nhằm mục đích gì?",
      "options": [
        "Chuyển mọi rủi ro thành sự kiện chắc chắn",
        "Xóa rủi ro có tác động cao khỏi kế hoạch",
        "Thay xác suất bằng số nhiệm vụ dự án",
        "Chia rủi ro thành các rủi ro chi tiết hơn"
      ],
      "correct": 3,
      "explanation": "Slide mô tả refinement là refine risk into a set of more detailed risks.",
      "slides": [
        65
      ],
      "sourceId": "SPM-384",
      "sourceType": "slides",
      "id": "SLIDE-SPM-384"
    },
    {
      "part": 4,
      "question": "CTC liên kết những thành phần nào?",
      "options": [
        "Khách hàng, nhóm, hợp đồng",
        "Chi phí, thời gian, chất lượng",
        "Điều kiện, chuyển tiếp, hậu quả",
        "Mã nguồn, kiểm thử, cấu hình"
      ],
      "correct": 2,
      "explanation": "CTC viết tắt condition-transition-consequence.",
      "slides": [
        65
      ],
      "sourceId": "SPM-385",
      "sourceType": "slides",
      "id": "SLIDE-SPM-385"
    },
    {
      "part": 4,
      "question": "Trong tinh chỉnh CTC, thành phần nào được phân rã thành điều kiện con?",
      "options": [
        "Người được giao",
        "Cột trạng thái",
        "Điều kiện",
        "Ngày tạo hồ sơ"
      ],
      "correct": 2,
      "explanation": "Slide nói condition được refined thành subcondition 1, 2, 3,...",
      "slides": [
        65
      ],
      "sourceId": "SPM-387",
      "sourceType": "slides",
      "id": "SLIDE-SPM-387"
    },
    {
      "part": 4,
      "question": "Khi cấu phần dự kiến tái sử dụng không tích hợp được, chức năng còn lại cần làm gì?",
      "options": [
        "Phải phát triển riêng",
        "Được xem là đã hoàn thành",
        "Tự động chuyển cho khách hàng",
        "Bỏ khỏi ứng dụng"
      ],
      "correct": 0,
      "explanation": "Phiếu ghi remaining functionality will have to be custom developed.",
      "slides": [
        66
      ],
      "sourceId": "SPM-389",
      "sourceType": "slides",
      "id": "SLIDE-SPM-389"
    },
    {
      "part": 4,
      "question": "Biện pháp nào giảm rủi ro bên thứ ba không biết chuẩn thiết kế nội bộ?",
      "options": [
        "Liên hệ bên thứ ba để kiểm tra tuân thủ chuẩn thiết kế",
        "Điều chỉnh lịch xây thêm 18 cấu phần riêng",
        "Thúc đẩy hoàn tất chuẩn giao diện cấu phần",
        "Kiểm tra khả năng bổ sung hỗ trợ ngôn ngữ"
      ],
      "correct": 0,
      "explanation": "Mitigation 1 yêu cầu contact third party to determine conformance with design standards.",
      "slides": [
        66
      ],
      "sourceId": "SPM-394",
      "sourceType": "slides",
      "id": "SLIDE-SPM-394"
    },
    {
      "part": 4,
      "question": "Rủi ro ngôn ngữ không được hỗ trợ cần kiểm tra những gì?",
      "options": [
        "Đếm cấu phần liên quan và thúc đẩy hoàn tất chuẩn giao diện",
        "Đếm cấu phần liên quan và cập nhật tên người nhận rủi ro",
        "Số cấu phần liên quan và khả năng có hỗ trợ ngôn ngữ",
        "Đếm cấu phần liên quan và hỏi chuẩn nội bộ của bên thứ ba"
      ],
      "correct": 2,
      "explanation": "Mitigation 3 đếm cấu phần ở subcondition 3 và kiểm tra khả năng acquire language support.",
      "slides": [
        66
      ],
      "sourceId": "SPM-395",
      "sourceType": "slides",
      "id": "SLIDE-SPM-395"
    },
    {
      "part": 4,
      "question": "Dự phòng thiếu cấu phần tái sử dụng cần điều chỉnh lịch theo giả định nào?",
      "options": [
        "Coi các cấu phần chưa tích hợp là đã hoàn thành",
        "Phải tự xây thêm các cấu phần còn thiếu",
        "Loại bỏ các chức năng mà khách hàng đã yêu cầu",
        "Giữ nguyên lịch và không điều chỉnh nhân lực"
      ],
      "correct": 1,
      "explanation": "Kế hoạch dự phòng giả định phải tự xây thêm cấu phần, điều chỉnh lịch và phân bổ nhân lực tương ứng.",
      "slides": [
        66
      ],
      "sourceId": "SPM-397",
      "sourceType": "slides",
      "id": "SLIDE-SPM-397"
    },
    {
      "part": 4,
      "question": "Điều gì kích hoạt dự phòng trong phiếu rủi ro?",
      "options": [
        "Các bước giảm thiểu không hiệu quả đến thời điểm quy định",
        "Đã ghi nhận mô tả rủi ro trong phiếu thông tin",
        "Các bước giảm thiểu đã được bắt đầu theo kế hoạch",
        "Đã xác định được người khởi tạo phiếu rủi ro"
      ],
      "correct": 0,
      "explanation": "Phiếu ghi kích hoạt dự phòng khi các bước giảm thiểu không hiệu quả tính đến thời điểm được quy định.",
      "slides": [
        66
      ],
      "sourceId": "SPM-398",
      "sourceType": "slides",
      "id": "SLIDE-SPM-398"
    },
    {
      "part": 5,
      "question": "Lịch tổng thể được phát triển thành dạng nào?",
      "options": [
        "Báo cáo tài chính",
        "Chuẩn thiết kế",
        "Danh sách rủi ro",
        "Lịch chi tiết"
      ],
      "correct": 3,
      "explanation": "Slide nêu macroscopic schedule được refined thành detailed schedule.",
      "slides": [
        68
      ],
      "sourceId": "SPM-402",
      "sourceType": "slides",
      "id": "SLIDE-SPM-402"
    },
    {
      "part": 5,
      "question": "Các nhiệm vụ chồng thời gian cần kiểm tra giới hạn nhân lực nào?",
      "options": [
        "Tổng số nhiệm vụ phải bằng tổng số người được cấp",
        "Mọi nhiệm vụ phải có cùng thời lượng và ngày bắt đầu",
        "Mọi nhiệm vụ phải do cùng một thành viên thực hiện",
        "Không vượt số người được phân bổ tại cùng thời điểm"
      ],
      "correct": 3,
      "explanation": "Slide 68 phân bổ effort; slide 75 effort validation yêu cầu không vượt allocated staff ở bất kỳ thời điểm nào.",
      "slides": [
        68,
        75
      ],
      "sourceId": "SPM-404",
      "sourceType": "slides",
      "id": "SLIDE-SPM-404"
    },
    {
      "part": 5,
      "question": "Task network biểu diễn điều gì?",
      "options": [
        "Danh sách thiết bị theo giá mua",
        "Luồng nhiệm vụ của dự án bằng đồ họa",
        "Chất lượng sản phẩm bằng một công thức",
        "Quyền truy cập người dùng theo tài khoản"
      ],
      "correct": 1,
      "explanation": "Task network là graphic representation of task flow.",
      "slides": [
        69
      ],
      "sourceId": "SPM-406",
      "sourceType": "slides",
      "id": "SLIDE-SPM-406"
    },
    {
      "part": 5,
      "question": "Hai phương pháp lập lịch được nêu là gì?",
      "options": [
        "LOC và FP",
        "PERT và CPM",
        "CTC và RMMM",
        "SQA và SEE"
      ],
      "correct": 1,
      "explanation": "Slide liệt kê Program evaluation and review technique và critical path method.",
      "slides": [
        71
      ],
      "sourceId": "SPM-417",
      "sourceType": "slides",
      "id": "SLIDE-SPM-417"
    },
    {
      "part": 5,
      "question": "Đường găng là gì?",
      "options": [
        "Nhóm nhiệm vụ có mọi ngày bắt đầu giống nhau",
        "Nhóm nhiệm vụ chỉ do quản lý cấp cao làm",
        "Chuỗi nhiệm vụ quyết định thời lượng dự án",
        "Chuỗi nhiệm vụ dùng nhiều tài liệu nhất"
      ],
      "correct": 2,
      "explanation": "Critical path là chain of tasks that determines duration of project.",
      "slides": [
        71
      ],
      "sourceId": "SPM-419",
      "sourceType": "slides",
      "id": "SLIDE-SPM-419"
    },
    {
      "part": 5,
      "question": "Ngoài phân rã chức năng, lập lịch cần chọn những gì?",
      "options": [
        "Thang tác động và danh mục rủi ro",
        "Mô hình quy trình và tập nhiệm vụ",
        "Các tiêu chí và báo cáo kiểm toán",
        "Thang Fi và trọng số miền thông tin"
      ],
      "correct": 1,
      "explanation": "Slide ghi selection of appropriate process model and task set.",
      "slides": [
        71
      ],
      "sourceId": "SPM-421",
      "sourceType": "slides",
      "id": "SLIDE-SPM-421"
    },
    {
      "part": 5,
      "question": "Mô hình thống kê giúp ước lượng loại thời gian nào của nhiệm vụ?",
      "options": [
        "Thời gian phát sinh tổn thất nếu rủi ro thành hiện thực",
        "Thời gian hoàn thành thực tế của việc đã kết thúc",
        "Thời gian có khả năng nhất của từng nhiệm vụ",
        "Thời gian kiểm toán để xác nhận tuân thủ chuẩn"
      ],
      "correct": 2,
      "explanation": "Slide nêu establish most likely time estimates for individual task applying statistical models.",
      "slides": [
        71
      ],
      "sourceId": "SPM-422",
      "sourceType": "slides",
      "id": "SLIDE-SPM-422"
    },
    {
      "part": 5,
      "question": "Boundary times xác định điều gì?",
      "options": [
        "Cửa sổ thời gian cho một nhiệm vụ",
        "Ngân sách mua công cụ cho toàn tổ chức",
        "Mức tác động của mỗi rủi ro kỹ thuật",
        "Số chức năng cần hủy khỏi sản phẩm"
      ],
      "correct": 0,
      "explanation": "Slide định nghĩa boundary times là thời điểm giới hạn một time window cho task.",
      "slides": [
        71
      ],
      "sourceId": "SPM-423",
      "sourceType": "slides",
      "id": "SLIDE-SPM-423"
    },
    {
      "part": 5,
      "question": "Mỗi nhiệm vụ trong Gantt cần các dữ liệu nào?",
      "options": [
        "Kỹ năng, thái độ và mức tăng năng suất",
        "Xác suất, mức tác động và mã rủi ro",
        "Số lỗi, số khuyết tật và kích thước mã",
        "Nỗ lực, thời lượng và ngày bắt đầu"
      ],
      "correct": 3,
      "explanation": "Slide ghi effort, duration, and start date input for each task.",
      "slides": [
        72
      ],
      "sourceId": "SPM-427",
      "sourceType": "slides",
      "id": "SLIDE-SPM-427"
    },
    {
      "part": 5,
      "question": "Bảng dự án lưu các ngày nào để theo dõi tiến độ?",
      "options": [
        "Chỉ ngày bắt đầu dự kiến và đơn vị công ước lượng",
        "Ngày bắt đầu và kết thúc dự kiến cùng thực tế",
        "Chỉ ngày hoàn thành dự kiến và mô tả đầu ra nhiệm vụ",
        "Chỉ ngày bắt đầu thực tế và danh sách người phụ trách"
      ],
      "correct": 1,
      "explanation": "Project Table liệt kê nhiệm vụ cùng planned and actual start- and end-dates.",
      "slides": [
        73
      ],
      "sourceId": "SPM-429",
      "sourceType": "slides",
      "id": "SLIDE-SPM-429"
    },
    {
      "part": 5,
      "question": "Mỗi thành viên báo cáo gì trong họp trạng thái dự án?",
      "options": [
        "Tiến độ và vấn đề gặp phải",
        "Chỉ số người dùng cuối",
        "Chỉ tên các nhiệm vụ tương lai",
        "Chỉ chi phí mua máy tính"
      ],
      "correct": 0,
      "explanation": "Slide nêu each team member reports progress and problems.",
      "slides": [
        74
      ],
      "sourceId": "SPM-431",
      "sourceType": "slides",
      "id": "SLIDE-SPM-431"
    },
    {
      "part": 5,
      "question": "Theo dõi mốc dự án cần kiểm tra điều gì?",
      "options": [
        "Mốc có đạt được đúng ngày dự kiến không?",
        "Mốc có tên ngắn hơn các nhiệm vụ không?",
        "Mốc có được tất cả khách hàng đánh số không?",
        "Mốc có dùng cùng biểu tượng với rủi ro không?"
      ],
      "correct": 0,
      "explanation": "Slide yêu cầu determine whether milestones accomplished by scheduled date.",
      "slides": [
        74
      ],
      "sourceId": "SPM-433",
      "sourceType": "slides",
      "id": "SLIDE-SPM-433"
    },
    {
      "part": 5,
      "question": "Theo dõi lịch đối chiếu ngày bắt đầu theo cặp nào?",
      "options": [
        "Ngày bắt đầu thực tế với ngày bắt đầu dự kiến",
        "Nỗ lực ước lượng và tổng chức năng sản phẩm",
        "Xác suất dự kiến và mức tác động của rủi ro",
        "Chuẩn áp dụng và nội dung mô tả quy trình"
      ],
      "correct": 0,
      "explanation": "Slide nêu comparing actual start-date to planned start-date for each task.",
      "slides": [
        74
      ],
      "sourceId": "SPM-434",
      "sourceType": "slides",
      "id": "SLIDE-SPM-434"
    },
    {
      "part": 5,
      "question": "Trao đổi không chính thức với kỹ sư giúp thu được thông tin nào?",
      "options": [
        "Các ước lượng thời gian có khả năng nhất từ mô hình",
        "Các mốc chính thức đã hoàn thành đúng ngày dự kiến",
        "Các ngày bắt đầu thực tế ghi trong bảng nhiệm vụ",
        "Đánh giá chủ quan về tiến độ và vấn đề sắp tới"
      ],
      "correct": 3,
      "explanation": "Slide nêu subjective assessment of progress to date and problems on the horizon.",
      "slides": [
        74
      ],
      "sourceId": "SPM-435",
      "sourceType": "slides",
      "id": "SLIDE-SPM-435"
    },
    {
      "part": 5,
      "question": "Compartmentalization yêu cầu điều gì?",
      "options": [
        "Chia kết quả review theo các tiêu chí chất lượng đã định",
        "Chia nhân sự theo các ngày bắt đầu và kết thúc công việc",
        "Chia nỗ lực theo cửa sổ thời gian của nhiệm vụ được chọn",
        "Phân rã sản phẩm và quy trình thành việc quản lý được"
      ],
      "correct": 3,
      "explanation": "Slide mô tả manageable activities and tasks; both product and process decomposed.",
      "slides": [
        75
      ],
      "sourceId": "SPM-437",
      "sourceType": "slides",
      "id": "SLIDE-SPM-437"
    },
    {
      "part": 5,
      "question": "Interdependency yêu cầu nhận biết điều gì?",
      "options": [
        "Số người được phân bổ và số người có mặt",
        "Nhiệm vụ nào tuần tự, nhiệm vụ nào song song",
        "Người phụ trách cùng sản phẩm bàn giao",
        "Đơn vị công cùng ngày bắt đầu và kết thúc"
      ],
      "correct": 1,
      "explanation": "Slide nêu tasks occur in sequence while others can occur in parallel.",
      "slides": [
        75
      ],
      "sourceId": "SPM-438",
      "sourceType": "slides",
      "id": "SLIDE-SPM-438"
    },
    {
      "part": 5,
      "question": "Time allocation yêu cầu mỗi nhiệm vụ có những gì?",
      "options": [
        "Người được phân công và kết quả công việc cụ thể",
        "Đơn vị công, ngày bắt đầu và ngày hoàn thành",
        "Mốc dự án và sản phẩm công việc phải bàn giao",
        "Nhiệm vụ song song và nhiệm vụ thực hiện tuần tự"
      ],
      "correct": 1,
      "explanation": "Slide quy định work units cùng start date và completion date.",
      "slides": [
        75
      ],
      "sourceId": "SPM-439",
      "sourceType": "slides",
      "id": "SLIDE-SPM-439"
    },
    {
      "part": 5,
      "question": "Xếp sáu người làm đồng thời khi chỉ có bốn người vi phạm nguyên tắc nào?",
      "options": [
        "Xác nhận nỗ lực",
        "Xác định kết quả",
        "Xác định mốc",
        "Phân rã công việc"
      ],
      "correct": 0,
      "explanation": "Effort validation đảm bảo không xếp quá số nhân sự được phân bổ tại bất kỳ thời điểm nào.",
      "slides": [
        75
      ],
      "sourceId": "SPM-440",
      "sourceType": "slides",
      "id": "SLIDE-SPM-440"
    },
    {
      "part": 5,
      "question": "Nhiệm vụ có lịch nhưng không có người phụ trách vi phạm nguyên tắc nào?",
      "options": [
        "Xác định trách nhiệm",
        "Xác định mốc",
        "Phân rã công việc",
        "Phân bổ thời gian"
      ],
      "correct": 0,
      "explanation": "Defined responsibilities yêu cầu mỗi task giao cho specific team member.",
      "slides": [
        75
      ],
      "sourceId": "SPM-441",
      "sourceType": "slides",
      "id": "SLIDE-SPM-441"
    },
    {
      "part": 5,
      "question": "Nhiệm vụ không nêu kết quả cần đạt vi phạm nguyên tắc nào?",
      "options": [
        "Phụ thuộc nhiệm vụ",
        "Xác nhận nỗ lực",
        "Xác định đầu ra",
        "Phân bổ thời gian"
      ],
      "correct": 2,
      "explanation": "Defined outcomes yêu cầu every task have a defined outcome.",
      "slides": [
        75
      ],
      "sourceId": "SPM-442",
      "sourceType": "slides",
      "id": "SLIDE-SPM-442"
    },
    {
      "part": 5,
      "question": "Nhóm nhiệm vụ chưa gắn với mốc dự án thiếu nguyên tắc nào?",
      "options": [
        "Phân bổ thời gian",
        "Xác định trách nhiệm",
        "Xác nhận nỗ lực",
        "Xác định mốc"
      ],
      "correct": 3,
      "explanation": "Defined milestones yêu cầu task hoặc group of tasks associated with project milestone.",
      "slides": [
        75
      ],
      "sourceId": "SPM-443",
      "sourceType": "slides",
      "id": "SLIDE-SPM-443"
    },
    {
      "part": 5,
      "question": "Kế hoạch dự án truyền đạt phạm vi và nguồn lực cho ai?",
      "options": [
        "Chỉ nhóm kỹ thuật, chỉ người lập lịch, người kiểm thử",
        "Quản lý phần mềm, chỉ nhóm SQA, người kiểm toán",
        "Chỉ quản lý cấp cao, chỉ người thiết kế, người bảo trì",
        "Quản lý phần mềm, nhân viên kỹ thuật và khách hàng"
      ],
      "correct": 3,
      "explanation": "Slide nêu software management, technical staff, and customer.",
      "slides": [
        76
      ],
      "sourceId": "SPM-446",
      "sourceType": "slides",
      "id": "SLIDE-SPM-446"
    },
    {
      "part": 5,
      "question": "Kế hoạch dự án cần nêu nội dung nào về rủi ro?",
      "options": [
        "Chỉ ghi điều kiện con thay cho các rủi ro của dự án",
        "Chỉ ghi các tổn thất thực tế đã phát sinh trong dự án",
        "Xác định rủi ro và đề xuất kỹ thuật tránh rủi ro",
        "Chỉ ghi xác suất mà không xác định rủi ro tương ứng"
      ],
      "correct": 2,
      "explanation": "Slide yêu cầu define risks and suggest risk aversion techniques.",
      "slides": [
        76
      ],
      "sourceId": "SPM-447",
      "sourceType": "slides",
      "id": "SLIDE-SPM-447"
    },
    {
      "part": 5,
      "question": "Chi phí và lịch trong kế hoạch được xác định để ai xem xét?",
      "options": [
        "Chỉ người dùng cuối",
        "Ban quản lý",
        "Chỉ nhà cung cấp công cụ",
        "Chỉ người tạo phiếu rủi ro"
      ],
      "correct": 1,
      "explanation": "Slide ghi define cost and schedule for management review.",
      "slides": [
        76
      ],
      "sourceId": "SPM-448",
      "sourceType": "slides",
      "id": "SLIDE-SPM-448"
    },
    {
      "part": 5,
      "question": "Kế hoạch dự án phải nêu cách xử lý chất lượng và thay đổi thế nào?",
      "options": [
        "Truyền đạt nguồn lực và các đặc tính phạm vi sản phẩm",
        "Cách bảo đảm chất lượng và quản lý thay đổi",
        "Ước lượng nỗ lực và xác định thời lượng nhiệm vụ",
        "Xác định ngày bắt đầu và kết thúc dự kiến của dự án"
      ],
      "correct": 1,
      "explanation": "Slide yêu cầu outline how quality ensured and change managed.",
      "slides": [
        76
      ],
      "sourceId": "SPM-450",
      "sourceType": "slides",
      "id": "SLIDE-SPM-450"
    },
    {
      "part": 6,
      "question": "Ai có trách nhiệm tham gia chất lượng phần mềm?",
      "options": [
        "Chỉ những người trực tiếp lập trình và kiểm thử",
        "Mọi người trong quá trình kỹ nghệ phần mềm",
        "Chỉ các quản lý nhận dữ liệu kiểm toán và báo cáo",
        "Chỉ các thành viên nhóm đảm bảo chất lượng của dự án"
      ],
      "correct": 1,
      "explanation": "Slide ghi Everyone involved in the software engineering process.",
      "slides": [
        78
      ],
      "sourceId": "SPM-453",
      "sourceType": "slides",
      "id": "SLIDE-SPM-453"
    },
    {
      "part": 6,
      "question": "Kiểm soát chất lượng gồm những hoạt động nào?",
      "options": [
        "Kiểm toán, báo cáo và cấp nguồn lực",
        "Kiểm tra, review và kiểm thử",
        "Ước lượng, lập lịch và phân công",
        "Nhận diện, ước lượng và tinh chỉnh rủi ro"
      ],
      "correct": 1,
      "explanation": "Slide liệt kê inspections, reviews, and tests throughout software process.",
      "slides": [
        80
      ],
      "sourceId": "SPM-465",
      "sourceType": "slides",
      "id": "SLIDE-SPM-465"
    },
    {
      "part": 6,
      "question": "QA gồm những chức năng quản lý nào?",
      "options": [
        "Kiểm toán và báo cáo",
        "Nhận diện và tinh chỉnh rủi ro",
        "Lập trình và biên dịch",
        "Ước lượng và lập lịch"
      ],
      "correct": 0,
      "explanation": "Slide định nghĩa QA consists of auditing and reporting functions of management.",
      "slides": [
        81
      ],
      "sourceId": "SPM-474",
      "sourceType": "slides",
      "id": "SLIDE-SPM-474"
    },
    {
      "part": 6,
      "question": "Chất lượng phần mềm gồm ba nhóm tiêu chí nào?",
      "options": [
        "Đặc tính ngầm, chi phí ước lượng, lịch nhiệm vụ dự kiến",
        "Chuẩn đã ghi chép, xác suất rủi ro, thời lượng nhiệm vụ",
        "Yêu cầu rõ, chuẩn được ghi chép và đặc tính ngầm kỳ vọng",
        "Yêu cầu rõ, ngày bắt đầu thực tế, số người được phân công"
      ],
      "correct": 2,
      "explanation": "Slide nêu explicit functional/performance requirements, documented standards, implicit characteristics.",
      "slides": [
        82
      ],
      "sourceId": "SPM-481",
      "sourceType": "slides",
      "id": "SLIDE-SPM-481"
    },
    {
      "part": 6,
      "question": "Ví dụ nào là yêu cầu ngầm đối với phần mềm?",
      "options": [
        "Số đầu vào và số đầu ra",
        "Ngày bắt đầu và ngày kết thúc",
        "Chi phí mua máy và số nhân viên",
        "Dễ dùng và dễ bảo trì"
      ],
      "correct": 3,
      "explanation": "Slide nêu implicit requirements gồm ease of use và good maintainability.",
      "slides": [
        82
      ],
      "sourceId": "SPM-486",
      "sourceType": "slides",
      "id": "SLIDE-SPM-486"
    },
    {
      "part": 6,
      "question": "Nhóm phần mềm và nhóm SQA có vai trò gì với mô tả quy trình?",
      "options": [
        "Quản lý tài chính chọn quy trình, nhóm phần mềm kiểm toán",
        "Khách hàng chọn toàn bộ, SQA chỉ ghi ngày bắt đầu",
        "SQA chọn toàn bộ, nhóm phần mềm chỉ mua công cụ",
        "Nhóm phần mềm chọn quy trình, SQA xem xét tính tuân thủ"
      ],
      "correct": 3,
      "explanation": "Slide phân biệt software team selects process và SQA reviews process description.",
      "slides": [
        83
      ],
      "sourceId": "SPM-495",
      "sourceType": "slides",
      "id": "SLIDE-SPM-495"
    },
    {
      "part": 6,
      "question": "SQA phải làm gì khi phát hiện sai lệch so với quy trình?",
      "options": [
        "Nhận diện và ghi chép nhưng chỉ khách hàng xác minh sửa",
        "Nhận diện và ghi chép rồi dừng theo dõi khi gửi báo cáo",
        "Nhận diện, ghi chép, theo dõi và xác minh đã sửa",
        "Nhận diện và sửa ngay nhưng không cần ghi chép sai lệch"
      ],
      "correct": 2,
      "explanation": "Slide yêu cầu identifies, documents, tracks deviations và verifies corrections made.",
      "slides": [
        83
      ],
      "sourceId": "SPM-497",
      "sourceType": "slides",
      "id": "SLIDE-SPM-497"
    }
  ]
};
