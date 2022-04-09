import { gql } from "apollo-angular";

const LoginQL = gql`
    query {
        login {
            username
            password
        }
    }
`

export { LoginQL };