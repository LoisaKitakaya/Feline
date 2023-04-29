import { gql } from "@apollo/client";

// Queries



// Mutations

export const CREATE_USER = gql`
  mutation (
    $email: String!
    $first_name: String!
    $last_name: String!
    $workspace_name: String!
    $password: String!
    $password2: String!
  ) {
    createUser(
      email: $email
      first_name: $first_name
      last_name: $last_name
      workspace_name: $workspace_name
      password: $password
      password2: $password2
    ) {
      first_name
      last_name
      email
      username
      is_active
      is_staff
    }
  }
`;

export const AUTHENTICATE_USER = gql`
  mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      refresh_token
      payload
    }
  }
`;
