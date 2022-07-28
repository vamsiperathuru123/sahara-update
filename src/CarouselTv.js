import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";


import tb1 from './images/tb1.jpg';
import tb2 from './images/tb2.jpg';
import tb3 from './images/tb3.gif';
import tb4 from './images/tb4.jpg';
import tb5 from './images/tb5.jpg';
import tb6 from './images/tb6.jpg'

function CarouselTv(){
    return (
    <div className="carousel">

       <AliceCarousel className="carousel_image"  autoHeight={true}   autoPlay={true}  touchTracking={true} infinite={true}  autoPlayInterval="3000"  activeIndex="1" autoPlayStrategy="none" mouseTracking={true} touchMoveDefaultEvents={true}  disableSlideInfo={true} disableButtonsControls={true} keyboardNavigation={true}>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3sHci5a"}}>
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3sHci5a"}} src={tb1} alt="t"/>
          </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/34eK2NM"}}>
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/34eK2NM"}} src={tb2} alt="t"/>
          </div >
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3HFVvDE"}}>
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3HFVvDE"}} src={tb3} alt="t"/>
          </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3MlYBQU"}}>
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3MlYBQU"}} src={tb4} alt="t"/>
          </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3IFIhrR"}}>
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3IFIhrR"}} src={tb5} alt="t"/>
          </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3pABA2W"}}>
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3pABA2W"}} src={tb6} alt="t"/>
          </div>

       </AliceCarousel>
    </div>
    );
}
export default CarouselTv;