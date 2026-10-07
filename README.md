# Ôn tập Software Project Management

Website tiếng Việt để ôn bài giảng Software Project Management của Trần Khánh Dung (01/2017), gồm 83 slide. Bộ câu hỏi được soạn theo nội dung văn bản, bảng và sơ đồ của file PowerPoint đã cung cấp.

## Sử dụng offline

1. Tải file ZIP của dự án và giải nén **toàn bộ thư mục**.
2. Mở `index.html` bằng Edge, Chrome, Firefox hoặc Safari.
3. Chọn một, nhiều chương hoặc tất cả 6 chương, rồi bắt đầu làm bài.

Không cần cài đặt, máy chủ, tài khoản hay kết nối mạng. Giữ `index.html`, `style.css`, `app.js`, `core.js`, `data.js` và `favicon.svg` trong cùng thư mục.

## Nội dung

| Phần | Nội dung | Số câu | Slide |
|---|---|---:|---|
| I | Key concepts & principles | 170 | 4–22 |
| II | Project Metrics and Software Measurement | 110 | 23–46 |
| III | Software Project Planning | 70 | 47–57 |
| IV | Risk Analysis & Management | 50 | 58–66 |
| V | Project Scheduling and Tracking | 50 | 67–76 |
| VI | Software Quality Assurance | 50 | 77–83 |
| | **Tổng cộng** | **500** | |

Mỗi câu có bốn lựa chọn, một đáp án đúng, giải thích ngắn và số slide nguồn. Có câu nhận biết, phân biệt, áp dụng tình huống và đọc bảng/công thức. Một khái niệm có thể được kiểm tra qua các nhiệm vụ khác nhau; các câu chỉ đổi cách diễn đạt hoặc chỉ đổi số đã được rà soát để giảm lặp. Tình huống được biên soạn nhằm áp dụng đúng nội dung slide, không bổ sung mô hình hay kiến thức môn học ngoài nguồn.

## Chức năng

- **Luyện tập:** chọn đáp án rồi bấm Kiểm tra đáp án để mở lời giải. Câu đã kiểm tra được khóa để giữ kết quả trung thực.
- **Tự kiểm tra:** đáp án và lời giải chỉ mở sau khi nộp bài.
- Xáo trộn câu hỏi và đáp án độc lập. Đáp án đúng được phân bố cân bằng A/B/C/D trong bộ gốc và trong mỗi bài khi bật xáo trộn đáp án.
- Tiến độ, danh sách câu và chuyển qua lại giữa các câu.
- Điểm tổng thể và kết quả từng chương. Câu chưa trả lời được ghi riêng và nằm trong mẫu số khi tính điểm.
- Xem lại toàn bộ đáp án, làm lại những câu thực sự trả lời sai.
- Lưu bài đang làm và lịch sử câu sai trên trình duyệt hiện tại. Không đồng bộ thiết bị. Nếu trình duyệt chặn lưu trữ, vẫn có thể làm bài trong phiên hiện tại.
- Giao diện co giãn cho điện thoại/máy tính, hỗ trợ chọn đáp án bằng bàn phím.

## Đối chiếu nguồn

Số slide là thứ tự trang trong PowerPoint, từ 1 đến 83. Các bảng FP (slide 32), bảng rủi ro (64), phiếu rủi ro (66) và mạng công việc (70) được đọc trực tiếp từ hình trong tài liệu. Công thức integrity được giữ theo cách in trong slide 43; phần 40–20–40 không tự bổ sung tên các giai đoạn vì slide 68 không nêu chúng.

## GitHub Pages

Website: [gsk7625.github.io/Edu](https://gsk7625.github.io/Edu/)

Các file tĩnh đặt ở gốc nhánh `main`, kèm `.nojekyll`, phù hợp với cấu hình Pages: nhánh `main`, thư mục `/ (root)`.

## Cấu trúc

- `index.html`: giao diện.
- `style.css`: bố cục và responsive.
- `data.js`: ngân hàng 500 câu và metadata 6 chương.
- `core.js`: tạo bài, xáo trộn, chấm điểm, lọc câu sai và kiểm tra phiên đã lưu.
- `app.js`: tương tác và lưu tiến độ trên thiết bị.
- `favicon.svg`: biểu tượng trang.
- `QUALITY.md`: kết quả kiểm tra bản bàn giao.

Lịch sử website cũ được giữ trong các commit trước để có thể phục hồi bằng GitHub nếu cần.
