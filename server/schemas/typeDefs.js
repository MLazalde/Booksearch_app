// import teh gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String,
        bookCount: Int,
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        title: String
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
    }

    input BookInput {
        title: String
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookInput!): User
        removeBook(bookId: String!): User
    }
`;

// export the typeDefs
module.exports = typeDefs;