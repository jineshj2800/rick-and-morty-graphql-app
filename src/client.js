import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";

const link = new HttpLink({ uri: "https://rickandmortyapi.com/graphql" });
const cache = new InMemoryCache();

const client = new ApolloClient({ link, cache });

export default client;
