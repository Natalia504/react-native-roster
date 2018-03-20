import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';  //this is a middleware
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyBeH7oeGP-d5HxyzTG0Z-nmD3XMD-IBCTw",
            authDomain: "nataliacalt-team-roster.firebaseapp.com",
            databaseURL: "https://nataliacalt-team-roster.firebaseio.com",
            projectId: "nataliacalt-team-roster",
            storageBucket: "nataliacalt-team-roster.appspot.com",
            messagingSenderId: "958151683277"
          };
          firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router/>
            </Provider>
        )
    }
}

export default App;