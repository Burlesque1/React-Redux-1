import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin, loginWithEmail } from '../actions/auth';

// stateless component 
export class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'default@default.com',
      password: 'default'
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.loginWithEmail(this.state.email, this.state.password);
  };
  onChange = (e) => {
    const type = e.target.type;
    const value = e.target.value;
    if(type === 'email'){
      this.setState(() => ({ email: value }));
    } else if(type === 'password'){
      this.setState(() => ({ password: value }));
    }
  };
  onLogin = () => {
    this.props.startLogin();
  }
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title"> Expensify</h1>
          <p>Welcome to here!</p>
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
              <button className="button" onClick={this.onLogin}>Login with Google</button>              
            </form>
          </div>   
              <p>New to here? >> 
                <Link className="button button--signup" to='/signup'> Signup</Link>
              </p>   
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  loginWithEmail: (email, password) => dispatch(loginWithEmail(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
