import React from "react";
import AddressForm from "../components/AddressForm";
import Header from "../components/Header";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <section className="home-page">
            <Header />
            <main className="home-page__content-data pt-72 flex flex-justify-center flex-align-baseline">
                <AddressForm />
            </main>
        </section>
    );
};

export default HomePage;
