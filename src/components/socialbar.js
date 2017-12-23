import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  color: #485460;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 10px;
    color: white;
  }
  span {
    display: block;
    border-bottom: 1px dotted #485460;
    width: 30%;
    margin: 0 20px;
  }
`;

function Socialbar () {
 return (
 <Style>
   <div className="social-menu">
     <a href="">
       <i className="fa fa-github fa-2x" aria-hidden="true" />
     </a>
       <a href="">
         <i className="fa fa-codepen fa-2x" aria-hidden="true"/>
       </a>
       <a href="">
         <i className="fa fa-linkedin-square  fa-2x" aria-hidden="true"/>
       </a>
   </div>
 </Style>
 );
}

export default Socialbar;
