// ============================================================
//  lib.js – Quản lý người dùng (đăng ký / đăng nhập / lưu trữ)
//  Lưu dữ liệu trong localStorage, KHÔNG dùng JSON
//  Định dạng mỗi user: "hoTen|username|gioiTinh|soDT|matKhau|ngayDangKy"
//  Nhiều user cách nhau bởi ";;"
// ============================================================

const UserLib = (() => {

  const STORAGE_KEY = "users";
  const SESSION_KEY = "currentUser";
  const SEP_FIELD   = "|";    // phân cách các trường trong 1 user
  const SEP_RECORD  = ";;";   // phân cách giữa các user

  // ---------- Helpers ----------

  /** Chuyển chuỗi lưu trữ thành mảng object user */
  function getAllUsers() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return raw.split(SEP_RECORD).map(function(record) {
      const parts = record.split(SEP_FIELD);
      return {
        hoTen     : parts[0] || "",
        username  : parts[1] || "",
        gioiTinh  : parts[2] || "",
        soDT      : parts[3] || "",
        matKhau   : parts[4] || "",
        ngayDangKy: parts[5] || "",
      };
    });
  }

  /** Chuyển mảng object user thành chuỗi và lưu vào localStorage */
  function saveUsers(users) {
    const raw = users.map(function(u) {
      return [u.hoTen, u.username, u.gioiTinh, u.soDT, u.matKhau, u.ngayDangKy].join(SEP_FIELD);
    }).join(SEP_RECORD);
    localStorage.setItem(STORAGE_KEY, raw);
  }

  /** Tìm user theo username (email) */
  function findUser(username) {
    const users = getAllUsers();
    for (let i = 0; i < users.length; i++) {
      if (users[i].username.toLowerCase() === username.toLowerCase()) {
        return users[i];
      }
    }
    return null;
  }

  // ---------- Đăng ký ----------

  function register(info) {
    const hoTen    = info.hoTen;
    const email    = info.email;
    const gioiTinh = info.gioiTinh;
    const soDT     = info.soDT;
    const matKhau  = info.matKhau;

    if (!hoTen || !email || !gioiTinh || !soDT || !matKhau) {
      return { success: false, message: "Vui lòng điền đầy đủ thông tin." };
    }

    // Kiểm tra email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "Email không hợp lệ." };
    }

    // Kiểm tra số điện thoại
    const phoneRegex = /^\d{9,11}$/;
    if (!phoneRegex.test(soDT)) {
      return { success: false, message: "Số điện thoại không hợp lệ (9–11 chữ số)." };
    }

    // Kiểm tra trùng email
    if (findUser(email)) {
      return { success: false, message: "Email này đã được đăng ký." };
    }

    // Thêm user mới
    const users = getAllUsers();
    users.push({
      hoTen     : hoTen.trim(),
      username  : email.trim().toLowerCase(),
      gioiTinh  : gioiTinh,
      soDT      : soDT.trim(),
      matKhau   : matKhau,
      ngayDangKy: new Date().toLocaleString("vi-VN"),
    });
    saveUsers(users);

    return { success: true, message: "Đăng ký thành công! Vui lòng đăng nhập." };
  }

  // ---------- Đăng nhập ----------

  function login(username, matKhau) {
    if (!username || !matKhau) {
      return { success: false, message: "Vui lòng nhập tên đăng nhập và mật khẩu." };
    }

    const user = findUser(username);
    if (!user) {
      return { success: false, message: "Tài khoản không tồn tại." };
    }

    if (user.matKhau !== matKhau) {
      return { success: false, message: "Mật khẩu không chính xác." };
    }

    // Lưu phiên: "hoTen|username"
    sessionStorage.setItem(SESSION_KEY, user.hoTen + SEP_FIELD + user.username);

    return { success: true, message: "Chào mừng, " + user.hoTen + "!" };
  }

  // ---------- Đăng xuất ----------

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  // ---------- Kiểm tra phiên ----------

  function getCurrentUser() {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parts = raw.split(SEP_FIELD);
    return { hoTen: parts[0], username: parts[1] };
  }

  function isLoggedIn() {
    return getCurrentUser() !== null;
  }

  // ---------- Hiển thị thông báo ----------

  function showAlert(message, type) {
    type = type || "error";
    let el = document.getElementById("alertMsg");
    if (!el) {
      el = document.createElement("div");
      el.id = "alertMsg";
      el.style.cssText = "margin:10px 0;padding:10px 14px;border-radius:6px;font-size:14px;font-weight:600;";
      const form = document.querySelector("form");
      if (form) form.prepend(el);
    }
    el.textContent = message;
    if (type === "success") {
      el.style.background = "#d4edda";
      el.style.color      = "#155724";
      el.style.border     = "1px solid #c3e6cb";
    } else {
      el.style.background = "#f8d7da";
      el.style.color      = "#721c24";
      el.style.border     = "1px solid #f5c6cb";
    }
    el.style.display = "block";
    setTimeout(function() { el.style.display = "none"; }, 4000);
  }

  // ---------- Gắn form đăng nhập ----------

  function initLoginForm() {
    const form = document.getElementById("frmLogin");
    if (!form) return;

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const username = document.getElementById("txtUsername").value.trim();
      const password = document.getElementById("txtPassword").value.trim();

      const result = login(username, password);
      if (result.success) {
        showAlert(result.message, "success");
        setTimeout(function() {
          window.location.href = "../index.html";
        }, 1200);
      } else {
        showAlert(result.message, "error");
      }
    });
  }

  // ---------- Gắn form đăng ký ----------

  function initRegisterForm() {
    const form = document.getElementById("frmRegister");
    if (!form) return;

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const hoTen   = document.getElementById("txtHoTen").value.trim();
      const email   = document.getElementById("txtEmail").value.trim();
      const rdCheck = document.querySelector('input[name="rdGioiTinh"]:checked');
      const soDT    = document.getElementById("txtDT").value.trim();
      const matKhau = document.getElementById("txtPassword").value.trim();
      const xacNhan = document.getElementById("txtConfirmPassword").value.trim();

      if (!rdCheck) {
        showAlert("Vui lòng chọn giới tính.", "error");
        return;
      }

      if (matKhau !== xacNhan) {
        showAlert("Mật khẩu xác nhận không khớp.", "error");
        return;
      }

      const result = register({
        hoTen    : hoTen,
        email    : email,
        gioiTinh : rdCheck.value,
        soDT     : soDT,
        matKhau  : matKhau,
      });

      showAlert(result.message, result.success ? "success" : "error");

      if (result.success) {
        setTimeout(function() {
          window.location.href = "sign-in.html";
        }, 1500);
      }
    });
  }

  // ---------- Public API ----------

  return {
    register       : register,
    login          : login,
    logout         : logout,
    getCurrentUser : getCurrentUser,
    isLoggedIn     : isLoggedIn,
    getAllUsers     : getAllUsers,
    showAlert      : showAlert,
    initLoginForm  : initLoginForm,
    initRegisterForm: initRegisterForm,
  };

})();