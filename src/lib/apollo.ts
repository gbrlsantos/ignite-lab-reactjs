import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4u71lx60jve01ue29h87aa8/master',
    cache: new InMemoryCache()
})