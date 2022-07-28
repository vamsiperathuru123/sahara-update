import React from "react";
import './Header.css';
import './Televisions.css';
import './Laptops.css';
import './Home.css';
import Header from './Header';
import Navlinks from './Navlinks';
import Footer from './Footer';
import SmartTvTable from "./SmartTvTable";
import SonyTV from "./SonyTV";
import CarouselTv from "./CarouselTv";
import SonyAndroidTV from "./SonyAndroidTv";


function Televisions(){
    return(
        <div className='television'>
            <Header/>
            <Navlinks/>
            <div className='lap'>
                <h1>Televisions</h1>
            </div>
            <div>
                <CarouselTv/>
            </div>
            <div className="lt">
                <SmartTvTable/>
            </div>
            <div>
              <SonyTV/>
            </div>
            <div>
                <SonyAndroidTV/>
            </div>
             
            
            <Footer/>
            
            
               
        </div>
    );
}
export default Televisions;