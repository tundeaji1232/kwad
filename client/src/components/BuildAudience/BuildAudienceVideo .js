import React , { Component } from "react";
import YouTube from "react-youtube";

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
        
         <h2> Building your Online Persona </h2>
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this._onReady}
        /> 
        <h2> How to build Audience </h2>
        <YouTube
        videoId=" rE2ZlhZXOdQ"
        opts={opts}
        onReady={this._onReady}
      />

       <h2> How to build Audience </h2>
        <YouTube
        videoId=" rE2ZlhZXOdQ"
        opts={opts}
        onReady={this._onReady}
      />

       </div>
       
      );
    }
   
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }
   
