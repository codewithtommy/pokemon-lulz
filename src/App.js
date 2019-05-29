// Update to React, { Component }...
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

// Update function to class App extends Component.
class App extends Component {

  constructor() {
    super();

    // set the default state
    this.state = {
      // create a box (species) where we can store the data there.
      pokemon: [],
      // add on a pre-loaded for user experience
      // isLoading: false,
    }
  }

  // this is where we can make a call to the API (axios will be used.)
  componentDidMount () {
    // perform "ajax" request after the component has finished rendering and is mounted.
    axios ({
      // call for a list of Pokemon names from Generation One only.
      url: 'https://pokeapi.co/api/v2/pokemon/',
      method: 'GET',
      dataResponse: 'JSON',
      params: {
        // Pokemon API does not have an API key.
        format: 'JSON',
      }
    }).then(( response) => {
      // log to check
      console.log(response);
      // target just the Pokemon name array because that's the data needed
      response = response.data;
      // update the state so the pokemon box we created in the constructor gets updated.
      this.setState ({
        pokemon: response,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
