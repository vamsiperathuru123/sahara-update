import './App.css';
import Header from './Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';

import Laptops from './Laptops';
import AllSites from './AllSites';
import Source from './Source';
import Mobiles from './Mobiles';
import Televisions from './Televisions';
import Watches from './Watches';
import Gifts from './Gifts';
import Sahara from './Sahara';




function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          

         <Route path="/checkout">
           <Header/>
           <Checkout/>
         </Route>  
         <Route path="/login">
           <Login/>
         </Route>
         <Route path="/Laptops">
           <Laptops/>
         </Route> 
         <Route path="/Mobiles">
           <Mobiles/>
         </Route> 
         <Route path="/Source">
           <Source/>
         </Route>
         <Route path="/AllSites">
           <AllSites/>
         </Route>
         <Route path="/Televisions">
           <Televisions/>
         </Route>
         <Route path="/Watches">
           <Watches/>
         </Route>
         <Route path="/Gifts">
           <Gifts/>
         </Route>
         <Route path="/Sahara">
           <Sahara/>
         </Route>
         
         <Route path="/Header">
           <Header/>
          </Route>
         <Route>
          <Home/>
         </Route>
          
          
        </Switch>  
      </div>
    </Router>
    
  );
}

export default App;
