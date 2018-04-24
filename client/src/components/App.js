import React, { Component } from 'react';
import { Router, Route,Switch, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../actions";
import history from '../actions/history';
import  LandingPageContainer from './Landing/LandingPageContainer';
import BuildAudience from './BuildAudience/BuildAudienceContainer';
import OpportunityContainer from './Opportunities/OpportunityContainer';
import Opportunity from './Opportunities/Opportunity';
import SignUpForm from './Landing/SignUpForm';
import LoginForm from './Landing/LoginForm';
import Dashboard from './Dashboard';
import IncomeManagerContainer from './Income/IncomeManagerContainer';
import socialEvaluate from './SocialEvaluate/SocialEvaluateContainer';



class App extends Component {
  render() {
    if (this.props.auth === null) return <div>loading</div>
    return (
        <Router history={history}>
          <Switch>
          <Route exact path="/" 
              render={props => (!this.props.auth ? (<LandingPageContainer {...props} />) : (<Redirect to="/dashboard"/>))}
            />

            <Route exact path="/signup" 
              render={props => (!this.props.auth ? (<LandingPageContainer  {...props}/>) : (<Redirect to="/dashboard"/>))}
            />
          <Route
            exact
            path="/dashboard"
            render={props =>
              this.props.auth ? <Dashboard /> : <Redirect to="/signup" />
            }
          />
            {/* <Route exact path="/"  component={LandingPageContainer} /> */}
            <Route exact path="/login"   component={LoginForm}  />
            <Route exact path="/signup" component={SignUpForm} />
            {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            <Route exact path="/buildAudience"  component={BuildAudience} />
            <Route exact path="/opportunity" component={OpportunityContainer} />
            <Route exact path="/opportunity/:id" component={Opportunity} />
            <Route exact path="/incomeManager" component={IncomeManagerContainer} />
            <Route exact path="/socialEvaluate"  component={socialEvaluate} />
          </Switch>
        </Router>
    );
  
  }
  componentDidMount() {
    this.props.fetchUser();
  
  }
}
const mapStateToProps = (state) => ({auth: state.auth});


export default connect(mapStateToProps, actions)(App);








          //   <Route exact path="/signup" 
          //     render={props => (!this.props.auth ? (<LandingPageContainer {...props}/>) : (<Redirect to="/buildAudience"/>))}
          //   />

          //  <Route exact  path="/login"
          //   render={props => (!this.props.auth ? <LandingPageContainer{...props} /> : <Redirect to="/buildAudience" />) }
          // />

          //  <Route exact  path="/buildAudience"
          //   render={props => (this.props.auth ? <BuildAudience{...props} /> : <Redirect to="/login" />) }
          // />