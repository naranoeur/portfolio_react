import React from 'react';
import styled from 'styled-components';

import img1 from "../assets/old.png";
import img2 from "../assets/othello.png";
import img3 from "../assets/snowflake.png";
import img4 from "../assets/henon.png";
import img5 from "../assets/iphone.jpg";
import img6 from "../assets/md.png";

const infoArr = [
  {image: img1, url: "https://aqueous-shore-43869.herokuapp.com/index.html"},
  {image: img2, url: "https://codepen.io/naranoeur/pen/mMZOxB"},
  {image: img3, url: "https://codepen.io/naranoeur/pen/QvYEMJ"},
  {image: img4, url: "https://codepen.io/naranoeur/pen/RKdOoE"},
  {image: img5, url: "https://itunes.apple.com/us/app/dream-journal-keep-track-of-your-dreams/id943234057?mt=8"},
  {image: img6, url: "https://codepen.io/naranoeur/pen/mWZZaG"}];

const Project= styled.div`
  background-color: #5f7080;
  margin: 40px 0;
  width: 30%;
  padding-top: 28%;
  border-radius: 5%;
  background-image: url(${props => props.image});
  background-size: cover;
  box-shadow: 0 10px 30px 2px #8894a0;
  transition-duration: 0.3s;
  transition-timing-function: EaseInOutCubic;
  position: relative;
  background-position: center top;
  &:hover {
    box-shadow: 0 10px 30px 2px #687480;
    transform: scale(1.1,1.1);
  }
  @media (max-width: 750px) {
    width: 46%;
    padding-top: 43%;
  }
  @media (max-width: 500px) {
    margin: 30px 0;
  }
`;

const Style = styled.div`
  background-color: #fff2b4;
  padding: 100px 0;
  color: #485460;
  text-align: center;
  h1 {
    display: inline-block;
    margin-bottom: 50px;
    padding: 0 10px 5px 10px;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 4px;
    border-bottom: 3px solid #afdeff;
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  a {
    box-sizing: padding-box;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  @media (max-width: 500px) {
    padding: 40px 0;
    h1 {
      font-size: 30px;
      letter-spacing: 2px;
      margin-bottom: 35px;
    }
  }
`;

function Projects () {
  const projectList = infoArr.map(
    (info) => <Project image={info.image} key={info.url}><a href={info.url}><span /></a></Project>
  );
 return (
   <Style>
     <div className="container">
       <h1>Projects</h1>
      <div className="projects">
        {projectList}
      </div>
     </div>
   </Style>
 );
}

export default Projects;
