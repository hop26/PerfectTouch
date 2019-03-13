import React, { Component } from 'react';
import MiddleStuff from './middleStuff'
import {LoadScreen, Header, Footer} from './homePage_components'
import '../styles/homepage/medium.css'
import '../styles/loadScreen/medium.css'
import '../img/kathy_work.jpg'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: '01',
      load: 'naw'
    }
  }

  render(){
    return(
      <div className='homepage'>
        <LoadScreen />
        <div id='content_limits' style={{display: 'block'}}>
          <Header />
          <MiddleStuff />
        </div>
        <Footer/>
      </div>
    )
  }

  // componentDidMount(){
  //   window.addEventListener('load', ()=>{
  //       // document.getElementById('content_limits').style.display = 'block'
  //       // document.getElementById('footer').style.display = 'flex'
  //       // document.getElementById('words').style.height = '100px'
  //
  //       // new Promise((resolve)=>{resolve(document.getElementById('loadBar').style.width = '100%')}).then(()=>{
  //       //     setTimeout(()=>document.getElementById('loadScreen').style.height = '0%', 2200)
  //       // })
  //     })
  // }
}

  export default HomePage;
