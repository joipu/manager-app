import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import AsyncStorage from '@react-native-community/async-storage';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAqnYzrxMOBEZavtJUlNNreWD2sz_urY5U",
      authDomain: "manager-ce05c.firebaseapp.com",
      databaseURL: "https://manager-ce05c.firebaseio.com",
      projectId: "manager-ce05c",
      storageBucket: "manager-ce05c.appspot.com",
      messagingSenderId: "538154676516",
      appId: "1:538154676516:web:9872d7e989b1726b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

