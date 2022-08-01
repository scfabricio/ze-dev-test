import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import ApolloCliente from "./libs/ApolloCliente";

import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

import Routes from "./routes";

import "./styles/_styles.scss";
import "./styles/_mixins.scss";

const App = () => {
    return (
        <ApolloProvider client={ApolloCliente}>
            <BrowserRouter>
                <div className="app flex flex-direction-column">
                    <Header />
                    <Routes />
                    <Footer />
                </div>
            </BrowserRouter>
        </ApolloProvider>
    );
};

export default App;
