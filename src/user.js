import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Profile extends React.Component {
render(){
    const {user}=this.props.Auth0;
    return (
        <>
        <div>
            hello {user.name}
        </div>
        <div>
            your email is: {user.email}
        </div>
        </>
    );
}
}

export default withAuth0(Profile);