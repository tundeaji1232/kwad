
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
   
  justify-content: space-around;
  font-size:1.3if(process.env.NODE_ENV !== "production"){
    rem;
`

const Nli =styled.li`
flex: 0 1 auto;
display:block;
list-style-type: none;
text-decoration:none;
`



class Header extends Component {
  render() {
    return (
    
        <NavBar>
          <Nul>
         <Nli> <Link to='/buildAudience' style={{ textDecoration: 'none' }}><b>BUILD AUDIENCE</b></Link></Nli>
         <Nli> <Link to='/socialEvaluate' style={{ textDecoration: 'none' }}><b>EVALUATE</b></Link></Nli>
          <Nli><Link to='/opportunity' style={{ textDecoration: 'none' }}><b>OPPORTUNITIES</b></Link></Nli>
          <Nli><Link to='/incomeManager' style={{ textDecoration: 'none' }}><b>INCOME MANAGER</b></Link> </Nli>
          <Nli>
          <Link to='/' style={{ textDecoration: 'none' }} onClick={this.logout.bind(this)}>
            <i ></i><b>
            LOGOUT
            </b>
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