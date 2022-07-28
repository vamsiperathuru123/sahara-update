
import AllSites from './AllSites';
import './Home.css';

import ScrollingText from './ScrollingText';
import ScrollingText1 from './ScrollingText1';
import Slider from './Slider';
import Video from './Video';
import Header from './Header';
import Navlinks from './Navlinks';
import Footer from './Footer';
import Drones from './Drones';

import CarouselHome from './CarouselHome';





function Home(){
    return(
       <div className='home'>
              <Header/>
              <Navlinks/>
                <div className="home">
                    <div>
                        <CarouselHome/>
                    </div>
                
                     <div>
                        <ScrollingText1/>
                    </div>
                   <div>
                      <AllSites/>
                    </div>
                    <div >
                        
                        <Slider/>
                    </div>
                  
                    
                    <div>
                        <ScrollingText/>
                    </div>
                    <div>
                        <Video/>
                    </div>
                    <div>
                        <Drones/>
                    </div>
                    
                   

                </div>
                <Footer/>
      </div> 
           

    );
}
export default Home;
