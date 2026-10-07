# Kiểm tra bản bàn giao — 07/10/2026

## Ngân hàng câu hỏi

- 500 câu, phân bố I/II/III/IV/V/VI: 170/110/70/50/50/50.
- 500 câu dẫn riêng biệt; mỗi câu có bốn phương án khác nhau, một đáp án đúng, lời giải và dẫn slide.
- Rà soát chéo toàn bộ câu dẫn/phương án/lời giải; thay 74 câu để giảm diễn đạt lặp và sửa phương án thiếu điều kiện. Câu định nghĩa và câu áp dụng cùng khái niệm được giữ khi nhiệm vụ trả lời khác nhau.
- Vị trí đáp án đúng trong dữ liệu: A=125, B=125, C=125, D=125; từng chương lệch tối đa một câu giữa các vị trí.
- Đáp án đúng dài nhất riêng biệt: 137/500 (27,4%). Xếp hạng độ dài có gộp đồng hạng: ngắn nhất 198, hạng 2 là 70, hạng 3 là 95, hạng 4 là 137.
- Văn bản và các bảng/hình được đối chiếu trực tiếp với slide; không tra cứu kiến thức môn học bên ngoài.

Kiểm tra cấu trúc tự động không thay thế việc đọc nội dung: không có công cụ nào tự chứng minh mọi phương án chỉ có một đáp án đúng. Rà soát nội dung được thực hiện riêng trước khi đóng gói.

## Chức năng

11 kiểm thử tự động cho cấu trúc dữ liệu, nguồn, cân bằng đáp án, xáo trộn đúng đáp án, điểm, câu sai và khôi phục phiên đều đạt.

Kiểm tra thực tế trên Edge qua file `file://`:

- Luyện tập, kiểm tra từng câu, khóa lựa chọn sau khi xem lời giải.
- Chọn đáp án bằng Space/phím mũi tên và giữ focus.
- Tự kiểm tra, hộp thoại nộp bài, điểm đúng/sai/chưa trả lời.
- Xem lời giải cả câu đã làm và câu chưa làm.
- Lưu bài, tải lại trang và tiếp tục.
- Chọn/bỏ chọn tất cả và chỉ một chương.
- Bài 50 câu với một đúng, một sai, 48 chưa làm; làm lại đúng một câu sai, không mang theo đáp án cũ.
- Hoạt động khi localStorage bị chặn.
- Không có yêu cầu mạng từ trang và không có lỗi JavaScript trong các luồng kiểm tra.
- Bố cục máy tính 1365×900 và điện thoại 390×844; không tràn ngang với danh sách đủ 500 câu.

Bộ câu hỏi chưa được hiệu chuẩn độ khó bằng kết quả làm bài của người học.
