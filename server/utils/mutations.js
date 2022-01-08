import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
          token
          user {
            _id
            username
            bookCount
            savedBooks
          }
        }
      }
`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookInput: bookInput) {
    saveBook(bookInput: $bookInput) {
      token
      user {
        _id
        username
        bookCount
        savedBooks
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: bookId) {
      removeBook(bookId: $bookId) {
          
      }
  }
`