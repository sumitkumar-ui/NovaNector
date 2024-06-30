import React from 'react'
import Home from '../src/Components/Home'
import {Routes, Route,} from 'react-router-dom'
import Services from './Components/Services'
import ContactUs from './Components/ContactUs'
import Internship from './Components/Internship'
import AboutUstwo from './Components/AboutUstwo'
import OurAchievementstwo from './Components/OurAchievementstwo'
import Methodologytwo from '../src/Components/Methodologytwo'
import useScrollToTop from './Components/useScrollToTop'



const App = () => {
  useScrollToTop()
  return (
    <>
     
     
     <Routes>
    
<Route path="/" element={<Home/>}/>
<Route path="/Aboutustwo" element={<AboutUstwo/>}/>
<Route path="/Services" element={<Services/>}/>
<Route path="/Internship" element={<Internship/>}/>
<Route path="/ContactUs" element={<ContactUs/>}/>
<Route path="/OurAchievementstwo" element={<OurAchievementstwo/>}/>
<Route path="/Methodologytwo" element={<Methodologytwo/>}/>


</Routes>

     
    
     
     
    </>
  )
}

export default App
