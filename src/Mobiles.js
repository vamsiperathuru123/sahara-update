import React from 'react';
import './Header.css';

import './Laptops.css';
import './Home.css';
import Header from './Header';
import Navlinks from './Navlinks';
import Footer from './Footer';
import MobilesTop from './MobilesTop';
import './Mobiles.css';
import CarouselMobiles from './CarouselMobiles';



function Mobiles(){
    
    return(
        <div className='Laptops'>
            <Header/>
            <Navlinks/>
            <div className='lap'>
                <h1>Mobiles</h1>
            </div>
              
             
            <div>
                <CarouselMobiles/>
            </div>
             <MobilesTop/>
            
            
            <Footer/>
            
            
       </div>
    
    );
}
export default Mobiles;