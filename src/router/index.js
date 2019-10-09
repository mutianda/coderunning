import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Routers from "./routerMap";
 class RouterMap extends React.Component {
      constructor(props) {
           super(props)
        }
   render() {
          let token = false
       return (
           <Router>
               <Switch>
                   <React.Fragment>
                       {Routers.map((item, index) => {
                           return <Route key={index} path={item.path} exact render={props =>
                               (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                                       pathname: '/login',
                                       state: { from: props.location }
                                   }} />)
                               )} />
                       })}
                   </React.Fragment>
               </Switch>
           </Router>
       );
   }
}

export default RouterMap;
