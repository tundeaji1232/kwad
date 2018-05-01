import React, { Component } from "react";
import BuildAudienceVideo from "./BuildAudienceVideo ";
import Header from "../Header";
import styled from "styled-components";


const ContainerD = styled.div`
text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;

`

const MainH1= styled.h1`
text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  color: #000080;
  margin-bottom: -2rem;
`
export default class BuildAudienceContainer extends Component {

    render(){
        return (
            <div>
                < Header />
                <MainH1>Learn To Build Your Audience</MainH1>
                <MainH1>Watch Videos and Follow Instructions at the End</MainH1>
               <ContainerD> <BuildAudienceVideo /> </ContainerD>
                
            </div>

        )
    }
}


