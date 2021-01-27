/* eslint-disable no-unused-vars */
import { Button } from './Button'
// import { Slideshow } from '@material-ui/icons'
import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from "styled-components/macro"
import { IoMdArrowRoundForward } from 'react-icons/io'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './hero.css'
import './Her.css'

const Her = () => {
    return (
        <>
              <header>
            <div class="menu-toggle" id="hamburger">
                <i class="fas fa-bars"></i>
            </div>
            <div class="overlay"></div>
            <div class="container">
                <nav>
                    <h1 class="brand"><a href="index.html">Br<span>a</span>nd</a></h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </nav>
            </div>
    </header>  
        </>
    )
}

export default Her
