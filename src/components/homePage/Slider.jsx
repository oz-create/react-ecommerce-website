import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({products,settings={
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
      
    ]
  }}) {


  return (
  
    <Slider {...settings}>
      {
        products.map((product) => {
          
          return(
            <button onClick={() => window.location.href = `/${product.id}`} key={product.id} className="cursor-pointer">
              <div className="w-[23.8rem] h-[30rem] bg-contain bg-no-repeat bg-center bg-white" style={{backgroundImage:`url(${product.images[0]})`}}>
              </div>
            </button>
           
          )
         
        })
      }
    
     

    </Slider>
  );
}