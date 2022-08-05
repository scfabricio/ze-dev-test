import React from "react";
import { useQuery } from "@apollo/client";
import ProductCard from "../../components/ProductCard";
import Container from "../../components/Container";
import Alert from "../../components/Alert";
import Loading from "../../components/Loading";

import Queryproducts, { IProducts } from "../../graphql/QueryProducts";
import QueryCategories, { ICategories } from "../../graphql/QueryCategories";

import "./ProductsPage.scss";
import format from "../../utils/format";
import CategoryChip from "../../components/CategoryChip/CategoryChip";

const ProductsPage = () => {
    const {
        loading,
        error,
        data,
        refetch: productsRefetch
    } = useQuery<IProducts>(Queryproducts, {
        variables: {
            pocId: "532",
            productsSearch: null,
            productsCategoryId: null
        }
    });

    const {
        loading: loadingCategories,
        error: errorCategories,
        data: dataCategories
    } = useQuery<ICategories>(QueryCategories);

    const handleFilterByCategory = (categoryId: string | null) => {
        productsRefetch({
            pocId: "532",
            productsSearch: null,
            productsCategoryId: categoryId
        });
    };

    if (loading || loadingCategories) {
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

                {errorCategories && (
                    <Alert
                        variant="error"
                        className="products-page__error-container"
                    >
                        Não conseguimos encontrar as Categorias
                    </Alert>
                )}

                <ul className="categories-list flex mt-32 mb-32">
                    <li>
                        <CategoryChip
                            onClick={() => handleFilterByCategory(null)}
                        >
                            Todas
                        </CategoryChip>
                    </li>
                    {dataCategories?.categories.map((category) => (
                        <li key={category.id}>
                            <CategoryChip
                                onClick={() =>
                                    handleFilterByCategory(category.id)
                                }
                            >
                                {category.title}
                            </CategoryChip>
                        </li>
                    ))}
                </ul>

                <div className="products-page__list flex">
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
