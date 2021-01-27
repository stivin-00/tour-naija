import React from 'react'
import styled, { css } from "styled-components/macro"
import { Link } from "react-router-dom"
import { menuData } from './Data/MenuData';
// import Bars from "./images/lo4.jpg"
import  {FaBars} from 'react-icons/fa'


const Nav = styled.nav`
 height: 60px;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 padding: 1rem 2rem;
 z-index: 100;
 position: fixed;
 top: 0;
 width: 100%;
 box-shadow:0px 0px 20px rgba(0, 0, 0, 0.7);
 

 @media screen and (max-width:500px){
     height: 40px;
 }
 `;

const NavLink = css`
 color: #fff;
 display: flex;
 align-items: center;
 padding: 0 1rem;
 height: 90%;
 width:100%;
 font-size: 1.2rem;
 cursor: pointer;
 text-decoration: none;
 margin-right: 2rem;

 @media screen and (max-width:500px){
     font-size: 1rem;
     margin-right: 1rem
 }
 @media screen and (max-width:450px){
     font-size: .8rem;
     margin: .1rem
 }

 &:hover{
     color: green;
 }

`


const Logo = styled(Link)`
 color: #fff;
 font-style: italic;

 @media screen and (min-width:760px){
     font-size: 1.5rem
 }
`;
const MenuBars = styled(FaBars)`
display: none;

/* @media screen and (max-width: 760px){
    display: block;
} */
`

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

/* @media screen and (max-width:760px){
    display: none;
} */
`

const NavMenuLinks = styled(Link)`
${NavLink}

`



const Navb = ( {toggle} ) => {
    return (
        <Nav>
            <Logo>TOUR-9JA</Logo>
            <MenuBars click={toggle} />
            <NavMenu>
                {menuData.map((item, index) => {
                    return (
                    <NavMenuLinks className="helper" to={item.links} key={index}>
                      {item.title} 
                    </NavMenuLinks> 
                    )
                })}
            </NavMenu>
          
        </Nav>
    );
}


export default Navb
