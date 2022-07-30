import { gql } from "@apollo/client";

export interface ICategories {
    categories: {
        id: string;
        title: string;
    }[];
}

export default gql`
    query Categories {
        categories {
            id
            title
        }
    }
`;
