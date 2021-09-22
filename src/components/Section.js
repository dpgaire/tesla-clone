import React from 'react'

import styled from 'styled-components';
function Section() {
    return (
        <Wrap>
           <ItemText>
               <h1>Model S</h1>
               <p>Order online for Touchless Delivery</p>
           </ItemText>
        </Wrap>
    )
}

export default Section

const Wrap=styled.div `
    height:100vh;
    width:100vw;
    background-image:url("/images/model-s.jpg");
    background-size: cover;
    background-repeat:no-repeat;
    background-position:center;
`
const ItemText=styled.div `
    padding-top:100px;
`