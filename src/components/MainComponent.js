import React, { Component } from "react";

import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishdetailComponent";

import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

import { Switch, Route, Redirect } from "react-router-dom";
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
    const Homepage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const AboutUsPage = () => {
      return <About leaders={this.state.leaders} />;
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={AboutUsPage} />

          {/* if url dosesnt match, bydefault redirect to */}
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
