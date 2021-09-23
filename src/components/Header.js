import React,{useState} from 'react'
import styled from 'styled-components';
import '../index.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import {selectCars} from "../components/features/car/carSlice";
// import {useSelector} from 'react-redux';

function Header() {
    const [burgerStatus,setBurgerStatus]=useState(false);
    // const cars=useSelector(selectCars);
    // console.log(cars);
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg"/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Pannels</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomIcon  onClick={() => setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerMenu show={burgerStatus}>
                <CloseWrapper>
                     <CloseMenu onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster </a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utitlties</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li> 
                <li><a href="#">Investor Relations</a></li> 
            </BurgerMenu>
        </Container>
    )
}

export default Header

const Container=styled.div `
    min-width:60px;
    position:fixed;
    left:0;
    top:0;
    right:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 20px;
    z-index:1;

`
const Menu=styled.div `
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        padding:0 20px;
        
    }
    @media(max-width:768px){
        display:none;
    }
`

const RightMenu=styled.div `
  display:flex;
    align-items:center;
    a{
        font-weight:600;
        padding:0 20px;
    }
`
const CustomIcon=styled(MenuIcon) `
    cursor:pointer;
`
const BurgerMenu=styled.div `
position:fixed;
top:0;
right:0;
bottom:0;
background:white;
width:300px;
height:100vh;
z-index:100;
padding:20px;
transform:${props => props.show ? 'translateX(0)':'translateX(100%)'};
transition:transform 0.2s;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,0.2);
    }
    a{
        font-weight:600;
    }
`
const CloseMenu=styled(CloseIcon)`
    cursor:pointer;
`
const CloseWrapper=styled.div `
    display:flex;
    justify-content:flex-end;

`