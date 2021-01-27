import React, {useState} from 'react'
import { SliderData } from './Data/SliderData'
import Hero from './Hero'
// import Navb from './Nav'
import Dropdown from './Dropdown'
import "./home.css"

 const Home = () => {
     const [isOpen, setisOpen] = useState(false)

     const toggle = () => (
         setisOpen(!isOpen)
     )
    return (
        <div className="homer">
        {/* <Navb toggle={toggle}/> */}
        <Hero slides={SliderData}/> 
        <Dropdown isOpen={isOpen} toggle={toggle} />
        </div>
    )
}
export default Home 
