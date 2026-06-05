

//ban
 const productDatabase = [
 {id:31, name:"Thác Khói Trầm Hương", price:4000000, img:"../assets/b1.jpg", productLink:"chi-tiet.html", desc:"Thác khói trầm hương với thiết kế tinh xảo, tạo dòng khói mềm mại như thác nước, mang đến cảm giác thư thái và bình yên cho không gian sống."},

{id:33, name:"Bình Hoa Gốm Vân Tổ Ong", price:5500000, img:"../assets/b2.jpg", productLink:"chi-tiet.html", desc:"Bình hoa gốm vân tổ ong sở hữu thiết kế độc đáo cùng họa tiết nổi bật, là điểm nhấn tinh tế cho phòng khách, phòng ngủ hoặc góc làm việc."},

{id:34, name:"Bình Cắm Hoa Khô Sang Trọng", price:2150000, img:"../assets/b3.jpg", productLink:"chi-tiet.html", desc:"Bình cắm hoa khô sang trọng với kiểu dáng hiện đại, giúp tôn lên vẻ đẹp của hoa và mang lại sự ấm áp cho không gian nội thất."},

{id:30, name:"Bình Hoa Nghệ Thuật Trang Trí Kệ Tủ", price:2100000, img:"../assets/b4.jpg", productLink:"chi-tiet.html", desc:"Bình hoa nghệ thuật trang trí kệ tủ được thiết kế thanh lịch, phù hợp với nhiều phong cách decor từ hiện đại đến tối giản."},

{id:35, name:"Lá Sung Nghệ Thuật Đặt Bàn", price:2000000, img:"../assets/b5.jpg", productLink:"chi-tiet.html", desc:"Lá sung nghệ thuật đặt bàn mang vẻ đẹp tự nhiên và ý nghĩa phong thủy tốt lành, giúp không gian thêm sang trọng và hài hòa."},

{id:32, name:"Cặp Hươu Sừng Tấm", price:905000, img:"../assets/b6.jpg", productLink:"chi-tiet.html", desc:"Cặp hươu sừng tấm tượng trưng cho sự may mắn, tài lộc và thịnh vượng, thích hợp làm vật trang trí hoặc quà tặng ý nghĩa."},

{id:36, name:"Bộ Hoa Bằng Đá Thạch Anh", price:900000, img:"../assets/b8.jpg", productLink:"chi-tiet.html", desc:"Bộ hoa bằng đá thạch anh mang vẻ đẹp sang trọng cùng năng lượng tích cực, giúp không gian trở nên nổi bật và cuốn hút hơn."},

{id:27, name:"Chim Vàng Trên Quả Cầu Pha Lê", price:2000000, img:"../assets/b7.jpg", productLink:"chi-tiet.html", desc:"Chim vàng trên quả cầu pha lê là sự kết hợp hài hòa giữa nghệ thuật và phong thủy, tạo điểm nhấn đẳng cấp cho không gian sống."},

{id:28, name:"Thác Khói Trầm Hương Địa Tạng Vương Từ Bi An Lạc", price:2000000, img:"../assets/b9.jpg", productLink:"chi-tiet.html", desc:"Thác khói trầm hương Địa Tạng Vương Từ Bi An Lạc mang ý nghĩa bình an, thanh tịnh và giúp tạo bầu không khí thư giãn cho ngôi nhà."},

{id:29, name:"Tượng Đầu Ngựa Tối Giản", price:800000, img:"../assets/10.jpg", productLink:"chi-tiet.html", desc:"Tượng đầu ngựa tối giản sở hữu thiết kế hiện đại, mạnh mẽ và tinh tế, tượng trưng cho sự thành công và phát triển bền vững."},

{id:26, name:"Mô Hình Đá Kết Hợp Động Vật", price:2000000, img:"../assets/b11.jpg", productLink:"chi-tiet.html", desc:"Mô hình đá kết hợp động vật được chế tác độc đáo, mang vẻ đẹp nghệ thuật và tạo điểm nhấn nổi bật cho bàn làm việc hoặc kệ trang trí."},

{id:37, name:"Quả Địa Cầu Pha Lê", price:1800000, img:"../assets/b12.jpg", productLink:"chi-tiet.html", desc:"Quả địa cầu pha lê với thiết kế sang trọng và trong suốt, là món đồ decor tinh tế dành cho phòng khách, văn phòng hoặc góc học tập."}

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