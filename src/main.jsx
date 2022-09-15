import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Section1 from './Section1'
import './style.css'
import Fade from 'react-reveal/Fade';

ReactDOM.createRoot(document.getElementById('wrapper')).render(
  <>
    <Header />
    <Section1 id={"section1"} name={"Model S"} tag={"order online for touchless delivery"} button1 = {"Custom Orders"} button2 = {"Existing Inventory"} backgroundImg={"model-3.jpg"} arrow={"true"}/>

    <Section1 id={"section2"} name={"Model Y"} tag={"order online for touchless delivery"} button1 = {"Custom Orders"} button2 = {"Existing Inventory"} backgroundImg={"model-s.jpg"}/>

    <Section1 id={"section3"} name={"Model Z"} tag={"order online for touchless delivery"} button1 = {"Custom Orders"} button2 = {"Existing Inventory"} backgroundImg={"model-x.jpg"}/>

    <Section1  id={"section4"}name={"Model T"} tag={"order online for touchless delivery"} button1 = {"Custom Orders"} button2 = {"Existing Inventory"} backgroundImg={"model-y.jpg"}/>

    <Section1 id={"section5"} name={"Solar Panel"} tag={"order online for touchless delivery"} button1 = {"Order Now"} button2 = {"Learn More"} backgroundImg={"solar-panel.jpg"}/>

    <Section1 id={"section6"} name={"Model 3"} tag={"order online for touchless delivery"} button1 = {"Custom Orders"} button2 = {"Existing Inventory"} backgroundImg={"model-3.jpg"}/>

    <Section1 id={"section6"} name={"Accessories"} tag={"order online for touchless delivery"} button1 = {"Orders"}  backgroundImg={"accessories.jpg"}/>


  </>
)
