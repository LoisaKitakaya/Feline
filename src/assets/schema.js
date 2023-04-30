import { gql } from "@apollo/client";

// Queries

export const GET_ALL_ACCOUNTS = gql`
  query {
    getAllAccounts {
      id
      account_name
      account_type
      currency_code
      account_balance
      created_at
    }
  }
`;

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
      id
    }
  }
`;

export const AUTHENTICATE_USER = gql`
  mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;
