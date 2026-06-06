const UserLib = (() => {

  const STORAGE_KEY = "users";
  const SESSION_KEY = "currentUser";
  const SEP_FIELD   = "|";
  const SEP_RECORD  = ";;";

  function getAllUsers() {
    const chuoi = localStorage.getItem(STORAGE_KEY) || "";
    if (chuoi === "") return [];
    const mang = chuoi.split(SEP_RECORD);
    const ketQua = [];
    for (let i = 0; i < mang.length; i++) {
      const parts = mang[i].split(SEP_FIELD);
      ketQua.push({
        hoTen     : parts[0],
        username  : parts[1],
        gioiTinh  : parts[2],
        soDT      : parts[3],
        matKhau   : parts[4],
        ngayDangKy: parts[5],
      });
    }
    return ketQua;
  }


  function saveUsers(users) {
    const chuoi = [];
    for (let i = 0; i < users.length; i++) {
      const u = users[i];
      chuoi.push(u.hoTen + SEP_FIELD + u.username + SEP_FIELD + u.gioiTinh + SEP_FIELD + u.soDT + SEP_FIELD + u.matKhau + SEP_FIELD + u.ngayDangKy);
    }
    localStorage.setItem(STORAGE_KEY, chuoi.join(SEP_RECORD));
  }

  function findUser(username) {
    const users = getAllUsers();
    for (let i = 0; i < users.length; i++) {
      if (users[i].username.toLowerCase() === username.toLowerCase()) return users[i];
    }
    return null;
  }


  function register(info) {
    if (!info.hoTen || !info.email || !info.gioiTinh || !info.soDT || !info.matKhau)
      return { success: false, message: "Vui lòng điền đầy đủ thông tin." };

    if (findUser(info.email))
      return { success: false, message: "Email này đã được đăng ký." };

    const users = getAllUsers();
    users.push({
      hoTen     : info.hoTen,
      username  : info.email.toLowerCase(),
      gioiTinh  : info.gioiTinh,
      soDT      : info.soDT,
      matKhau   : info.matKhau,
      ngayDangKy: new Date().toLocaleString("vi-VN"),
    });
    saveUsers(users);
    return { success: true, message: "Đăng ký thành công! Vui lòng đăng nhập." };
  }

  function login(username, matKhau) {
    if (!username || !matKhau)
      return { success: false, message: "Vui lòng nhập email và mật khẩu." };

    const user = findUser(username);
    if (!user)
      return { success: false, message: "Tài khoản không tồn tại." };

    if (user.matKhau !== matKhau)
      return { success: false, message: "Mật khẩu không chính xác." };

    sessionStorage.setItem(SESSION_KEY, user.hoTen + SEP_FIELD + user.username);
    return { success: true, message: "Chào mừng, " + user.hoTen + "!" };
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
  }


  function getCurrentUser() {
    const chuoi = sessionStorage.getItem(SESSION_KEY) || "";
    if (chuoi === "") return null;
    const parts = chuoi.split(SEP_FIELD);
    return { hoTen: parts[0], username: parts[1] };
  }

  function isLoggedIn() {
    return getCurrentUser() !== null;
  }

  function showAlert(message, type) {
    let el = document.getElementById("alertMsg");
    if (!el) {
      el = document.createElement("div");
      el.id = "alertMsg";
      el.style.cssText = "margin:10px 0; padding:10px 14px; border-radius:6px; font-size:14px; font-weight:600;";
      document.querySelector("form").prepend(el);
    }
    el.innerText = message;
    if (type === "success") {
      el.style.background = "#d4edda";
      el.style.color = "#155724";
    } else {
      el.style.background = "#f8d7da";
      el.style.color = "#721c24";
    }
    el.style.display = "block";
    setTimeout(function() { el.style.display = "none"; }, 4000);
  }


  function initLoginForm() {
    const form = document.getElementById("frmLogin");
    if (!form) return;
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const username = document.getElementById("txtUsername").value.trim();
      const matKhau  = document.getElementById("txtPassword").value.trim();
      const ketQua   = login(username, matKhau);
      showAlert(ketQua.message, ketQua.success ? "success" : "error");
      if (ketQua.success) {
        setTimeout(function() { window.location.href = "../index.html"; }, 1200);
      }
    });
  }


  return {
    register      : register,
    login         : login,
    logout        : logout,
    getCurrentUser: getCurrentUser,
    isLoggedIn    : isLoggedIn,
    getAllUsers    : getAllUsers,
    showAlert     : showAlert,
    initLoginForm : initLoginForm,
  };

})();