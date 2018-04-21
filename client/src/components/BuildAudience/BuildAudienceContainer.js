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
export default class BuildAudienceContainer extends Component {

    render(){
        return (
            <div>
                < Header />
                <h1>Learn To Build Your Audience</h1>
               <ContainerD> <BuildAudienceVideo /> </ContainerD>
                
            </div>

        )
    }
}


