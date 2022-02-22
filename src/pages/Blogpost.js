import React, { Component } from "react";
import { render } from "react-dom";
import Productapi from "../api/Bloger";
import Programminglanguage from "./Blogpost/Programminglanguage";
import Scriptinglanguage from "./Blogpost/Scriptinglanguage";
import Markup from "./Blogpost/Markup";

class Blog extends Component {



  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      case "showHideDemo2":
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
      case "showHideDemo3":
        this.setState({ showHideDemo3: !this.state.showHideDemo3 });
        break;
      // default:
      //   null;
    }
  }

  render() {
    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
    return (
      <div>
        {showHideDemo1 && <Programminglanguage />}

        {showHideDemo2 && <Scriptinglanguage />}

        {showHideDemo3 && <Markup />}




        <div className="container">



          {/* <button onClick={() => this.hideComponent("showHideDemo1")}> */}
          <div className="row">

            <div className="col-11 col-md-10 col-lg-8 col-xxl-8 ">
              <div
                className="work-container-subdiv">
                <div className="row" onClick={() => this.hideComponent("showHideDemo1")}>

                  <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-sm-12">
                    <img src="./assets/img/blog-img/1.jfif" alt="images" className="img-fluid img-product" />
                  </div>

                  <div className="col-md-8 col-lg-8 col-xl-8 col-xxl-8 col-sm-12 my-auto">
                    <h4 className="title fw-bolder">Programming Language</h4>

                    <p className="main-hero-para fw-bold"> info: "What is Programming, type of Programming, uses of Programming",</p>
                  </div>
                </div>

              </div>
            </div>

            {/* </button> */}

            {/* 2nd */}


            {/* <button onClick={() => this.hideComponent("showHideDemo1")}> */}
            <div className="row">

              <div className="col-11 col-md-10 col-lg-8 col-xxl-8 ">
                <div
                  className="work-container-subdiv">
                  <div className="row" onClick={() => this.hideComponent("showHideDemo1")}>

                    <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-sm-12">
                      <img src="./assets/img/blog-img/1.jfif" alt="images" className="img-fluid img-product" />
                    </div>

                    <div className="col-md-8 col-lg-8 col-xl-8 col-xxl-8 col-sm-12 my-auto">
                      <h4 className="title fw-bolder">Programming Language</h4>

                      <p className="main-hero-para fw-bold"> info: "What is Programming, type of Programming, uses of Programming",</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </button> */}


            {/* Right Side */}


            <div className="col-md-12 col-lg-4 col-xl-4 col-xll-4" >

              <div className="col-12 col-md-12 col-lg-12 col-xxl-12 
                            p-3 work-container-subdiv">

                {/* search box */}

                <div class="col-12">
                  <input type="search" class="form-control" id="search" placeholder="Search..." />
                </div>

                {/* Profile  */}
                <div className="py-4">
                  <img src="./assets/img/1.jpg" alt="images" className="img-fluid p-2" height="200" />
                  <div className="text-center">
                    <h4 className="title fw-bolder">Daivesh Vijay Suryawanshi</h4>
                    <p className="">
                      Developer | Bloger| Freelancer | Content Creator
                    </p>

                    {/* Social link */}

                    <div className="simpleCircle">
                      <a href="https://www.facebook.com/daiveshs">
                        <i class="bi bi-facebook" ></i>
                      </a>

                      <a href="https://www.instagram.com/itengg_7875/">
                        <i class="bi bi-instagram"></i>
                      </a>

                      <a href="https://twitter.com/daiveshsuryawa">
                        <i class="bi bi-twitter"></i>
                      </a>

                      <a href="https://in.linkedin.com/in/daivesh-suryawanshi-105231139">
                        <i class="bi bi-linkedin"></i>
                      </a>

                      <a href="https://github.com/daiveshvsuryawanshi">
                        <i class="bi bi-github"></i>
                      </a>
                    </div>
                  </div>

                  {/* filter */}
                  <hr></hr>
                  <h1 className="title mt-5">Categories</h1>
                  <ul>
                    <li> &gt; All </li>
                    <li> &gt; Computer Language </li>
                    <li> &gt; difference Between</li>
                    <li> &gt; Top 5 & 10</li>
                    <li> &gt; Technology </li>
                    <li> &gt; Cheet Sheet </li>
                    <li> &gt; Usefull Things </li>
                    <li> &gt; Coding Info </li>
                    <li> &gt; Product For Coder </li>
                  </ul>


                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

    );
  }
}


export default Blog;