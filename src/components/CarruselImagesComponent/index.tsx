import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarruselImagesComponent.css";
import area from '../../assets/icons/area.svg'
import bathroom from '../../assets/icons/bathroom.svg'
import room from '../../assets/icons/room.svg'
import door from '../../assets/icons/door.svg'
import depto1 from '../../assets/images/depto1.png'
import depto2 from '../../assets/images/depto2.png'
import depto3 from '../../assets/images/depto3.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      depto1
  },
  {
    url:
    depto2
  },
  //Second image url
  {
    url:
    depto3  },
  //Third image url
  {
    url:
    depto3  },

  //Fourth image url

  {
    url:
    depto1  }
];
export const CarruselImagesComponent = () => {
  // const images = props.images;
  return (
    <div className="slide-container">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>

              <img src={imageUrl.url} alt="movie" />
              <div className="slider-box">
                <div className="slider-top">
                  <div className="slider-tite">Alquiler</div>
                  <div className="slider-text">Casa Doble, Barrio Alberdi</div>
                  <div className="slider-flag">$300000/Mes</div>
                </div>
                <div className="slider-divisor"></div>
                <div className="slider-descripton">
                  <div className="slider-info"> 
                    <img src={door} alt="icon" className="slider-icon"/>
                    <div>3 Ambientes</div>
                  </div>
                  <div className="slider-info"> 
                    <img src={area}  alt="icon" className="slider-icon"/>
                    <div>60 m2</div>
                  </div>
                </div>
                <div className="slider-descripton">
                  <div className="slider-info"> 
                    <img src={bathroom} alt="icon" className="slider-icon"/>
                    <div>3 Baños</div>
                  </div>
                  <div className="slider-info"> 
                    <img src={room}  alt="icon" className="slider-icon"/>
                    <div>3 Dormitorios</div>
                  </div>
                </div>
              </div>
              {/* <div className="slider-image" style={{ backgroundImage: "url(" + imageUrl.url + ")" }} >
                <div className="slider-box">
                  <div>alquiler</div>
                </div>
              </div> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  )
};
