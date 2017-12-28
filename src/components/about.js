import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  color: #485460;
  padding: 120px 0;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 27px;
  p {
  margin-top: 25px;
    &:first-child {
      margin-top: 0;
    }
  }
  em {
    font-weight: 400;
  }
  .about-container {
    margin: 4% 20%;
  }
  @media (max-width: 650px) {
    padding: 60px 0;
    .about-container {
      margin: 4% 8%;
    }
  }
  @media (max-width: 500px) {
    padding: 55px 0;
    font-size: 18px;
    font-weight: 400;
  }
`;

function About () {
 return (
 <Style>
   <div className="about-container">
     <p>Hello, I&apos;m Nara Noeur, a designer, developer, and entrepreneur.</p>
     <p>I&apos;m originally from Novosibirsk, Russia, but currently
     I reside in San Diego, US.</p>
    <p>Here’s what I do:</p>
    <p><em>UI/UX Design</em>: Responsive websites</p>
    <p><em>Front-end web development</em>: HTML, CSS, Javascrtipt, jQuery and React.js</p>
   </div>
 </Style>
 );
}

export default About;
