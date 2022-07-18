import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
background-image: linear-gradient(to left, black 50%, #9dbed8ab 80%);
  height: 70px;
  font-size: 1.5rem;
  width:120%;
  display: flex;
  justify-content: left;
  z-index: 12;
  padding:5px;
  left: 0px;
  position: fixed;
  
 
`;
  
export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4b6fad;
    background:  #212529;
  }
  
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 10;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: right;
  margin-right: 0px;
  margin-left: -15px;
  padding-left: -50px;
  padding-right:0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
