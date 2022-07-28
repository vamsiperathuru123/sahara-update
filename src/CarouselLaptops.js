import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";


import laptopsb1 from './images/laptopsb1.jpg';
import laptopsb2 from './images/laptopsb2.jpg';
import laptopsb3 from './images/laptopsb3.jpg';
import laptopsb4 from './images/laptopsb4.jpg';
import laptopsb5 from './images/laptopsb5.jpg';
import laptopsb6 from './images/laptopsb6.jpg';
import laptopsb7 from './images/laptopsb7.jpg';

function CarouselLaptops(){
    return (
    <div className="carousel">

       <AliceCarousel className="carousel_image" autoHeight={true}  autoPlay={true}   touchTracking={true} infinite={true}  autoPlayInterval="3000"  autoPlayStrategy="none" activeIndex="1"  mouseTracking={true} touchMoveDefaultEvents={true} disableSlideInfo={true} disableButtonsControls={true} keyboardNavigation={true}>
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3sCzy3V"}}>
             <img className="carousel_image"  onClick={() => {window.location.href="https://amzn.to/3sCzy3V"}} src={laptopsb6} alt="l"/>
           </div>
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/36TB7lD"}}>
             <img className="carousel_image"  onClick={() => {window.location.href="https://amzn.to/36TB7lD"}} src={laptopsb7} alt="l"/>
           </div>
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3KeRU0Z"}}>
             <img className="carousel_image"  onClick={() => {window.location.href="https://amzn.to/3KeRU0Z"}} src={laptopsb3} alt="l"/>
           </div>
          
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3sG5bde"}} >
             <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3sG5bde"}} src={laptopsb1} alt="l"/>
           </div>
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3HENtuK"}}>
             <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3HENtuK"}} src={laptopsb2} alt="l"/>
           </div>
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3vJ6ABk"}}>
              <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3vJ6ABk"}} src={laptopsb4} alt="l"/>
           </div>
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3pzHstf"}}>
              <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3pzHstf"}} src={laptopsb5} alt="l"/>
           </div>

       </AliceCarousel>
    </div>
    );
}
export default CarouselLaptops;