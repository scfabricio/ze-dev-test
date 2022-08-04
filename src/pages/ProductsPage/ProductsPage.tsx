import React from "react";
import { useQuery } from "@apollo/client";
import ProductCard from "../../components/ProductCard";
import Container from "../../components/Container";
import Alert from "../../components/Alert";
import Loading from "../../components/Loading";

import Queryproducts, { IProducts } from "../../graphql/QueryProducts";

import "./ProductsPage.scss";
import format from "../../utils/format";

const ProductsPage = () => {
    const { loading, error, data } = useQuery<IProducts>(Queryproducts, {
        variables: {
            pocId: "532",
            productsSearch: null,
            productsCategoryId: null
        }
    });

    if (loading) {
        return (
            <Container className="products-page">
                <div className="products-page__loading flex flex-justify-center">
                    <Loading size={80} />
                </div>
            </Container>
        );
    }

    return (
        <section className="products-page">
            <Container className="products-page__container">
                <h1>Produtos</h1>

                {error && (
                    <Alert
                        variant="error"
                        className="products-page__error-container"
                    >
                        Não conseguimos encontrar os produtos
                    </Alert>
                )}

                <div className="products-page__list flex flex-justify-between">
                    {data?.poc.products.map(({ price, title, image, id }) => (
                        <ProductCard
                            key={id}
                            price={`R$ ${format.money(price)}`}
                            title={title}
                            urlImg={image}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ProductsPage;
