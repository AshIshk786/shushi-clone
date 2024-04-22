import React, { useEffect, useState } from 'react';
import './Slider.css';

function Slider() {

    useEffect(() => {
        const slider = document.querySelectorAll(".slider");
        const prevBtn = document.querySelector(".prev_arrow");
        const nextBtn = document.querySelector(".next_arrow");
        let slideNumber = 0;

        const nextSlide = () => {
            slider.forEach((slide) => slide.classList.remove("active"));
            slideNumber++;
            if (slideNumber >= slider.length) {
                slideNumber = 0;
            }
            slider[slideNumber].classList.add("active");
            const video = slider[slideNumber].querySelector('.video');
            if (video) {
                video.currentTime = 0;
            }
        };

        const prevSlide = () => {
            slider.forEach((slide) => slide.classList.remove("active"));
            slideNumber--;
            if (slideNumber < 0) {
                slideNumber = slider.length - 1;
            }
            slider[slideNumber].classList.add("active");
            const video = slider[slideNumber].querySelector('.video');
            if (video) {
                video.currentTime = 0;
            }
        
        };

        const repeater = () => {
            setInterval(() => {
                nextSlide();
            }, 6000);
        };

        repeater();

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        return () => {
            clearInterval(repeater);
            nextBtn.removeEventListener('click', nextSlide);
            prevBtn.removeEventListener('click', prevSlide);
        };
    }, []);

    return (
        <section className="main-slider">
            <div className="wrapper">
                <div className="slider active">
                    <img src="src/assets/image/content_image/slide1.jpg" alt="" />
                    <div className="slidercontent">
                        <div className="slidercontent-box">
                            <div style={{ background: 'rgba(0,0,0,.85)', padding: '25px' }}>
                                <div className="sliderTitle">LET MOM KNOW HOW <span>“RA”WESOME </span>SHE IS.</div>
                                <p>OFFER AVAILABLE 4/9/24 – 5/12/24<br />
                                    PROMOTIONAL CARDS VALID 5/13/24 – 6/23/24</p>
                                <a href="https://rasushi.cashstar.com/store/recipient?classNameicGift=true&amp;locale=en-us" className="serve_btn" target="_blank" style={{ marginRight: '6px' }}>ORDER GIFT CARDS</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add more slider elements as needed */}
                <div className="slider active">
                    <img src="src/assets/image/content_image/slide1.jpg" alt="" />
                    <div className="slidercontent">
                        <div className="slidercontent-box">
                            <div style={{ background: 'rgba(0,0,0,.85)', padding: '25px' }}>
                                <div className="sliderTitle">LET MOM KNOW HOW <span>“RA”WESOME </span>SHE IS.</div>
                                <p>OFFER AVAILABLE 4/9/24 – 5/12/24<br />
                                    PROMOTIONAL CARDS VALID 5/13/24 – 6/23/24</p>
                                <a href="https://rasushi.cashstar.com/store/recipient?classNameicGift=true&amp;locale=en-us" className="serve_btn" target="_blank" style={{ marginRight: '6px' }}>ORDER GIFT CARDS</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add more slider elements as needed */}
                <div className="slider active">
                    <img src="src/assets/image/content_image/slide2.jpg" alt="" />
                    <div className="slidercontent">
                        <div className="slidercontent-box">
                            <div style={{ background: 'rgba(0,0,0,.85)', padding: '25px' }}>
                                <div className="sliderTitle">LET MOM KNOW HOW <span>“RA”WESOME </span>SHE IS.</div>
                                <p>OFFER AVAILABLE 4/9/24 – 5/12/24<br />
                                    PROMOTIONAL CARDS VALID 5/13/24 – 6/23/24</p>
                                <a href="https://rasushi.cashstar.com/store/recipient?classNameicGift=true&amp;locale=en-us" className="serve_btn" target="_blank" style={{ marginRight: '6px' }}>ORDER GIFT CARDS</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add more slider elements as needed */}
                <div className="slider">
                    <img src="src/assets/image/content_image/slide3.jpg" alt="" />
                    <div className="slidercontent">
                        <div className="slidercontent-box">
                            <div style={{ background: 'rgba(0,0,0,.85)', padding: '25px' }}>
                                <div className="sliderTitle">LET MOM KNOW HOW <span>“RA”WESOME </span>SHE IS.</div>
                                <p>OFFER AVAILABLE 4/9/24 – 5/12/24<br />
                                    PROMOTIONAL CARDS VALID 5/13/24 – 6/23/24</p>
                                <a href="https://rasushi.cashstar.com/store/recipient?classNameicGift=true&amp;locale=en-us" className="serve_btn" target="_blank" style={{ marginRight: '6px' }}>ORDER GIFT CARDS</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add more slider elements as needed */}
                <div className="slider">
                    <img src="src/assets/image/content_image/slide4.jpg" alt="" />
                    <div className="slidercontent">
                        <div className="slidercontent-box">
                            <div style={{ background: 'rgba(0,0,0,.85)', padding: '25px' }}>
                                <div className="sliderTitle">LET MOM KNOW HOW <span>“RA”WESOME </span>SHE IS.</div>
                                <p>OFFER AVAILABLE 4/9/24 – 5/12/24<br />
                                    PROMOTIONAL CARDS VALID 5/13/24 – 6/23/24</p>
                                <a href="https://rasushi.cashstar.com/store/recipient?classNameicGift=true&amp;locale=en-us" className="serve_btn" target="_blank" style={{ marginRight: '6px' }}>ORDER GIFT CARDS</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add more slider elements as needed */}
                <div className="slider">
                    <img src="src/assets/image/content_image/slide5.jpg" alt="" />
                    <div className="slidercontent">
                        <div className="slidercontent-box">
                            <div style={{ background: 'rgba(0,0,0,.85)', padding: '25px' }}>
                                <div className="sliderTitle">LET MOM KNOW HOW <span>“RA”WESOME </span>SHE IS.</div>
                                <p>OFFER AVAILABLE 4/9/24 – 5/12/24<br />
                                    PROMOTIONAL CARDS VALID 5/13/24 – 6/23/24</p>
                                <a href="https://rasushi.cashstar.com/store/recipient?classNameicGift=true&amp;locale=en-us" className="serve_btn" target="_blank" style={{ marginRight: '6px' }}>ORDER GIFT CARDS</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <img src="src/assets/image/content_image/slide6.jpg" alt="" />
                    <div className="slidercontent">
                        <div className="slidercontent-box">
                            <div style={{ background: 'rgba(0,0,0,.85)', padding: '25px' }}>
                                <div className="sliderTitle">LET MOM KNOW HOW <span>“RA”WESOME </span>SHE IS.</div>
                                <p>OFFER AVAILABLE 4/9/24 – 5/12/24<br />
                                    PROMOTIONAL CARDS VALID 5/13/24 – 6/23/24</p>
                                <a href="https://rasushi.cashstar.com/store/recipient?classNameicGift=true&amp;locale=en-us" className="serve_btn" target="_blank" style={{ marginRight: '6px' }}>ORDER GIFT CARDS</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <div className="video-container">
                        <video src="src/assets/vedio/slide7.mp4" autoPlay loop muted className="vedio"></video>
                    </div>
                    <div className="slidercontent">
                        <div className="slidercontent-box">
                            <h1 style={{ color: 'rgb(233, 119, 119)', fontSize: '80px' }}>RA </h1>
                        </div>
                    </div>
                </div>
                
                {/* Add more slider elements as needed */}
                <div className="slidernav">
                    <a href="#"> <img src="src/assets/image/btn/prev_arrow.png" className="prev_arrow" /></a>
                    <a href="#"> <img src="src/assets/image/btn/next_arrow.png" className="next_arrow" /></a>
                </div>
            </div>
        </section>
    );
   
}

export default Slider;