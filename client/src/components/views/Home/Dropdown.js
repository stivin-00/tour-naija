import React from 'react'
import styled, { css } from "styled-components/macro"
import { Link } from "react-router-dom"
import { menuData } from './Data/MenuData';
import { Button } from './Button';
import { FaTimes } from  'react-icons/fa';

const DropdownContainer = styled.div`
position: absolute;
z-index: 999;
width: 100%;
/* height: 100%; */
background: rgba(24, 22, 22, 0.94) ;
display: grid;
align-items: center;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-500px')};
`

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
const CloseIcon = styled(FaTimes)`
color: #000d1a;
`
const DropdownWrapper = styled.div`

`
const DropdownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width: 460px){
  grid-template-rows: repeat(4, 60px);  
}
`;
const DropdownLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
color:#fff;
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover{
    color: green;
}
`
const BtnWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`


const Dropdown = ( { isOpen, toggle} ) => {
    return (
        <DropdownContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
               <DropdownMenu>
                  {menuData.map((item, index) => (
                      <DropdownLink to={item.link} key={index}>
                         {item.title}
                      </DropdownLink>
                  ))}
               </DropdownMenu>
               <BtnWrap>
                 <Button primary='true' round='true' big='true' to='/'>
                    sign-in
                 </Button>
               </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
