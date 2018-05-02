import React from 'react';
import { connect } from 'react-redux';
import { startLogin, loginWithEmail } from '../actions/auth';

// stateless component 
export class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '123@123.com',
      password: '123456'
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    const email = this.props.email;
    const password = this.props.password;
    this.props.loginWithEmail(email, password);
  };
  onChange = () => {

  };
  onLogin = () => {
    this.props.startLogin();
  }
  render() {
    return (
      // = ({ startLogin }) => (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title"> Expensify</h1>
          <p> some text </p>
          <div>
            <form className="form" onSubmit={this.onSubmit}>
            <input
                className="text-input"
                type="email"
                placeholder="e-mail address"
                value={this.state.email}
                onChange={this.onChange}
                autoFocus
                required
              />
              <input
                type="password"
                placeholder="password"
                className="text-input"
                value={this.state.password}
                onChange={this.onChange}
                required
              />
              <button className="button button--email">Login with Email</button>
              </form>
              <button className="button" onClick={this.onLogin}>Login with Google</button>
          </div>      
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  console.log('ff', state);
  return {
    email: '123@123.com',
    password: '123456'
  }
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  loginWithEmail: (email, password) => dispatch(loginWithEmail(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
