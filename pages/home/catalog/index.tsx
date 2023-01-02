import React, { useEffect, useState } from "react";
import Header from "./../component/header";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../component/card";

function index() {
  const menus = ["Catalog", "Shop", "Management", "Contact"];
  const loops = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 3, 1, 1, 1, 5, 5];
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
    speed: 200,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // fade: true,
  };

  return (
    <>
      <Header data={menus} />
      <div className="menu">
        <div className="headingCatalog">
          <p>130 BOOKS</p>
          <div className="heading">CATALOG</div>
          <p>Browse Our Extensive Book Catalog</p>
        </div>
      </div>
      <div className="sliderCatalog">
        <Slider {...settings}>
          {loops.map((detail: any, index: number) => {
            return (
              <div key={index}>
                <Card title={detail}/>
              </div>
            );
          })}
        </Slider>
      </div>

    
    </>
  );
}

export default index;
