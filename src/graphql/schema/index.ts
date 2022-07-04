export const typeDefs = /* GraphQL TODO: automate*/ `
type Query {
  habits: HabitConnection!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String!
  endCursor: String!
}

type HabitConnection {
  edges: [HabitEdge!]!
  pageInfo: PageInfo!
}

type HabitEdge {
  cursor: String!
  node: Habit!
}

type Mutation {
  apiVersion: String!
}

scalar DateTime 

interface TimeFrame {
  startTime: DateTime!
  endTime: DateTime!
}

type Habit {
  id: ID!
  name: String!
  timeframe: TimeFrame!
  metadata: HabitMetaData
}

type HabitMetaData {
  description: String!
  isAtomic: Boolean!
  atomicListEntryHash: String!
}
`