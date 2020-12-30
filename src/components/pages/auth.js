import React, {Component} from 'react' ;
import Login from "../auth/login"
import loginImg from "../../../static/assets/images/login.jpg";

export default class auth extends Component {
    constructor(props) {
        super(props);


        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }
    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin();
    }
    render() {
        return (
<div className="auth-page-wrapper">
   <div className="left-columb"
   style={{
       backgroundImage:`url(${loginImg})`
   }}
   />
   <div className="right-columb">
       <Login
       handleSuccessfulAuth = {this.handleSuccessfulAuth}
       handleUnsuccessfulAuth = {this.handleUnsuccessfulAuth}
       />
   </div>
</div>
    );
  }
}