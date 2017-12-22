import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  line-height: 45px;
  font-weight: 700;
  .nav-bar {
    background-color: white;
    transition-timing-function: easeInQuad;
    transition: all 0.5s;
  }
  .top {
    background-color: transparent;
    line-height: 65px;
    a {
      color: white;
      padding: 20px 25px;
    }
  }
  .logo {
    color: white;
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
  }
  a {
    color: #485460;
    text-decoration: none;
    padding: 10px 25px;
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
    const y = document.documentElement.scrollTop;
    if (this.state.top && y > 0) this.setState({top: false});
    else if (y === 0 && !this.state.top) this.setState({top: true});
  }

  render() {
    return (
      <Style>
        <div className={this.state.top ? 'container nav-bar top' : 'container nav-bar'}>
          <div className='nav-menu'>
            <a href="">Home</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </div>
        </div>
      </Style>
    );
  }
}


function Navbar () {
 return (
 <Style>
   <div className="container nav-bar">
     <div className="nav-menu">
       <a href="">Home</a>
       <a href="">Projects</a>
       <a href="">Contact</a>
     </div>
   </div>
 </Style>
 );
}

export default Navbar;
