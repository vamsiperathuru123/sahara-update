import React from 'react';

import './Header.css';

import './Laptops.css';

import './Home.css';
import LaptopsTable from './LaptopsTable';
import GamingLaptopsTable from './GamingLaptopsTable';
import DellLaptopsTable from './DellLaptopsTable';
import HPLaptopsTable from './HpLaptopsTable';
import LenovoLaptopsTable from './LenovoLaptopsTable';
import AppleLaptopsTable from './AppleLaptopsTable';
import AsusLaptopsTable from './AsusLaptopsTable';
import Header from './Header';
import Navlinks from './Navlinks';
import Footer from './Footer';
import CarouselLaptops from './CarouselLaptops';


function Laptops(){
    
    return(
        <div className='Laptops'>
            <Header/>
            <Navlinks/>
            <div className='lap'>
                <h1>Laptops</h1>
            </div>
            <div>
                <CarouselLaptops/>
            </div>
             
            <div className="lt" >
                <LaptopsTable/> 
            </div>
            
            <div className="lt">
                <GamingLaptopsTable/>
            </div>    
            
            
            <div >
                <AppleLaptopsTable/>
            </div>
            <div >
                <DellLaptopsTable/>
            </div>
            <div >
                <HPLaptopsTable/>
            </div>
            <div >
                <LenovoLaptopsTable/>
            </div>
            <div >
                <AsusLaptopsTable/>
            </div>
            <Footer/>
            
            
       </div>
    
    );
}
export default Laptops;