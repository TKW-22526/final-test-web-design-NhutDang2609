

//treo
 const productDatabase = [
  {id:14, name:"Tranh Con Voi Sơn Dầu", price:2000000, img:"../assets/treo3.jpg", productLink:"chi-tiet.html", desc:"Tranh con voi sơn dầu không chỉ là một tác phẩm nghệ thuật mà còn mang trong mình những giá trị phong thủy sâu sắc."},
  {id:15, name:"Phù Điêu 3D Mộc Lan Ngọc Xuân Ý", price:2000000, img:"../assets/treo9.jpg", productLink:"chi-tiet.html", desc:"Phù điêu treo tường hoa mẫu đơn trong gió mang vẻ đẹp tinh tế và phong thủy tốt đẹp."},


  {id:16, name:"Đồng Hồ Morandi Tối Giản Hiện Đại", price:1600000, img:"../assets/treo4.jpg", productLink:"chi-tiet.html", desc:"Đồng hồ Morandi tối giản hiện đại mang phong cách tinh tế, sang trọng cho không gian sống."},
  {id:19, name:"Gương Tròn Hiện Đại", price:6000000, img:"../assets/treo10.jpg", productLink:"chi-tiet.html", desc:"Gương tròn hiện đại mang lại vẻ đẹp tinh tế cho không gian sống."},
  {id:20, name:"Đồng Hồ Treo Tường Hình Ngọn Núi", price:1500000, img:"../assets/treo5.jpg", productLink:"chi-tiet.html", desc:"Trong thiết kế nội thất hiện đại, đồng hồ treo tường hình ngọn núi là món đồ decor được ưa chuộng."},
  
{id:22, name:"Tranh In Sơn Dầu Xoáy Cầu Thang", price:1500000, img:"../assets/treo2.jpg", productLink:"chi-tiet.html", desc:"Trong phong thủy, hình xoáy cầu thang tượng trưng cho sự phát triển không ngừng, thu hút tài lộc và vận may."},
  {id:25, name:"Tranh 3 Chiều Bằng Gỗ Nguyên Khối", price:1800000, img:"../assets/treo1.jpg", productLink:"chi-tiet.html", desc:"Mang vẻ đẹp tự nhiên và sang trọng vào không gian sống với tranh 3 chiều được chế tác từ gỗ nguyên khối cao cấp."},

  {id:17, name:"Phù Điêu Dải Hoa Vàng 3D", price:3000000, img:"../assets/treo7.jpg", productLink:"chi-tiet.html", desc:"Phù điêu dải hoa vàng 3D mang vẻ đẹp nghệ thuật và giá trị phong thủy cho không gian sống."},
  {id:18, name:"Phù Điêu 3D Đầu Ngựa", price:8000000, img:"../assets/treo8.jpg", productLink:"chi-tiet.html", desc:"Phù điêu 3D đầu ngựa không chỉ đẹp mắt mà còn mang lại nhiều ý nghĩa phong thủy tốt cho không gian."},
  

  {id:21, name:"Gương Tròn Trang Trí Phòng Khách", price:5500000, img:"../assets/treo11.jpg", productLink:"chi-tiet.html", desc:"Gương tròn decor là món đồ trang trí không thể thiếu trong không gian phòng khách hiện đại."},
{id:23, name:"Đồng Hồ Treo Tường Bản Đồ Thế Giới", price:2900000, img:"../assets/treo6.jpg", productLink:"chi-tiet.html", desc:"Đồng hồ treo tường bản đồ thế giới từ Decorpro là sự lựa chọn lý tưởng cho những ai yêu thích sự độc đáo."},


  {id:24, name:"Gương Trang Trí Hình Bông Hoa Đẹp", price:3800000, img:"../assets/treo12.jpg", productLink:"chi-tiet.html", desc:"Gương trang trí hình bông hoa đang trở thành xu hướng hot nhờ thiết kế sang trọng và tinh tế."}


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