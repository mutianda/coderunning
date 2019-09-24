import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from "../pages/login/login"
import Register from "../pages/register/register"
import Home from '../pages/home/home'
import Navigation from '../components/navigation/navigation'
import MyInfo from '../pages/myInfo'
 class RouterMap extends React.Component {
      constructor(props) {
           super(props)
        }
   render() {
       return (
           <Router>
               <Switch>
                   <React.Fragment>
                       <Route exact path="/" component={Home}/>
                       <Route path="/login" component={Login}/>
                       <Route path="/register" component={Register}/>
                       <Route path="/home" component={Home}/>
                       <Route path="/user" component={MyInfo}/>
                       <Navigation></Navigation>
                   </React.Fragment>
               </Switch>
           </Router>
       );
   }
}

export default RouterMap;
