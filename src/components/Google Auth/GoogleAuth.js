import React from 'react';
import {MdEmail}                      from 'react-icons/md'

export default class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <div onClick={this.onSignOutClick} style={{color:"black", fontWeight:"600"}}><MdEmail style={{height:"30px", width:"30px"}}/></div>
      );
    } else {
      return (
        <div onClick={this.onSignInClick} style={{color:"black", fontWeight:"600"}}><MdEmail style={{height:"30px", width:"30px"}}/></div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
