const productDatabase = [

//tranh
  {id:14, name:"Tranh Con Voi Sơn Dầu", price:2000000, img:"../assets/treo3.jpg", productLink:"chi-tiet.html", desc:"Tranh con voi sơn dầu không chỉ là một tác phẩm nghệ thuật mà còn mang trong mình những giá trị phong thủy sâu sắc. Con voi là biểu tượng mạnh mẽ của sự thịnh vượng và sức khỏe, và bức tranh này sẽ đem lại những lợi ích phong thủy cho gia chủ"},

  {id:34, name:"Bình Cắm Hoa Khô Sang Trọng", price:2150000, img:"../assets/b3.jpg", productLink:"chi-tiet.html", desc:"Bình cắm hoa khô sang trọng với kiểu dáng hiện đại, giúp tôn lên vẻ đẹp của hoa và mang lại sự ấm áp cho không gian nội thất."},

  {id:46, name:"Đế Đựng Nến", price:290000, img:"../assets/p11.jpg", productLink:"chi-tiet.html", desc:"Đế đựng nến trang nhã giúp không gian trở nên ấm cúng, thích hợp để trang trí phòng khách, phòng ngủ hoặc bàn làm việc."},

  {id:49, name:"Gương Gỗ Trang Trí", price:3800000, img:"../assets/p12.jpg", productLink:"chi-tiet.html", desc:"Gương gỗ trang trí mang phong cách tự nhiên và hiện đại, tạo điểm nhấn nổi bật cho không gian sống."},

  {id:30, name:"Bình Hoa Nghệ Thuật Trang Trí Kệ Tủ", price:2100000, img:"../assets/b4.jpg", productLink:"chi-tiet.html", desc:"Bình hoa nghệ thuật trang trí kệ tủ được thiết kế thanh lịch, phù hợp với nhiều phong cách decor từ hiện đại đến tối giản."},

  {id:22, name:"Tranh In Sơn Dầu Xoáy Cầu Thang", price:15000, img:"../assets/treo2.jpg", productLink:"chi-tiet.html", desc:"Trong phong thủy, hình xoáy cầu thang tượng trưng cho sự phát triển không ngừng, thu hút tài lộc và vận may. Tranh in sơn dầu xoáy cầu thang của Decorpro không chỉ giúp không gian sống thêm ấn tượng mà còn mang lại những ảnh hưởng tích cực về mặt phong thủy."},

  {id:25, name:"Tranh 3 Chiều Bằng Gỗ Nguyên Khối", price:100000, img:"../assets/treo1.jpg", productLink:"chi-tiet.html", desc:"Mang vẻ đẹp tự nhiên và sang trọng vào không gian sống với tranh 3 chiều được chế tác từ gỗ nguyên khối cao cấp. Từng chi tiết được chạm khắc tỉ mỉ, tạo hiệu ứng chiều sâu độc đáo, giúp bức tranh trở nên sống động và nổi bật hơn so với các loại tranh thông thường."},

  {id:1, name:"Ghế Công Thái Học Manson", price:5000000, img:"../assets/h1.webp", productLink:"chi-tiet.html", desc:"Ghế công thái học cao cấp hỗ trợ tư thế ngồi đúng, giảm áp lực lên cột sống và mang lại sự thoải mái khi học tập, làm việc trong thời gian dài."},

  {id:13, name:"Đèn Học Rạng Đông", price:180000, img:"../assets/h2.webp", productLink:"chi-tiet.html", desc:"Đèn học với ánh sáng dịu nhẹ, bảo vệ mắt và giúp tăng khả năng tập trung cho góc học tập hiện đại."},

  {id:36, name:"Bộ Hoa Bằng Đá Thạch Anh", price:900000, img:"../assets/b8.jpg", productLink:"chi-tiet.html", desc:"Bộ hoa bằng đá thạch anh mang vẻ đẹp sang trọng cùng năng lượng tích cực, giúp không gian trở nên nổi bật và cuốn hút hơn."},

  {id:15, name:"Phù Điêu 3D Mộc Lan Ngọc Xuân Ý", price:2000000, img:"../assets/treo9.jpg", productLink:"chi-tiet.html", desc:"Phù điêu treo tường hoa mẫu đơn trong gió mang vẻ đẹp tinh tế và phong thủy tốt đẹp."},

  {id:16, name:"Đồng Hồ Morandi Tối Giản Hiện Đại", price:1600000, img:"../assets/treo4.jpg", productLink:"chi-tiet.html", desc:"Đồng hồ Morandi tối giản hiện đại mang phong cách tinh tế, sang trọng cho không gian sống."},

  {id:27, name:"Chim Vàng Trên Quả Cầu Pha Lê", price:2000000, img:"../assets/b7.jpg", productLink:"chi-tiet.html", desc:"Chim vàng trên quả cầu pha lê là sự kết hợp hài hòa giữa nghệ thuật và phong thủy, tạo điểm nhấn đẳng cấp cho không gian sống."},

  {id:4, name:"Đèn Học PIXAR", price:160000, img:"../assets/h3.webp", productLink:"chi-tiet.html", desc:"Đèn học thiết kế lấy cảm hứng từ phong cách Pixar, nhỏ gọn, linh hoạt và tạo điểm nhấn độc đáo cho bàn học."},

  {id:35, name:"Lá Sung Nghệ Thuật Đặt Bàn", price:2000000, img:"../assets/b5.jpg", productLink:"chi-tiet.html", desc:"Lá sung nghệ thuật đặt bàn mang vẻ đẹp tự nhiên và ý nghĩa phong thủy tốt lành, giúp không gian thêm sang trọng và hài hòa."},

  {id:19, name:"Gương Tròn Hiện Đại", price:6000000, img:"../assets/treo10.jpg", productLink:"chi-tiet.html", desc:"Gương tròn hiện đại mang lại vẻ đẹp tinh tế cho không gian sống."},

  {id:20, name:"Đồng Hồ Treo Tường Hình Ngọn Núi", price:1500000, img:"../assets/treo5.jpg", productLink:"chi-tiet.html", desc:"Trong thiết kế nội thất hiện đại, đồng hồ treo tường hình ngọn núi là món đồ decor được ưa chuộng."},
  
  {id:32, name:"Cặp Hươu Sừng Tấm", price:905000, img:"../assets/b6.jpg", productLink:"chi-tiet.html", desc:"Cặp hươu sừng tấm tượng trưng cho sự may mắn, tài lộc và thịnh vượng, thích hợp làm vật trang trí hoặc quà tặng ý nghĩa."},

  {id:10, name:"Sổ Tay A5", price:20000, img:"../assets/h4.jpg", productLink:"chi-tiet.html", desc:"Sổ tay A5 tiện dụng với kích thước nhỏ gọn, thích hợp để ghi chú, lập kế hoạch và lưu giữ ý tưởng hằng ngày."},

  {id:17, name:"Phù Điêu Dải Hoa Vàng 3D", price:3000000, img:"../assets/treo7.jpg", productLink:"chi-tiet.html", desc:"Phù điêu dải hoa vàng 3D mang vẻ đẹp nghệ thuật và giá trị phong thủy cho không gian sống."},

  {id:18, name:"Phù Điêu 3D Đầu Ngựa", price:8000000, img:"../assets/treo8.jpg", productLink:"chi-tiet.html", desc:"Phù điêu 3D đầu ngựa không chỉ đẹp mắt mà còn mang lại nhiều ý nghĩa phong thủy tốt cho không gian."},
  

  {id:31, name:"Thác Khói Trầm Hương", price:4000000, img:"../assets/b1.jpg", productLink:"chi-tiet.html", desc:"Thác khói trầm hương với thiết kế tinh xảo, tạo dòng khói mềm mại như thác nước, mang đến cảm giác thư thái và bình yên cho không gian sống."},

  {id:28, name:"Thác Khói Trầm Hương Địa Tạng Vương Từ Bi An Lạc", price:2000000, img:"../assets/b9.jpg", productLink:"chi-tiet.html", desc:"Thác khói trầm hương Địa Tạng Vương Từ Bi An Lạc mang ý nghĩa bình an, thanh tịnh và giúp tạo bầu không khí thư giãn cho ngôi nhà."},

  {id:29, name:"Tượng Đầu Ngựa Tối Giản", price:800000, img:"../assets/10.jpg", productLink:"chi-tiet.html", desc:"Tượng đầu ngựa tối giản sở hữu thiết kế hiện đại, mạnh mẽ và tinh tế, tượng trưng cho sự thành công và phát triển bền vững."},

  {id:26, name:"Mô Hình Đá Kết Hợp Động Vật", price:2000000, img:"../assets/b11.jpg", productLink:"chi-tiet.html", desc:"Mô hình đá kết hợp động vật được chế tác độc đáo, mang vẻ đẹp nghệ thuật và tạo điểm nhấn nổi bật cho bàn làm việc hoặc kệ trang trí."},

  {id:37, name:"Quả Địa Cầu Pha Lê", price:1800000, img:"../assets/b12.jpg", productLink:"chi-tiet.html", desc:"Quả địa cầu pha lê với thiết kế sang trọng và trong suốt, là món đồ decor tinh tế dành cho phòng khách, văn phòng hoặc góc học tập."},

  {id:33, name:"Bình Hoa Gốm Vân Tổ Ong", price:5500000, img:"../assets/b2.jpg", productLink:"chi-tiet.html", desc:"Bình hoa gốm vân tổ ong sở hữu thiết kế độc đáo cùng họa tiết nổi bật, là điểm nhấn tinh tế cho phòng khách, phòng ngủ hoặc góc làm việc."},

  {id:5, name:"Sổ Da Loxo A4", price:150000, img:"../assets/h5.jpg", productLink:"chi-tiet.html", desc:"Sổ da A4 sang trọng với chất liệu bền đẹp, phù hợp cho công việc, học tập và ghi chép chuyên nghiệp."},

  {id:2, name:"Kệ Để Sách", price:100000, img:"../assets/h6.png", productLink:"chi-tiet.html", desc:"Kệ để sách giúp sắp xếp tài liệu gọn gàng, tiết kiệm không gian và mang lại sự ngăn nắp cho góc học tập."},

  {id:3, name:"Tai Nghe Bluetooth JBL", price:180000, img:"../assets/h7.webp", productLink:"chi-tiet.html", desc:"Tai nghe Bluetooth cho âm thanh sống động, kết nối ổn định và mang lại trải nghiệm giải trí, học tập tiện lợi."},

  {id:39, name:"Kệ Đựng Đồ", price:1800000, img:"../assets/p7.jpg", productLink:"chi-tiet.html", desc:"Kệ đựng đồ đa năng với thiết kế hiện đại, giúp sắp xếp vật dụng ngăn nắp và tạo điểm nhấn cho không gian."},

  {id:47, name:"Giỏ Đựng Quần Áo", price:300000, img:"../assets/p8.jpg", productLink:"chi-tiet.html", desc:"Giỏ đựng quần áo tiện lợi, chất liệu bền đẹp, giúp lưu trữ đồ dùng gọn gàng và tăng tính thẩm mỹ cho căn phòng."},

  {id:7, name:"Lịch Gỗ Để Bàn", price:90000, img:"../assets/h8.jpg", productLink:"chi-tiet.html", desc:"Lịch gỗ để bàn mang phong cách tối giản, vừa hữu ích trong việc quản lý thời gian vừa là món decor đẹp mắt."},

  {id:40, name:"Gối Tựa", price:160000, img:"../assets/p3.jpg", productLink:"chi-tiet.html", desc:"Gối tựa mềm mại với kiểu dáng hiện đại, mang lại cảm giác thoải mái và tăng tính thẩm mỹ cho không gian sống."},

  {id:44, name:"Gương Để Bàn", price:600000, img:"../assets/p4.jpg", productLink:"chi-tiet.html", desc:"Gương để bàn nhỏ gọn, thiết kế thanh lịch, phù hợp cho bàn trang điểm hoặc bàn học, giúp không gian thêm tinh tế."},

  {id:8, name:"Giá Để Laptop", price:800000, img:"../assets/h9.png", productLink:"chi-tiet.html", desc:"Giá đỡ laptop chắc chắn giúp nâng cao màn hình, cải thiện tư thế ngồi và tăng hiệu quả làm việc."},

  {id:38, name:"Khung Tranh Để Bàn", price:8000000, img:"../assets/p9.jpg", productLink:"chi-tiet.html", desc:"Khung tranh để bàn sang trọng, thích hợp để lưu giữ những khoảnh khắc đáng nhớ và trang trí góc làm việc."},

  {id:48, name:"Bàn Tròn Nhỏ", price:5500000, img:"../assets/p10.jpg", productLink:"chi-tiet.html", desc:"Bàn tròn nhỏ với thiết kế tinh tế, phù hợp làm bàn trà, bàn decor hoặc đặt các vật dụng trang trí trong phòng."},

  {id:11, name:"Giá Sách Để Bàn Gỗ", price:500000, img:"../assets/h10.jpg", productLink:"chi-tiet.html", desc:"Giá sách gỗ để bàn thiết kế tinh tế, giúp lưu trữ sách vở và tạo điểm nhấn ấm áp cho không gian học tập."},

  {id:45, name:"Gương Soi Toàn Thân", price:1500000, img:"../assets/p5.jpg", productLink:"chi-tiet.html", desc:"Gương soi toàn thân hiện đại với kiểu dáng sang trọng, giúp mở rộng cảm giác không gian và tăng vẻ đẹp cho căn phòng."},

  {id:42, name:"Hộp Đựng Khăn Giấy", price:100000, img:"../assets/p6.jpg", productLink:"chi-tiet.html", desc:"Hộp đựng khăn giấy thiết kế tối giản, vừa tiện dụng vừa là món đồ decor giúp bàn làm việc luôn gọn gàng."},

  {id:6, name:"Cây Mini Để Bàn", price:29000, img:"../assets/h11.jpg", productLink:"chi-tiet.html", desc:"Cây mini để bàn mang đến cảm giác tươi mới, giúp không gian học tập và làm việc trở nên sinh động hơn."},

  {id:21, name:"Gương Tròn Trang Trí Phòng Khách", price:5500000, img:"../assets/treo11.jpg", productLink:"chi-tiet.html", desc:"Gương tròn decor là món đồ trang trí không thể thiếu trong không gian phòng khách hiện đại."},

  {id:23, name:"Đồng Hồ Treo Tường Bản Đồ Thế Giới", price:2900000, img:"../assets/treo6.jpg", productLink:"chi-tiet.html", desc:"Đồng hồ treo tường bản đồ thế giới từ Decorpro là sự lựa chọn lý tưởng cho những ai yêu thích sự độc đáo."},

  {id:24, name:"Gương Trang Trí Hình Bông Hoa Đẹp", price:3800000, img:"../assets/treo12.jpg", productLink:"chi-tiet.html", desc:"Gương trang trí hình bông hoa đang trở thành xu hướng hot nhờ thiết kế sang trọng và tinh tế."},

  {id:41, name:"Đồng Hồ Để Bàn", price:200000, img:"../assets/p1.jpg", productLink:"chi-tiet.html", desc:"Đồng hồ để bàn thiết kế tối giản, giúp quản lý thời gian hiệu quả và tạo điểm nhấn tinh tế cho góc học tập, làm việc."},
 
  {id:43, name:"Giá Để Điện Thoại", price:180000, img:"../assets/p2.jpg", productLink:"chi-tiet.html", desc:"Giá đỡ điện thoại tiện lợi với thiết kế chắc chắn, phù hợp để học tập, làm việc hoặc xem video một cách thoải mái."},

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