import React from 'react'
import Navbar from "./UI/Header/Navbar/Navbar"
import Tagline from "./UI/Header/TaglineComponent/Tagline"
import Footer from "./UI/Footer/Footer"
import RegisterForm from "./UI/RegForm/RegisterForm"
import Faqs from "./UI/FAQ/Faqs"

const App = () => {
  return (
    <div className="text-2xl">
      <Navbar/>
      <Faqs/>
      <RegisterForm/>
      <Footer/>
    </div>
  )
}

export default App
