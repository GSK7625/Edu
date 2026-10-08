# Ôn tập Software Project Management

Website tiếng Việt, chạy offline, gồm **235 câu từ PowerPoint + 65 câu từ đề cương năm ngoái QLDA.pdf = 300 câu**.

## Sử dụng

1. Giải nén toàn bộ ZIP, mở `index.html`.
2. Chọn chương và nguồn câu hỏi: tất cả 300, riêng 65 câu đề năm ngoái hoặc riêng 235 câu từ slide.
3. Chọn luyện tập (xem đáp án từng câu) hoặc tự kiểm tra (xem đáp án sau nộp bài).

Không cần cài đặt, tài khoản, máy chủ hay mạng để làm bài và đọc lời giải. Các liên kết kiểm chứng bên ngoài cần mạng khi mở.

## Phân bố

| Phần | Nội dung | Từ slide | Từ đề | Tổng |
|---|---|---:|---:|---:|
| 1 | Key concepts & principles | 134 | 37 | 171 |
| 2 | Project Metrics and Software Measurement | 14 | 4 | 18 |
| 3 | Software Project Planning | 33 | 9 | 42 |
| 4 | Risk Analysis & Management | 22 | 6 | 28 |
| 5 | Project Scheduling and Tracking | 25 | 7 | 32 |
| 6 | Software Quality Assurance | 7 | 2 | 9 |
| | **Tổng** | **235** | **65** | **300** |

Scrum/UML của đề được xếp trong Phần I và có nguồn riêng. Các số slide là thứ tự trang trong PowerPoint 83 slide của Trần Khánh Dung (01/2017).

## 65 câu đề năm ngoái

Mỗi số câu gốc 1–65 xuất hiện đúng một lần và có nhãn “Đề năm ngoái · Câu …”. 23 câu giữ nội dung câu hỏi và các phương án; 42 câu được chỉnh điều kiện, cách hỏi hoặc phương án để tránh thiếu dữ kiện và nhiều đáp án hợp lý. Vị trí đáp án được xáo trộn. Bản luyện tập đã chỉnh không phải bản chép nguyên văn của đề.

Mở [doi-chieu-65.html](doi-chieu-65.html) để đọc toàn bộ câu gốc, đáp án khoanh tay, kết luận kiểm chứng và bản chỉnh. Báo cáo câu gốc có 28 câu rõ ràng, 16 có điều kiện, 12 mơ hồ, 9 lỗi/thiếu dữ kiện. Không coi đáp án khoanh tay là đáp án chính thức.

Số câu từng chương được phân bổ theo tỷ trọng trong đề: lấy 300 × số câu đề chương / 65 rồi làm tròn sao cho tổng bằng 300. Tỷ lệ câu đề trong mỗi chương gần 22%; chương VI có 2 câu đề + 7 câu slide = 9 câu. Cách phân bổ này ưu tiên ôn theo đề mẫu năm trước.

235 câu còn lại chỉ dùng slide; các câu dễ trùng mục tiêu với đề đã được ưu tiên loại. 65 câu đề có thêm nội dung Scrum/UML, kiểm thử và vòng đời, kiểm chứng theo Scrum Guide, OMG UML và giáo trình tác giả được dẫn ở lời giải. Một khái niệm có thể được kiểm tra qua những nhiệm vụ khác nhau.

## Chức năng

- Chọn chương, chọn nguồn, xáo trộn câu và phương án độc lập.
- Tiến độ, danh sách câu, chấm điểm và kết quả từng phần.
- Lời giải, số slide hoặc nguồn đề và liên kết báo cáo câu gốc.
- Xem lại bài, làm lại câu thực sự trả lời sai; câu chưa trả lời tính riêng.
- Lưu/tiếp tục trên trình duyệt hiện tại; vẫn làm bài được khi lưu trữ bị chặn.
- Giao diện điện thoại/máy tính, chọn đáp án bằng bàn phím.

Tiến độ các phiên bản trước được tách khỏi bộ mới để tránh nhầm câu/đáp án.

## Triển khai

Website: [gsk7625.github.io/Edu](https://gsk7625.github.io/Edu/). File tĩnh ở gốc nhánh `main`, có `.nojekyll`.

`index.html`, `style.css`, `app.js`, `core.js`, `data.js`, `favicon.svg` cần ở cùng thư mục. `doi-chieu-65.html` là báo cáo offline; `QUALITY.md` ghi kết quả kiểm tra. Các phiên bản cũ còn trong lịch sử commit GitHub.
