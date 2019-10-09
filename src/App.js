import React from 'react';
import {
  BrowserRouter as Router,
     Route,
     Switch,
     Redirect
} from 'react-router-dom';
import Notfind from './pages/like/like'
import Routers from './router/routerMap'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    let token = false
    return (
          <Router>
             <div>
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
             <Route component={Notfind} />
              </React.Fragment>
             </Switch>
            </div>
          </Router>
    )
  }
}

export default App;
