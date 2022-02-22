import React, { useEffect } from "react";
import About from './About';
import Banner from './Banner';

const Header = () => {
  
    return (
        <>
            <header>
                <section className="container main-hero-container mx-5">
                    <div className="row px-5">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
                            <h1 className="display-2">
                                Creative  Blogs <br /> Easy For You.
                            </h1>
                            <p className="main-hero-para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                                officiis tempora recusandae voluptate quam, nisi odio officiis
                                tempora recusandae
                            </p>
                            <button type="button" className="btn btn-style">
                                Explore &#8594;
                            </button>
                        </div>
                        {/*  --------------- main header right side--------------  */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img
                                src="./assets/img/hero1.jpg"
                                alt="heroimg"
                                className="img-fluid"
                            />
                            <img
                                src="./assets/img/hero2.jpg"
                                alt="heroimg4"
                                className="img-fluid main-hero-img2"
                            />
                        </div>
                    </div>
                </section>
            </header>

            <About />
            
            <Banner />
        </>
    );
};

export default Header;
