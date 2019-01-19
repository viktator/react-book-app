import React, { Component } from 'react';
import 'antd/dist/antd.css' 
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import { getBooks } from '../redux/books/reducer'
import Routes from './Routes'
import Layout from './Layout'
import store from '../redux'

console.log(store())
class App extends Component {

  render() {
    return (
      <Provider store = {store()}>
        <Router>
          <Layout >
            <Routes />
          </Layout>
        </Router>
      </ Provider>
    );
  }
}

export default App
