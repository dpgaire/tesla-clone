import React from 'react'
import '../index.css'
import styled from 'styled-components';
function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {
    console.log(backgroundImg)
    return (
        <Wrap bgImg={backgroundImg}>
           <ItemText>
               <h1>{title}</h1>
               <p>{description}</p>
           </ItemText>
           <Buttons>
           <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {rightBtnText && 
                 <RightButton>
                    {rightBtnText}
                </RightButton>
                }
           </ButtonGroup>
            <DownArrow src="images/down-arrow.svg"/>
           </Buttons>
          
        </Wrap>
    )
}

export default Section

const Wrap=styled.div `
    height:100vh;
    width:100vw;
    // background-image:url('/images/model-s.jpg');
    background-image: ${props => `url('${props.bgImg}')`};
    background-size: cover;
    background-repeat:no-repeat;
    background-position:center;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
const ItemText=styled.div `
    padding-top:100px;

`
const ButtonGroup=styled.div `
    display:flex;
    justify-content:center;
    margin-bottom:30px;
     @media(max-width:768px){
        flex-direction:column;
    }
`
const LeftButton=styled.div `
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:260px;
    color:white;
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    font-size:14px;
    cursor:pointer;
    margin:8px;
`
const RightButton=styled(LeftButton) `
    background-color:white;
    color:black;
    opacity:0.65;

`
const DownArrow=styled.img `
    height:40px;
    margin-top:40px;
    animation:animateDown infinite 1.4s;
`

const Buttons=styled.div ``