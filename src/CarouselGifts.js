import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import headphones from "./images/headphones.jpg";
import homeb1 from "./images/homeb1.jpg";
import homeb2 from "./images/homeb2.jpg";
import homeb3 from "./images/homeb3.jpg";

function CarouselGifts(){
    return (
    <div className="carousel">

<AliceCarousel className="carousel_image" autoHeight={true}   autoPlay={true}  touchTracking={true} infinite={true}  autoPlayInterval="3000"  autoPlayStrategy="none" activeIndex="1"  mouseTracking={true} touchMoveDefaultEvents={true}  disableSlideInfo={true} disableButtonsControls={true} keyboardNavigation={true}>
    
        
         <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3IBme5G"}}>
            <img className="carousel_image"  onClick={() => {window.location.href="https://amzn.to/3IBme5G"}} src={homeb1}  alt="h"/>
          </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3vuEYA0"}}>
            <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3vuEYA0"}} src={homeb2} alt="h"/>
          </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/35vNJix"}}>
            <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/35vNJix"}} src={homeb3} alt="h"/>
          </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/34c527S"}}>
             <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/34c527S"}} src={headphones} alt="h"/>
          </div>
      </AliceCarousel>
    </div>
    );
}
export default CarouselGifts;