import { gql } from "@apollo/client";

export interface IPocSearch {
    pocSearch: {
        id: string;
        status: string;
        name: string;
    }[];
}

export default gql`
    query PocSearch($pocSearchLong: String!, $pocSearchLat: String!) {
        pocSearch(long: $pocSearchLong, lat: $pocSearchLat) {
            id
            status
            name
        }
    }
`;
