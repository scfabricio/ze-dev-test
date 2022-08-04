import React, { FormEvent, MouseEvent, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import AddressForm from "../../components/AddressForm";

import QueryPocSearch, { IPocSearch } from "../../graphql/QueryPocSearch";
import Alert from "../../components/Alert";
import Container from "../../components/Container";

import "./HomePage.scss";

const HomePage = () => {
    const [getDistributor, { loading, error, data }] =
        useLazyQuery<IPocSearch>(QueryPocSearch);
    const [custonError, setCustonError] = useState("");

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

    const handleLocation = () => {
        // Pegar as cooredenadas do navegador do usuário
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                console.log(latitude, longitude);
            },
            () => {
                setCustonError(
                    "Não foi possível obter a sua localização. Tente novamente."
                );
            }
        );
    };

    return (
        <section className="home-page">
            <main className="home-page__content-data pt-72 flex flex-direction-column flex-align-center">
                <Container>
                    <AddressForm
                        onSubmit={handleSubmitAddressForm}
                        onGetLocation={handleLocation}
                    />
                    {error && (
                        <Alert variant="error">
                            Desculpa não conseguimos encontrar o distribuidor
                        </Alert>
                    )}
                    {custonError && (
                        <Alert
                            variant="error"
                            callback={() => setCustonError("")}
                        >
                            {custonError}
                        </Alert>
                    )}
                    {loading && (
                        <p style={{ textAlign: "center" }}>Carregando...</p>
                    )}
                </Container>
            </main>
        </section>
    );
};

export default HomePage;
