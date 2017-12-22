import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  background-color: #5f7080;
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  h1 {
    font-size: 76px;
    font-weight: 900;
    position: relative;
    letter-spacing: 1px;
    top: -7vh;
  }
  h3 {
    letter-spacing: 3px;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    position: relative;
    top: -4vh;
    left: 5px;
  }
`;

function Landing () {
 return (
 <Style>
   <div className="container">
     <h1>Web Developer</h1>
     <h3>Bringing fresh perspective into web development and wed design</h3>
   </div>
 </Style>
 );
}

export default Landing;
