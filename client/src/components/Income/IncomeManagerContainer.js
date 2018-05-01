import React, { Component } from "react";
import Header from "../Header";
import styled from "styled-components";

const ResultDiv = styled.div`
display: flex;
flex-direction:column;
flex-wrap:wrap;
border: solid 2px #f7f7f7;
border-radius: 0.5rem;
margin: 1rem;
padding: 0.5rem;
flex-grow: 1;
background-color: #7FDBFF;
color: #795548;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin-top:3rem;
text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
`

export default class IncomeManagerContainer extends Component {

    render(){
        return (
            <div>
                <Header />
                <ResultDiv>You have earned <h3>£300 </h3> from you last Transaction</ResultDiv>
                </div>
        )
    }
} 