import React , { Component } from 'react';
import * as actions  from "../../actions";
import { connect } from 'react-redux';
import YoutubeForm from './SocialEvaluateComponent';
import Header from "../Header";
import styled from "styled-components";



const DivSocialContainer = styled.div`
display : flex;
justify-content:center;
flex-direction:column;
align-items:center;

`

const DivResult =styled.div`

background-color: #7FDBFF;
color: #795548;
border: solid 2px #f7f7f7;
border-radius: 0.5rem;

text-align:center;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

`

 class SocialEvaluate extends Component {
   constructor(props) {
       super(props);
       this.state = {
           youtubevalue: ""
           }
       }
   

    handleChange = e => {
        this.setState({ youtubevalue: e.target.value })
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        this.props.getData(this.state.youtubevalue);
        console.log("x",this.props.getData(this.state.youtubevalue))
      }

     

    render (){
        const { subscriberCount } =this.props.getYoutubeData;
        return (
            <div>
                  <Header />
            <DivSocialContainer> 
                <h2>Please provide your youtube channel Id for us to evaluate and suggest ways for you to optimise </h2>
            <YoutubeForm 
            value={this.state.value}
            changes={this.handleChange}
            submitting={this.handleSubmit}
            />
            <div><h2>You net reach on your youtube channel is :
                <DivResult>{subscriberCount}</DivResult>
                </h2></div>
            <p>Example of youtube channel ID: UC98x5I1LVPhtnUHDyujq7zg</p>
            </DivSocialContainer>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    getYoutubeData:state.getYoutubeData
});

export default connect(mapStateToProps, actions)(SocialEvaluate);




