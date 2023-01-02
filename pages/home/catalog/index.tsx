import React, { useEffect, useState } from "react";
import Header from "./../component/header";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../component/card";
import axios from "axios";

function Index() {
  const menus = ["Catalog", "Shop", "Management", "Contact"];
  const [books, setBooks] = useState([])
  const loops = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 3, 1, 1, 1, 5, 5];
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
    speed: 200,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // fade: true,
  };
  useEffect(()=>{
    const loadListBook = async() =>{
        await axios.get("https://qks0be.deta.dev/book/books/?page=1&limit=10").then((resp)=>{
            setBooks(resp.data)
            console.log(resp.data);
        })
    }
    loadListBook()
  },[])

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
          {
          books.map((detail: any, index: number) => {
            return (
              <div key={index}>
                <Card images={detail.imageKey} title={detail.title}/>
              </div>
            );
          })}
        </Slider>
      </div>

    
    </>
  );
}

export default Index;
