import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";

const Login = () => {
        const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const history = useHistory();
        const location = useLocation();
        let { from } = location.state || { from: { pathname: "/" } };

        if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSign = () => {

        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log( "🚀 ~ file: Login.js ~ line 24 ~ .then ~ result", result );
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { displayName, email, photoURL };
            console.log("🚀 ~ file: Login.js ~ line 21 ~ .then ~ signedInUser", signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);
            const email = error.email;
            console.log(email);
            const credential = error.credential;
            console.log(credential);
        });
    }
    return (
        <section className="container">
            <div className="row m-5">
                <div className="col-md-6 m-auto">
                    <button className="btn-light border-0 text-center btn-google" onClick={handleGoogleSign}><img src="https://image.flaticon.com/icons/png/512/281/281764.png" className="google-icon" alt="icon"/>Continue with Google</button>
                </div>
            </div>
        </section>
    );
};

export default Login;