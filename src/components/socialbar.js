import React from 'react';
import styled from 'styled-components';

const blue = "#69c1ff";

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
  i {
    transition-duration: 0.3s;
    transition-timing-function: EaseInOutCubic;
    &:hover {
      color: ${blue};
    }
  }
`;

function Socialbar () {
 return (
 <Style>
   <div className="social-menu">
     <a href="https://github.com/naranoeur">
       <i className="fa fa-github fa-2x" aria-hidden="true" />
     </a>
       <a href="https://codepen.io/naranoeur/">
         <i className="fa fa-codepen fa-2x" aria-hidden="true"/>
       </a>
       <a href="https://www.linkedin.com/in/naranoeur/">
         <i className="fa fa-linkedin-square  fa-2x" aria-hidden="true"/>
       </a>
   </div>
 </Style>
 );
}

export default Socialbar;
