import { gql } from "@apollo/client";

export interface IProducts {
    poc: {
        id: string;
        status: string;
        name: string;
        products: {
            id: string;
            title: string;
            image: string;
            price: number;
            category: {
                id: string;
                title: string;
            }[];
        }[];
    };
}

export default gql`
    query Poc(
        $pocId: String!
        $productsSearch: String
        $productsCategoryId: String
    ) {
        poc(id: $pocId) {
            id
            status
            name
            products(search: $productsSearch, categoryId: $productsCategoryId) {
                id
                title
                image
                price
                category {
                    id
                    title
                }
            }
        }
    }
`;
