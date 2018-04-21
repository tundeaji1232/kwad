import React , { Component } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-content: center;
`

const Card = styled.div`
  width: 30rem;
  height:25rem;
  
  font-size: 1.7rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color:#7FDBFF;
  margin:1rem;
 
`;
const Card2 = styled.div`
  width: 100%;
  height:25rem;
  
  font-size: 1.7rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color:#7FDBFF;
  margin:1rem;
 
`;


export default class Dashboard extends Component {

    render(){
        return (
            <div>
            < CardContainer>
              {/* username display
              logout button at the header */}
                    <Card>
                        <p> to be an online sales entrepreneur you must build an audience of followers around your personality</p>
                    <Link to='/buildAudience' >Learn to Build Your Audience</Link>
                    </Card>

                     <Card>
                         <p>evaluate social value and optimise: constantly evaluating your online presnce and optimising based on our insights</p>
                         <Link to='/socialEvaluate' >Evaluate your net worth</Link>
                   </Card>

                    <Card>
                        <p> get list of brands around your niche. Each product/service opportunity is built around indepth business analysis on how it best fits your persona online</p>
                        <Link to='/opportunity' >Find opportunities for sales that best fits you</Link>
                    </Card>

                   
                    <Card>
                        <p>manage your income from each brand you promote and cash out with paypal</p>
                        <Link to='/incomeManager' >Income manager</Link>
                    </Card>      

            </ CardContainer>

            <Card2>
                        <h2>Get latest Post and Notification </h2>
                        <p> Did you been an online entrepreneur gives you passive income that adds to your income</p>
                        </Card2>
            </div>
        )
    }
}