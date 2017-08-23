
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.buttonText = (this.props.formType === "login") ? "Log In" : "Sign Up";
    this.header = (this.props.formType === "login") ? "LogInChange" : "SignUpChange";

    if(this.props.formType === "login"){
      this.navLink = <Link to="/signup"> Don't have an account? <span className="highlight">Sign
                      up</span></Link>;
      this.header = "Log in to get started";
    }
    else{
      this.navLink = <Link to="/login"> Already have an account? <span className="highlight">Log
                      in</span></Link>;
      this.header = "Sign up to get started";
    }

    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  updateState(key){
    return (e) => {
      this.setState({[key]: e.target.value});
    };
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}-{error}`} className="errors">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return (
      <div className="auth-form-container">
        <form className="auth-form">

          <div className="centered-text">
            <img src="https://pbs.twimg.com/profile_images/779423185339027456/qeIZUnsA_400x400.jpg"></img>
            <h1>Discover New Events</h1>
            <div className="header-text">{this.header}</div>
          </div>

          {this.renderErrors()}

          <input
            type="text"
            value={this.state.username}
            onChange={this.updateState("username")}
            placeholder="Username">
          </input>

        <br></br>

          <input
            type="password"
            value={this.state.password}
            onChange={this.updateState("password")}
            placeholder="Password">
          </input>

        <br></br>

        <input
          type="submit"
          onClick={this.handleSubmit}
          value={this.buttonText}>
        </input>

        <input
          type="submit"
          value="Guest Login">
        </input>


          <h3>{this.navLink}</h3>

        </form>
      </div>
    );
  }
}

export default withRouter(AuthForm);
