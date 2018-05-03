import React, { Component } from 'react';
import { connect } from 'react-redux';


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
            userId,
            brandname,
            branddescription,
            usp,
            brandurl,
            tags
        } = opportunities[id-1];
    
        return(
            <div>
                <div>
            <p>{brandname}</p>
            <p>{branddescription}</p>
            <p>{usp}</p>
            <p>{tags}</p>
            <p>{brandurl}</p>
                </div>


            </div>
        )
    }
}


const mapStateToProps = state =>({
    opportunities:state.opportunities.opportunity_list
});
export default connect(mapStateToProps)(EachOpportunity);


