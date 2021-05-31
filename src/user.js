import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Profile extends React.Component {
render(){
    const {user,isAuthenticated}=this.props.auth0;
    return (
        <>
        
        {isAuthenticated && 
         <div>
             <div>
         {console.log(user.name)}
             hello {user.name}
         </div>
         <div>
             your email is: {user.email}
         </div>
         </div>
        }
       
        </>
    );
    
}
}


//this comment is for the commit
export default withAuth0(Profile);