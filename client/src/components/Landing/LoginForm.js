
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginUser,displayError } from "../../actions";
import { Link } from 'react-router-dom';
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
color: black;
font-size: 14px;
padding-bottom: 7px;

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

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Container >
          <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
             <p >{this.renderAlert()}</p>
            <BtnInput type="submit" defaultValue="Login" />
            <Link to='/signup' >New to Kwadium? Sign up</Link>
          </Form>
        
      </Container>
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
    console.log('handlesub', values);
    this.props.loginUser(values)
  }

  renderAlert(){
    if (this.props.error){
      return <span><strong>Oops!</strong> {this.props.error}</span>
    }
  }

 
  // componentDidMount() {
  //   this.props.displayError("err");
  // }

}

const validate = values => {
  const errors = {};
  if (!values.email) errors.email = 'Enter your email';
  if (!values.password) errors.password = 'Enter your password';
  return errors;
}

const mapStateToProps = state => console.log(state) || ({ error: state.error })
export default reduxForm ({
  validate,
  form: 'LoginForm'
})(
  connect (mapStateToProps, { loginUser , displayError })(LoginForm)
);