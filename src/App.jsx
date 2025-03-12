import React from 'react'
import Navbar from "./UI/Header/Navbar/Navbar"
import Tagline from "./UI/Header/TaglineComponent/Tagline"
import Footer from "./UI/Footer/Footer"
import RegisterForm from "./UI/RegForm/RegisterForm"

const App = () => {
  return (
    <div className="text-2xl">
      <Navbar/>
      <RegisterForm/>
      {/* <Tagline/> */}
      <Footer/>
    </div>
  )
}

export default App
