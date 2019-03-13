import React, { Component } from 'react';
import MiddleStuff from './middleStuff'
import '../styles/homepage/medium.css'
import '../styles/loadScreen/medium.css'
import '../img/kathy_work.jpg'

export const LoadScreen = ()=>{
  return(
    <div id='loadScreen'>
      <div id='words'>
        <p className='initialWords' id='word1' >Design Space.</p>
        <p className='initialWords' id='word2'>Photo Studio.</p>
        <p className='initialWords' id='word3'>Art Gallery.</p>
      </div>
      <div id='loadBar'></div>
    </div>
  )
}

export const Header = ()=>{
  return (
    <div id='header'>
      <p id='title'>PERFECT TOUCH STUDIO</p>
      <div id='headerOptions'>
        <p className='headerOp'>Portfolio</p>
        <p className='headerOp'>Studio</p>
        <p className='headerOp'>Events</p>
        <p className='headerOp'>Shop</p>
      </div>
      <ion-icon name="finger-print" id='fingerprint'></ion-icon>
    </div>
  )
}

export const Footer = ()=>{
  return(
    <div id='footer' style={{display: 'flex'}}>
      <div><p>Newsletter</p></div>
      <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', width: '15%', color: 'grey'}}>
        <p>Instagram</p>
        <p>Facebook</p>
      </div>
    </div>
  )
}
