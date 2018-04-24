import React , { Component } from 'react';
import * as actions  from "../../actions";
import { connect } from 'react-redux';
import YoutubeForm from './SocialEvaluateComponent';
import Header from "../Header";
// import styled from "styled-components";


// const ResultDiv = styled.div`
// border: solid 2px #f7f7f7;
// border-radius: 0.5rem;
// margin: 1rem;
// padding: 0.5rem;
// flex-grow: 1;
// background-color: #fbf8f8;
// color: #795548;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// max-width: 70%;
// margin: auto;
// `
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
                <h2>Please provide your youtube channel Id for us to evaluate and suggest ways for you to optimise </h2>
            <YoutubeForm 
            value={this.state.value}
            changes={this.handleChange}
            submitting={this.handleSubmit}
            />
            <div><h2>You net reach on your youtube channel is :{subscriberCount}</h2></div>
            <p>Example of youtube channel: UC98x5I1LVPhtnUHDyujq7zg</p>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    getYoutubeData:state.getYoutubeData
});

export default connect(mapStateToProps, actions)(SocialEvaluate);




