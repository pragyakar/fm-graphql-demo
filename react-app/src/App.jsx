import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserFriends, faHome, faPaw } from '@fortawesome/free-solid-svg-icons'

import Router from './Router';
import Navbar from './Components/UI Components/Navbar';

library.add(faUserFriends, faHome, faPaw);

function App() {
  return (
    <div className="App">
      <Router />
      <Navbar />
    </div>
  );
}

export default App;
