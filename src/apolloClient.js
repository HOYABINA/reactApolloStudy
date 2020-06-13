//"https://countries.trevorblades.com",
import ApolloClient from "apollo-boost"

const client = new ApolloClient({
    uri: "http://172.30.1.41:4000", 
});

export default client;