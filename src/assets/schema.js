import { gql } from "@apollo/client";

// Queries

export const TRANSACTION_TYPES = gql`
  query {
    getTransactionType {
      id
      type_name
      type_description
    }
  }
`;

export const TRANSACTION_CATEGORY = gql`
  query {
    getTransactionCategory {
      id
      category_name
      category_description
    }
  }
`;

export const TRANSACTION_SUB_CATEGORY = gql`
  query ($parent: String!) {
    getTransactionSubCategory(parent: $parent) {
      id
      parent {
        category_name
      }
      category_name
      category_description
    }
  }
`;

export const PRODUCT_CATEGORY = gql`
  query {
    getProductCategory {
      id
      category_name
      category_description
    }
  }
`;

export const PRODUCT_SUB_CATEGORY = gql`
  query ($parent: String!) {
    getProductSubCategory(parent: $parent) {
      id
      parent {
        category_name
      }
      category_name
      category_description
    }
  }
`;

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

export const GET_ACCOUNT = gql`
  query ($id: ID!) {
    getAccount(id: $id) {
      id
      account_name
      account_type
      currency_code
      account_balance
      created_at
    }
  }
`;

export const GET_ALL_BUDGETS = gql`
  query {
    getAllBudgets {
      id
      budget_name
      budget_is_active
      budget_amount
      account {
        account_name
      }
      category {
        category_name
      }
      created_at
    }
  }
`;

export const GET_BUDGET = gql`
  query ($id: ID!) {
    getBudget(id: $id) {
      id
      budget_name
      budget_description
      budget_is_active
      budget_amount
      account {
        account_name
      }
      category {
        category_name
      }
      sub_category {
        category_name
      }
      created_at
    }
  }
`;

export const GET_ALL_TARGETS = gql`
  query {
    getAllTargets {
      id
      target_name
      target_is_active
      target_amount
      account {
        account_name
      }
      category {
        category_name
      }
      created_at
    }
  }
`;

export const GET_TARGET = gql`
  query ($id: ID!) {
    getTarget(id: $id) {
      id
      target_name
      target_description
      target_is_active
      target_amount
      account {
        account_name
      }
      category {
        category_name
      }
      sub_category {
        category_name
      }
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

export const CREATE_ACCOUNT = gql`
  mutation (
    $account_name: String!
    $account_type: String!
    $account_balance: Float!
    $currency_code: String!
  ) {
    createAccount(
      account_name: $account_name
      account_type: $account_type
      account_balance: $account_balance
      currency_code: $currency_code
    ) {
      id
    }
  }
`;

export const UPDATE_ACCOUNT = gql`
  mutation (
    $id: ID!
    $account_name: String!
    $account_type: String!
    $account_balance: Float!
    $currency_code: String!
  ) {
    updateAccount(
      id: $id
      account_name: $account_name
      account_type: $account_type
      account_balance: $account_balance
      currency_code: $currency_code
    ) {
      id
    }
  }
`;

export const DELETE_ACCOUNT = gql`
  mutation ($id: ID!) {
    deleteAccount(id: $id)
  }
`;

export const CREATE_BUDGET = gql`
  mutation (
    $account_id: ID!
    $budget_name: String!
    $budget_description: String!
    $budget_amount: Float!
    $category: String!
    $sub_category: String!
  ) {
    createBudget(
      account_id: $account_id
      budget_name: $budget_name
      budget_description: $budget_description
      budget_amount: $budget_amount
      category: $category
      sub_category: $sub_category
    ) {
      id
    }
  }
`;

export const UPDATE_BUDGET = gql`
  mutation (
    $id: ID!
    $budget_name: String!
    $budget_description: String!
    $budget_amount: Float!
    $category: String!
    $sub_category: String!
  ) {
    updateBudget(
      id: $id
      budget_name: $budget_name
      budget_description: $budget_description
      budget_amount: $budget_amount
      category: $category
      sub_category: $sub_category
    ) {
      id
    }
  }
`;

export const DELETE_BUDGET = gql`
  mutation ($id: ID!) {
    deleteBudget(id: $id)
  }
`;

export const CREATE_TARGET = gql`
  mutation (
    $account_id: ID!
    $target_name: String!
    $target_description: String!
    $target_amount: Float!
    $category: String!
    $sub_category: String!
  ) {
    createTarget(
      account_id: $account_id
      target_name: $target_name
      target_description: $target_description
      target_amount: $target_amount
      category: $category
      sub_category: $sub_category
    ) {
      id
    }
  }
`;

export const UPDATE_TARGET = gql`
  mutation (
    $id: ID!
    $target_name: String!
    $target_description: String!
    $target_amount: Float!
    $category: String!
    $sub_category: String!
  ) {
    updateTarget(
      id: $id
      target_name: $target_name
      target_description: $target_description
      target_amount: $target_amount
      category: $category
      sub_category: $sub_category
    ) {
      id
    }
  }
`;

export const DELETE_TARGET = gql`
  mutation ($id: ID!) {
    deleteTarget(id: $id)
  }
`;
