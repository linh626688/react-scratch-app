import React, {Component} from 'react';
import {LoginForm, SocialLogin, WrapperLoginPage} from "./styles";
import {ACCESS_TOKEN, FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL} from "../../const/constant";
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import {callApi, METHODS} from "../../utils/requestUtils";
import {API_ROUTES} from "../../const/RouteAPI";
import Alert from 'react-s-alert';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {

  }

  handleInputChange = event => {
    const {target} = event;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: inputValue
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let payload = {
      email: this.state.email,
      password: this.state.password,
    };
    callApi(API_ROUTES.LOGIN, METHODS.POST, payload)
      .then(res => {
          console.log('res', res);
          localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
          this.props.history.push("/");
          Alert.success("You're successfully logged in!");

        }
      )
      .catch(error => {
          console.log('error', error);
          Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        }
      )
  };

  render() {
    return (
      <WrapperLoginPage>
        <div className="login-container">
          <div className="login-content">
            <h1 className="login-title">Login</h1>
            <SocialLogin>
              <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                  <img src={googleLogo} alt="Google"/> Log in with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                  <img src={fbLogo} alt="Facebook"/> Log in with Facebook</a>
                {/*<a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>*/}
                {/*  <img src={githubLogo} alt="Github"/> Log in with Github</a>*/}
              </div>
            </SocialLogin>
            <div className="or-separator">
              <span className="or-text">OR</span>
            </div>
            <LoginForm>
              <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                  <input type="email" name="email"
                         className="form-control" placeholder="Email"
                         value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                  <input type="password" name="password"
                         className="form-control" placeholder="Password"
                         value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                  <button type="submit" className="btn btn-block btn-primary">Login</button>
                </div>
              </form>
            </LoginForm>
            {/*<span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>*/}
          </div>
        </div>
      </WrapperLoginPage>
    );
  }
}

export default LoginPage;
