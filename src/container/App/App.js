import React, {Component} from 'react';
import Header from "../../component/Header/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import ChatPage from "../ChatPage/ChatPage";

class App extends Component {
  handleLogout = () => {
    console.log('logout click');
  };

  render() {
    return (
      <div className="App">
        <div className="app-body">

          <BrowserRouter>
            <Header authenticated={false} onLogout={this.handleLogout}/>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/chat" component={ChatPage}/>
              <Route exact path="/login" component={LoginPage}/>
            </Switch>
          </BrowserRouter>
        </div>
        <Alert stack={{limit: 3}}
               timeout={3000}
               position='top-right' effect='slide' offset={65}/>
      </div>
    );
  }
}

export default App;
