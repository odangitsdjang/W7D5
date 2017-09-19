import React from 'react';
import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import SearchContainer from './search_container';
const App = () => (
  <div>
    <header>
      <h1> Bench BnB </h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/signup" component={SessionFormContainer}/>
    <AuthRoute path="/login" component={SessionFormContainer}/>
     <Route exact path="/" component={ SearchContainer } />
  </div>
);

export default App;
