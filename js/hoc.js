

//hoc
 const productDatabase = [
  {id:1, name:"Ghế Công Thái Học Manson", price:5000000, img:"../assets/h1.webp", productLink:"chi-tiet.html", desc:"Ghế công thái học cao cấp hỗ trợ tư thế ngồi đúng, giảm áp lực lên cột sống và mang lại sự thoải mái khi học tập, làm việc trong thời gian dài."},

{id:13, name:"Đèn Học Rạng Đông", price:180000, img:"../assets/h2.webp", productLink:"chi-tiet.html", desc:"Đèn học với ánh sáng dịu nhẹ, bảo vệ mắt và giúp tăng khả năng tập trung cho góc học tập hiện đại."},

{id:4, name:"Đèn Học PIXAR", price:160000, img:"../assets/h3.webp", productLink:"chi-tiet.html", desc:"Đèn học thiết kế lấy cảm hứng từ phong cách Pixar, nhỏ gọn, linh hoạt và tạo điểm nhấn độc đáo cho bàn học."},

{id:10, name:"Sổ Tay A5", price:20000, img:"../assets/h4.jpg", productLink:"chi-tiet.html", desc:"Sổ tay A5 tiện dụng với kích thước nhỏ gọn, thích hợp để ghi chú, lập kế hoạch và lưu giữ ý tưởng hằng ngày."},

{id:5, name:"Sổ Da Loxo A4", price:150000, img:"../assets/h5.jpg", productLink:"chi-tiet.html", desc:"Sổ da A4 sang trọng với chất liệu bền đẹp, phù hợp cho công việc, học tập và ghi chép chuyên nghiệp."},

{id:2, name:"Kệ Để Sách", price:100000, img:"../assets/h6.png", productLink:"chi-tiet.html", desc:"Kệ để sách giúp sắp xếp tài liệu gọn gàng, tiết kiệm không gian và mang lại sự ngăn nắp cho góc học tập."},

{id:3, name:"Tai Nghe Bluetooth JBL", price:180000, img:"../assets/h7.webp", productLink:"chi-tiet.html", desc:"Tai nghe Bluetooth cho âm thanh sống động, kết nối ổn định và mang lại trải nghiệm giải trí, học tập tiện lợi."},

{id:7, name:"Lịch Gỗ Để Bàn", price:90000, img:"../assets/h8.jpg", productLink:"chi-tiet.html", desc:"Lịch gỗ để bàn mang phong cách tối giản, vừa hữu ích trong việc quản lý thời gian vừa là món decor đẹp mắt."},

{id:8, name:"Giá Để Laptop", price:800000, img:"../assets/h9.png", productLink:"chi-tiet.html", desc:"Giá đỡ laptop chắc chắn giúp nâng cao màn hình, cải thiện tư thế ngồi và tăng hiệu quả làm việc."},

{id:11, name:"Giá Sách Để Bàn Gỗ", price:500000, img:"../assets/h10.jpg", productLink:"chi-tiet.html", desc:"Giá sách gỗ để bàn thiết kế tinh tế, giúp lưu trữ sách vở và tạo điểm nhấn ấm áp cho không gian học tập."},

{id:6, name:"Cây Mini Để Bàn", price:29000, img:"../assets/h11.jpg", productLink:"chi-tiet.html", desc:"Cây mini để bàn mang đến cảm giác tươi mới, giúp không gian học tập và làm việc trở nên sinh động hơn."},

{id:12, name:"Bút Bi Bấm Nhiều Màu", price:38000, img:"../assets/h12.jpg", productLink:"chi-tiet.html", desc:"Bút bi nhiều màu tiện lợi cho việc ghi chú, học tập và sáng tạo, giúp nội dung trở nên nổi bật và dễ theo dõi."}

];
 






function addProduct_v2(product) {
  const container = document.getElementById("product-list");
  if (!container) return;

  const myDiv = document.createElement("div");
  myDiv.setAttribute("class", "product-item col-sm-4 mb-4");

  const myDiv1 = document.createElement("div");
  myDiv1.setAttribute("class", "product-image");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.img);
  productImg.setAttribute("alt", product.name);
  productImg.setAttribute("class", "img-fluid");

  myDiv1.appendChild(productImg);
  myDiv.appendChild(myDiv1);

  const myDiv2 = document.createElement("div");
  myDiv2.setAttribute("class", "product-info");

  const myP1 = document.createElement("p");
  myP1.textContent = product.name;

  const myP2 = document.createElement("p");
  myP2.textContent = product.price.toLocaleString() + " VND";

  const myLink = document.createElement("a");
  myLink.setAttribute("href", product.productLink + "?id=" + product.id);
  myLink.setAttribute("class", "btn btn-info");
  myLink.textContent = "Xem chi tiết";

  myDiv2.appendChild(myP1);
  myDiv2.appendChild(myP2);
  myDiv2.appendChild(myLink);
  myDiv.appendChild(myDiv2);
  container.appendChild(myDiv);
}

function loadProducts(products) {
  for (let i = 0; i < products.length; i++) {
    addProduct_v2(products[i]);
  }
}