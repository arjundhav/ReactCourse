import React, { Component } from "react";
import Home from "./HomeComponent.js";
import Menu from "./MenuComponent.js";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import {Switch, Route, Redirect} from 'react-router-dom';
class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {

    const Homepage=() =>{
      return(
        <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
          promotions={this.state.promotions.filter((promo)=> promo.featured)[0]}
          leaders={this.state.leaders.filter((leader)=> leader.featured)[0]}
       />
      );    
    };

    return (
      <div className="App">

      <Header />
       <Switch>
         <Route path="/home" componet={Homepage} />
         <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
         <Route exact path='/contactus' component={Contact} />
         <Redirect to="/home" />
       </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

// Basic Structure of React Component
// import React, { Component } from 'react';

// class Menu extends Component{
//     constructor(props) {
//         super(props);
//    this.state = {
//     state stores in. Properties related to this component that we can make use of.
//    }
//     }

//     render() {
//         return(

//         );
//     }
// }

// export default Menu;
