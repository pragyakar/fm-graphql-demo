import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Pets from './Components/Pets';
import People from './Components/People';
import NotFound from './Components/UIComponents/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pets" component={Pets}/>
        <Route path="/people" component={People}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;