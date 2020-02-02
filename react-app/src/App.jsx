import React from 'react';
import Navbar from './Components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserFriends, faHome, faPaw } from '@fortawesome/free-solid-svg-icons'

library.add(faUserFriends, faHome, faPaw);

function App() {
  return (
    <div className="App">
      <p>GraphQL demo react app</p>
      <Navbar />
    </div>
  );
}

export default App;
