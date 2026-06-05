

//phong
 const productDatabase = [
  {id:41, name:"Đồng Hồ Để Bàn", price:200000, img:"../assets/p1.jpg", productLink:"chi-tiet.html", desc:"Đồng hồ để bàn thiết kế tối giản, giúp quản lý thời gian hiệu quả và tạo điểm nhấn tinh tế cho góc học tập, làm việc."},

{id:43, name:"Giá Để Điện Thoại", price:180000, img:"../assets/p2.jpg", productLink:"chi-tiet.html", desc:"Giá đỡ điện thoại tiện lợi với thiết kế chắc chắn, phù hợp để học tập, làm việc hoặc xem video một cách thoải mái."},

{id:40, name:"Gối Tựa", price:160000, img:"../assets/p3.jpg", productLink:"chi-tiet.html", desc:"Gối tựa mềm mại với kiểu dáng hiện đại, mang lại cảm giác thoải mái và tăng tính thẩm mỹ cho không gian sống."},

{id:44, name:"Gương Để Bàn", price:600000, img:"../assets/p4.jpg", productLink:"chi-tiet.html", desc:"Gương để bàn nhỏ gọn, thiết kế thanh lịch, phù hợp cho bàn trang điểm hoặc bàn học, giúp không gian thêm tinh tế."},

{id:45, name:"Gương Soi Toàn Thân", price:1500000, img:"../assets/p5.jpg", productLink:"chi-tiet.html", desc:"Gương soi toàn thân hiện đại với kiểu dáng sang trọng, giúp mở rộng cảm giác không gian và tăng vẻ đẹp cho căn phòng."},

{id:42, name:"Hộp Đựng Khăn Giấy", price:100000, img:"../assets/p6.jpg", productLink:"chi-tiet.html", desc:"Hộp đựng khăn giấy thiết kế tối giản, vừa tiện dụng vừa là món đồ decor giúp bàn làm việc luôn gọn gàng."},

{id:39, name:"Kệ Đựng Đồ", price:1800000, img:"../assets/p7.jpg", productLink:"chi-tiet.html", desc:"Kệ đựng đồ đa năng với thiết kế hiện đại, giúp sắp xếp vật dụng ngăn nắp và tạo điểm nhấn cho không gian."},

{id:47, name:"Giỏ Đựng Quần Áo", price:300000, img:"../assets/p8.jpg", productLink:"chi-tiet.html", desc:"Giỏ đựng quần áo tiện lợi, chất liệu bền đẹp, giúp lưu trữ đồ dùng gọn gàng và tăng tính thẩm mỹ cho căn phòng."},

{id:38, name:"Khung Tranh Để Bàn", price:8000000, img:"../assets/p9.jpg", productLink:"chi-tiet.html", desc:"Khung tranh để bàn sang trọng, thích hợp để lưu giữ những khoảnh khắc đáng nhớ và trang trí góc làm việc."},

{id:48, name:"Bàn Tròn Nhỏ", price:5500000, img:"../assets/p10.jpg", productLink:"chi-tiet.html", desc:"Bàn tròn nhỏ với thiết kế tinh tế, phù hợp làm bàn trà, bàn decor hoặc đặt các vật dụng trang trí trong phòng."},

{id:46, name:"Đế Đựng Nến", price:290000, img:"../assets/p11.jpg", productLink:"chi-tiet.html", desc:"Đế đựng nến trang nhã giúp không gian trở nên ấm cúng, thích hợp để trang trí phòng khách, phòng ngủ hoặc bàn làm việc."},

{id:49, name:"Gương Gỗ Trang Trí", price:3800000, img:"../assets/p12.jpg", productLink:"chi-tiet.html", desc:"Gương gỗ trang trí mang phong cách tự nhiên và hiện đại, tạo điểm nhấn nổi bật cho không gian sống."}

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