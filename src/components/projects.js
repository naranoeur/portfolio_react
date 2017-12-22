import React from 'react';
import styled from 'styled-components';

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
  .project {
    background-color: #5f7080;
    margin: 40px 0;
  }
  .pen {
    width: 30%;
    height: 230px;
    border-radius: 5%;
  }
`;

function Projects () {
 return (
 <Style>
   <div className="container">
     <h1>Projects</h1>
    <div className="projects">
      <div className="project pen"></div>
      <div className="project pen"></div>
      <div className="project pen"></div>
      <div className="project pen"></div>
      <div className="project pen"></div>
      <div className="project pen"></div>
    </div>
   </div>
 </Style>
 );
}

export default Projects;
