import React, { Component } from "react";

import { View } from "react-native";

import firebase from "firebase";

import { Header } from "./common/";

import LoginForm from "./LoginForm";

class App extends Component {
    //Life Cycle Method to init the firebase
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyA3_jxDSCw_7eQ5JYi665VDr_o9Ap9q22g",
            authDomain: "project-auth-55a6d.firebaseapp.com",
            databaseURL: "https://project-auth-55a6d.firebaseio.com",
            projectId: "project-auth-55a6d",
            storageBucket: "project-auth-55a6d.appspot.com",
            messagingSenderId: "374568869098"

        });

    }


render() {
    return (
        <View>
            <Header headerText="Authentication" />
            <LoginForm />
        </View>
    );
}

}

export default App ;