import React , { Component } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


export default class LandingPageContainer extends Component {
    render(){
        return (
            <div>
                <div className=""> </div>
                {this.renderForm()}
                </div>
        )
    }

    renderForm(){
        return (
            this.props.match.path==='/'? <LoginForm/> : <SignUpForm/>
            
        )
    }
}