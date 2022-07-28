import React from "react";
import ImageScroller from 'react-image-scroller';
import './Slider.css';
import "./AllSites.css";
import {Link} from 'react-router-dom';
import ajio from './images/ajio.png';
import amazon from './images/amazon.png';
import beardo from './images/beardo.png';
import boat from './images/boat.jpg';
import croma from './images/croma.jpg';
import flipkart from './images/flipkart.png';
import himalaya from './images/himalaya.png';
import jockey from './images/jockey.png';
import lenovo from './images/lenovo.png';
import myntra from './images/myntra.png';
import nike from './images/nike.png';
import OnePlus from './images/OnePlus.png';
import piramal from './images/piramal.png';
import puma from './images/puma.png';
import redwolf from './images/redwolf.png';
import saffola from './images/saffola.jpg';
import samsung from './images/samsung.png';
import shopclues from './images/shopclues.png';
import shopee from './images/shopee.png';
import snapdeal from './images/snapdeal.png';
import tatacliq from './images/tatacliq.png';
import themancompany from './images/themancompany.jpeg';

import './Home.css';



function AllSites(){
    return(
      <div className="all_sites">
          <div>
            <h2 className='lap'>All Sites</h2>
          </div>
          <div className="slider_all"  >
            
          <ImageScroller  >
            
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://amzn.to/3hh6NU2"}} >
                <img className="card-img_all" src={amazon} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="amazon" className="card-btn_all" onClick={() => {window.location.href="https://amzn.to/3hh6NU2"}} target="_blank">amazon</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://amzn.to/3hh6NU2"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836716"}} >
                <img className="card-img_all" src={boat} alt="logo"/>
                
              </div>
              
              <div className="cards_links">
                  <Link pathname="boat" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836716"}} target="_blank">boat</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836716"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836660"}} >
                <img className="card-img_all" src={myntra} alt="logo"/>
                
              </div>
              <div className="cards_links">
                  <Link pathname="myntra" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836660"}} target="_blank">myntra</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836660"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836642"}} >
                <img className="card-img_all" src={flipkart} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="flipkart" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836642"}} target="_blank">Flip Kart</Link>
                  <button className="card-btn_n"onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836642"}} >Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836686"}} >
                <img className="card-img_all" src={beardo} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="beardo" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836686"}} target="_blank">BEARDO</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836686"}}>Shop now</button>
              </div>
            </div>
            
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836666"}} >
                <img className="card-img_all" src={ajio} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="a jio" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836666"}} target="_blank">A Jio</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836666"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836781"}} >
                <img className="card-img_all" src={OnePlus} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="oneplus" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836781"}} target="_blank">ONEPLUS</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836781"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836675"}} >
                <img className="card-img_all" src={tatacliq} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="tatacliq" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836675"}} target="_blank">TATA CLiQ</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836675"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836746"}} >
                <img className="card-img_all" src={himalaya} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="himalaya" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836746"}} target="_blank">Himalaya</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836746"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836788"}} >
                <img className="card-img_all" src={piramal} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="piramal" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836788"}} target="_blank">Piramal</Link>
                 <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836788"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836722"}} >
                <img className="card-img_all" src={croma} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="croma" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836722"}} target="_blank">Croma</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836722"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836692"}} >
                <img className="card-img_all" src={shopclues} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="shopclues" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836692"}} target="_blank">SHOPCLUES</Link>
                 <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836692"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836770"}} >
                <img className="card-img_all" src={snapdeal} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="snapdeal" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836770"}} target="_blank">Snapdeal</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836770"}}>Shop now</button>
              </div>
              
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836651"}} >
                <img className="card-img_all" src={shopee} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="shopee" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836651"}} target="_blank">Shopee</Link>
                 <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836651"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836730"}} >
                <img className="card-img_all" src={lenovo} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="lenovo" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836730"}} target="_blank">Lenovo</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836730"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836732"}} >
                <img className="card-img_all" src={samsung} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="samsung" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836732"}} target="_blank">SAMSUNG</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836732"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836750"}} >
                <img className="card-img_all" src={puma} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="puma" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836750"}} target="_blank">PUMA</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836750"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836775"}} >
                <img className="card-img_all"  src={nike} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="nike" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836775"}} target="_blank">Nike</Link>
                 <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836775"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836798"}} >
                <img className="card-img_all" src={saffola} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="saffola" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836798"}} target="_blank">Saffola</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836798"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836704"}} >
                <img className="card-img_all" src={themancompany} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="the man company" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836704"}} target="_blank">THE MAN COMPANY</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836704"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836835"}} >
                <img className="card-img_all" src={jockey} alt="logo"/>
              </div>
              <div className="cards_links">
                  <Link pathname="jockey" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836835"}} target="_blank">JOCKEY</Link>
                  <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836835"}}>Shop now</button>
              </div>
            </div>
            <div className="card_all">
              <div className="site" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836735"}} >
                <img className="card-img_all" src={redwolf} alt="logo"/>
              </div>
              <div className="cards_links">
                 <Link pathname="redwolf" className="card-btn_all" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836735"}} target="_blank">REDWOLF</Link>
                 <button className="card-btn_n" onClick={() => {window.location.href="https://ekaro.in/enkr20220226s8836735"}}>Shop now</button>
              </div>
            </div>
          </ImageScroller>         
          </div>  
        
      </div>         
    );
}
export default AllSites;
