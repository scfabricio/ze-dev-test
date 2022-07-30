import React, { FormEvent } from "react";
import { useLazyQuery } from "@apollo/client";
import AddressForm from "../components/AddressForm";
import Header from "../components/Header";

import QueryPocSearch, { IPocSearch } from "../graphql/QueryPocSearch";

import "./HomePage.scss";
import Alert, { EVariantAlert } from "../components/Alert";

const HomePage = () => {
    const [getDistributor, { loading, error, data }] =
        useLazyQuery<IPocSearch>(QueryPocSearch);

    const handleSubmitAddressForm = (e: FormEvent, values: string) => {
        e.preventDefault();

        // TODO: Chamar a api de geolocalização e passar o endereço para pegar os valores de lat e long
        if (values) {
            getDistributor({
                variables: {
                    pocSearchLong: "-46.709453",
                    pocSearchLat: "-23.632919"
                }
            });
        }
    };

    return (
        <section className="home-page">
            <Header />
            <main className="home-page__content-data pt-72 flex flex-direction-column flex-align-center">
                <div>
                    <AddressForm onSubmit={handleSubmitAddressForm} />
                    {error && (
                        <Alert variant={EVariantAlert.ERROR}>
                            Desculpa não conseguimos encontrar o distribuidor
                        </Alert>
                    )}
                    {loading && (
                        <p style={{ textAlign: "center" }}>Carregando...</p>
                    )}
                </div>
            </main>
        </section>
    );
};

export default HomePage;
