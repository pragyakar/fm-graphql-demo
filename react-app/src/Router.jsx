import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Pets from './Components/Pets';
import Owners from './Components/Owners';
import NotFound from './Components/UIComponents/NotFound';
import Navbar from './Components/UIComponents/Navbar';

const Router = () => {
  return (
    <BrowserRouter>
      <div className="body-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pets" component={Pets}/>
          <Route path="/owners" component={Owners}/>
          <Route component={NotFound} />
        </Switch>
      </div>
      <Navbar />
    </BrowserRouter>
  );
}

export default Router;