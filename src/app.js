import React from 'react';
import Header from './header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './login';
import Logout from './logOutButton';
import User from './user';
import { withAuth0 } from '@auth0/auth0-react';
import MyFavoriteBooks from './myFavoriteBooks';
//it only exports the app if it's authorized
class App extends React.Component {

  render() {
    console.log('app', this.props.auth0.isAuthenticated);
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                  {!this.props.auth0.isAuthenticated? <MyFavoriteBooks/>:<Login/>}
                </Route>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                <Route path="/profile">
                  <User/>
                  </Route>
              </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
