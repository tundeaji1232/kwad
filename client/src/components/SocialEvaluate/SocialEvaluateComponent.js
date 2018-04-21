import React , { Component } from 'react';

export default class YoutubeForm extends Component {
    render(){
        return  (
            <form onSubmit={this.props.submitting}>
            <label>
                Youtube Channel id:
            < input
            type = "text"
            value={this.props.value}
            onChange={this.props.changes}
            />
            <input
             type="submit" 
             value="Submit"
              />
            </label>
            </form>
        )
    }
}