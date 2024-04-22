import React from 'react'
import './Header.css'
function Header() {
  return (
   <>
   
    <div className="neighbour">
        <a href="#" className="location">Click here to find neighbourhood RA shsuhi</a>
        <div className="social_links">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
    </div>



    <header>
    <section className="mainheader">
        <div className="content">
            <div className="logocontainer">
                        <a href="#">
                            <img src="src/assets/image/content_image/ra-sushi-logo.png"/></a>
            </div>
            <nav className="navbardata">
                        <ul className="nav-ul">
                            <li><a href="#" id="menu">MENU</a></li>
                            <li><a href="#">FIND US</a></li>
                            <li><a href="#">THE HOOK UP </a></li>
                            <li><a href="#">GALLERY</a></li>
                            <li><a href="#">GIFT CARDS</a></li>
                            <li><a href="#">CAREERS</a></li>
                            <li><a href="#">YOUR RA PHOTO</a></li>
                        </ul> 
            </nav>
            <div className="serving_container">
                <a href="#" className="serve_btn" id="catering">CATERING</a>
                <a href="#"  className="serve_btn" id="reserve">RESERVATION</a>
                <a href="#"  className="serve_btn" id="online_del">ORDER ONLINE </a>
            </div>
        </div>
    </section>
</header>
   
   </>
    
    
  )
}

export default Header;