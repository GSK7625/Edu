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
        "Danh sách các Sprint Backlog items chưa hoàn thành",
        "Một Increment có giá trị, hữu ích và đạt Definition of Done",
        "Các bản thiết kế giao diện người dùng User Interfaces"
      ],
      "correct": 2,
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
        "Quan hệ kế thừa giữa lớp chuyên biệt và lớp tổng quát",
        "Quan hệ ngữ nghĩa cho phép liên kết giữa các instance của các lớp",
        "Quan hệ bao gồm hành vi giữa hai use case"
      ],
      "correct": 2,
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
        "CPM (Critical Path Method)",
        "FP (Function Point based Estimation)",
        "COCOMO Model (Constructive Cost Model)",
        "LOC (Line-Of-Code based Estimation)"
      ],
      "correct": 0,
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
        "Ai sẽ là người sử dụng chức năng",
        "Chức năng người dùng mong muốn là gì",
        "Mục đích của người sử dụng là gì",
        "Tất cả các đáp án"
      ],
      "correct": 3,
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
        "Họ có thể thuộc Development Team, không có vai trò Tester riêng",
        "Họ có quyền chấp nhận sản phẩm thay cho Product Owner",
        "Họ chỉ tham gia sau khi Development Team kết thúc Sprint",
        "Họ phải thuộc một đội kiểm thử tách khỏi Development Team"
      ],
      "correct": 0,
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
        "Dễ sử dụng",
        "Bảo trì được",
        "Tin cậy",
        "Chiếm ít tài nguyên hệ thống"
      ],
      "correct": 2,
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
        "Thành phần tổ hợp có giao diện xác định",
        "Tất cả các đáp án",
        "Lớp đối tượng có thuộc tính và phương thức"
      ],
      "correct": 2,
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
        "Đặc tả yêu cầu phần mềm",
        "Vận hành và bảo trì",
        "Tích hợp và kiểm thử hệ thống",
        "Thiết kế phần mềm"
      ],
      "correct": 2,
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
        "40% phân tích và thiết kế, 20% viết mã, 40% kiểm thử",
        "40% lập kế hoạch, 20% thiết kế, 40% viết mã và bảo trì",
        "40% phân tích nghiệp vụ, 20% thiết kế, 40% viết mã và kiểm thử",
        "40% phân tích yêu cầu, 20% viết mã, 40% bảo trì"
      ],
      "correct": 0,
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
        "Bất cứ khi nào Scrum Master đề nghị",
        "Bất cứ khi nào đội Scrum thấy cần",
        "Tại cuối mỗi Sprint",
        "Bất cứ khi nào Product Owner yêu cầu"
      ],
      "correct": 2,
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
        "Cả rủi ro kỹ thuật, và rủi ro quản lý",
        "Rủi ro kỹ thuật",
        "Không loại nào"
      ],
      "correct": 1,
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
        "LOC (Line of Code) và FP (Function Point)",
        "Chỉ dựa trên KLOC (Kilo Line of Code)",
        "LOC (Line of Code), Tốc độ vận hành, Kích cỡ bộ nhớ, Số khiếm khuyết phát hiện trong một khoảng thời gian nhất định",
        "Dựa trên FP (Function Point)"
      ],
      "correct": 2,
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
        "Về tính năng, độ phức tạp, chất lượng, tính hiệu quả, độ tin cậy, khả năng bảo trì được",
        "Kích cỡ phần mềm",
        "Phạm vi phần mềm",
        "Quy mô phần mềm"
      ],
      "correct": 0,
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
        "Scrum Master",
        "Product Owner",
        "Scrum Team"
      ],
      "correct": 2,
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
        "2 giờ",
        "4 giờ",
        "10 giờ",
        "5 giờ"
      ],
      "correct": 2,
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
        "Thực hiện các cuộc họp để cải tiến quy trình",
        "Tạo ra một Increment có giá trị và hữu ích mỗi Sprint",
        "Tạo ra các Product Backlog mới",
        "Giám sát và báo cáo các hoạt động của dự án"
      ],
      "correct": 1,
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
        "Theo dõi tiến độ hoàn thành của dự án",
        "Đảm bảo chất lượng sản phẩm phần mềm",
        "Giám sát rủi ro dự án"
      ],
      "correct": 1,
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
        "Trực tiếp phân công công việc mỗi ngày cho từng Developer",
        "Quyết định nội dung và thứ tự Product Backlog thay cho Product Owner",
        "Thiết lập Scrum và giúp Scrum Team cải thiện hiệu quả trong framework",
        "Phê duyệt từng thay đổi kỹ thuật trong Sprint Backlog của Developers"
      ],
      "correct": 2,
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
        "Khi quãng thời gian cho một Sprint kết thúc",
        "Khi việc kiểm thử kết thúc",
        "Khi Product Owner đề nghị"
      ],
      "correct": 1,
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
        "Sprint",
        "Daily Scrum",
        "Sắp xếp và tinh chỉnh Product Backlog"
      ],
      "correct": 3,
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
        "Một tháng theo lịch",
        "Một tuần",
        "Sáu tuần",
        "Hai tuần"
      ],
      "correct": 0,
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
        "Kiểm thử tích hợp và kiểm thử đơn vị",
        "Không đáp án nào đúng",
        "Kiểm thử đơn vị",
        "Kiểm thử tích hợp"
      ],
      "correct": 0,
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
        "What will be done, by When?",
        "Which programming language is most popular worldwide?",
        "Who is responsible for a function?"
      ],
      "correct": 2,
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
        "Process",
        "Participants",
        "Profit",
        "Plan"
      ],
      "correct": 0,
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
        "Các thành phần phần mềm dùng lại",
        "Nguồn vốn",
        "Người dùng cuối",
        "Kinh phí"
      ],
      "correct": 0,
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
        "A bao gồm các hành vi của B",
        "A kế thừa đặc điểm của B qua quan hệ generalization",
        "B mở rộng A tại extension point qua quan hệ extend"
      ],
      "correct": 1,
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
        "Có ước lượng về công sức phát triển",
        "Có ước lượng về rủi ro dự án",
        "Có ước lượng về chi phí dự án",
        "Có ước lượng về thời gian của dự án"
      ],
      "correct": 0,
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
        "Cấu trúc tĩnh của hệ thống",
        "Các chức năng và hành vi hệ thống cung cấp cho actor",
        "Kiến trúc triển khai của hệ thống"
      ],
      "correct": 2,
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
        "0,5",
        "0",
        "1",
        "0,1"
      ],
      "correct": 2,
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
        "Chỉ sau khi cài đặt phần mềm cho người dùng",
        "Xuyên suốt quá trình khi có sản phẩm và thuộc tính phù hợp để đo",
        "Chỉ trước khi phân tích yêu cầu",
        "Chỉ trước khi lập kế hoạch dự án"
      ],
      "correct": 1,
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
        "Yêu cầu; thiết kế; hiện thực và kiểm thử đơn vị; tích hợp và kiểm thử hệ thống; vận hành và bảo trì",
        "Yêu cầu; tích hợp và kiểm thử hệ thống; thiết kế; hiện thực và kiểm thử đơn vị; vận hành và bảo trì",
        "Thiết kế; yêu cầu; tích hợp và kiểm thử hệ thống; hiện thực và kiểm thử đơn vị; vận hành và bảo trì",
        "Yêu cầu; thiết kế; vận hành và bảo trì; hiện thực và kiểm thử đơn vị; tích hợp và kiểm thử hệ thống"
      ],
      "correct": 0,
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
        "Khả năng xảy ra và mức độ gây thiệt hại",
        "Thời điểm và thời lượng xảy ra"
      ],
      "correct": 2,
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
        "Các ràng buộc mà hệ thống phải tuân theo",
        "Không đáp án nào đúng",
        "Các dịch vụ mà hệ thống phải cung cấp",
        "Các dịch vụ mà hệ thống phải cung cấp và các ràng buộc mà hệ thống phải tuân theo"
      ],
      "correct": 0,
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
        "Bản ước lượng kế hoạch dự án",
        "Bản mô tả bối cảnh hệ thống tổng thể",
        "Bản thiết kế chi tiết",
        "Bản đặc tả yêu cầu phần mềm"
      ],
      "correct": 3,
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
        "Mã hóa; Kiểm thử; Bảo trì",
        "Sửa đổi; Thích nghi hóa; Nâng cấp",
        "Phân tích hệ thống; Lập kế hoạch phần mềm; Phân tích yêu cầu phần mềm",
        "Thiết kế phần mềm; Mã hóa; Kiểm thử phần mềm"
      ],
      "correct": 1,
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
        "Mã hóa; kiểm thử; bảo trì",
        "Sửa lỗi; thích nghi; nâng cấp",
        "Kỹ nghệ hệ thống/thông tin; lập kế hoạch phần mềm; phân tích yêu cầu phần mềm"
      ],
      "correct": 3,
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
        "Bản đặc tả yêu cầu phần mềm",
        "Bản mô tả hệ thống tổng thể",
        "Bản thiết kế chi tiết"
      ],
      "correct": 1,
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
        "Tính linh hoạt và không kiểm soát được",
        "Không đáp án nào đúng",
        "Tính chắc chắn và không gây thiệt hại khi xảy ra",
        "Tính không chắc chắn và gây thiệt hại khi xảy ra"
      ],
      "correct": 3,
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
        "Hành vi của hệ thống",
        "Cấu trúc tĩnh của hệ thống",
        "Thành phần kiến trúc của hệ thống"
      ],
      "correct": 1,
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
        "Một phần mềm khác có thể là một tác nhân của hệ thống",
        "Các tác nhân được phân biệt theo vai trò khi tham gia hệ thống",
        "Tác nhân của một hệ thống luôn là con người"
      ],
      "correct": 3,
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
        "Cấu trúc tĩnh của hệ thống",
        "Sự tương tác của các phần tử hệ thống theo trình tự thời gian",
        "Sự cộng tác giữa các phần tử trong hệ thống"
      ],
      "correct": 1,
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
        "Phát triển lặp và tăng trưởng",
        "Chỉ áp dụng công cụ sinh mã thế hệ thứ tư",
        "Chỉ tạo bản mẫu để trình diễn rồi ngừng phát triển",
        "Thác nước với các pha cố định thực hiện một lượt"
      ],
      "correct": 0,
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
        "Tất cả các đáp án đều đúng",
        "Con người",
        "Thành phần phần mềm dùng lại"
      ],
      "correct": 1,
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
        "Chi phí khắc phục thiệt hại khi rủi ro xảy ra",
        "Khả năng xảy ra",
        "Tên rủi ro",
        "Loại rủi ro"
      ],
      "correct": 0,
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
        "Phiên bản phần mềm cần bàn giao",
        "Mốc dự án cần đạt",
        "Xác suất một rủi ro xảy ra",
        "Nhiệm vụ kỹ nghệ phần mềm cần thực hiện"
      ],
      "correct": 2,
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
        "Lập trình hiện thực các chức năng phần mềm",
        "Xác định phạm vi và nguồn lực dự án"
      ],
      "correct": 2,
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
        "Công cụ phần mềm trong môi trường phát triển",
        "Thành phần mới cần xây dựng cho dự án hiện tại",
        "Thành phần phần mềm từ dự án quá khứ",
        "Phần mềm sẵn có từ bên thứ ba"
      ],
      "correct": 0,
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
        "Xác định xem các cột mốc dự án có đạt được theo đúng lịch biểu hay không",
        "Phân rã các nhiệm vụ và lập lịch dự án"
      ],
      "correct": 3,
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
        "Chi phí cho từng nhiệm vụ",
        "Nỗ lực phân bổ theo person-day"
      ],
      "correct": 2,
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
      "sourceId": "SPM-003",
      "sourceType": "slides",
      "id": "SLIDE-SPM-003"
    },
    {
      "part": 1,
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
      "sourceId": "SPM-004",
      "sourceType": "slides",
      "id": "SLIDE-SPM-004"
    },
    {
      "part": 1,
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
      "sourceId": "SPM-005",
      "sourceType": "slides",
      "id": "SLIDE-SPM-005"
    },
    {
      "part": 1,
      "question": "Ai xác định yêu cầu đối với phần mềm?",
      "options": [
        "Practitioners",
        "Technical managers",
        "End-users",
        "Customers"
      ],
      "correct": 3,
      "explanation": "Customers chỉ định các yêu cầu của phần mềm.",
      "slides": [
        6
      ],
      "sourceId": "SPM-006",
      "sourceType": "slides",
      "id": "SLIDE-SPM-006"
    },
    {
      "part": 1,
      "question": "Ai tương tác với phần mềm sau khi phát hành?",
      "options": [
        "End-users",
        "Practitioners",
        "Project managers",
        "Senior managers"
      ],
      "correct": 0,
      "explanation": "End-users sử dụng và tương tác với phần mềm sau khi phát hành.",
      "slides": [
        6
      ],
      "sourceId": "SPM-007",
      "sourceType": "slides",
      "id": "SLIDE-SPM-007"
    },
    {
      "part": 1,
      "question": "Năng lực Motivation của trưởng nhóm là gì?",
      "options": [
        "Khuyến khích người kỹ thuật làm việc hết khả năng",
        "Tự thực hiện toàn bộ công việc kỹ thuật của nhóm",
        "Xác định mọi vấn đề kinh doanh của tổ chức",
        "Chỉ chấp nhận những ý tưởng vượt mọi ràng buộc"
      ],
      "correct": 0,
      "explanation": "Motivation là khả năng thúc đẩy người kỹ thuật phát huy tốt nhất năng lực của mình.",
      "slides": [
        7
      ],
      "sourceId": "SPM-013",
      "sourceType": "slides",
      "id": "SLIDE-SPM-013"
    },
    {
      "part": 1,
      "question": "Năng lực Organization của trưởng nhóm là gì?",
      "options": [
        "Đánh giá phản hồi của người dùng sau mỗi lần cài đặt",
        "Điều chỉnh hoặc tạo quy trình để biến ý tưởng thành sản phẩm",
        "Loại bỏ quy trình để mỗi người làm theo ý mình",
        "Chỉ giao nhiệm vụ dựa trên chức danh của từng người"
      ],
      "correct": 1,
      "explanation": "Organization hướng đến định hình quy trình hiện có hoặc tạo quy trình mới để chuyển ý tưởng ban đầu thành sản phẩm cuối.",
      "slides": [
        7
      ],
      "sourceId": "SPM-014",
      "sourceType": "slides",
      "id": "SLIDE-SPM-014"
    },
    {
      "part": 1,
      "question": "Năng lực Innovation của trưởng nhóm khuyến khích điều gì?",
      "options": [
        "Chỉ làm theo ý tưởng của người lãnh đạo",
        "Tránh mọi ý tưởng chưa có ở dự án trước",
        "Sáng tạo trong các giới hạn của sản phẩm",
        "Thay đổi yêu cầu mà không cần xét giới hạn"
      ],
      "correct": 2,
      "explanation": "Bài nhấn mạnh tạo điều kiện sáng tạo ngay cả khi phải làm việc trong các giới hạn đã thiết lập.",
      "slides": [
        7
      ],
      "sourceId": "SPM-015",
      "sourceType": "slides",
      "id": "SLIDE-SPM-015"
    },
    {
      "part": 1,
      "question": "Đặc điểm nào thuộc cách tổ chức nhóm không chính thức?",
      "options": [
        "Không có software manager điều phối",
        "Có thể chỉ định trưởng nhóm ad hoc",
        "Mỗi người chỉ làm việc hoàn toàn độc lập",
        "Mọi nhóm bắt buộc có cấu trúc chung"
      ],
      "correct": 1,
      "explanation": "Phương án informal teams có thể bổ nhiệm team leader ad hoc, còn phối hợp giữa nhóm thuộc software manager.",
      "slides": [
        8
      ],
      "sourceId": "SPM-022",
      "sourceType": "slides",
      "id": "SLIDE-SPM-022"
    },
    {
      "part": 1,
      "question": "Trong cách tổ chức thành các nhóm có cấu trúc chung, ai kiểm soát phối hợp?",
      "options": [
        "Chỉ customers của dự án",
        "Chỉ senior managers của tổ chức",
        "Chỉ một team leader ad hoc",
        "Cả team và software project manager"
      ],
      "correct": 3,
      "explanation": "Phương án thứ ba chia trách nhiệm phối hợp cho cả nhóm và người quản lý dự án phần mềm.",
      "slides": [
        8
      ],
      "sourceId": "SPM-023",
      "sourceType": "slides",
      "id": "SLIDE-SPM-023"
    },
    {
      "part": 1,
      "question": "Điểm nào phân biệt nhóm có cấu trúc chung với nhóm không chính thức?",
      "options": [
        "Cấu trúc team được xác định cho mọi nhóm trong dự án",
        "Số người luôn nhỏ hơn số nhiệm vụ chức năng",
        "Software manager không còn tham gia phối hợp",
        "Mỗi team chỉ được giao một chức năng cố định"
      ],
      "correct": 0,
      "explanation": "Phương án thứ ba quy định cấu trúc cụ thể áp dụng cho tất cả các nhóm làm trong dự án.",
      "slides": [
        8
      ],
      "sourceId": "SPM-024",
      "sourceType": "slides",
      "id": "SLIDE-SPM-024"
    },
    {
      "part": 1,
      "question": "Điều kiện nào cần có ở một nhóm hiệu suất cao?",
      "options": [
        "Các thành viên tránh trao đổi công việc",
        "Các thành viên đều có chức danh quản lý",
        "Các thành viên có kỹ năng giống hệt nhau",
        "Các thành viên tin tưởng lẫn nhau"
      ],
      "correct": 3,
      "explanation": "Sự tin tưởng giữa các thành viên là một yêu cầu của high-performance team.",
      "slides": [
        9
      ],
      "sourceId": "SPM-029",
      "sourceType": "slides",
      "id": "SLIDE-SPM-029"
    },
    {
      "part": 1,
      "question": "Phân bố kỹ năng của nhóm cần phù hợp với điều gì?",
      "options": [
        "Vị trí tổ chức của người quản lý",
        "Bài toán cần giải quyết",
        "Cấu trúc các nhóm không chính thức",
        "Cơ chế phối hợp giữa các nhóm"
      ],
      "correct": 1,
      "explanation": "Bài yêu cầu distribution of skills phải phù hợp với problem.",
      "slides": [
        9
      ],
      "sourceId": "SPM-030",
      "sourceType": "slides",
      "id": "SLIDE-SPM-030"
    },
    {
      "part": 1,
      "question": "Để giữ sự gắn kết, nhóm có thể xử lý người làm giảm sự gắn kết thế nào?",
      "options": [
        "Bỏ yêu cầu tin tưởng giữa thành viên",
        "Loại họ khỏi team nếu cần",
        "Tăng số nhiệm vụ độc lập cho mọi người",
        "Giao họ toàn quyền điều phối"
      ],
      "correct": 1,
      "explanation": "Slide nêu mavericks có thể cần bị loại nếu muốn duy trì team cohesiveness.",
      "slides": [
        9
      ],
      "sourceId": "SPM-031",
      "sourceType": "slides",
      "id": "SLIDE-SPM-031"
    },
    {
      "part": 1,
      "question": "Mục nào xem xét phần mềm trong hệ thống hoặc bối cảnh kinh doanh lớn hơn?",
      "options": [
        "Information objectives",
        "Function and performance",
        "Problem decomposition",
        "Context"
      ],
      "correct": 3,
      "explanation": "Context xét vị trí phần mềm trong hệ thống, sản phẩm hoặc bối cảnh kinh doanh lớn hơn.",
      "slides": [
        10
      ],
      "sourceId": "SPM-035",
      "sourceType": "slides",
      "id": "SLIDE-SPM-035"
    },
    {
      "part": 1,
      "question": "Câu hỏi nào thuộc Information objectives?",
      "options": [
        "Ai chịu trách nhiệm tổ chức nhóm lập trình?",
        "Dự án cần bao nhiêu người quản lý cấp cao?",
        "Dữ liệu nào cần làm đầu vào và tạo ra ở đầu ra?",
        "Nhóm nên chọn mô hình quy trình nào?"
      ],
      "correct": 2,
      "explanation": "Information objectives xác định các đối tượng dữ liệu đầu vào và đầu ra mà khách hàng nhìn thấy.",
      "slides": [
        10
      ],
      "sourceId": "SPM-036",
      "sourceType": "slides",
      "id": "SLIDE-SPM-036"
    },
    {
      "part": 1,
      "question": "Function and performance xem xét nội dung nào?",
      "options": [
        "Phân rã bài toán trong phân tích yêu cầu",
        "Dữ liệu người dùng thấy ở đầu vào, đầu ra",
        "Biến đổi dữ liệu và đặc tính hiệu năng",
        "Bối cảnh hệ thống lớn hơn và ràng buộc"
      ],
      "correct": 2,
      "explanation": "Phần này hỏi phần mềm thực hiện chức năng biến đổi dữ liệu thế nào và có đặc tính hiệu năng đặc biệt không.",
      "slides": [
        10
      ],
      "sourceId": "SPM-037",
      "sourceType": "slides",
      "id": "SLIDE-SPM-037"
    },
    {
      "part": 1,
      "question": "Phân rã bài toán là trọng tâm của hoạt động nào?",
      "options": [
        "Đánh giá doanh thu tổ chức",
        "Quản lý biến động nhân sự",
        "Theo dõi earned value hằng tháng",
        "Phân tích yêu cầu phần mềm"
      ],
      "correct": 3,
      "explanation": "Bài xác định phân rã bài toán là hoạt động cốt lõi của software requirements analysis.",
      "slides": [
        10
      ],
      "sourceId": "SPM-038",
      "sourceType": "slides",
      "id": "SLIDE-SPM-038"
    },
    {
      "part": 1,
      "question": "Hoạt động nào thiết lập việc thu thập yêu cầu giữa nhóm phát triển và khách hàng?",
      "options": [
        "Customer evaluation",
        "Construction and release",
        "Customer communication",
        "Engineering"
      ],
      "correct": 2,
      "explanation": "Customer communication bao gồm các nhiệm vụ tạo requirements elicitation hiệu quả.",
      "slides": [
        12
      ],
      "sourceId": "SPM-048",
      "sourceType": "slides",
      "id": "SLIDE-SPM-048"
    },
    {
      "part": 1,
      "question": "Xác định nguồn lực và mốc thời gian thuộc hoạt động nào?",
      "options": [
        "Planning",
        "Construction and release",
        "Engineering",
        "Customer evaluation"
      ],
      "correct": 0,
      "explanation": "Planning định nghĩa resources, timelines và thông tin dự án khác.",
      "slides": [
        12
      ],
      "sourceId": "SPM-049",
      "sourceType": "slides",
      "id": "SLIDE-SPM-049"
    },
    {
      "part": 1,
      "question": "Tạo các biểu diễn của ứng dụng thuộc hoạt động nào?",
      "options": [
        "Engineering",
        "Customer evaluation",
        "Risk analysis",
        "Planning"
      ],
      "correct": 0,
      "explanation": "Engineering thực hiện các nhiệm vụ xây dựng representations của ứng dụng.",
      "slides": [
        12
      ],
      "sourceId": "SPM-051",
      "sourceType": "slides",
      "id": "SLIDE-SPM-051"
    },
    {
      "part": 1,
      "question": "Mục đích của Customer evaluation là gì?",
      "options": [
        "Xây dựng một bộ quy trình mới cho tổ chức",
        "Xác định mọi ràng buộc của bối cảnh kinh doanh",
        "Thiết lập toàn bộ kỹ năng của các practitioners",
        "Thu nhận phản hồi khách hàng qua đánh giá phần mềm"
      ],
      "correct": 3,
      "explanation": "Customer evaluation lấy customer feedback từ việc đánh giá các biểu diễn phần mềm.",
      "slides": [
        12
      ],
      "sourceId": "SPM-053",
      "sourceType": "slides",
      "id": "SLIDE-SPM-053"
    },
    {
      "part": 1,
      "question": "Customer communication và Customer evaluation khác nhau thế nào?",
      "options": [
        "Một bên tạo biểu diễn; bên kia hỗ trợ người dùng",
        "Một bên thu thập yêu cầu; bên kia thu phản hồi qua đánh giá",
        "Một bên quản lý nhân sự; bên kia xác định business issues",
        "Một bên kiểm thử mã; bên kia định nghĩa nguồn lực"
      ],
      "correct": 1,
      "explanation": "Communication nhằm requirements elicitation, evaluation nhằm customer feedback dựa trên representations.",
      "slides": [
        12
      ],
      "sourceId": "SPM-057",
      "sourceType": "slides",
      "id": "SLIDE-SPM-057"
    },
    {
      "part": 1,
      "question": "Mini-specs cần phản ánh các khía cạnh nào?",
      "options": [
        "Cost, turnover và sponsorship",
        "Data, function và behavior",
        "People, technology và finance",
        "Schedule, staff và earned value"
      ],
      "correct": 1,
      "explanation": "Mini-specs phản ánh data, function và behavioral features của phần mềm.",
      "slides": [
        15
      ],
      "sourceId": "SPM-073",
      "sourceType": "slides",
      "id": "SLIDE-SPM-073"
    },
    {
      "part": 1,
      "question": "Review mini-specs kiểm tra các tiêu chí nào?",
      "options": [
        "Có ngân sách, có leader, có nhà tài trợ",
        "Ít chữ, nhiều hình, không dữ liệu",
        "Đúng đắn, nhất quán, không mơ hồ",
        "Nhanh, ít người, nhiều chức năng"
      ],
      "correct": 2,
      "explanation": "Slide yêu cầu correctness, consistency và lack of ambiguity.",
      "slides": [
        15
      ],
      "sourceId": "SPM-074",
      "sourceType": "slides",
      "id": "SLIDE-SPM-074"
    },
    {
      "part": 1,
      "question": "Các mini-specs được tập hợp thành tài liệu gì?",
      "options": [
        "Personnel turnover register",
        "Monthly earned value report",
        "Scoping document",
        "User training manual"
      ],
      "correct": 2,
      "explanation": "Chuỗi nhiệm vụ nêu Assemble the mini-specs into a scoping document.",
      "slides": [
        15
      ],
      "sourceId": "SPM-075",
      "sourceType": "slides",
      "id": "SLIDE-SPM-075"
    },
    {
      "part": 1,
      "question": "Các thay đổi được xử lý thiếu kiểm soát là vấn đề nào?",
      "options": [
        "Business needs đã được xác định rõ",
        "Managers áp dụng lessons learned",
        "Changes are managed poorly",
        "Team có đủ kỹ năng thích hợp"
      ],
      "correct": 2,
      "explanation": "Quản lý thay đổi kém là một trong mười vấn đề được liệt kê.",
      "slides": [
        16
      ],
      "sourceId": "SPM-084",
      "sourceType": "slides",
      "id": "SLIDE-SPM-084"
    },
    {
      "part": 1,
      "question": "Nền tảng đã chọn thay đổi giữa dự án là vấn đề nào?",
      "options": [
        "Sponsorship is lost",
        "The chosen technology changes",
        "Product scope is poorly defined",
        "Users are resistant"
      ],
      "correct": 1,
      "explanation": "Slide 16 nêu sự thay đổi của công nghệ được chọn là vấn đề có thể xảy ra.",
      "slides": [
        16
      ],
      "sourceId": "SPM-085",
      "sourceType": "slides",
      "id": "SLIDE-SPM-085"
    },
    {
      "part": 1,
      "question": "Yêu cầu hoàn thành vào ngày không khả thi là vấn đề nào?",
      "options": [
        "Deadlines are unrealistic",
        "Sponsorship is lost",
        "Technology changes",
        "Users are resistant"
      ],
      "correct": 0,
      "explanation": "Thời hạn không thực tế thuộc danh sách What can go wrong in a project.",
      "slides": [
        16
      ],
      "sourceId": "SPM-087",
      "sourceType": "slides",
      "id": "SLIDE-SPM-087"
    },
    {
      "part": 1,
      "question": "Người dùng phản đối sử dụng phần mềm là vấn đề nào?",
      "options": [
        "Resources đã được xác định",
        "Scope đã được review",
        "Users are resistant",
        "Practitioners có kỹ năng"
      ],
      "correct": 2,
      "explanation": "Sự kháng cự của users là vấn đề được nêu ở slide 16.",
      "slides": [
        16
      ],
      "sourceId": "SPM-088",
      "sourceType": "slides",
      "id": "SLIDE-SPM-088"
    },
    {
      "part": 1,
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
      "sourceId": "SPM-089",
      "sourceType": "slides",
      "id": "SLIDE-SPM-089"
    },
    {
      "part": 1,
      "question": "Có đủ người nhưng thiếu kỹ năng cần thiết là vấn đề nào?",
      "options": [
        "Deadlines đã được xác định thực tế",
        "Team thiếu người có kỹ năng phù hợp",
        "Users đã tham gia đánh giá",
        "Scope đã được phân rã rõ"
      ],
      "correct": 1,
      "explanation": "Danh sách nhấn mạnh appropriate skills, không chỉ số lượng người.",
      "slides": [
        16
      ],
      "sourceId": "SPM-090",
      "sourceType": "slides",
      "id": "SLIDE-SPM-090"
    },
    {
      "part": 1,
      "question": "Bỏ qua kinh nghiệm đã rút ra là vấn đề nào?",
      "options": [
        "Đổi technology đã chọn",
        "Mất sponsorship đã có",
        "Business needs không rõ",
        "Tránh best practices và lessons learned"
      ],
      "correct": 3,
      "explanation": "Bài nêu việc tránh best practices và lessons learned có thể khiến dự án thất bại.",
      "slides": [
        16
      ],
      "sourceId": "SPM-091",
      "sourceType": "slides",
      "id": "SLIDE-SPM-091"
    },
    {
      "part": 1,
      "question": "Start on the right foot yêu cầu làm gì trước khi đặt mục tiêu?",
      "options": [
        "Nỗ lực hiểu bài toán cần giải quyết",
        "Thu earned value của tháng đầu",
        "Chốt lịch dù chưa hiểu vấn đề",
        "Chỉ định mọi người cùng một kỹ năng"
      ],
      "correct": 0,
      "explanation": "Hiểu problem là nền tảng để đặt mục tiêu và kỳ vọng thực tế.",
      "slides": [
        17
      ],
      "sourceId": "SPM-094",
      "sourceType": "slides",
      "id": "SLIDE-SPM-094"
    },
    {
      "part": 1,
      "question": "Duy trì động lực cần dùng khuyến khích để đạt mục tiêu nhân sự nào?",
      "options": [
        "Giảm turnover nhân sự xuống mức tối thiểu",
        "Thay thành viên liên tục để tăng ý tưởng",
        "Dời toàn bộ hoạt động review đến cuối",
        "Tăng số cấp phê duyệt cho từng tác vụ"
      ],
      "correct": 0,
      "explanation": "Bài yêu cầu incentives để giữ turnover of personnel ở mức thấp nhất.",
      "slides": [
        17
      ],
      "sourceId": "SPM-096",
      "sourceType": "slides",
      "id": "SLIDE-SPM-096"
    },
    {
      "part": 1,
      "question": "Vai trò của nhóm khi duy trì động lực dự án là gì?",
      "options": [
        "Nhấn mạnh chất lượng ở mọi nhiệm vụ",
        "Chuyển mọi quyết định kỹ thuật cho khách hàng",
        "Chỉ xét chất lượng khi phần mềm đã phát hành",
        "Trì hoãn các nhiệm vụ có thể đo lường"
      ],
      "correct": 0,
      "explanation": "Team nên emphasize quality in every task it performs.",
      "slides": [
        17
      ],
      "sourceId": "SPM-097",
      "sourceType": "slides",
      "id": "SLIDE-SPM-097"
    },
    {
      "part": 1,
      "question": "Quản lý cấp cao cần làm gì để duy trì động lực dự án?",
      "options": [
        "Kiểm soát chi tiết từng thao tác kỹ thuật",
        "Thay đổi toàn bộ thành viên mỗi tháng",
        "Tạo điều kiện để team làm việc ít bị cản trở",
        "Buộc team bỏ chất lượng để giữ nhịp độ"
      ],
      "correct": 2,
      "explanation": "Slide diễn đạt senior management should stay out of the team’s way.",
      "slides": [
        17
      ],
      "sourceId": "SPM-098",
      "sourceType": "slides",
      "id": "SLIDE-SPM-098"
    },
    {
      "part": 1,
      "question": "Tiến độ dự án phần mềm được theo dõi thông qua gì?",
      "options": [
        "Chỉ số nhân viên đã được giao công việc",
        "Sản phẩm công việc và phép đo quy trình, dự án",
        "Chỉ danh sách chức năng trong tài liệu phạm vi",
        "Chỉ các ngày hoàn thành dự kiến của dự án"
      ],
      "correct": 1,
      "explanation": "Progress được theo dõi qua work products, với process và project measures hỗ trợ đánh giá.",
      "slides": [
        18
      ],
      "sourceId": "SPM-101",
      "sourceType": "slides",
      "id": "SLIDE-SPM-101"
    },
    {
      "part": 1,
      "question": "Thông điệp của Make smart decisions là gì?",
      "options": [
        "Luôn chọn cách phức tạp hơn",
        "Tăng mọi cấp phê duyệt",
        "Chỉ quyết định sau phát hành",
        "Keep it simple"
      ],
      "correct": 3,
      "explanation": "Slide 18 tóm tắt việc ra quyết định thông minh bằng keep it simple.",
      "slides": [
        18
      ],
      "sourceId": "SPM-102",
      "sourceType": "slides",
      "id": "SLIDE-SPM-102"
    },
    {
      "part": 1,
      "question": "Trong tổng kết dự án, cần so sánh những lịch nào?",
      "options": [
        "Lịch kế hoạch và lịch thực tế",
        "Số team và số máy tính",
        "Chức danh manager và chức danh customer",
        "Tên công nghệ và tên sản phẩm"
      ],
      "correct": 0,
      "explanation": "Postmortem đánh giá planned and actual schedules.",
      "slides": [
        18
      ],
      "sourceId": "SPM-104",
      "sourceType": "slides",
      "id": "SLIDE-SPM-104"
    },
    {
      "part": 1,
      "question": "Tổng kết dự án cần lấy phản hồi từ ai?",
      "options": [
        "Thành viên team và customers",
        "Chỉ những senior managers",
        "Chỉ người cung cấp công cụ",
        "Chỉ các end-users chưa dùng phần mềm"
      ],
      "correct": 0,
      "explanation": "Slide yêu cầu feedback from team members and customers.",
      "slides": [
        18
      ],
      "sourceId": "SPM-105",
      "sourceType": "slides",
      "id": "SLIDE-SPM-105"
    },
    {
      "part": 1,
      "question": "How trong W5HH tìm hiểu những khía cạnh nào?",
      "options": [
        "Chỉ số giờ một thành viên có mặt",
        "Chỉ cách viết giao diện người dùng",
        "Chỉ lý do hệ thống được đề xuất",
        "Cách làm về kỹ thuật và quản lý"
      ],
      "correct": 3,
      "explanation": "How hỏi job được thực hiện technically and managerially thế nào.",
      "slides": [
        19
      ],
      "sourceId": "SPM-115",
      "sourceType": "slides",
      "id": "SLIDE-SPM-115"
    },
    {
      "part": 1,
      "question": "How much trong W5HH xác định điều gì?",
      "options": [
        "Lượng cần thiết của từng nguồn lực",
        "Số chức năng đã được nhận xét",
        "Vị trí của manager trong tổ chức",
        "Mức thích thú của người dùng"
      ],
      "correct": 0,
      "explanation": "How much of each resource is needed hỏi nhu cầu lượng của mỗi resource.",
      "slides": [
        19
      ],
      "sourceId": "SPM-116",
      "sourceType": "slides",
      "id": "SLIDE-SPM-116"
    },
    {
      "part": 1,
      "question": "Khái niệm dự án nhấn mạnh điều gì?",
      "options": [
        "Tập hợp thao tác của một nhiệm vụ rõ để đạt mục tiêu",
        "Chỉ một sản phẩm đã phát hành thành công",
        "Một phòng ban tồn tại lâu dài trong tổ chức",
        "Mọi hoạt động hằng ngày không có điểm kết thúc"
      ],
      "correct": 0,
      "explanation": "Project là well-defined task gồm collection of operations nhằm đạt goal.",
      "slides": [
        20
      ],
      "sourceId": "SPM-122",
      "sourceType": "slides",
      "id": "SLIDE-SPM-122"
    },
    {
      "part": 1,
      "question": "Đặc trưng nào phù hợp với một dự án?",
      "options": [
        "Không cần mục tiêu riêng",
        "Là hoạt động thường nhật không giới hạn",
        "Chỉ cần nguồn lực tài chính",
        "Có thời điểm bắt đầu và kết thúc"
      ],
      "correct": 3,
      "explanation": "Bài nêu project có start time và end time.",
      "slides": [
        20
      ],
      "sourceId": "SPM-123",
      "sourceType": "slides",
      "id": "SLIDE-SPM-123"
    },
    {
      "part": 1,
      "question": "Ước lượng thực nghiệm chi phí và lịch cần thông tin nào về ứng dụng?",
      "options": [
        "Vị trí tổ chức của người phụ trách",
        "Kích thước ước tính hiện tại của ứng dụng",
        "Số defects hiện đang đóng của ứng dụng",
        "Số team có cấu trúc chung trong dự án"
      ],
      "correct": 1,
      "explanation": "Slide liên hệ empirical estimation với current estimated size of the application software.",
      "slides": [
        21
      ],
      "sourceId": "SPM-134",
      "sourceType": "slides",
      "id": "SLIDE-SPM-134"
    },
    {
      "part": 1,
      "question": "Quản lý dự án dựa trên metric nhằm mục đích gì?",
      "options": [
        "Chỉ xác định cấu trúc của software team",
        "Cảnh báo sớm các vấn đề đang phát triển",
        "Chỉ ghi lại các vấn đề sau phát hành",
        "Thay thế mọi yêu cầu của khách hàng"
      ],
      "correct": 1,
      "explanation": "Metrics program cung cấp early indication of evolving problems.",
      "slides": [
        21
      ],
      "sourceId": "SPM-135",
      "sourceType": "slides",
      "id": "SLIDE-SPM-135"
    },
    {
      "part": 1,
      "question": "Earned value được theo dõi theo chu kỳ nào?",
      "options": [
        "Hằng năm",
        "Hằng tháng",
        "Sau mỗi lần nhập liệu",
        "Hằng giờ"
      ],
      "correct": 1,
      "explanation": "Slide 21 đề cập monthly earned value metrics.",
      "slides": [
        21
      ],
      "sourceId": "SPM-136",
      "sourceType": "slides",
      "id": "SLIDE-SPM-136"
    },
    {
      "part": 1,
      "question": "Theo dõi khuyết tật cần ghi các trạng thái nào?",
      "options": [
        "Chỉ tên người dùng đã phát hiện",
        "Đang mở và đã đóng",
        "Chỉ defects của dự án trước",
        "Chỉ defects chưa từng được báo cáo"
      ],
      "correct": 1,
      "explanation": "Bài yêu cầu track and report defects found và số defects currently closed/open.",
      "slides": [
        21
      ],
      "sourceId": "SPM-137",
      "sourceType": "slides",
      "id": "SLIDE-SPM-137"
    },
    {
      "part": 1,
      "question": "Quản lý chú trọng con người theo dõi chỉ số nhân sự nào?",
      "options": [
        "Nỗ lực phát triển ước lượng cho tháng tới",
        "Turnover trung bình ba tháng gần nhất",
        "Số người được phân công trong tháng gần nhất",
        "Số nhiệm vụ hoàn thành ba tháng gần nhất"
      ],
      "correct": 1,
      "explanation": "Slide nêu average staff turnover for the past three months.",
      "slides": [
        21
      ],
      "sourceId": "SPM-138",
      "sourceType": "slides",
      "id": "SLIDE-SPM-138"
    },
    {
      "part": 2,
      "question": "Đo lường phần mềm hỗ trợ các mục tiêu nào?",
      "options": [
        "Ước lượng, chất lượng, năng suất và loại bỏ mọi rủi ro",
        "Ước lượng, chất lượng, năng suất và thay thế phân tích yêu cầu",
        "Ước lượng, chất lượng, năng suất và bảo đảm không có thay đổi",
        "Ước lượng, chất lượng, năng suất và kiểm soát dự án"
      ],
      "correct": 3,
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
      "question": "Đo lường hỗ trợ loại quyết định nào khi dự án đang tiến hành?",
      "options": [
        "Chỉ quyết định sau khi dự án kết thúc",
        "Quyết định tác nghiệp",
        "Chỉ quyết định trước khi xác định phạm vi",
        "Quyết định không xét sản phẩm công việc"
      ],
      "correct": 1,
      "explanation": "Slide 25 nêu đo lường hỗ trợ quyết định tác nghiệp khi dự án đang tiến hành.",
      "slides": [
        25
      ],
      "sourceId": "SPM-173",
      "sourceType": "slides",
      "id": "SLIDE-SPM-173"
    },
    {
      "part": 2,
      "question": "Quy trình đo lường bắt đầu bằng việc gì?",
      "options": [
        "Chọn tập hạn chế các phép đo dễ thu thập",
        "Điều chỉnh nhiệm vụ từ các chỉ báo đã có",
        "Phân tích xu hướng và hình thành kết luận",
        "So sánh kết quả với dự án tương tự đã làm"
      ],
      "correct": 0,
      "explanation": "Slide 26 bắt đầu bằng tập hạn chế các phép đo quá trình, dự án và sản phẩm dễ thu thập.",
      "slides": [
        26
      ],
      "sourceId": "SPM-175",
      "sourceType": "slides",
      "id": "SLIDE-SPM-175"
    },
    {
      "part": 2,
      "question": "Kết quả đo nên được so sánh với cơ sở nào?",
      "options": [
        "Ước muốn của quản lý mà không xét dữ liệu quá khứ",
        "Trung bình quá khứ của các dự án tương tự",
        "Giá trị cao nhất của các dự án bất kỳ, dù khác loại",
        "Trung bình của mọi dự án, không cần xét tương đồng"
      ],
      "correct": 1,
      "explanation": "Slide 26 yêu cầu phân tích và so sánh với trung bình quá khứ của các dự án tương tự.",
      "slides": [
        26
      ],
      "sourceId": "SPM-176",
      "sourceType": "slides",
      "id": "SLIDE-SPM-176"
    },
    {
      "part": 2,
      "question": "Sau khi thu thập và so sánh số liệu, cần làm gì?",
      "options": [
        "Hủy dữ liệu để tránh ảnh hưởng quyết định",
        "Ngừng theo dõi vì đã có một lần so sánh",
        "Đánh giá xu hướng và hình thành kết luận",
        "Đổi mọi chỉ số thành số lượng nhân sự"
      ],
      "correct": 2,
      "explanation": "Đánh giá xu hướng và đưa ra kết luận là bước tiếp theo trong slide 26.",
      "slides": [
        26
      ],
      "sourceId": "SPM-177",
      "sourceType": "slides",
      "id": "SLIDE-SPM-177"
    },
    {
      "part": 2,
      "question": "Hai hướng chuẩn hóa phép đo thường dùng là gì?",
      "options": [
        "Theo quy trình và quy mô nhóm",
        "Theo kích thước và chức năng",
        "Theo tiến độ và chi phí dự án",
        "Theo nỗ lực và nguồn lực"
      ],
      "correct": 1,
      "explanation": "Slide 26 nêu size-oriented và function-oriented metrics để chuẩn hóa.",
      "slides": [
        26
      ],
      "sourceId": "SPM-178",
      "sourceType": "slides",
      "id": "SLIDE-SPM-178"
    },
    {
      "part": 2,
      "question": "Measure là gì?",
      "options": [
        "Quy trình phân tích xu hướng và rút ra kết luận",
        "Tổ hợp các metric tạo hiểu biết về tình trạng dự án",
        "Chỉ báo định lượng về một thuộc tính",
        "Hành động xác định một đại lượng định lượng"
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
        "Trình tự thực hiện các hoạt động xác định phép đo",
        "Quy trình xác định nguồn lực trước khi lập kế hoạch",
        "Cách tổ chức công việc giữa các thành viên dự án",
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
      "question": "Đặc trưng của software metric là gì?",
      "options": [
        "Chỉ thể hiện cảm nhận của trưởng nhóm",
        "Liên hệ các phép đo riêng lẻ theo một cách nào đó",
        "Luôn chỉ là tổng số người làm dự án",
        "Bắt buộc không sử dụng bất kỳ phép đo trực tiếp nào"
      ],
      "correct": 1,
      "explanation": "Software metric liên hệ các measure riêng lẻ và có thể thuộc quá trình, dự án hoặc sản phẩm.",
      "slides": [
        27
      ],
      "sourceId": "SPM-182",
      "sourceType": "slides",
      "id": "SLIDE-SPM-182"
    },
    {
      "part": 2,
      "question": "Indicator là gì?",
      "options": [
        "Mọi số đếm riêng lẻ, dù không cho hiểu biết về đối tượng",
        "Chỉ nhận xét chủ quan, không thể dùng metric định lượng",
        "Metric hoặc tổ hợp metric cung cấp hiểu biết",
        "Chỉ phép đo kích thước và không được phối hợp metric"
      ],
      "correct": 2,
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
      "question": "Chỉ báo giúp đánh giá điều gì về dự án đang diễn ra?",
      "options": [
        "Chỉ số năm hoạt động của công ty",
        "Tất cả quyết định cá nhân của khách hàng",
        "Chỉ giá bán tương lai của sản phẩm",
        "Trạng thái hiện tại của dự án"
      ],
      "correct": 3,
      "explanation": "Slide 28 nêu việc đánh giá trạng thái dự án đang tiến hành.",
      "slides": [
        28
      ],
      "sourceId": "SPM-186",
      "sourceType": "slides",
      "id": "SLIDE-SPM-186"
    },
    {
      "part": 2,
      "question": "Phát hiện vấn đề trước khi nghiêm trọng là công dụng nào của chỉ báo?",
      "options": [
        "Xóa bỏ mọi rủi ro trước khi lập kế hoạch",
        "Phát hiện sớm khu vực có vấn đề",
        "Thay thế toàn bộ việc kiểm soát chất lượng",
        "Bảo đảm mọi nhiệm vụ hoàn thành tức thì"
      ],
      "correct": 1,
      "explanation": "Project indicators giúp uncover problem areas trước khi chúng trở nên critical.",
      "slides": [
        28
      ],
      "sourceId": "SPM-187",
      "sourceType": "slides",
      "id": "SLIDE-SPM-187"
    },
    {
      "part": 2,
      "question": "Chỉ báo dự án có thể hỗ trợ điều chỉnh những gì?",
      "options": [
        "Định nghĩa thuộc tính kỹ thuật cần đo",
        "Dữ liệu lịch sử của dự án đã kết thúc",
        "Luồng công việc hoặc nhiệm vụ",
        "Các giá trị thực tế đã thu thập trước đó"
      ],
      "correct": 2,
      "explanation": "Điều chỉnh work flow hoặc tasks là một công dụng của project indicators.",
      "slides": [
        28
      ],
      "sourceId": "SPM-188",
      "sourceType": "slides",
      "id": "SLIDE-SPM-188"
    },
    {
      "part": 2,
      "question": "Chỉ theo dõi vấn đề đã xảy ra bỏ sót công dụng nào của chỉ báo?",
      "options": [
        "Đánh giá trạng thái hiện tại",
        "Đánh giá kiểm soát chất lượng",
        "Điều chỉnh nhiệm vụ đã có",
        "Theo dõi rủi ro tiềm ẩn"
      ],
      "correct": 3,
      "explanation": "Slide 28 nêu việc theo dõi potential risks.",
      "slides": [
        28
      ],
      "sourceId": "SPM-189",
      "sourceType": "slides",
      "id": "SLIDE-SPM-189"
    },
    {
      "part": 2,
      "question": "KLOC là đơn vị gì?",
      "options": [
        "Một nghìn dòng mã",
        "Một nghìn điểm chức năng",
        "Một nghìn trang tài liệu",
        "Một nghìn tháng công"
      ],
      "correct": 0,
      "explanation": "KLOC được ghi là thousand lines of code.",
      "slides": [
        30
      ],
      "sourceId": "SPM-192",
      "sourceType": "slides",
      "id": "SLIDE-SPM-192"
    },
    {
      "part": 2,
      "question": "Metric nào chuẩn hóa số lỗi theo kích thước mã nguồn?",
      "options": [
        "Pages per FP",
        "Errors per KLOC",
        "FP per person-month",
        "Dollars per FP"
      ],
      "correct": 1,
      "explanation": "Errors per KLOC lấy số lỗi trên mỗi nghìn dòng mã.",
      "slides": [
        30
      ],
      "sourceId": "SPM-193",
      "sourceType": "slides",
      "id": "SLIDE-SPM-193"
    },
    {
      "part": 2,
      "question": "Metric nào biểu diễn chi phí trên từng dòng mã?",
      "options": [
        "Dollars per LOC",
        "LOC per person-month",
        "Pages per KLOC",
        "Defects per KLOC"
      ],
      "correct": 0,
      "explanation": "Slide 30 liệt kê $ per LOC là metric chi phí theo dòng mã.",
      "slides": [
        30
      ],
      "sourceId": "SPM-194",
      "sourceType": "slides",
      "id": "SLIDE-SPM-194"
    },
    {
      "part": 2,
      "question": "Metric nào đo lượng mã tạo ra trên một tháng công?",
      "options": [
        "Dollars per page of documentation",
        "Dollars per LOC",
        "Errors per KLOC",
        "LOC per person-month"
      ],
      "correct": 3,
      "explanation": "LOC per person-month liên hệ lượng mã với tháng công.",
      "slides": [
        30
      ],
      "sourceId": "SPM-195",
      "sourceType": "slides",
      "id": "SLIDE-SPM-195"
    },
    {
      "part": 2,
      "question": "Metric nào liên hệ lượng tài liệu với quy mô mã?",
      "options": [
        "Defects per FP",
        "Dollars per page of documentation",
        "FP per person-month",
        "Pages of documentation per KLOC"
      ],
      "correct": 3,
      "explanation": "Số trang tài liệu trên KLOC chuẩn hóa tài liệu theo kích thước mã.",
      "slides": [
        30
      ],
      "sourceId": "SPM-196",
      "sourceType": "slides",
      "id": "SLIDE-SPM-196"
    },
    {
      "part": 2,
      "question": "Vì sao chức năng được xác định gián tiếp khi tính FP?",
      "options": [
        "Vì chức năng luôn bằng số dòng mã",
        "Vì mọi dữ liệu về chức năng đều bị cấm thu thập",
        "Vì chỉ khách hàng mới được phép tính metric",
        "Vì functionality không đo trực tiếp được"
      ],
      "correct": 3,
      "explanation": "Slide 31 nêu functionality không thể đo trực tiếp và phải suy ra từ các phép đo trực tiếp khác.",
      "slides": [
        31
      ],
      "sourceId": "SPM-199",
      "sourceType": "slides",
      "id": "SLIDE-SPM-199"
    },
    {
      "part": 2,
      "question": "FP dựa trên hai cơ sở nào?",
      "options": [
        "Số đếm miền thông tin và số người làm trong dự án",
        "Độ phức tạp và số trang tài liệu hướng dẫn phần mềm",
        "Số dòng mã và số tháng công đã dùng để phát triển",
        "Số đếm miền thông tin và độ phức tạp"
      ],
      "correct": 3,
      "explanation": "FP dựa trên các phép đo đếm được của miền thông tin và đánh giá độ phức tạp phần mềm.",
      "slides": [
        31
      ],
      "sourceId": "SPM-200",
      "sourceType": "slides",
      "id": "SLIDE-SPM-200"
    },
    {
      "part": 2,
      "question": "Năm đặc trưng miền thông tin của FP là gì?",
      "options": [
        "Inquiries, files, thời hạn, rủi ro và kiểm thử",
        "Inputs, outputs, inquiries, files và external interfaces",
        "Inputs, outputs, mã nguồn, nhân sự và ngân sách",
        "Inputs, thiết kế, lỗi, chi phí và độ tin cậy"
      ],
      "correct": 1,
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
      "question": "Một user input được đếm khi cung cấp loại dữ liệu nào?",
      "options": [
        "Mỗi nhóm dữ liệu logic nằm trong cơ sở dữ liệu lớn",
        "Mỗi trường dữ liệu trong tất cả báo cáo được xuất ra",
        "Mỗi lần người dùng hỏi và nhận phản hồi trực tuyến",
        "Đầu vào cung cấp dữ liệu ứng dụng riêng biệt"
      ],
      "correct": 3,
      "explanation": "Slide 34 đếm mỗi user input cung cấp distinct application-oriented data.",
      "slides": [
        34
      ],
      "sourceId": "SPM-210",
      "sourceType": "slides",
      "id": "SLIDE-SPM-210"
    },
    {
      "part": 2,
      "question": "Ví dụ nào là user output?",
      "options": [
        "Báo cáo cung cấp thông tin ứng dụng",
        "Đầu vào cung cấp dữ liệu ứng dụng mới",
        "Tệp dữ liệu logic của cơ sở dữ liệu",
        "Giao diện truyền tin sang hệ thống khác"
      ],
      "correct": 0,
      "explanation": "Slide 34 nêu reports, screens, error messages là các dạng output.",
      "slides": [
        34
      ],
      "sourceId": "SPM-211",
      "sourceType": "slides",
      "id": "SLIDE-SPM-211"
    },
    {
      "part": 2,
      "question": "Báo cáo có 20 trường dữ liệu được đếm thế nào về output?",
      "options": [
        "Không đếm riêng từng trường như một output",
        "Đếm 20 inquiries dù báo cáo không tạo phản hồi tức thời",
        "Đếm 20 outputs tương ứng với 20 trường trong báo cáo",
        "Đếm 20 inputs vì mỗi trường đều biểu diễn dữ liệu"
      ],
      "correct": 0,
      "explanation": "Các individual data items trong report không được đếm riêng.",
      "slides": [
        34
      ],
      "sourceId": "SPM-212",
      "sourceType": "slides",
      "id": "SLIDE-SPM-212"
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
      "question": "Files trong miền thông tin là loại tệp nào?",
      "options": [
        "Nhóm dữ liệu chủ có tính logic",
        "Mỗi dòng dữ liệu trong cơ sở dữ liệu",
        "Chỉ tệp vật lý có phần mở rộng nhất định",
        "Chỉ thư mục cài đặt chương trình"
      ],
      "correct": 0,
      "explanation": "Slide 35 xác định logical master file là một logical grouping of data.",
      "slides": [
        35
      ],
      "sourceId": "SPM-216",
      "sourceType": "slides",
      "id": "SLIDE-SPM-216"
    },
    {
      "part": 2,
      "question": "External interfaces dùng để làm gì?",
      "options": [
        "Nhóm dữ liệu logic được giữ trong cơ sở dữ liệu nội bộ",
        "Giao diện máy đọc được truyền tin sang hệ thống khác",
        "Màn hình cung cấp thông tin ứng dụng cho người dùng",
        "Đầu vào trực tuyến tạo phản hồi trực tuyến tức thời"
      ],
      "correct": 1,
      "explanation": "Slide 35 đếm machine-readable interfaces dùng truyền thông tin tới another system.",
      "slides": [
        35
      ],
      "sourceId": "SPM-218",
      "sourceType": "slides",
      "id": "SLIDE-SPM-218"
    },
    {
      "part": 2,
      "question": "Công thức FP nào được trình bày trong bài giảng?",
      "options": [
        "FP = count total ÷ [0.65 + 0.01 × ΣFi]",
        "FP = count total × [0.65 + 0.01 × ΣFi]",
        "FP = count total × [1 + 0.65 × ΣFi]",
        "FP = count total + [0.65 + 0.01 × ΣFi]"
      ],
      "correct": 1,
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
      "question": "Fi trong công thức FP có vai trò gì?",
      "options": [
        "Số dòng mã trong từng tệp",
        "Số lỗi trên mỗi nghìn dòng mã",
        "Số tháng công của mỗi nhân viên",
        "Giá trị điều chỉnh độ phức tạp"
      ],
      "correct": 3,
      "explanation": "Slide 36 gọi Fi là complexity adjustment values.",
      "slides": [
        36
      ],
      "sourceId": "SPM-221",
      "sourceType": "slides",
      "id": "SLIDE-SPM-221"
    },
    {
      "part": 2,
      "question": "Nếu count total = 100 và ΣFi = 35, FP bằng bao nhiêu?",
      "options": [
        "135",
        "35",
        "65",
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
      "question": "Metric nào đo năng suất theo FP?",
      "options": [
        "FP per person-month",
        "Dollars per FP",
        "Errors per FP",
        "Pages of documentation per FP"
      ],
      "correct": 0,
      "explanation": "FP trên tháng công liên hệ chức năng cung cấp với công sức.",
      "slides": [
        39
      ],
      "sourceId": "SPM-234",
      "sourceType": "slides",
      "id": "SLIDE-SPM-234"
    },
    {
      "part": 2,
      "question": "Metric nào chuẩn hóa số lỗi theo chức năng?",
      "options": [
        "Dollars per LOC",
        "LOC per person-month",
        "Errors per FP",
        "Pages per KLOC"
      ],
      "correct": 2,
      "explanation": "Slide 39 nêu Errors per FP.",
      "slides": [
        39
      ],
      "sourceId": "SPM-235",
      "sourceType": "slides",
      "id": "SLIDE-SPM-235"
    },
    {
      "part": 2,
      "question": "Metric nào chuẩn hóa chi phí theo chức năng?",
      "options": [
        "Dollars per FP",
        "FP per person-month",
        "Pages per KLOC",
        "Defects per KLOC"
      ],
      "correct": 0,
      "explanation": "$ per FP là chi phí trên điểm chức năng.",
      "slides": [
        39
      ],
      "sourceId": "SPM-236",
      "sourceType": "slides",
      "id": "SLIDE-SPM-236"
    },
    {
      "part": 2,
      "question": "Cặp metric nào đo mật độ khuyết tật theo hai hướng chuẩn hóa?",
      "options": [
        "Dollars per LOC và FP per person-month",
        "Errors per FP và pages per KLOC",
        "LOC per person-month và dollars per FP",
        "Defects per KLOC và defects per FP"
      ],
      "correct": 3,
      "explanation": "Cả hai lấy defects làm tử số, với kích thước mã hoặc chức năng làm mẫu số.",
      "slides": [
        30,
        39
      ],
      "sourceId": "SPM-238",
      "sourceType": "slides",
      "id": "SLIDE-SPM-238"
    },
    {
      "part": 2,
      "question": "Chất lượng hệ thống phụ thuộc những sản phẩm công việc nào?",
      "options": [
        "Phạm vi, ước lượng nỗ lực, phân công, lịch trình",
        "Đặc tả yêu cầu, thiết kế, mã nguồn, ca kiểm thử",
        "Ngày bắt đầu, ngày kết thúc, đơn vị công, nhân lực",
        "Bảng rủi ro, phiếu rủi ro, mốc, danh mục nguồn lực"
      ],
      "correct": 1,
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
      "question": "Mô hình thiết kế có vai trò gì?",
      "options": [
        "Đếm số khách hàng",
        "Tính số tháng công",
        "Mô hình hóa lời giải",
        "Ghi nhận lỗi sau bàn giao"
      ],
      "correct": 2,
      "explanation": "Design models mô hình hóa solution.",
      "slides": [
        40
      ],
      "sourceId": "SPM-241",
      "sourceType": "slides",
      "id": "SLIDE-SPM-241"
    },
    {
      "part": 2,
      "question": "Các ca kiểm thử có vai trò gì đối với chất lượng?",
      "options": [
        "Thay thế mọi đặc tả yêu cầu",
        "Thực thi phần mềm để phát hiện lỗi",
        "Xác định số giao diện máy đọc được",
        "Quyết định số người trong tổ chức"
      ],
      "correct": 1,
      "explanation": "Slide 40 nêu tests exercise the software to uncover errors.",
      "slides": [
        40
      ],
      "sourceId": "SPM-242",
      "sourceType": "slides",
      "id": "SLIDE-SPM-242"
    },
    {
      "part": 2,
      "question": "Correctness thể hiện điều gì?",
      "options": [
        "Thân thiện với người dùng khi học hệ thống",
        "Dễ sửa đổi khi khách hàng thay đổi yêu cầu",
        "Thực hiện chức năng được yêu cầu",
        "Chống chịu tấn công cố ý hoặc vô tình"
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
      "question": "Correctness thường được đo bằng metric nào trong khoảng một năm?",
      "options": [
        "Defects per KLOC",
        "LOC per person-month",
        "Pages of documentation per KLOC",
        "Dollars per LOC"
      ],
      "correct": 0,
      "explanation": "Correctness có thể được đo bằng khuyết tật trên KLOC, đếm trong một khoảng chuẩn, thường là một năm.",
      "slides": [
        41
      ],
      "sourceId": "SPM-244",
      "sourceType": "slides",
      "id": "SLIDE-SPM-244"
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
      "question": "Chỉ đo thời gian sửa mã có bao phủ đủ MTTC không?",
      "options": [
        "Phạm vi đo thiếu phân tích, thiết kế, kiểm thử và phân phối thay đổi",
        "Phạm vi đo phải đổi sang defects per FP",
        "Phạm vi đo đầy đủ vì MTTC chỉ gồm sửa mã",
        "Phạm vi đo đúng nếu hệ thống có nhiều files"
      ],
      "correct": 0,
      "explanation": "MTTC bao trùm toàn bộ các bước thay đổi được nêu, không chỉ implementation.",
      "slides": [
        41
      ],
      "sourceId": "SPM-249",
      "sourceType": "slides",
      "id": "SLIDE-SPM-249"
    },
    {
      "part": 2,
      "question": "Integrity đo khả năng nào của hệ thống?",
      "options": [
        "Giúp người dùng học và dùng với hiệu quả vừa phải",
        "Sửa đổi phần mềm khi môi trường vận hành thay đổi",
        "Thực hiện các chức năng mà đặc tả yêu cầu mô tả",
        "Chống chịu tấn công vào an toàn hệ thống"
      ],
      "correct": 3,
      "explanation": "Slide 42 định nghĩa integrity bằng ability to withstand attacks to its security.",
      "slides": [
        42
      ],
      "sourceId": "SPM-252",
      "sourceType": "slides",
      "id": "SLIDE-SPM-252"
    },
    {
      "part": 2,
      "question": "Threat là gì?",
      "options": [
        "Xác suất tấn công xảy ra trong thời gian cho trước",
        "Thời gian từ phân tích yêu cầu thay đổi đến phân phối",
        "Tỷ lệ lỗi đã được tìm thấy trước thời điểm bàn giao",
        "Xác suất tấn công bị hệ thống đẩy lùi khi nó xuất hiện"
      ],
      "correct": 0,
      "explanation": "Slide 43 định nghĩa threat bằng probability attack will occur within a given time.",
      "slides": [
        43
      ],
      "sourceId": "SPM-256",
      "sourceType": "slides",
      "id": "SLIDE-SPM-256"
    },
    {
      "part": 2,
      "question": "Security là gì?",
      "options": [
        "Thời gian trung bình từ yêu cầu thay đổi đến phân phối",
        "Xác suất tấn công xuất hiện trong một khoảng thời gian",
        "Tỷ lệ lỗi trước bàn giao trên tổng lỗi được phát hiện",
        "Xác suất tấn công bị đẩy lùi"
      ],
      "correct": 3,
      "explanation": "Slide 43 định nghĩa security là xác suất attack will be repelled.",
      "slides": [
        43
      ],
      "sourceId": "SPM-257",
      "sourceType": "slides",
      "id": "SLIDE-SPM-257"
    },
    {
      "part": 2,
      "question": "Usability lượng hóa điều gì?",
      "options": [
        "Mức độ ổn định của cơ cấu quản lý",
        "Mức độ phức tạp của mọi tệp vật lý",
        "Mức độ thân thiện với người dùng",
        "Mức độ chính xác của chi phí thiết bị"
      ],
      "correct": 2,
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
      "question": "Usability xem xét kỹ năng nào khi học hệ thống?",
      "options": [
        "Kinh nghiệm nhóm phát triển trong miền ứng dụng",
        "Kỹ năng chuyên môn cần để xây dựng phần mềm mới",
        "Kỹ năng thể chất hoặc trí tuệ cần thiết",
        "Số người được phân công thiết kế tài liệu hướng dẫn"
      ],
      "correct": 2,
      "explanation": "Slide 45 nêu physical and/or intellectual skill required to learn.",
      "slides": [
        45
      ],
      "sourceId": "SPM-262",
      "sourceType": "slides",
      "id": "SLIDE-SPM-262"
    },
    {
      "part": 2,
      "question": "Usability xem xét khoảng thời gian học sử dụng nào?",
      "options": [
        "Thời gian để sửa và phân phối một thay đổi",
        "Thời gian để biên dịch mọi bản mã nguồn",
        "Thời gian để sử dụng hệ thống đạt mức hiệu quả vừa phải",
        "Thời gian để hoàn tất mua phần cứng"
      ],
      "correct": 2,
      "explanation": "Slide 45 dùng time required to become moderately efficient in use.",
      "slides": [
        45
      ],
      "sourceId": "SPM-263",
      "sourceType": "slides",
      "id": "SLIDE-SPM-263"
    },
    {
      "part": 2,
      "question": "Tăng năng suất do hệ thống được so với cơ sở nào?",
      "options": [
        "Năng suất dự kiến của nhóm phát triển",
        "Tổng chức năng được đếm trong FP",
        "Cách làm mà hệ thống mới thay thế",
        "Số khuyết tật ghi nhận sau bàn giao"
      ],
      "correct": 2,
      "explanation": "Slide 45 yêu cầu net increase over the approach the system replaces.",
      "slides": [
        45
      ],
      "sourceId": "SPM-264",
      "sourceType": "slides",
      "id": "SLIDE-SPM-264"
    },
    {
      "part": 2,
      "question": "Bảng hỏi thái độ người dùng hỗ trợ đánh giá khía cạnh usability nào?",
      "options": [
        "Đo xác suất một cuộc tấn công sẽ được đẩy lùi",
        "Đếm số đầu vào và đầu ra của miền thông tin",
        "Tính thời gian trung bình phân tích và sửa đổi mã",
        "Đánh giá chủ quan của người dùng"
      ],
      "correct": 3,
      "explanation": "Slide 45 nêu subjective assessment of users attitudes, sometimes through questionnaire.",
      "slides": [
        45
      ],
      "sourceId": "SPM-266",
      "sourceType": "slides",
      "id": "SLIDE-SPM-266"
    },
    {
      "part": 2,
      "question": "DRE đo đặc tính nào của hoạt động bảo đảm và kiểm soát chất lượng?",
      "options": [
        "Khả năng tăng số trang tài liệu mà không đổi phần mềm",
        "Khả năng lọc lỗi trong các hoạt động khung quá trình",
        "Khả năng xác định số interfaces trong miền thông tin",
        "Khả năng tuyển thêm người sau khi kết thúc dự án"
      ],
      "correct": 1,
      "explanation": "DRE đo filtering ability của QA và control xuyên suốt process framework activities.",
      "slides": [
        46
      ],
      "sourceId": "SPM-269",
      "sourceType": "slides",
      "id": "SLIDE-SPM-269"
    },
    {
      "part": 2,
      "question": "Trong DRE = E/(E+D), E là gì?",
      "options": [
        "Số lỗi tìm thấy trước bàn giao",
        "Tổng mọi lỗi trước và sau thời điểm bàn giao phần mềm",
        "Số lỗi được phát hiện sau khi người dùng nhận phần mềm",
        "Chênh lệch số lỗi trước và sau khi giao cho người dùng"
      ],
      "correct": 0,
      "explanation": "E là errors found before delivery.",
      "slides": [
        46
      ],
      "sourceId": "SPM-270",
      "sourceType": "slides",
      "id": "SLIDE-SPM-270"
    },
    {
      "part": 2,
      "question": "D trong DRE đếm khuyết tật được phát hiện vào thời điểm nào?",
      "options": [
        "Sau bàn giao",
        "Trước bàn giao",
        "Trước thu thập yêu cầu",
        "Trước xác định phạm vi"
      ],
      "correct": 0,
      "explanation": "D là defects found after delivery.",
      "slides": [
        46
      ],
      "sourceId": "SPM-271",
      "sourceType": "slides",
      "id": "SLIDE-SPM-271"
    },
    {
      "part": 2,
      "question": "Có 90 lỗi được phát hiện trước bàn giao và 10 defects sau bàn giao. DRE bằng bao nhiêu?",
      "options": [
        "9",
        "0.9",
        "0.1",
        "1.1"
      ],
      "correct": 1,
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
        "Chỉ chi phí mua công cụ, bỏ qua nỗ lực và thời gian",
        "Nguồn lực, chi phí và lịch trình",
        "Chỉ nỗ lực lập trình, bỏ qua tài nguyên và chi phí",
        "Chỉ thời gian kiểm thử, bỏ qua các công việc khác"
      ],
      "correct": 1,
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
        "Từ lúc bắt đầu đến lúc kết thúc dự án",
        "Chỉ thời gian chạy một chương trình",
        "Chỉ thời gian họp khởi động"
      ],
      "correct": 1,
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
        "Nhiệm vụ, mốc, sản phẩm bàn giao, ngày bắt đầu, ngày kết thúc, đơn vị công",
        "Mô tả, sẵn có, lúc cần, thời lượng dùng, người cung cấp, chi phí mua",
        "Dữ liệu/điều khiển, chức năng, hiệu năng, ràng buộc, giao diện, độ tin cậy",
        "Nhân lực, vị trí tổ chức, chuyên môn, kinh nghiệm, kỹ năng, thời lượng"
      ],
      "correct": 2,
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
        "Nguồn lực môi trường",
        "Nỗ lực phát triển",
        "Phạm vi phần mềm",
        "Hiệu quả lọc lỗi"
      ],
      "correct": 2,
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
        "Có nguồn khác cung cấp giải pháp hay không?",
        "Ai sẽ sử dụng giải pháp sau khi phát triển?",
        "Giải pháp thành công mang lại lợi ích kinh tế gì?",
        "Ai đứng sau yêu cầu thực hiện công việc này?"
      ],
      "correct": 2,
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
        "Tính xác suất đẩy lùi tấn công",
        "Xác định số dòng mã phải viết",
        "Đo thời gian trung bình sửa lỗi",
        "Làm rõ nguồn khởi xướng yêu cầu"
      ],
      "correct": 3,
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
        "Có nguồn khác cung cấp giải pháp không?",
        "Có bao nhiêu màn hình cần kiểm thử hôm nay?",
        "Có bao nhiêu files vật lý trên máy phát triển?",
        "Có bao nhiêu lỗi được đếm trên KLOC?"
      ],
      "correct": 0,
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
        "Sau khi mọi nhân viên rời nhóm",
        "Sau khi đã kết thúc toàn bộ dự án"
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
        "Khẳng định mọi yêu cầu đều khả thi trước khi hiểu phạm vi",
        "Chỉ xác định nhóm sẽ sử dụng công cụ phát triển nào",
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
        "Tính hiệu quả lọc lỗi xuyên suốt các hoạt động quá trình",
        "Đánh giá thái độ người dùng khi đã sử dụng hiệu quả"
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
        "Một thuộc chuyên môn nhân lực, một thuộc vị trí tổ chức",
        "Một thuộc công cụ môi trường, một thuộc cấu phần tái sử dụng",
        "Cả hai đều chỉ là công cụ vì cùng được gọi là phần mềm",
        "Cả hai đều thuộc nhân lực vì cùng cần người thực hiện"
      ],
      "correct": 1,
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
        "Tình trạng sẵn có",
        "Thời điểm cần dùng"
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
        "Mô tả, sẵn có, lúc cần và số defects sau bàn giao",
        "Mô tả, lúc cần, thời lượng dùng và số trường báo cáo",
        "Sẵn có, lúc cần, thời lượng dùng và mức độ thân thiện",
        "Mô tả, sẵn có, lúc cần và thời lượng dùng"
      ],
      "correct": 3,
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
      "question": "Chưa biết thiết bị có được cấp không là thiếu đặc trưng nguồn lực nào?",
      "options": [
        "Thời điểm cần",
        "Tình trạng sẵn có",
        "Mô tả nguồn lực",
        "Tên phần mềm"
      ],
      "correct": 1,
      "explanation": "Statement of availability là đặc trưng riêng cần xác định.",
      "slides": [
        51
      ],
      "sourceId": "SPM-304",
      "sourceType": "slides",
      "id": "SLIDE-SPM-304"
    },
    {
      "part": 3,
      "question": "“Cần máy chủ từ đầu tháng 6” thể hiện đặc trưng nào?",
      "options": [
        "Khoảng thời gian nguồn lực được sử dụng",
        "Mô tả độ tin cậy của phần mềm",
        "Thời điểm nguồn lực được yêu cầu",
        "Mức kỹ năng của người dùng cuối"
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
        "Mô tả loại công cụ được lựa chọn cho dự án",
        "Thời lượng sử dụng nguồn lực",
        "Tình trạng có thể sử dụng nguồn lực hay không"
      ],
      "correct": 2,
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
        "Chọn chức danh cao nhất mà không xét chuyên môn",
        "Chọn số người trước khi ước lượng nỗ lực phát triển"
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
        "Thời điểm cần và thời lượng dùng",
        "Vị trí tổ chức và chuyên môn",
        "Tình trạng sẵn có và chi phí mua",
        "Quy mô sản phẩm và độ phức tạp"
      ],
      "correct": 1,
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
        "Một người chỉ được quản lý và không được làm kỹ thuật",
        "Luôn cần một nhóm chuyên biệt cho từng nhiệm vụ",
        "Không cần tham vấn dù thiếu kỹ năng chuyên môn",
        "Một người làm các nhiệm vụ, tham vấn chuyên gia khi cần"
      ],
      "correct": 3,
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
        "Năm",
        "Hai",
        "Bốn"
      ],
      "correct": 3,
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
        "Không liên quan phần mềm hiện tại và nhóm chưa biết miền ứng dụng",
        "Phải viết hoàn toàn mới và không được tái sử dụng",
        "Tương tự phần mềm hiện tại và nhóm có đầy đủ kinh nghiệm trong miền ứng dụng",
        "Chỉ là công cụ phần cứng mà nhóm từng mua"
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
        "Chỉ mã nguồn, không tính các đặc tả và thiết kế cũ",
        "Chỉ thiết kế, không tính các đặc tả và dữ liệu kiểm thử",
        "Chỉ dữ liệu kiểm thử, không tính mã và thiết kế cũ",
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
        "Chỉ nơi lưu tài sản cũ, không cần xem kinh nghiệm nhóm",
        "Chỉ số thành viên của nhóm, không cần xem miền ứng dụng",
        "Chỉ công cụ dùng để tạo tài sản, không cần xét sửa đổi",
        "Kinh nghiệm miền ứng dụng và mức sửa đổi cần thiết"
      ],
      "correct": 3,
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
        "Thành phần liên quan cần sửa nhiều mà nhóm chỉ có kinh nghiệm hạn chế",
        "Thành phần từ dự án tương tự mà nhóm đã có đầy đủ kinh nghiệm",
        "Thành phần phải xây riêng cho dự án hiện tại",
        "Phần mềm hiện có có thể mua từ một nhà cung cấp bên thứ ba"
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
        "Khoảng thời gian cần và khả năng sẵn có",
        "Chỉ danh sách tên thiết bị, bỏ qua thời điểm sử dụng",
        "Chỉ phần cứng cần thiết, không phải xem xét phần mềm",
        "Chỉ thời điểm sử dụng, không cần xác nhận sẵn có"
      ],
      "correct": 0,
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
      "question": "Công cụ đang được dự án khác dùng trong giai đoạn cần: phải kiểm tra điều gì?",
      "options": [
        "Khả năng sẵn có trong giai đoạn cần",
        "Chỉ sự tồn tại của công cụ trong danh mục tài sản",
        "Chỉ tên nhà cung cấp của công cụ đã được mua",
        "Chỉ khả năng dùng công cụ sau khi dự án hoàn tất"
      ],
      "correct": 0,
      "explanation": "Slide 55 yêu cầu xác nhận availability trong time window cần thiết.",
      "slides": [
        55
      ],
      "sourceId": "SPM-332",
      "sourceType": "slides",
      "id": "SLIDE-SPM-332"
    },
    {
      "part": 3,
      "question": "Những nhóm biến nào ảnh hưởng chi phí và nỗ lực phần mềm?",
      "options": [
        "Chỉ kỹ thuật và môi trường, bỏ qua con người cùng chính trị",
        "Chỉ môi trường và chính trị, bỏ qua con người cùng kỹ thuật",
        "Chỉ con người và kỹ thuật, bỏ qua môi trường cùng chính trị",
        "Con người, kỹ thuật, môi trường và chính trị"
      ],
      "correct": 3,
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
        "Chỉ kế hoạch chưa từng được triển khai",
        "Các dự án tương tự đã hoàn thành",
        "Mọi dự án chưa xác định phạm vi",
        "Chỉ các dự án không liên quan miền ứng dụng"
      ],
      "correct": 1,
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
        "Chỉ công thức xác suất tấn công và đẩy lùi tấn công",
        "Chỉ bảng đếm lỗi trước và sau bàn giao phần mềm",
        "Chỉ metric thái độ người dùng đối với hệ thống",
        "Một hoặc nhiều mô hình thực nghiệm"
      ],
      "correct": 3,
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
        "Chỉ thiết bị sẵn có, không xét công việc phải thực hiện",
        "Chỉ thời điểm họp, không xét hoạt động kỹ nghệ phần mềm",
        "Chức năng chính và hoạt động liên quan",
        "Chỉ chức danh trong nhóm, không xét chức năng sản phẩm"
      ],
      "correct": 2,
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
        "Dựa trên correctness và integrity",
        "Dựa trên LOC và FP",
        "Dựa trên threat và security",
        "Dựa trên MTTC và DRE"
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
        "Kỹ thuật phân rã dựa trên LOC",
        "Phân loại thành phần tái sử dụng",
        "Kỹ thuật phân rã dựa trên FP",
        "Mô hình thực nghiệm"
      ],
      "correct": 3,
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
        "Chỉ phân loại kinh nghiệm nhóm đối với thành phần tái sử dụng",
        "Kỹ thuật phân rã hoặc mô hình thực nghiệm",
        "Chỉ bảng đặc tả nguồn lực với bốn đặc trưng cần thiết"
      ],
      "correct": 2,
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
      "question": "Vấn đề nào không thuộc nhóm rủi ro kỹ thuật trong bài giảng?",
      "options": [
        "Xác minh phần mềm",
        "Ngân sách dự án",
        "Thiết kế phần mềm",
        "Bảo trì phần mềm"
      ],
      "correct": 1,
      "explanation": "Slide 60 xếp ngân sách vào rủi ro dự án, còn thiết kế, xác minh và bảo trì vào rủi ro kỹ thuật.",
      "slides": [
        60
      ],
      "sourceId": "SPM-353",
      "sourceType": "slides",
      "id": "SLIDE-SPM-353"
    },
    {
      "part": 4,
      "question": "Rủi ro nào đe dọa kế hoạch dự án?",
      "options": [
        "Rủi ro kinh doanh",
        "Rủi ro kỹ thuật",
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
      "question": "Thiếu nhân lực làm trễ lịch và tăng chi phí thuộc loại rủi ro nào?",
      "options": [
        "Rủi ro giao diện",
        "Rủi ro dự án",
        "Rủi ro kinh doanh",
        "Rủi ro xác minh"
      ],
      "correct": 1,
      "explanation": "Nhân sự và nguồn lực thuộc các vấn đề được liệt kê cho rủi ro dự án.",
      "slides": [
        60
      ],
      "sourceId": "SPM-356",
      "sourceType": "slides",
      "id": "SLIDE-SPM-356"
    },
    {
      "part": 4,
      "question": "Khó triển khai giao diện, đe dọa chất lượng thuộc loại rủi ro nào?",
      "options": [
        "Rủi ro ngân sách",
        "Rủi ro kỹ thuật",
        "Rủi ro kinh doanh",
        "Rủi ro khách hàng"
      ],
      "correct": 1,
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
        "Khả năng phân bổ nhân lực phát triển phần mềm",
        "Khả năng đáp ứng lịch triển khai phần mềm",
        "Khả năng tồn tại của phần mềm sẽ xây dựng",
        "Khả năng tuân thủ đặc tả giao diện phần mềm"
      ],
      "correct": 2,
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
        "Chỉ thay đổi mức tải nguồn lực của kế hoạch",
        "Việc triển khai khó khăn hoặc không thể thực hiện",
        "Chỉ phát sinh bất đồng lịch họp khách hàng",
        "Chỉ làm thay đổi quy mô thị trường dự kiến"
      ],
      "correct": 1,
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
        "Chuẩn bị chi phí và lịch trình cho dự phòng",
        "Xếp mức xác suất và hậu quả cho từng rủi ro",
        "Tinh chỉnh điều kiện thành các điều kiện con",
        "Xác định có hệ thống các đe dọa đối với kế hoạch"
      ],
      "correct": 3,
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
        "Đặc điểm khách hàng",
        "Quy mô sản phẩm",
        "Định nghĩa quy trình",
        "Môi trường phát triển"
      ],
      "correct": 1,
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
        "Ảnh hưởng kinh doanh",
        "Môi trường phát triển",
        "Quy mô nhân sự",
        "Công nghệ xây dựng"
      ],
      "correct": 0,
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
        "Định nghĩa quy trình",
        "Quy mô sản phẩm",
        "Đặc điểm khách hàng",
        "Kinh nghiệm nhân viên"
      ],
      "correct": 2,
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
        "Đặc điểm khách hàng",
        "Ảnh hưởng kinh doanh",
        "Định nghĩa quy trình",
        "Quy mô sản phẩm"
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
        "Công nghệ xây dựng",
        "Đặc điểm khách hàng",
        "Quy mô sản phẩm"
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
        "Định nghĩa quy trình",
        "Công nghệ xây dựng",
        "Ảnh hưởng kinh doanh"
      ],
      "correct": 2,
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
        "Quy mô và kinh nghiệm nhân viên",
        "Mức độ hiểu biết khách hàng",
        "Các ràng buộc của thị trường",
        "Môi trường công cụ phát triển"
      ],
      "correct": 0,
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
      "question": "Xác suất cao hơn có nhất thiết gây hậu quả nặng hơn không?",
      "options": [
        "Có, mọi rủi ro cùng chung mức tổn thất",
        "Có, xác suất xác định toàn bộ mức tác động",
        "Không, vì chỉ hậu quả cần được ước lượng",
        "Không, phải đánh giá hậu quả riêng"
      ],
      "correct": 3,
      "explanation": "Ước lượng rủi ro đánh giá riêng khả năng xảy ra và hậu quả. Bảng ví dụ có rủi ro dễ xảy ra hơn nhưng tác động nhẹ hơn.",
      "slides": [
        63,
        64
      ],
      "sourceId": "SPM-377",
      "sourceType": "slides",
      "id": "SLIDE-SPM-377"
    },
    {
      "part": 4,
      "question": "Vì sao không thể cho rằng số Impact càng lớn thì hậu quả càng nặng?",
      "options": [
        "Chú giải đặt 1 là thảm họa và 4 là không đáng kể",
        "Thang ghi 1 là không đáng kể còn 4 là hậu quả thảm họa",
        "Thang gộp xác suất với tác động thành một mức số duy nhất",
        "Thang chỉ so sánh tác động khi hai rủi ro có cùng xác suất"
      ],
      "correct": 0,
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
        "Chia rủi ro thành các rủi ro chi tiết hơn",
        "Chuyển mọi rủi ro thành sự kiện chắc chắn",
        "Thay xác suất bằng số nhiệm vụ dự án",
        "Xóa rủi ro có tác động cao khỏi kế hoạch"
      ],
      "correct": 0,
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
        "Mã nguồn, kiểm thử, cấu hình",
        "Điều kiện, chuyển tiếp, hậu quả"
      ],
      "correct": 3,
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
      "question": "Cách nào diễn đạt rủi ro theo mẫu CTC?",
      "options": [
        "Có điều kiện X, chỉ ghi người phụ trách mà bỏ hậu quả Y",
        "Có hậu quả Y, khẳng định điều kiện X chắc chắn tồn tại",
        "Có điều kiện X, khẳng định hậu quả Y chắc chắn xảy ra",
        "Với điều kiện X, có lo ngại rằng hậu quả Y có thể xảy ra"
      ],
      "correct": 3,
      "explanation": "Mẫu dùng Given that condition và concern that possibly consequence.",
      "slides": [
        65
      ],
      "sourceId": "SPM-386",
      "sourceType": "slides",
      "id": "SLIDE-SPM-386"
    },
    {
      "part": 4,
      "question": "Trong tinh chỉnh CTC, thành phần nào được phân rã thành điều kiện con?",
      "options": [
        "Điều kiện",
        "Người được giao",
        "Cột trạng thái",
        "Ngày tạo hồ sơ"
      ],
      "correct": 0,
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
        "Được xem là đã hoàn thành",
        "Tự động chuyển cho khách hàng",
        "Bỏ khỏi ứng dụng",
        "Phải phát triển riêng"
      ],
      "correct": 3,
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
      "question": "Điều kiện con liên quan bên thứ ba trong phiếu rủi ro là gì?",
      "options": [
        "Chuẩn giao diện cấu phần chưa được hoàn chỉnh",
        "Phần chức năng còn lại phải được phát triển riêng",
        "Ngôn ngữ cấu phần không được môi trường hỗ trợ",
        "Bên thứ ba không biết chuẩn thiết kế nội bộ"
      ],
      "correct": 3,
      "explanation": "Subcondition 1 nói cấu phần được bên thứ ba phát triển không biết internal design standards.",
      "slides": [
        66
      ],
      "sourceId": "SPM-391",
      "sourceType": "slides",
      "id": "SLIDE-SPM-391"
    },
    {
      "part": 4,
      "question": "Khi chọn giao thức giao diện, phiếu rủi ro yêu cầu xét thêm yếu tố nào?",
      "options": [
        "Thời lượng của cuộc họp giới thiệu công cụ",
        "Cấu trúc thành phần phần mềm",
        "Số người dùng đã chống đối hệ thống",
        "Kỹ năng của người lập báo cáo earned value"
      ],
      "correct": 1,
      "explanation": "Biện pháp 2 trên phiếu yêu cầu consider component structure when deciding on interface protocol.",
      "slides": [
        66
      ],
      "sourceId": "SPM-392",
      "sourceType": "slides",
      "id": "SLIDE-SPM-392"
    },
    {
      "part": 4,
      "question": "Điều kiện con liên quan ngôn ngữ trong phiếu rủi ro là gì?",
      "options": [
        "Ngôn ngữ cấu phần không được môi trường đích hỗ trợ",
        "Chức năng còn lại phải được nhóm phát triển riêng",
        "Chuẩn thiết kế giao diện cấu phần chưa hoàn chỉnh",
        "Bên thứ ba không biết các chuẩn thiết kế nội bộ"
      ],
      "correct": 0,
      "explanation": "Subcondition 3 ghi ngôn ngữ triển khai không được target environment hỗ trợ.",
      "slides": [
        66
      ],
      "sourceId": "SPM-393",
      "sourceType": "slides",
      "id": "SLIDE-SPM-393"
    },
    {
      "part": 4,
      "question": "Biện pháp nào giảm rủi ro bên thứ ba không biết chuẩn thiết kế nội bộ?",
      "options": [
        "Thúc đẩy hoàn tất chuẩn giao diện cấu phần",
        "Điều chỉnh lịch xây thêm 18 cấu phần riêng",
        "Kiểm tra khả năng bổ sung hỗ trợ ngôn ngữ",
        "Liên hệ bên thứ ba để kiểm tra tuân thủ chuẩn thiết kế"
      ],
      "correct": 3,
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
        "Đếm cấu phần liên quan và hỏi chuẩn nội bộ của bên thứ ba",
        "Số cấu phần liên quan và khả năng có hỗ trợ ngôn ngữ",
        "Đếm cấu phần liên quan và cập nhật tên người nhận rủi ro"
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
      "question": "Khoản RE trong phiếu rủi ro được phân bổ vào đâu?",
      "options": [
        "Thời lượng của công cụ",
        "Mức tác động trong bảng",
        "Chi phí dự phòng dự án",
        "Số đếm chức năng ban đầu"
      ],
      "correct": 2,
      "explanation": "Phiếu thông tin rủi ro yêu cầu phân bổ khoản RE vào chi phí dự phòng của dự án.",
      "slides": [
        66
      ],
      "sourceId": "SPM-396",
      "sourceType": "slides",
      "id": "SLIDE-SPM-396"
    },
    {
      "part": 4,
      "question": "Dự phòng thiếu cấu phần tái sử dụng cần điều chỉnh lịch theo giả định nào?",
      "options": [
        "Giữ nguyên lịch và không điều chỉnh nhân lực",
        "Loại bỏ các chức năng mà khách hàng đã yêu cầu",
        "Phải tự xây thêm các cấu phần còn thiếu",
        "Coi các cấu phần chưa tích hợp là đã hoàn thành"
      ],
      "correct": 2,
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
        "Đã xác định được người khởi tạo phiếu rủi ro",
        "Đã ghi nhận mô tả rủi ro trong phiếu thông tin",
        "Các bước giảm thiểu không hiệu quả đến thời điểm quy định",
        "Các bước giảm thiểu đã được bắt đầu theo kế hoạch"
      ],
      "correct": 2,
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
        "Chuẩn thiết kế",
        "Danh sách rủi ro",
        "Lịch chi tiết",
        "Báo cáo tài chính"
      ],
      "correct": 2,
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
        "Không vượt số người được phân bổ tại cùng thời điểm",
        "Mọi nhiệm vụ phải có cùng thời lượng và ngày bắt đầu",
        "Mọi nhiệm vụ phải do cùng một thành viên thực hiện",
        "Tổng số nhiệm vụ phải bằng tổng số người được cấp"
      ],
      "correct": 0,
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
        "Chất lượng sản phẩm bằng một công thức",
        "Luồng nhiệm vụ của dự án bằng đồ họa",
        "Quyền truy cập người dùng theo tài khoản",
        "Danh sách thiết bị theo giá mua"
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
      "question": "Hồ sơ đã có task set nhưng chưa có hình biểu diễn luồng nhiệm vụ: thiếu gì?",
      "options": [
        "Work product",
        "Boundary times",
        "Critical path",
        "Task network"
      ],
      "correct": 3,
      "explanation": "Task network là hình biểu diễn luồng nhiệm vụ; task set là tập nhiệm vụ, mốc và sản phẩm bàn giao.",
      "slides": [
        69
      ],
      "sourceId": "SPM-408",
      "sourceType": "slides",
      "id": "SLIDE-SPM-408"
    },
    {
      "part": 5,
      "question": "Ba nhiệm vụ I.5 trong mạng ví dụ được thực hiện thế nào?",
      "options": [
        "Từng cặp thay thế nhau theo lịch khách hàng",
        "Tuần tự cho một chức năng khái niệm duy nhất",
        "Song song cho ba chức năng khái niệm khác nhau",
        "Độc lập hoàn toàn với proof of concept"
      ],
      "correct": 2,
      "explanation": "Chú thích nói three I.5 tasks applied in parallel to 3 different concept functions.",
      "slides": [
        70
      ],
      "sourceId": "SPM-412",
      "sourceType": "slides",
      "id": "SLIDE-SPM-412"
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
        "Nhóm nhiệm vụ chỉ do quản lý cấp cao làm",
        "Chuỗi nhiệm vụ dùng nhiều tài liệu nhất",
        "Chuỗi nhiệm vụ quyết định thời lượng dự án",
        "Nhóm nhiệm vụ có mọi ngày bắt đầu giống nhau"
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
      "question": "Thông tin nào là cơ sở cho việc lập lịch?",
      "options": [
        "Mức tác động trong bảng rủi ro",
        "Thái độ chủ quan của người dùng",
        "Ước lượng nỗ lực",
        "Số khuyết tật sau bàn giao"
      ],
      "correct": 2,
      "explanation": "Slide liệt kê estimates of effort cùng các cơ sở phân rã và chọn quy trình.",
      "slides": [
        71
      ],
      "sourceId": "SPM-420",
      "sourceType": "slides",
      "id": "SLIDE-SPM-420"
    },
    {
      "part": 5,
      "question": "Ngoài phân rã chức năng, lập lịch cần chọn những gì?",
      "options": [
        "Thang tác động và danh mục rủi ro",
        "Các tiêu chí và báo cáo kiểm toán",
        "Mô hình quy trình và tập nhiệm vụ",
        "Thang Fi và trọng số miền thông tin"
      ],
      "correct": 2,
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
        "Thời gian kiểm toán để xác nhận tuân thủ chuẩn",
        "Thời gian có khả năng nhất của từng nhiệm vụ",
        "Thời gian phát sinh tổn thất nếu rủi ro thành hiện thực",
        "Thời gian hoàn thành thực tế của việc đã kết thúc"
      ],
      "correct": 1,
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
        "Số chức năng cần hủy khỏi sản phẩm",
        "Mức tác động của mỗi rủi ro kỹ thuật",
        "Ngân sách mua công cụ cho toàn tổ chức",
        "Cửa sổ thời gian cho một nhiệm vụ"
      ],
      "correct": 3,
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
      "question": "Chỉ phân rã sản phẩm mà chưa phân rã công việc còn thiếu đầu vào nào?",
      "options": [
        "Ước lượng nỗ lực",
        "Chọn mô hình quy trình",
        "Chọn tập nhiệm vụ",
        "Phân rã nhiệm vụ"
      ],
      "correct": 3,
      "explanation": "Slide liệt kê riêng decomposition of tasks cùng decomposition of product function.",
      "slides": [
        71
      ],
      "sourceId": "SPM-424",
      "sourceType": "slides",
      "id": "SLIDE-SPM-424"
    },
    {
      "part": 5,
      "question": "Biểu đồ thời gian còn gọi là biểu đồ gì?",
      "options": [
        "CTC sheet",
        "Quality report",
        "Gantt chart",
        "Risk table"
      ],
      "correct": 2,
      "explanation": "Slide ghi Timeline chart (Gantt chart).",
      "slides": [
        72
      ],
      "sourceId": "SPM-425",
      "sourceType": "slides",
      "id": "SLIDE-SPM-425"
    },
    {
      "part": 5,
      "question": "Mỗi nhiệm vụ trong Gantt cần các dữ liệu nào?",
      "options": [
        "Xác suất, mức tác động và mã rủi ro",
        "Số lỗi, số khuyết tật và kích thước mã",
        "Nỗ lực, thời lượng và ngày bắt đầu",
        "Kỹ năng, thái độ và mức tăng năng suất"
      ],
      "correct": 2,
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
      "question": "Ngoài dữ liệu thời gian, Gantt có thể gắn nhiệm vụ với ai?",
      "options": [
        "Người cụ thể được phân công",
        "Nhà cung cấp đã rút tài trợ",
        "Người dùng đã mua sản phẩm",
        "Chuẩn ngôn ngữ đã bị loại bỏ"
      ],
      "correct": 0,
      "explanation": "Slide nêu may assign specific individuals.",
      "slides": [
        72
      ],
      "sourceId": "SPM-428",
      "sourceType": "slides",
      "id": "SLIDE-SPM-428"
    },
    {
      "part": 5,
      "question": "Bảng dự án lưu các ngày nào để theo dõi tiến độ?",
      "options": [
        "Chỉ ngày bắt đầu dự kiến và đơn vị công ước lượng",
        "Chỉ ngày bắt đầu thực tế và danh sách người phụ trách",
        "Chỉ ngày hoàn thành dự kiến và mô tả đầu ra nhiệm vụ",
        "Ngày bắt đầu và kết thúc dự kiến cùng thực tế"
      ],
      "correct": 3,
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
      "question": "Nhiệm vụ bắt đầu trễ kế hoạch: cần lưu gì trong bảng dự án?",
      "options": [
        "Cả ngày bắt đầu dự kiến và thực tế",
        "Chỉ ngày bắt đầu thực tế mới xảy ra",
        "Chỉ ngày kết thúc dự kiến của dự án",
        "Chỉ ngày bắt đầu dự kiến đã phê duyệt"
      ],
      "correct": 0,
      "explanation": "Bảng dự án lưu ngày dự kiến và thực tế; theo dõi lịch đối chiếu hai ngày bắt đầu này.",
      "slides": [
        73,
        74
      ],
      "sourceId": "SPM-430",
      "sourceType": "slides",
      "id": "SLIDE-SPM-430"
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
      "question": "Đánh giá kết quả review là một cách hỗ trợ hoạt động nào?",
      "options": [
        "Đếm điểm chức năng",
        "Theo dõi lịch dự án",
        "Phân loại nguồn lực",
        "Ước lượng kích thước mã"
      ],
      "correct": 1,
      "explanation": "Evaluating results of all reviews là một cách tracking the schedule.",
      "slides": [
        74
      ],
      "sourceId": "SPM-432",
      "sourceType": "slides",
      "id": "SLIDE-SPM-432"
    },
    {
      "part": 5,
      "question": "Theo dõi mốc dự án cần kiểm tra điều gì?",
      "options": [
        "Mốc có tên ngắn hơn các nhiệm vụ không?",
        "Mốc có được tất cả khách hàng đánh số không?",
        "Mốc có dùng cùng biểu tượng với rủi ro không?",
        "Mốc có đạt được đúng ngày dự kiến không?"
      ],
      "correct": 3,
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
        "Chuẩn áp dụng và nội dung mô tả quy trình",
        "Xác suất dự kiến và mức tác động của rủi ro"
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
        "Đánh giá chủ quan về tiến độ và vấn đề sắp tới",
        "Các mốc chính thức đã hoàn thành đúng ngày dự kiến",
        "Các ngày bắt đầu thực tế ghi trong bảng nhiệm vụ"
      ],
      "correct": 1,
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
      "question": "Tập cách theo dõi lịch phù hợp gồm những gì?",
      "options": [
        "Chỉ dùng ngày bắt đầu thực tế vì mọi nhận xét của kỹ sư đều không có ích",
        "Chỉ dùng kết quả review vì bảng dự án không có dữ liệu đối chiếu",
        "Chỉ dùng họp định kỳ vì các mốc chính thức không phản ánh tiến độ",
        "Dùng cả đối chiếu ngày, đánh giá review và trao đổi với người thực hiện"
      ],
      "correct": 3,
      "explanation": "Slide 74 kết hợp họp trạng thái, review, mốc, đối chiếu ngày và trao đổi không chính thức.",
      "slides": [
        74
      ],
      "sourceId": "SPM-436",
      "sourceType": "slides",
      "id": "SLIDE-SPM-436"
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
        "Nhiệm vụ nào tuần tự, nhiệm vụ nào song song",
        "Đơn vị công cùng ngày bắt đầu và kết thúc",
        "Người phụ trách cùng sản phẩm bàn giao",
        "Số người được phân bổ và số người có mặt"
      ],
      "correct": 0,
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
        "Nhiệm vụ song song và nhiệm vụ thực hiện tuần tự",
        "Mốc dự án và sản phẩm công việc phải bàn giao"
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
        "Xác định mốc",
        "Xác nhận nỗ lực",
        "Xác định kết quả",
        "Phân rã công việc"
      ],
      "correct": 1,
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
        "Xác định mốc",
        "Xác định trách nhiệm",
        "Phân rã công việc",
        "Phân bổ thời gian"
      ],
      "correct": 1,
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
        "Phân bổ thời gian",
        "Xác định đầu ra",
        "Phụ thuộc nhiệm vụ",
        "Xác nhận nỗ lực"
      ],
      "correct": 1,
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
        "Xác nhận nỗ lực",
        "Xác định trách nhiệm",
        "Phân bổ thời gian",
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
        "Quản lý phần mềm, nhân viên kỹ thuật và khách hàng",
        "Chỉ quản lý cấp cao, chỉ người thiết kế, người bảo trì",
        "Chỉ nhóm kỹ thuật, chỉ người lập lịch, người kiểm thử",
        "Quản lý phần mềm, chỉ nhóm SQA, người kiểm toán"
      ],
      "correct": 0,
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
        "Chỉ nhà cung cấp công cụ",
        "Chỉ người dùng cuối",
        "Chỉ người tạo phiếu rủi ro",
        "Ban quản lý"
      ],
      "correct": 3,
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
      "question": "Cách tiếp cận phát triển trong kế hoạch được cung cấp cho ai?",
      "options": [
        "Chỉ các thành viên thực hiện nhiệm vụ trên đường găng",
        "Chỉ các quản lý chịu trách nhiệm xác nhận ngân sách",
        "Chỉ các thành viên tham gia kiểm toán sản phẩm công việc",
        "Tất cả người liên quan tới dự án"
      ],
      "correct": 3,
      "explanation": "Slide nói overall approach for all people associated with the project.",
      "slides": [
        76
      ],
      "sourceId": "SPM-449",
      "sourceType": "slides",
      "id": "SLIDE-SPM-449"
    },
    {
      "part": 5,
      "question": "Kế hoạch dự án phải nêu cách xử lý chất lượng và thay đổi thế nào?",
      "options": [
        "Ước lượng nỗ lực và xác định thời lượng nhiệm vụ",
        "Truyền đạt nguồn lực và các đặc tính phạm vi sản phẩm",
        "Cách bảo đảm chất lượng và quản lý thay đổi",
        "Xác định ngày bắt đầu và kết thúc dự kiến của dự án"
      ],
      "correct": 2,
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
      "question": "SQA hướng tới những sản phẩm công việc nào?",
      "options": [
        "Chỉ sản phẩm công việc kỹ thuật đã được SQA chọn kiểm toán",
        "Chỉ chương trình thực thi sau khi đã hoàn tất kiểm thử",
        "Mọi sản phẩm công việc của kỹ nghệ phần mềm",
        "Chỉ báo cáo review kỹ thuật được nhóm phát triển tạo ra"
      ],
      "correct": 2,
      "explanation": "Slide yêu cầu every software engineering work product exhibits high quality.",
      "slides": [
        78
      ],
      "sourceId": "SPM-452",
      "sourceType": "slides",
      "id": "SLIDE-SPM-452"
    },
    {
      "part": 6,
      "question": "Ai có trách nhiệm tham gia chất lượng phần mềm?",
      "options": [
        "Chỉ các thành viên nhóm đảm bảo chất lượng của dự án",
        "Chỉ các quản lý nhận dữ liệu kiểm toán và báo cáo",
        "Mọi người trong quá trình kỹ nghệ phần mềm",
        "Chỉ những người trực tiếp lập trình và kiểm thử"
      ],
      "correct": 2,
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
      "question": "Số liệu đo lường giúp cải tiến chất lượng bằng cách nào?",
      "options": [
        "Xây dựng chiến lược cải tiến quy trình và chất lượng sản phẩm",
        "Chỉ thay việc đánh giá các sản phẩm công việc bằng số liệu",
        "Chỉ kết luận mọi yêu cầu ngầm đã trở thành chuẩn nội bộ",
        "Chỉ xác nhận ngày bắt đầu thực tế của từng nhiệm vụ"
      ],
      "correct": 0,
      "explanation": "Slide liên kết metrics với strategies improving software process và end product quality.",
      "slides": [
        78
      ],
      "sourceId": "SPM-454",
      "sourceType": "slides",
      "id": "SLIDE-SPM-454"
    },
    {
      "part": 6,
      "question": "Hai sản phẩm công việc của SQA được nêu là gì?",
      "options": [
        "Bảng dự án và lịch ngày bắt đầu thực tế của nhiệm vụ",
        "Mạng nhiệm vụ và danh sách sản phẩm phải bàn giao",
        "Kế hoạch SQA và báo cáo tóm tắt review kỹ thuật chính thức",
        "Phiếu thông tin rủi ro và bảng xác suất cùng tác động"
      ],
      "correct": 2,
      "explanation": "Slide nêu Software Quality Assurance Plan và formal technical review summary report.",
      "slides": [
        78
      ],
      "sourceId": "SPM-455",
      "sourceType": "slides",
      "id": "SLIDE-SPM-455"
    },
    {
      "part": 6,
      "question": "Quality of design liên quan nội dung nào?",
      "options": [
        "Mức độ bàn giao sản phẩm đúng lịch và ngân sách",
        "Mức độ tuân theo các đặc tả thiết kế khi chế tạo",
        "Các đặc tính mà người thiết kế quy định cho sản phẩm",
        "Mức độ quy trình điều chỉnh sau phản hồi về lỗi"
      ],
      "correct": 2,
      "explanation": "Quality of design là characteristics that designers specify for an item.",
      "slides": [
        79
      ],
      "sourceId": "SPM-458",
      "sourceType": "slides",
      "id": "SLIDE-SPM-458"
    },
    {
      "part": 6,
      "question": "Quality of conformance phản ánh điều gì?",
      "options": [
        "Tập đặc tính được người thiết kế quy định trước chế tạo",
        "Mức độ cải tiến quy trình dựa trên các số liệu đo lường",
        "Tập hoạt động kiểm toán và báo cáo cho ban quản lý",
        "Mức độ tuân theo đặc tả thiết kế khi chế tạo"
      ],
      "correct": 3,
      "explanation": "Slide định nghĩa conformance là degree design specifications followed during manufacturing.",
      "slides": [
        79
      ],
      "sourceId": "SPM-459",
      "sourceType": "slides",
      "id": "SLIDE-SPM-459"
    },
    {
      "part": 6,
      "question": "Sai lệch có thể xuất hiện trong những tài liệu hoặc sản phẩm nào?",
      "options": [
        "Chỉ báo cáo kiểm toán đã gửi cho quản lý cấp cao của tổ chức",
        "Chỉ sản phẩm kỹ thuật đã hoàn tất kiểm thử và được bàn giao",
        "Chỉ tài liệu mô tả quy trình do nhóm SQA trực tiếp tạo ra",
        "Kế hoạch dự án, mô tả quy trình, chuẩn áp dụng và sản phẩm kỹ thuật"
      ],
      "correct": 3,
      "explanation": "Slide 83 nêu sai lệch trong project plan, process description, applicable standards hoặc technical work products.",
      "slides": [
        83
      ],
      "sourceId": "SPM-461",
      "sourceType": "slides",
      "id": "SLIDE-SPM-461"
    },
    {
      "part": 6,
      "question": "Sự hài lòng của người dùng kết hợp những yếu tố nào?",
      "options": [
        "Tuân thủ + chất lượng tốt + chỉ cần đúng ngân sách",
        "Tuân thủ + chuẩn nội bộ + số lượng chức năng lớn",
        "Tuân thủ + chất lượng tốt + chỉ cần đúng lịch",
        "Sản phẩm tuân thủ, chất lượng tốt và giao đúng ngân sách/lịch"
      ],
      "correct": 3,
      "explanation": "Slide ghi user satisfaction = compliant product + good quality + delivery within budget and schedule.",
      "slides": [
        79
      ],
      "sourceId": "SPM-462",
      "sourceType": "slides",
      "id": "SLIDE-SPM-462"
    },
    {
      "part": 6,
      "question": "Kiểm soát chất lượng gồm những hoạt động nào?",
      "options": [
        "Nhận diện, ước lượng và tinh chỉnh rủi ro",
        "Ước lượng, lập lịch và phân công",
        "Kiểm toán, báo cáo và cấp nguồn lực",
        "Kiểm tra, review và kiểm thử"
      ],
      "correct": 3,
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
      "question": "QC nhằm bảo đảm điều gì cho mỗi sản phẩm công việc?",
      "options": [
        "Bảo đảm đáp ứng các yêu cầu đặt ra cho nó",
        "Bảo đảm tất cả sản phẩm có cùng kích thước",
        "Bảo đảm không cần xem xét quy trình",
        "Bảo đảm chỉ được tạo bằng một công cụ"
      ],
      "correct": 0,
      "explanation": "Quality control ensures each work product meets requirements placed upon it.",
      "slides": [
        80
      ],
      "sourceId": "SPM-466",
      "sourceType": "slides",
      "id": "SLIDE-SPM-466"
    },
    {
      "part": 6,
      "question": "Vòng phản hồi QC hướng về đâu?",
      "options": [
        "Chỉ bản kế hoạch SQA được duyệt trước phát triển",
        "Quy trình đã tạo ra sản phẩm công việc",
        "Chỉ khâu kiểm toán báo cáo dữ liệu cho cấp quản lý",
        "Chỉ khâu xác định mốc và lịch hoàn thành nhiệm vụ"
      ],
      "correct": 1,
      "explanation": "Slide nói feedback loop to the process that created the work product.",
      "slides": [
        80
      ],
      "sourceId": "SPM-467",
      "sourceType": "slides",
      "id": "SLIDE-SPM-467"
    },
    {
      "part": 6,
      "question": "QC có thể được thực hiện theo những hình thức nào?",
      "options": [
        "Tự động, thủ công hoặc kết hợp cả hai",
        "Chỉ tự động khi sản phẩm đã được biên dịch",
        "Chỉ thủ công khi sản phẩm là tài liệu kỹ thuật",
        "Phải kết hợp thủ công và tự động trong mọi hoạt động"
      ],
      "correct": 0,
      "explanation": "Slide cho phép fully automated, entirely manual, hoặc combination.",
      "slides": [
        80
      ],
      "sourceId": "SPM-469",
      "sourceType": "slides",
      "id": "SLIDE-SPM-469"
    },
    {
      "part": 6,
      "question": "Cần điều kiện nào để đối chiếu đầu ra trong QC?",
      "options": [
        "Mọi sản phẩm công việc có đặc tả rõ và đo được",
        "Chỉ số liệu kiểm toán mà không cần đặc tả từng đầu ra",
        "Chỉ một đặc tả chung không cần đo cho toàn bộ dự án",
        "Chỉ yêu cầu chức năng của chương trình thực thi cuối cùng"
      ],
      "correct": 0,
      "explanation": "Slide nhấn mạnh defined, measurable specifications cho all work products.",
      "slides": [
        80
      ],
      "sourceId": "SPM-470",
      "sourceType": "slides",
      "id": "SLIDE-SPM-470"
    },
    {
      "part": 6,
      "question": "QA gồm những chức năng quản lý nào?",
      "options": [
        "Lập trình và biên dịch",
        "Nhận diện và tinh chỉnh rủi ro",
        "Ước lượng và lập lịch",
        "Kiểm toán và báo cáo"
      ],
      "correct": 3,
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
      "question": "QA cung cấp cho quản lý loại dữ liệu nào?",
      "options": [
        "Dữ liệu cần thiết để hiểu chất lượng sản phẩm",
        "Chỉ ngày dự kiến và thực tế của các nhiệm vụ dự án",
        "Chỉ ước lượng nỗ lực cho các hoạt động kỹ nghệ",
        "Chỉ xác suất và tác động của các rủi ro trong dự án"
      ],
      "correct": 0,
      "explanation": "QA cung cấp data necessary to be informed about product quality.",
      "slides": [
        81
      ],
      "sourceId": "SPM-475",
      "sourceType": "slides",
      "id": "SLIDE-SPM-475"
    },
    {
      "part": 6,
      "question": "Ai phải xử lý và cấp nguồn lực khi QA phát hiện vấn đề?",
      "options": [
        "Chỉ người dùng cuối",
        "Ban quản lý",
        "Chỉ người viết báo cáo",
        "Chỉ nhà cung cấp công cụ"
      ],
      "correct": 1,
      "explanation": "Slide xác định management responsible address problems and apply necessary resources.",
      "slides": [
        81
      ],
      "sourceId": "SPM-477",
      "sourceType": "slides",
      "id": "SLIDE-SPM-477"
    },
    {
      "part": 6,
      "question": "QC và QA khác nhau thế nào?",
      "options": [
        "QC chỉ xác định chuẩn; QA chỉ theo dõi lịch nhiệm vụ",
        "QC chỉ xác định yêu cầu; QA chỉ phân bổ nguồn lực dự án",
        "QC kiểm toán cho quản lý; QA trực tiếp kiểm thử sản phẩm",
        "QC kiểm tra sản phẩm; QA kiểm toán, báo cáo để quản lý biết chất lượng"
      ],
      "correct": 3,
      "explanation": "QC dùng inspections/reviews/tests; QA dùng auditing/reporting phục vụ quản lý.",
      "slides": [
        80,
        81
      ],
      "sourceId": "SPM-479",
      "sourceType": "slides",
      "id": "SLIDE-SPM-479"
    },
    {
      "part": 6,
      "question": "SQA báo cáo định kỳ kết quả kiểm toán sản phẩm cho ai?",
      "options": [
        "Người quản lý dự án",
        "Chỉ bên thứ ba cung cấp cấu phần",
        "Chỉ người dùng cuối của phần mềm",
        "Chỉ người thiết kế sản phẩm được kiểm toán"
      ],
      "correct": 0,
      "explanation": "Trong hoạt động kiểm toán sản phẩm công việc, SQA periodically reports results to the project manager.",
      "slides": [
        83
      ],
      "sourceId": "SPM-480",
      "sourceType": "slides",
      "id": "SLIDE-SPM-480"
    },
    {
      "part": 6,
      "question": "Chất lượng phần mềm gồm ba nhóm tiêu chí nào?",
      "options": [
        "Chuẩn đã ghi chép, xác suất rủi ro, thời lượng nhiệm vụ",
        "Yêu cầu rõ, ngày bắt đầu thực tế, số người được phân công",
        "Đặc tính ngầm, chi phí ước lượng, lịch nhiệm vụ dự kiến",
        "Yêu cầu rõ, chuẩn được ghi chép và đặc tính ngầm kỳ vọng"
      ],
      "correct": 3,
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
      "question": "Nền tảng để đo chất lượng phần mềm là gì?",
      "options": [
        "Nguồn lực dự án",
        "Yêu cầu phần mềm",
        "Kích thước phần mềm",
        "Lịch triển khai dự án"
      ],
      "correct": 1,
      "explanation": "Slide ghi Software requirements are foundation from which quality measured.",
      "slides": [
        82
      ],
      "sourceId": "SPM-482",
      "sourceType": "slides",
      "id": "SLIDE-SPM-482"
    },
    {
      "part": 6,
      "question": "Chuẩn phát triển định hướng điều gì?",
      "options": [
        "Mức nguồn lực được phép phân bổ cho từng thời điểm",
        "Cách thức phần mềm được kỹ nghệ hóa",
        "Thời điểm bắt đầu từng nhiệm vụ trong bảng dự án",
        "Xác suất phát sinh từng rủi ro trong danh mục dự án"
      ],
      "correct": 1,
      "explanation": "Specified standards define development criteria guiding manner software engineered.",
      "slides": [
        82
      ],
      "sourceId": "SPM-484",
      "sourceType": "slides",
      "id": "SLIDE-SPM-484"
    },
    {
      "part": 6,
      "question": "Ví dụ nào là yêu cầu ngầm đối với phần mềm?",
      "options": [
        "Số đầu vào và số đầu ra",
        "Ngày bắt đầu và ngày kết thúc",
        "Dễ dùng và dễ bảo trì",
        "Chi phí mua máy và số nhân viên"
      ],
      "correct": 2,
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
      "question": "Kế hoạch SQA được xây dựng vào giai đoạn nào?",
      "options": [
        "Sau khi mọi cuộc kiểm toán kết thúc",
        "Trong giai đoạn lập kế hoạch dự án",
        "Chỉ sau khi phần mềm đã bàn giao",
        "Chỉ khi phát sinh lỗi nghiêm trọng"
      ],
      "correct": 1,
      "explanation": "Slide ghi plan developed during project planning.",
      "slides": [
        83
      ],
      "sourceId": "SPM-489",
      "sourceType": "slides",
      "id": "SLIDE-SPM-489"
    },
    {
      "part": 6,
      "question": "Ai xem xét kế hoạch SQA?",
      "options": [
        "Chỉ quản lý tài chính",
        "Tất cả các bên quan tâm",
        "Chỉ khách hàng cuối cùng",
        "Chỉ tác giả kế hoạch"
      ],
      "correct": 1,
      "explanation": "Kế hoạch is reviewed by all interested parties.",
      "slides": [
        83
      ],
      "sourceId": "SPM-490",
      "sourceType": "slides",
      "id": "SLIDE-SPM-490"
    },
    {
      "part": 6,
      "question": "Kế hoạch SQA phải nêu thủ tục nào về lỗi?",
      "options": [
        "Báo cáo và theo dõi lỗi",
        "Chỉ đếm lỗi sau bàn giao",
        "Chỉ phân công người viết mã",
        "Chỉ chọn thời điểm phát hành"
      ],
      "correct": 0,
      "explanation": "Plan identifies procedures for error reporting and tracking.",
      "slides": [
        83
      ],
      "sourceId": "SPM-492",
      "sourceType": "slides",
      "id": "SLIDE-SPM-492"
    },
    {
      "part": 6,
      "question": "Kế hoạch SQA có phải xác định lượng phản hồi cho nhóm dự án không?",
      "options": [
        "Có, nhưng kế hoạch chỉ nêu phản hồi cho quản lý cấp cao",
        "Không, kế hoạch chỉ quy định đánh giá và chuẩn áp dụng",
        "Có, kế hoạch xác định lượng phản hồi cung cấp",
        "Không, kế hoạch chỉ quy định tài liệu và thủ tục lỗi"
      ],
      "correct": 2,
      "explanation": "Plan identifies amount of feedback provided to software project team.",
      "slides": [
        83
      ],
      "sourceId": "SPM-494",
      "sourceType": "slides",
      "id": "SLIDE-SPM-494"
    },
    {
      "part": 6,
      "question": "Nhóm phần mềm và nhóm SQA có vai trò gì với mô tả quy trình?",
      "options": [
        "Quản lý tài chính chọn quy trình, nhóm phần mềm kiểm toán",
        "Khách hàng chọn toàn bộ, SQA chỉ ghi ngày bắt đầu",
        "Nhóm phần mềm chọn quy trình, SQA xem xét tính tuân thủ",
        "SQA chọn toàn bộ, nhóm phần mềm chỉ mua công cụ"
      ],
      "correct": 2,
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
      "question": "SQA xem xét tính tuân thủ của quy trình theo những căn cứ nào?",
      "options": [
        "Chỉ yêu cầu chức năng cùng hiệu năng của chương trình cuối",
        "Chính sách tổ chức, chuẩn nội bộ, chuẩn bên ngoài và kế hoạch dự án",
        "Chỉ ngày dự kiến cùng thực tế của mỗi nhiệm vụ phát triển",
        "Chỉ xác suất cùng tác động của rủi ro trong bảng dự án"
      ],
      "correct": 1,
      "explanation": "Slide nêu organizational policy, internal/external standards, other parts of software project plan.",
      "slides": [
        83
      ],
      "sourceId": "SPM-496",
      "sourceType": "slides",
      "id": "SLIDE-SPM-496"
    },
    {
      "part": 6,
      "question": "SQA phải làm gì khi phát hiện sai lệch so với quy trình?",
      "options": [
        "Nhận diện và ghi chép nhưng chỉ khách hàng xác minh sửa",
        "Nhận diện, ghi chép, theo dõi và xác minh đã sửa",
        "Nhận diện và sửa ngay nhưng không cần ghi chép sai lệch",
        "Nhận diện và ghi chép rồi dừng theo dõi khi gửi báo cáo"
      ],
      "correct": 1,
      "explanation": "Slide yêu cầu identifies, documents, tracks deviations và verifies corrections made.",
      "slides": [
        83
      ],
      "sourceId": "SPM-497",
      "sourceType": "slides",
      "id": "SLIDE-SPM-497"
    },
    {
      "part": 6,
      "question": "Mục không tuân thủ được theo dõi đến khi nào và báo cho ai?",
      "options": [
        "Đến khi đổi phiên bản, chỉ báo tác giả mã",
        "Đến khi lập hồ sơ, chỉ báo người dùng cuối",
        "Đến khi hết tháng, chỉ báo nhà cung cấp",
        "Đến khi giải quyết, báo quản lý cấp cao"
      ],
      "correct": 3,
      "explanation": "SQA records noncompliance, reports senior management, tracks until resolved.",
      "slides": [
        83
      ],
      "sourceId": "SPM-500",
      "sourceType": "slides",
      "id": "SLIDE-SPM-500"
    }
  ]
};
