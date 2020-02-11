import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserFriends, faHome, faPaw } from '@fortawesome/free-solid-svg-icons'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Router from './Router';

library.add(faUserFriends, faHome, faPaw);

const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql'
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </div>
  );
}

export default App;
