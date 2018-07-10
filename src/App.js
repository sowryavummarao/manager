import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm.js';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCIHFQ6jMXFwwh68gRvVb2OSeaaLcIqR74',
      authDomain: 'manager-f9c2f.firebaseapp.com',
      databaseURL: 'https://manager-f9c2f.firebaseio.com',
      projectId: 'manager-f9c2f',
      storageBucket: 'manager-f9c2f.appspot.com',
      messagingSenderId: '418267756388'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
          <LoginForm />
      </Provider>
    );
  }
}

export default App;
