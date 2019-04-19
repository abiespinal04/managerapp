import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'
import firebase from 'firebase';

class App extends Component {
    state = {  }

    componentWillMount(){
        // Initialize Firebase
  const config = {
    apiKey: "AIzaSyB3GvMk3sY324qiE2D0beEAbt-EyNaJNKQ",
    authDomain: "manager-b2ccc.firebaseapp.com",
    databaseURL: "https://manager-b2ccc.firebaseio.com",
    projectId: "manager-b2ccc",
    storageBucket: "manager-b2ccc.appspot.com",
    messagingSenderId: "289738637404"
  };
  firebase.initializeApp(config);
    }

    render() { 
        return ( 
            <Provider store={createStore(reducers)}>
            <View>
            <Text>
                Gello!
            </Text>
            </View>
            </Provider>
         );
    }
}
 
export default App;