import React from "react";
import { ApolloProvider } from "@apollo/client";
import ApolloCliente from "./libs/ApolloCliente";

import HomePage from "./HomePage";

import "./styles/_styles.scss";
import "./styles/_mixins.scss";

const App = () => {
    return (
        <ApolloProvider client={ApolloCliente}>
            <HomePage />
        </ApolloProvider>
    );
};

export default App;
