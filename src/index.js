import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Auth0Provider } from "@auth0/auth0-react";
//auth provider it inserts domain and client name. it does the setup for the authorization

ReactDOM.render(
  <Auth0Provider
    domain="dev-1kju5x22.us.auth0.com" //REACT_APP_DOMAIN in .env
    clientId="JIEybNyRNRhx8ro9mR1KX3emFeQgwURH" // REACT_APP_CLIENT_ID in .env
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);