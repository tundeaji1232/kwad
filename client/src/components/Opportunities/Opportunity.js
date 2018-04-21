import React , { Component } from "react";
// import OpportunityContainer from "./OpportunityContainer";
import { connect } from 'react-redux';


class Opportunity extends Component {

    render(){
        const { id } =this.props.match.params;
        //this means if there is a :xyz added to the link in the url that uses this component then it by destructing it
        //helps takes the id from the link that uses this component 
        const { opportunities } = this.props;

            if(!opportunities[id]){
                return <div> loading </div>
            }
            const {
                userId,
                brandName,
                brandDescription,
                usp,
                tags
            } = opportunities[id];
            //check the things coming from database to be sure of destructuring

        return ( 
            <div>
                 
                <p> {userId} </p>
                <p> {brandName} </p>
               <p>{brandDescription}</p>
               <p>{usp}</p>
                <p>{tags}</p>                 

                </div>
        )
    }
}

const mapStateToProps = state =>({
    opportunities:state.opportunities
});
export default connect(mapStateToProps)(Opportunity);