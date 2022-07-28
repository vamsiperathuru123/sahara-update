import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import watchesb1 from './images/watchesb1.jpg';
import watchesb2 from './images/watchesb2.jpg';
import watchesb3 from './images/watchesb3.jpg';
import watchesb4 from './images/watchesb4.jpg';


function CarouselWatches(){
    return (
    <div className="carousel">

       <AliceCarousel className="carousel_image" autoHeight={true} autoPlay={true}  touchTracking={true} infinite={true}  autoPlayInterval="3000"  autoPlayStrategy="none" activeIndex="1"  mouseTracking={true} touchMoveDefaultEvents={true}  disableSlideInfo={true} disableButtonsControls={true} keyboardNavigation={true}>
            
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/35Ljvbj"}}>
              <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/35Ljvbj"}} src={watchesb1} alt="w"/>
           </div>
           <div  className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3C4oAaJ"}}>
             <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3C4oAaJ"}} src={watchesb2} alt="w"/>
           </div>
           <div  className="carousel_image" onClick={() => {window.location.href="https://amzn.to/34c527S"}}>
               <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/34c527S"}} src={watchesb4} alt="w"/>
            </div>
           <div  className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3Cb7I2a"}}>
             <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3Cb7I2a"}} src={watchesb3} alt="w"/>
           </div>
       </AliceCarousel>
    </div>
    );
}
export default CarouselWatches;