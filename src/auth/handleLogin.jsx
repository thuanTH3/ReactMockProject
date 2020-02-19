import React, { Component } from "react";
import Inputs from "../components/common/input.jsx";
import Buttons from "../components/common/buttons.jsx";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: "",
      role: "",
      redirect: false
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange() {}

  handleRoleChange() {}

  // let history = useHistory();
  // let location = useLocation();
  // let { from } = location.state || { from: { pathname: "/" } };
  login() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />;
    }
    return (
      <div
        style={{
          width: "100%",
          padding: '50px 0',
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundImage: `url('/assets/images/login-bg.jpg')`
        }}>
        <div
          style={{
            color: "white",
            fontSize: '30px',
            fontWeight: 500
          }}>
          LOG IN
        </div>
        <div>
          <Inputs
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder='email'
            type='text'
          />
        </div>
        <div>
          <Inputs
            value={this.state.pass}
            onChange={this.handlePasswordChange}
            placeholder='password'
            type='password'
          />
        </div>
        <div>
          <Inputs
            value={this.state.role}
            onChange={this.handleRoleChange}
            placeholder='role'
            type='text'
          />
        </div>
        <div><small style={{color: 'white'}}>Currently under construction! Click login to go on</small></div>
        <div>
          <Buttons
            buttonClick={this.login.bind(this)}
            name='Login'
            buttonType='primary-btn'
          />
        </div>
      </div>
    );
  }
}
