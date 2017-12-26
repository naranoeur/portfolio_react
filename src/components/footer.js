import React from 'react';
import styled from 'styled-components';
import Socialbar from './socialbar'


const Style = styled.div`
  background-color: #5f7080;
  color: white;
  text-align: center;
  padding: 80px 0;
  h1 {
    font-size: 25px;
    font-weight: 700;
    font-style: italic;
  }
  p {
    margin: 32px 0;
  }
  @media (max-width: 550px) {
    padding: 60px 0;
    p {
      margin: 17px 0;
    }
  }
`;

function Footer () {
 return (
 <Style>
   <div className="container">
     <h1>NN</h1>
     <p>&copy; Nara Noeur 2017</p>
     <Socialbar />
   </div>
 </Style>
 );
}

export default Footer;
