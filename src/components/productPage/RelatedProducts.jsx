import React from 'react'
import SimpleSlider from '../homePage/Slider'
import { useSelector } from 'react-redux';
import ProductCard from '../homePage/ProductCard';
import Slider from 'react-slick';

function RelatedProducts({ selectedProduct }) {
  const { products } = useSelector((state) => state.product)
  const relatedProducts = products.filter(product => product.category === selectedProduct.category);


  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }

  return (
    <div className='my-5'>
      <h1 className='text-3xl font-semibold text-center mb-5'>Related Products</h1>
      <Slider {...settings}>
        {
          relatedProducts.map((product) => {

            return (
              <ProductCard
                product={product}
                key={product.id}
              />

            )

          })
        }
      </Slider>
    </div>
  )
}

export default RelatedProducts