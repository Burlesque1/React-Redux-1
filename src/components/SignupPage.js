import React from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../firebase/firebase';
import Popup from 'react-popup';
import { loginWithEmail } from '../actions/auth';

export default class SignupPage extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements[0].value;
        const password = e.target.elements[1].value;
        Popup.alert('sign up success!');
        firebase.auth().createUserWithEmailAndPassword(email, password).then((e) => {
            console.log(e, 'sign up success!');
            Popup.alert('sign up success!');
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode, errorMessage);
        });
    }
    render () {
        return (
        <div className="box-layout">
            <div className="box-layout__box">
            <h1 className="box-layout__title"> Expensify</h1>
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        className="text-input"
                        type="email"
                        placeholder="e-mail address"
                        autoFocus
                        required
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="text-input"
                        minLength={6}
                        required
                    />          
                    <button className="button" >Signup</button>    
                    <Link className="list-item" to="/"> Go back to sign in </Link>      
                </form>
            </div>
        </div>
        )
    }
}