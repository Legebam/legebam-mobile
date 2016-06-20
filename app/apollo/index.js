import ApolloClient, { createNetworkInterface } from 'apollo-client';
import Meteor, { Accounts } from 'react-native-meteor';

const networkInterface = createNetworkInterface('http://localhost:4000/graphql');

// networkInterface.use([{
//   applyMiddleware(request, next) {
//     const currentUserToken = Accounts._storedLoginToken();

//     if (!currentUserToken) {
//       next();
//       return;
//     }

//     if (!request.options.headers) {
//       request.options.headers = new Headers();
//     }

//     request.options.headers.Authorization = currentUserToken;

//     next();
//   },
// }]);

const client = new ApolloClient({
  networkInterface,
});

export default client;