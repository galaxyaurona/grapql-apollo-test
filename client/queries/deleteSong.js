import gql from "graphql-tag"

export const query = gql`
    mutation deleteSong($id: ID){
        deleteSong(id:$id){
            title
        }
    }
`

export default query
