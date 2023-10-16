// <!-- // Add a top navigation bar to the web page.
// function addTopNav() {
//   // ...
// }

// // Add a header to the web page.
// function addHeader() {
//   // ...
// }

// // Add a "My Account" container to the web page.
// function addContainTaiKhoan() {
//   // ...
// }

// // Add a "Product List Container" to the web page.
// function addPlc() {
//   // ...
// }

// // Add a footer to the web page.
// function addFooter() {
//   // ...
// }

// // Scroll the web page to the top.
// function gotoTop() {
//   // ...
// } -->
function addTopNav(){
    document.write(
      <div class="top-nav group"> 
        <section>
          <div social-top-nav>
              {/* platform social  */}
                <a class="fa fa-facebook"></a>
                <a class="fa fa-twitter"></a>
                <a class="fa fa-google"></a>
                <a class="fa fa-youtube"></a>
          </div>
          <div class="top-nav-quicklink flexContain">
            {/* Menu điều hướng  */}
                <li><a href="index.html"><i class="fa fa-home"></i> Trang chủ</a></li>
                <li><a href="tintuc.html"><i class="fa fa-newspaper-o"></i> Tin tức</a></li>
                <li><a href="tuyendung.html"><i class="fa fa-handshake-o"></i> Tuyển dụng</a></li>
                <li><a href="gioithieu.html"><i class="fa fa-info-circle"></i> Giới thiệu</a></li>
                <li><a href="trungtambaohanh.html"><i class="fa fa-wrench"></i> Bảo hành</a></li>
                <li><a href="lienhe.html"><i class="fa fa-phone"></i> Liên hệ</a></li>
          </div>
        </section>
      </div>
    )
}