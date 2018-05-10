import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Eachdiv=styled.div`
display: flex;
flex-direction:column;
border: solid 2px #f7f7f7;
border-radius: 0.5rem;
margin: 1rem;
padding: 0.5rem;
background-color: #7FDBFF;
color: #795548;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin:5rem;
justify-content: center;
align-content: center;
text-align: center;
color:white;
font-weight:bold;
`

const H33 = styled.h3`
margin: 1rem;
color:  #7FDBFF;
`

 class EachOpportunity extends Component {

    render(){
        const { opportunities } = this.props;
        const { id } = this.props.match.params;
        console.log("opportunitiesfull", opportunities);
        console.log(this.props.match.params);
        console.log(opportunities[id]);
        
    
        if (!opportunities[id]) {
          return <div>loading</div>;
        }
        

        const {
            
            brandname,
            branddescription,
            usp,
            brandurl,
            tags
        } = opportunities[id-1];
    
        return(
            <div>
                <Link to="/opportunity" style={{ textDecoration: 'none' }}><H33>Back</H33></Link>
                <Eachdiv>
            <p>{brandname}</p>
            <p>{branddescription}</p>
            <p>{usp}</p>
            <p>{tags}</p>
            <p>{brandurl}</p>
                </Eachdiv>


            </div>
        )
    }
}


const mapStateToProps = state =>({
    opportunities:state.opportunities.opportunity_list
});
export default connect(mapStateToProps)(EachOpportunity);


