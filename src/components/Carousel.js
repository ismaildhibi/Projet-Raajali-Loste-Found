import React from "react";

function Carousel() {
  return (
    <div class="container">
      <div id="bs4-slide-carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#bs4-slide-carousel"
            data-slide-to="0"
            class="active"
          ></li>

          <li data-target="#bs4-slide-carousel" data-slide-to="1"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block mx-auto"
              src="https://return.me/images/frontend/full/ReturnmoiFile_1559596449.jpg"
              alt="Slide One"
            />
          </div>

          <div class="carousel-item">
            <img
              class="d-block mx-auto"
              src="https://return.me/images/frontend/full/ReturnmoiFile_1559574453.jpg"
              alt="Slide Two"
            />
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#bs4-slide-carousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>

          <span class="sr-only">Previous</span>
        </a>

        {/* <a
          class="carousel-control-next"
          href="#bs4-slide-carousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>

          <span class="sr-only">Next</span>
        </a> */}
      </div>

      <div class="text-center mt-4">
        {/* <a
          class="btn btn-success mr-2 px-4"
          href="#bs4-slide-carousel"
          role="button"
          data-slide="prev"
        >
          Prev
        </a> */}
        {/* <a
          class="btn btn-success ml-2 px-4"
          id="btnNext"
          data-slide="next"
          href="#bs4-slide-carousel"
          role="button"
        >
          Next
        </a> */}
      </div>
    </div>
  );
}

export default Carousel;
// import React, { Component } from 'react';
// import Slider from "react-slick";
// ​
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from "../components/layouts/imageone.jpg"
// import img2 from "../components/layouts/imagetow.jpg"

// ​
// export default class Baner extends Component {
//   render() {
//     var settings = {
//       autoplay: true,
//       infinite: true,
//       speed: 100,
//       slidesToShow: 6,
//       slidesToScroll: 1
//     };
//     return (
//       <Slider {...settings}>
//         <div>
//             <img src={img1} />
//         </div>
//         <div>
//             <img src={img2}/>
//         </div>
// ​
//     </Slider>
//     );
//   }
// }
// ​
// ​
