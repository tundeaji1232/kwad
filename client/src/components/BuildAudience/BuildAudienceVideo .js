import React , { Component } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";


const Videodiv=styled.div`
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
margin-top:5rem;
`

export default class BuildAudienceVideo extends Component {

    render() {
      const opts = {
        height: '290',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };
   
      return (
       <div>
        <Videodiv>
         <h2> Building your Online Persona </h2>
        <YouTube
          videoId="y5Nt_KRZWtY"
          opts={opts}
          onReady={this._onReady}
        /> 
        </Videodiv>


        <Videodiv>
        <h2> How to build Audience </h2>
        <YouTube
        videoId="n7wsRIzAvB0"
        opts={opts}
        onReady={this._onReady}
      />
          </Videodiv>


          <Videodiv>
       <h2> How to leverage on the audience you built </h2>
        <YouTube
        videoId="rE2ZlhZXOdQ"
        opts={opts}
        onReady={this._onReady}
      />
          </Videodiv>
      

       </div>
       
      );
    }
   
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }
   
