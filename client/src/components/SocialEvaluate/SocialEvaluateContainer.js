import React , { Component } from 'react';
import * as actions  from "../../actions";
import { connect } from 'react-redux';
import YoutubeForm from './SocialEvaluateComponent';
import Header from "../Header";
import styled from "styled-components";

const Borderdiv = styled.div`
width: 70%;
height: 50%;
display : flex;
justify-content:center;
flex-direction:column;
align-items:center;
border-radius: 10px;
border-color:#7FDBFF;
border: 2px solid #7FDBFF;
margin-top: 15px;
padding-top:2rem;

`

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
                <Borderdiv>
            <YoutubeForm 
            value={this.state.value}
            changes={this.handleChange}
            submitting={this.handleSubmit}
            />
            <div><h2>You net reach on your youtube channel is :
                <DivResult>{subscriberCount}</DivResult>
                </h2></div>
            <p>Example of youtube channel ID: UC98x5I1LVPhtnUHDyujq7zg</p>
            </Borderdiv>
            </DivSocialContainer>
            { subscriberCount ==undefined ?
                <p></p>:
                <div><h2> To optimise your Youtube channel subscribers </h2>
                <p><b>Be consistent:</b> The “one-and-done” approach does not work on YouTube. If you want the views and the traffic, you need to be posting and updating your content consistently for best results. Upload new videos and share with your list and sphere of influence as frequently as possible.<br />
                <b>Provide value: </b>If your video fails to provide any real value to the end user, don’t be surprised when it doesn’t get any real views. Each video needs to deliver your best content, your best-kept secrets and your most effective strategies. How can you raise the bar and provide more value in your videos?<br />
                <b>Be remarkable: </b> Today, it’s not enough to be posting weekly videos with your tips and content. Using your creative “right-brain marketing approach,” you need to convey your content in an engaging and entertaining format that separates you from the rest. In short, your videos need to be remarkable. The biggest sin in marketing is to be boring. How can your videos be the opposite of boring?</p></div>
            }
            </div>
        )
    }

}

const mapStateToProps = state => ({
    getYoutubeData:state.getYoutubeData
});

export default connect(mapStateToProps, actions)(SocialEvaluate);




