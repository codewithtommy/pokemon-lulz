import React, { Component } from 'react';
import pokemonLogo from "./pokemonLogo.png";

class Header extends Component {
  // what to render?

  render () {
    // return
    return (
      <header className="pokeHero" id="pokeHero">
        <div className="wrapper">
          <div className="pokeTitle">
            <div className="pokeLogoContainer">
              <img src={pokemonLogo} alt="Pokemon Main Logo" />
            </div>
            <div className="pokeBallContainer" />
            <div className="pokeSubmit">
              <input type="text" className="name" placeholder="Your Trainer Name!"/>
              <button className="nameSubmit">Go!</button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;