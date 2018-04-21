import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { signupUser } from "../../actions";
import { connect } from 'react-redux';
import styled from "styled-components";

import LandingImage from "./kwadium4.jpg";

const Container = styled.div`
position: absolute;
top: 0;
left: 0;
min-height: 100vh;
width: 100vw;
height: 100vh;
padding: 0 5vw 0 5vw;
font-size: 1.2rem;
text-align: center;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: center;
background-image: url(${LandingImage});
height: 100%; 
background-repeat: no-repeat;
overflow-x: hidden;
background-position: center;
background-size:100% 100%;

 
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:-40px;
`;

const Input =styled.input`
outline: none;
border: 0;
background: none;
border-bottom: 0.03em solid rgba(255, 255, 255, 0.99);
width: 205px;
margin: 1.2em 0;
color: white;
font-size: 0.7rem;
padding-bottom: 1px;

`

const BtnInput=styled.input`
width: 100px;
height: 33px;
font-size: 15px;
border-radius: 2.5px;
background: #6699ff;
text-transform: uppercase;
border: 1px solid rgba(224, 224, 224, 0.3);
color: white;
margin-top: 0.5em;
letter-spacing: 2px;
font-weight: 100;
text-decoration: none;
margin-bottom:1.5rem;
`

class SignUpForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <Container>

               <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <Field
                        name='name'
                        type='text'
                        placeholder='Name'
                        arialabel='Name'
                        component={this.renderField}
                    />
                    <Field
                        name='email'
                        type='email'
                        placeholder='Email'
                        arialabel='Email'
                        component={this.renderField}
                    />
                    <Field
                        name='password'
                        type='password'
                        placeholder='Password'
                        arialabel='Password'
                        component={this.renderField}
                    />
                    <Field
                        name='confirmPassword'
                        type='password'
                        placeholder='Confirm password'
                        arialabel='Confirm password'
                        component={this.renderField}
                    />
                    
                    <BtnInput type="submit" defaultValue="Sign Up" className="" />
                    <Link to='/login' className="">Already a member? Login</Link>
                </Form>
                
                         
             </Container >
        )
    }

    renderField(field){
        const { meta: {touched,error } } = field;
        return ([
            <Input {...field.input} type={field.type}  placeholder={field.placeholder} aria-label={field.arialabel} key={1}  />, 
           <div key={2}>
            {touched ? error : ''}
            </div>
    ])
    }

    handleFormSubmit(values){
        console.log(values);
        this.props.signupUser(values)
      }
}

const validate = values => {
    const errors = {};
    if (!values.name) errors.name = 'Enter your name';
    if (!values.email) errors.email = 'Enter your email';
    if (!values.password) errors.password = 'Enter your password';
    if (!values.confirmPassword) errors.confirmPassword = 'Enter your password again';
    if (values.password  !== values.confirmPassword) errors.confirmPassword = 'Password do not match';
    return errors;
  }
  

  
  export default reduxForm ({
    validate,
    form: 'SignUpForm'
  })(
     connect (null, { signupUser })(SignUpForm)
  )
  