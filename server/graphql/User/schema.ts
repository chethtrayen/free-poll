import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type User {
    id: Int
    firstName: String
    lastName: String
  }

  input CreateUserInput{
    loginId: String
    email: String!
    password: String
  }

  type Query {
    user(id: Int): User

  }

  type Mutation{
    checkAuth: Boolean
  }
`);
