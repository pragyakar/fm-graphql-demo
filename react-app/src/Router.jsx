import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Pets from './Components/Pets';
import Owners from './Components/Owners';
import NotFound from './Components/UIComponents/NotFound';
import Navbar from './Components/UIComponents/Navbar';
import OwnerDetails from './Components/Owners/OwnerDetails';
import AddPet from './Components/Pets/AddPet';
import AddOwner from './Components/Owners/AddOwner';
import PetDetails from './Components/Pets/PetDetails/PetDetails';

const UnderDevelopment = () => {
  return (
    <p>Under Development</p>
  )
}

const Router = () => {
  return (
    <BrowserRouter>
      <div className="body-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pets" component={Pets}/>
          <Route exact path="/pets/add" component={AddPet}/>
          <Route path="/pets/:id" component={PetDetails}/>
          <Route exact path="/owners" component={Owners}/>
          <Route exact path="/owners/add" component={AddOwner}/>
          <Route path="/owners/:id" component={OwnerDetails}/>
          <Route component={NotFound} />
        </Switch>
      </div>
      <Navbar />
    </BrowserRouter>
  );
}

export default Router;