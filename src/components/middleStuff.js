import React, { Component } from 'react';
import '../styles/middleStuff/medium.css'
import '../styles/loadScreen/medium.css'
import '../img/kathy_work.jpg'
import '../img/park.jpg'
import '../img/cat.jpg'
// import cat from '../img/cat.jpg'

export default class MiddleStuff extends Component {
  constructor(props){
    super(props);
    this.state={
      number: 1,
      imageArray: ['cat', 'park'],
      image: ()=>{
        const immy = [
          <div style={{opacity: 1}} className='img-div' key={this.state.number} ><img src={require(`../img/cat.jpg`)} id='test' width='460' height='0' /></div>,
          <div style={{opacity: 1}} className='img-div' key={this.state.number} ><img id='test' src={require(`../img/kat_doc.jpg`)} width='460' height='0' /></div>,
          <div style={{opacity: 1}} className='img-div' key={this.state.number} ><img id='test' src={require(`../img/park.jpg`)} width='460' height='0' /></div>
        ]
        return immy[this.state.number -1]
      },
      images: ()=>{
        const imm = [
          <img  src={require(`../img/cat.jpg`)} id='test1' width='460' height='0' />,
          <img id='test1' src={require(`../img/kat_doc.jpg`)} width='460' height='0' />,
          <img  id='test1' src={require(`../img/park.jpg`)} width='460' height='0' />
        ]
        return imm[this.state.number -1]
      },
      headlines: ()=>{
        const heady = [
          <div key={this.state.number} className='headline_div'>
            <div className='middle-headline-div'><p className='middle-headline'>Photo</p></div>
            <div className='middle-headline-div'><p className='middle-headline'>Studio</p></div>
          </div>,
          <div key={this.state.number} className='headline_div'>
            <div className='middle-headline-div'><p className='middle-headline'>Private</p></div>
            <div className='middle-headline-div'><p className='middle-headline'>Events</p></div>
          </div>,
          <div key={this.state.number} className='headline_div'>
            <div className='middle-headline-div'><p className='middle-headline'>Custom</p></div>
            <div className='middle-headline-div'><p className='middle-headline'>Framing</p></div>
          </div>
        ]
        return heady[this.state.number-1]
      }
    }
    this.classTransition=this.classTransition.bind(this)
    this.totalAnimation=this.totalAnimation.bind(this)
  }

  classTransition(theClass, property, newValue){
    //takes elements that are part of a css class and transitions those elements in the same way according to the transition on the class.
    return Array.from(document.getElementsByClassName(theClass)).forEach((classmate)=>{classmate.style[property] = newValue})
  }

  totalAnimation(newState){
    this.classTransition('img-div', 'opacity', '0');
    this.classTransition('middle-headline', 'top', '100px');
    document.getElementById('test1').style.transform = 'scale(1.1)'
    this.classTransition('rolling_number', 'top', '100px');
    // this.classTransition('rolling_number', 'top', '100px');
    // document.getElementById('rolling_number').style.top = '100px'
    // document.getElementById('rolling_number').style.top = null

    setTimeout(()=> this.setState({number: newState}), 900)
  }

  delayedState(delay, stateProp, stateValue){
    return setTimeout(this.setState({[stateProp]: stateValue}), delay)
  }

  render() {
    // const immo = [<div className='img-div'><img src={require(`../img/cat.jpg`)} id='test' width='460' height='0' /></div>, <div className='img-div'><img id='test' src={require(`../img/park.jpg`)} width='460' height='0' /></div>]

    return (
        <div id='middleStuff'>
          <div id='nav_arrow_div'>
            <ion-icon name="arrow-back" id='back_arrow' class='arrows' onClick={()=>{this.totalAnimation(this.state.number-1)}}></ion-icon>
            <ion-icon name="arrow-forward" id='forward_arrow' class='arrows' onClick={()=>{this.totalAnimation(this.state.number+1)}}></ion-icon>
          </div>

          <div style={{opacity: 1}} id='img-roll' >
            {this.state.images()}
          </div>

          <div id='rolling_text_div'>
            <div className='rolling_number_div'><p id='zero'>0</p><p key={this.state.number} className='rolling_number'>{`${this.state.number}`}</p></div>
            {this.state.headlines()}
          </div>
          <img id='dot1' src={require(`../img/white-dot.png`)} />
          <img id='dot2' src={require(`../img/white-dot.png`)} />
          <img id='dot3' src={require(`../img/white-dot.png`)} />
          <img id='dot4' src={require(`../img/white-dot.png`)} />
          <img id='dot5' src={require(`../img/white-dot.png`)} />
        </div>

    )
  }

  componentDidMount(){
    // document.getElementById('forward_arrow').addEventListener('click', ()=>{Array.from(document.getElementsByTagName('img')).forEach((img)=>{img.style.opacity = '.2'})})
    // document.getElementById('back_arrow').addEventListener('click', ()=>{Array.from(document.getElementsByTagName('img')).forEach((img)=>{img.style.opacity = '.2'})})

  }

  componentDidUpdate(){
    // document.getElementById('forward_arrow').addEventListener('click', ()=>{this.classTransition('img-div', 'opacity', '0')})
    // document.getElementById('back_arrow').addEventListener('click', ()=>{Array.from(document.getElementsByTagName('img')).forEach((img)=>{img.style.opacity = '.2'})})

    // document.getElementById('forward_arrow').addEventListener('click', ()=>{Array.from(document.getElementsByTagName('middle-headline')).forEach((img)=>{img.style.opacity = '.1'})})
    // document.getElementById('back_arrow').addEventListener('click', ()=>{Array.from(document.getElementsByTagName('middle-headline')).forEach((img)=>{img.style.opacity = '.1'})})

  }



}
