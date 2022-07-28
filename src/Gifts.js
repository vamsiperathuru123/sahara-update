import React from 'react';

import './Header.css';
import './Navlinks.css';



import './Laptops.css';

import './Home.css';
import Header from './Header';
import Navlinks from './Navlinks';
import Footer from './Footer';

import './Mobiles.css';
import CarouselGifts from './CarouselGifts';
import './Gifts.css';
import saharahomevideo from "./videos/saharahomevideo.mp4";



function Gifts(){
    
    return(
          <div>
                    <div className='Gifts'>
                        <Header/>
                        <Navlinks/>
                        <div className='lap'>
                            <h1>Complementary Gifts</h1>
                        </div>
                        
                        
                        <div>
                            <CarouselGifts/>
                        </div>
                        <div className='login__container'>
                            <div>
                            <h3 className='lap'>Enter the Details to Get Complementary Gifts on Purchased Products</h3>
                            <p className='lap_N'>(Note : only Applicable for Amazon products purchased through Our Website ) </p>
                            </div>
                            
                                <div className="navlinks_g">
                                    <div className="navlinks__outer_g">
                                        <div className="navlinks__inner_g">
                                            <button className='V_button' pathname="Gifts" onClick={() => {window.location.href="https://forms.gle/5WKxSEGJ3P1gnEiB9"}} target="_blank" >
                                                Enter Details
                                            </button>
                                        </div>
                                    </div>      
                                </div>
                        </div>
                        <div > 
                                <div className="video"   >
                                    <video  className="video_n" muted autoPlay playsInline loop controls  preload="auto" >
                                        <source type="video/mp4" src={saharahomevideo} />
                                    </video>
                        
                                </div>
       
                        </div>
            
        </div>
            <Footer/>
            
            
         </div>
    
    );
}
export default Gifts;