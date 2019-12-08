import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Tabs from './components/Tabs/Tabs';
import theme from './components/theme';

const client = new ApolloClient({
  uri:'https://api.spacex.land/graphql/'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <Tabs />
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
