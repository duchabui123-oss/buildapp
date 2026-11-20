# Đóng gói app "Bông & Teddy" thành APK (Android) và EXE (Windows)

Gói này chứa mã nguồn và quy trình tự động trên GitHub. Bạn **không cần cài Android Studio** hay công cụ nào trên máy.

## Cách 1 – Build tự động bằng GitHub (khuyên dùng)

1. Đăng nhập GitHub, tạo kho mới (ví dụ `bong-english`, chọn Private).
2. Giải nén file zip, rồi kéo thả **toàn bộ nội dung** vào kho (Add file → Upload files).
   - Nhớ có thư mục ẩn `.github`. Nếu không thấy nó trong kho sau khi tải lên, bấm Add file → Create new file, gõ tên `.github/workflows/build.yml` rồi dán nội dung file `build.yml` vào.
3. Mở tab **Actions** → chọn **Build apps** → **Run workflow**. Chờ khoảng 10–15 phút.
4. Mở lần chạy vừa xong, kéo xuống mục **Artifacts** và tải:
   - `BongEnglish-apk` (giải nén ra `app-debug.apk`)
   - `BongEnglish-windows` (giải nén ra `BongEnglish.exe`)

## Cài đặt

- **Android:** chép `app-debug.apk` vào điện thoại, mở lên và cho phép "cài ứng dụng từ nguồn không xác định". Đây là bản debug dùng để cài trực tiếp, chưa đưa lên Google Play.
- **Windows:** bấm đúp `BongEnglish.exe` (bản portable, không cần cài). Nếu Windows báo "Windows protected your PC", bấm **More info → Run anyway** vì file chưa ký số.

## Cập nhật app sau này

Thay file `www/index.html` bằng bản mới rồi chạy lại **Build apps**.

## Cách 2 – Build trên máy bạn (tùy chọn)

- **EXE (Windows, cần Node.js 20):** `npm install` rồi `npm run dist:win`. File nằm trong `dist/`.
- **APK (cần Node.js 20, JDK 17, Android Studio):** `npm install`, `npx cap add android`, `npx cap sync android`, rồi mở thư mục `android` bằng Android Studio và chọn Build → Build APK.

## Lưu ý

- Giọng đọc dùng giọng của hệ điều hành. Nếu thiết bị chưa có giọng tiếng Việt, hãy thêm trong cài đặt giọng nói; câu tiếng Việt vẫn hiện trên màn hình.
- Đưa lên Google Play cần bản ký số (AAB) và tài khoản nhà phát triển; gói này chưa làm phần đó.
- Biểu tượng app đang là biểu tượng mặc định; có thể đổi sau.
