# Bộ đề ôn thi C# & ASP.NET Core

Thư mục này chứa:

- `index.html`: trang web luyện tập chạy offline.
- `styles.css`, `app.js`, `questions.js`: mã nguồn giao diện luyện tập.
- `question_bank.json`: toàn bộ ngân hàng 1.650 câu hỏi.
- `validation_report.json`, `validation_report.html`: báo cáo kiểm tra tự động.

## Cách dùng

1. Giải nén thư mục này nếu bạn đang mở từ file `.zip`.
2. Mở `index.html` bằng trình duyệt.
3. Chọn phần học, số câu, độ khó và chế độ rồi bấm **Bắt đầu**.

## Quy mô bộ đề

- 11 phần học
- 150 câu / phần
- 1.650 câu tổng cộng
- Mỗi phần có đúng:
  - 45 câu dễ
  - 75 câu trung bình
  - 30 câu khó

## Những gì đã được kiểm tra tự động

- Mỗi câu có đúng 4 phương án A, B, C, D.
- Mỗi câu chỉ có 1 nhãn đáp án đúng.
- Không có phương án trùng nhau trong cùng một câu.
- Không có câu trùng nguyên văn giữa các phần.
- Không có cặp câu quá giống nhau trong cùng một phần theo ngưỡng so khớp nội bộ đã đặt.
- Không phát hiện mẫu phủ định kép theo rule kiểm tra.
- Không phát hiện chênh lệch độ dài đáp án đúng vượt ngưỡng kiểm tra đã đặt.

## Nguồn học liệu

- P01: Tổng quan & Cài đặt môi trường ASP.NET Core (`Văn bản đã dán (1).txt`)
- P02: C# Cơ bản: Nền tảng lập trình (`Văn bản đã dán (2).txt`)
- P03: Collections, LINQ và thao tác với Object (`Văn bản đã dán (3).txt`)
- P04: Cài đặt môi trường [Phải thực hành tại nhà] (`Văn bản đã dán (4).txt`)
- P05: Giới thiệu Web API, RESTful API và HTTP (`Văn bản đã dán (5).txt`)
- P06: Routing & Controller trong ASP.NET Core (`Văn bản đã dán (6).txt`)
- P07: Model Binding & Validation trong ASP.NET Core (`Văn bản đã dán (7).txt`)
- P08: Dependency Injection, Middleware & Standardized API Response (`Văn bản đã dán (8).txt`)
- P09: Web API quản lý sinh viên với upload file (`Văn bản đã dán (9).txt`)
- P10: Entity Framework Core & ASP.NET Core 8+ (`Văn bản đã dán (10).txt`)
- P11: Authentication & Authorization trong ASP.NET Core (`Văn bản đã dán (11).txt`)
