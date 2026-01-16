import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Asd from './components/asd.jsx'


function App() {

  return(
    <>
    <div className="header">
      <div className="headeritemactive"><Asd>LIFESTYLE</Asd></div>
      <div className="headeritem"><Asd>PHOTOGRAPHS</Asd></div>
      <div className="headeritem"><Asd>MUSIC</Asd></div>
      <div className="headeritem"><Asd>VIDEO</Asd></div>
    </div>

    <div className="section1">
      <div className="section1grid">
        <div className="section1item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" alt="" />
          <p>LIFESTYLE</p>
          <h2>If you want to cleanse yourself, go to the mountains.</h2>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</h6>
        </div>
        <div className="section1item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" alt="" />
          <p>LIFESTYLE</p>
          <h2>Believe in yourself and you can do anything</h2>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</h6>
        </div>
        <div className="section1item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" alt="" />
          <p>PHOTODAIRY</p>
          <h2>Football is more than a sport!</h2>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</h6>
        </div>
        <div className="section1item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" alt="" />
          <p>PHOTODAIRY</p>
          <h2>Reading is a special pleasure</h2>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</h6>
        </div>
        <div className="section1item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" alt="" />
          <p>LIFESTYLE</p>
          <h2>A dog is the best friend</h2>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</h6>
        </div>
        <div className="section1item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" alt="" />
          <p>LIFESTYLE</p>
          <h2>Let's cook together</h2>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</h6>
        </div>
      </div>
    </div>
    </>
  )
}
export default App
