import React , { Component } from "react";
import { connect } from 'react-redux';
// import * as actions from "../../actions";
import { Link } from "react-router-dom";
import { fetchOpportunities } from "../../actions/index";
import _ from 'lodash';
import Header from "../Header";
import styled from "styled-components";


const MainH1= styled.h1`
text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  color: #000080;
`

const Opul=styled.ul`
list-style-type: none;
`

const OpLi= styled.li`
border: solid 2px #f7f7f7;
border-radius: 0.5rem;

padding: 0.5rem;
flex-grow: 1;
background-color: #fbf8f8;
color: #795548;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
width: 60%;
height:40%;
margin: auto;
margin-bottom:3rem;
display: flex;
flex-direction:column;
flex-wrap:wrap;

`
const LinkButton=styled.div`
background-color: #7FDBFF;
border: none;
color:white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`


class OpportunityContainer extends Component {

    componentDidMount(){
        if(!this.props.opportunities){
            this.props.fetchOpportunities();
           //  console.log("opportunities in oppr container:", this.props.opportunities)
        }
    }


    renderOpportunities() {
      
        return _.map(this.props.opportunities, item => {
           
          return (
           
              <Opul key={item.id}>
              
            <OpLi >
            <h3>{item.usp} </h3>
            <h3>{item.brandname} </h3>
            <h3>{item.tags}</h3>
            <p>{item.brandurl}</p>
            <LinkButton ><Link to={`/opportunity/${item.id}`} >More</Link></LinkButton>
             </OpLi>
             </Opul>
          );
        })
      }


    render(){
        
        return (
            <div>
                <Header />
                < MainH1>List of Brand Opportunities  </ MainH1>
              <div>
                {this.renderOpportunities()}
                  </div>
                </div>

        )

   
    }
  
}

const mapStateToProps = state => ({
    opportunities:state.opportunities.opportunity_list
});



export default connect(mapStateToProps, { fetchOpportunities })(OpportunityContainer);


