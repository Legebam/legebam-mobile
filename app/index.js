import React from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import { registerGqlTag } from 'apollo-client/gql';

import LoggedOut from './layouts/LoggedOut';
import LoggedIn from './layouts/LoggedIn';
import Loading from './components/Loading';
import config from './config';

import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import store from './store';

registerGqlTag();

Meteor.connect(config.METEOR_URL);

const LegebamMobile = (props) => {
  const { status, user, loggingIn } = props;
  
  if (status.connected === false || loggingIn) {
    return <Loading />;
  } else if (user !== null) {
    return <LoggedIn />;
  } else {
    return <LoggedOut />;
  }
};

LegebamMobile.propTypes = {
  status: React.PropTypes.object,
  user: React.PropTypes.object,
  loggingIn: React.PropTypes.bool,
};


class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={client} store={store}>
        <LegebamMobile {...this.props} />
      </ApolloProvider>
    );
  }
}

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, App);
