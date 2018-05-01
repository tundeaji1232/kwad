
import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/index";

const NavBar = styled.nav`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7FDBFF;
  
`;
const Nul = styled.ul`
  display: flex;
  align-items: stretch;
  width:100%;
  margin:0;
  padding:0;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-around;
  font-size:1.3rem;
`

const Nli =styled.li`
flex: 0 1 auto;
display:block;
`


class Header extends Component {
  render() {
    return (
    
        <NavBar>
          <Nul>
         <Nli> <Link to='/buildAudience' >Build Your Audience</Link></Nli>
         <Nli> <Link to='/socialEvaluate' >Evaluate Your Net Worth</Link></Nli>
          <Nli><Link to='/opportunity' >Opportunities</Link></Nli>
          <Nli><Link to='/incomeManager' >Income Manager</Link> </Nli>
          <Nli>
          <Link to='/' onClick={this.logout.bind(this)}>
            <i ></i>
            Log Out
          </Link>
        </Nli>
          </Nul>     
        </NavBar>
    );
  }
    logout=()=> {
   this.props.logoutUser();
       }
    }
 export default connect(null, { logoutUser })(Header);