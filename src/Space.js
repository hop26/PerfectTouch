import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/space/medium.css';
import StudioShot from './img/studio_shot.jpg'


import HomePage from './components/homePage'

class Space extends Component {
  render() {
    return (
      <div id='space_contain'>
        <img id='ptlogo' src={require(`./img/PTlogo2.png`)} />

        <div id='left-side'>
          <div id='left-image' style={{backgroundImage:`url(${StudioShot})`, backgroundSize:'cover'}}></div>
            <div id='left-text-box'>
              <p id='studio-text'>Perfect Touch Studio is a fully equipped rental space in Philadephia for photo & video shoots, castings, makeup workshops, fashion shows, and seminars.  All our studios are 40' long, offering a generous shooting distance and ample working space.  We cater to both established and up-and-coming designers, photographers, makeup artists, stylists, and fine artists.</p>
            </div>
          <div id='left-bottom'><p id='space-title'>PERFECT TOUCH STUDIO</p></div>
        </div>


        <div id='right-side'>

          <p id='home'>HOME</p>
          <div id='menu'>
            <p className='menuWords' id='portfolio'>PORTFOLIO</p>
            <p className='menuWords' id='contact'>CONTACT</p>
            <p className='menuWords' id='whatever'>WHATEVER</p>
          </div>
        </div>
      </div>

    );
  }


}

export default Space;
