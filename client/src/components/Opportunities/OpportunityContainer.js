import React , { Component } from "react";
import { connect } from 'react-redux';
// import * as actions from "../../actions";
import { Link } from "react-router-dom";
import { fetchOpportunities } from "../../actions/index";
import _ from 'lodash';
import Header from "../Header";
import styled from "styled-components";


const OpLi= styled.li`
border: solid 2px #f7f7f7;
border-radius: 0.5rem;
margin: 1rem;
padding: 0.5rem;
flex-grow: 1;
background-color: #fbf8f8;
color: #795548;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
max-width: 70%;
margin: auto;

`
const Opul=styled.ul`
list-style-type: none;
`


class OpportunityContainer extends Component {

    componentDidMount(){
        if(!this.props.opportunities){
            this.props.fetchOpportunities();
            // console.log("opportunities in oppr container:", this.props.opportunities)
        }
    }


    renderOpportunities() {
      
        return _.map(this.props.opportunities, item => {
          return (
              <Opul key={item.id}>
            <OpLi   >
            <p>{item.usp} </p>
            <p>{item.brandname} </p>
            <p>{item.tags}</p>
            <p>{item.brandurl}</p>
            <Link to={`/opportunity/${item.id}`} />
             </OpLi>
             </Opul>
          );
        })
      }


    render(){
        
        return (
            <div>
                <Header />
                <h1>List of Brand Opportunities for You To Earn From </h1>
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


