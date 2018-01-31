/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, ImageBackground, View, ActivityIndicator} from 'react-native';
import { Root } from 'native-base'
import Router from "./router/routes"
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBN9zmXXZg_mOpsOopXGqbeaE3rxxdEmHM",
  authDomain: "baigggroup.firebaseapp.com",
  databaseURL: "https://baigggroup.firebaseio.com",
  projectId: "baigggroup",
  storageBucket: "baigggroup.appspot.com",
  messagingSenderId: "367996468645"
};
firebase.initializeApp(config);

export default class App extends Component {


  render() {
    return (
      <Root>

      <Router/>

    </Root>
    );
  }
}





