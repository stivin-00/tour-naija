/* eslint-disable no-unused-vars */
import { Button } from './Button'
// import { Slideshow } from '@material-ui/icons'
import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from "styled-components/macro"
import { IoMdArrowRoundForward } from 'react-icons/io'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './hero.css'

const HeroSection = styled.section`
height: 98vh;
max-height: 1400px;
position: relative;
overflow: hidden;
bottom: 0;
margin-top: -2rem;

`
const  HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
position: relative;
`
const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`;

const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;


&::before{
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.9;
    background-color: rgba(0, 0, 0, 0.782);
}
`;

const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
object-fit: cover;
`;

const HeroContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1644px;
width: calc(100% - 100px);
color: #fff;

h1{
    font-size: clamp(1rem, 8vw, 3rem);
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
}

p{
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4)
}
`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display:flex;
z-index: 10;
 @media screen and (max-width:600px){
     bottom: 20px;
     right: 20px
 }
`

const ArrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
background: rgba(0, 50, 0, 1);
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

@media screen and (max-width:600px){
    width: 35px;
    height: 35px;
}

&:hover{
    color: rgba(0, 50, 0, 1);
background: #fff;
}
`

const PrevArrow = styled(FaArrowLeft)`
${ArrowButtons}
`
const NextArrow = styled(FaArrowRight)`
${ArrowButtons}
`


const Hero = ({ slides }) => {

   const [current, setCurrent] = useState(0);
   const length = slides.length
   const timeout = useRef(null)

   useEffect(() => {
       const nextSlide = () => {
      setCurrent(current => (current === length -1 ? 0 : current + 1 ))
    }
      timeout.current= setTimeout(nextSlide, 4000)

       return function() {
           if(timeout.current) {
               clearTimeout(timeout.current)
           }
       }
   }, [current, length])

   const nextSlide = () => {

    if(timeout.current) {
               clearTimeout(timeout.current)
           }

       setCurrent(current === length - 1 ? 0 : current + 1)
   }

   const prevSlide = () => {  

    if(timeout.current) {
               clearTimeout(timeout.current)
           }

       setCurrent(current === 0 ? length - 1 : current - 1 )
   };

   if(!Array.isArray(slides) || slides.length <= 0) {
    return null
}


    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                        {index === current && (
                            <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt} />
                                <HeroContent>
                    
                                </HeroContent>
                            </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })}
                                <section  className="hip">
                    <h3>Welcome To NIGERIA</h3>
                    <h1>DO COME AND VISIT <span class="change_content"></span></h1>
                    <p>Vacation once is not enough</p>
                    <Link to="/explore" class="btnone">explore</Link>
                    <Link to="/register" class="btntwo">signup here</Link>
                </section>
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow  onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
            
        </HeroSection>
    )
}

export default Hero
