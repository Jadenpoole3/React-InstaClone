import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

// const FlexContainer = styled.div`
// display: flex;
// flex-direction: row;
// `;

// const NavbarWrapper = FlexRow.extend`
// justify-content: space-between;
// align-items: center;
// padding: 26px 5vw;
// width: 90vw;
// height: 25px;

// `

 const Header = styled.div`
 background-color: white;
 display: flex;
 justify-content: space-between;
 align-items: center;
    padding: 26px 5vw;
    width: 90vw;
    height: 25px;
 `;
 

class Navbar extends Component{
  render(){
    return (
      <Header>
 <h3><FaInstagram /> | Instaclone</h3>
 
      <div>
        <FaSearch/>
        <input type="text"/>
      </div>
        
        <div>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
      </Header>
    );
  }
}

export default Navbar