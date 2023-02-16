import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Topbar from './Topbar'
import Footer from './Footer'

function App() {

  return (
    <div>
      <div className="my-component">
        <Topbar/>
        {/* Your component content */}
      </div>
      <div className="my-component-footer">
        <Footer/>
        {/* Your footer content */}
      </div>
    </div>
  )
}

export default App
