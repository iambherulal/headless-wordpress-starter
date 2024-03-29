import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// export const { getClient } = registerApolloClient(() => {
//   const graphqlEndpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT;

//   if (!graphqlEndpoint) {
//     throw new Error(
//       "WORDPRESS_GRAPHQL_ENDPOINT is not defined in your environment variables."
//     );
//   }

//   return new NextSSRApolloClient({
//     // cache: new NextSSRInMemoryCache(),
//     link: new HttpLink({
//       uri: graphqlEndpoint,
//     }),
//   });
// });

export const { getClient } = registerApolloClient(() => {
  const graphqlEndpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT;

  if (!graphqlEndpoint) {
    throw new Error(
      "WORDPRESS_GRAPHQL_ENDPOINT is not defined in your environment variables."
    );
  }
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: graphqlEndpoint,
    }),
  });
});
