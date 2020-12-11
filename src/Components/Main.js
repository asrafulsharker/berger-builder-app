import React from 'react';
import Header from './Header/Header'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import Auth from './Auth/Auth';
import {Route} from 'react-router-dom';
const Main = props =>{
    return(
         <div>
             <Header/>
             <div className="container">
                 <Route exact path="/orders" component={Orders}/>
                 <Route exact path="/checkout" component={Checkout}/>
                 <Route path="/login" component={Auth}/>
                 <Route exact path="/" component={BurgerBuilder}/>
             </div>
             
        </div>
            
    )
}
export default Main;