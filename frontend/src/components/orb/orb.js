import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize.js';


function Orb() {
    // we are using a custom hook to get the length and width of the page evry time it gets changed
    const {width, height} = useWindowSize()   // destructure width and height of the page 


       //key frames are used to provide animation to the orb component 

    const moveOrb = keyframes`
    0%{
        transform: translate(0, 0);
    }
    50%{
         transform: translate(${width}px, ${height/2}px);
    }
    100%{
        transform: translate(0, 0);
    }
    `
       // an orb is created by using css and is considered as a component
    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(400px);
        animation: ${moveOrb} 15s alternate linear infinite;    
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb