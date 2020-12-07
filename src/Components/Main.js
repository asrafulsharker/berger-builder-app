import React from 'react';
import Header from './Header/Header'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import {Route} from 'react-router-dom';
const Main = props =>{
    return(
         <div>
             <Header/>
             <div className="container">
                 <Route exact path="/orders" component={Orders}/>
                 <Route exact path="/checkout" component={Checkout}/>
                 <Route exact path="/" component={BurgerBuilder}/>
             </div>
             
        </div>
            
    )
}
export default Main;