import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';

const Style = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 700;
  background-color: ${props => props.top ? 'transparent' : 'white'};
  line-height: ${props => props.top ? '65px' : '45px'};
  transition-timing-function: easeInQuad;
  transition: all 0.5s;
  .logo {
    color: white;
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
  }
  a {
    color:${props => props.top ? 'white' : '#485460'};
    text-decoration: none;
    padding: ${props => props.top ? '20px' : '10px'} 25px;
    letter-spacing: 3px;
    font-size: 14px;
    &:hover {
      border-bottom: 4px solid #afdeff;
    }
  }
  .nav-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @media (max-width: 500px) {
    line-height: ${props => props.top ? '40px' : '30px'};
    a {
      font-size: 12px;
      letter-spacing: 1px;
      padding: ${props => props.top ? '9px' : '5px'} 10px;
      &:hover {
        border-bottom: 1px solid #afdeff;
      }
    }
  }
`;

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {top: true};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const y =  document.documentElement.scrollTop || document.body.scrollTop;
    if (this.state.top && y > 0) this.setState({top: false});
    else if (y === 0 && !this.state.top) this.setState({top: true});
  }

  render() {
    return (
      <Style top={this.state.top}>
          <div className="container">
            <div className="nav-bar">
              <div className='nav-menu'>
                <Scrollchor to="" animate={{duration: 0}}>Home</Scrollchor>
                <Scrollchor to="#projects" animate={{duration: 0}}>Projects</Scrollchor>
                <Scrollchor to="#contact" animate={{duration: 0}}>Contact</Scrollchor>
              </div>
            </div>
          </div>
      </Style>
    );
  }
}


export default Navbar;
