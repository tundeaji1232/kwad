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
            placeholder="youtube channel Id"
            style={{  }}
            />
            <input
             type="submit" 
             value="Submit"
             style={{ background: '#7FDBFF' }}
              />
            </label>
            </form>
        )
    }
}
