import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
    uri: process.env.REACT_APP_BASE_URL_ZE_API,
    cache: new InMemoryCache()
});
