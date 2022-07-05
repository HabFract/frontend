import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Habit = {
  __typename?: 'Habit';
  id: Scalars['ID'];
  metadata?: Maybe<HabitMetaData>;
  name: Scalars['String'];
  timeframe: TimeFrame;
};

export type HabitConnection = {
  __typename?: 'HabitConnection';
  edges: Array<HabitEdge>;
  pageInfo: PageInfo;
};

/** Mutations */
export type HabitCreateParams = {
  name: Scalars['String'];
};

export type HabitCreateResponse = {
  __typename?: 'HabitCreateResponse';
  habit: Habit;
};

export type HabitEdge = {
  __typename?: 'HabitEdge';
  cursor: Scalars['String'];
  node: Habit;
};

export type HabitMetaData = {
  __typename?: 'HabitMetaData';
  atomicListEntryHash: Scalars['String'];
  description: Scalars['String'];
  isAtomic: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createHabit: HabitCreateResponse;
};


export type MutationCreateHabitArgs = {
  habit?: InputMaybe<HabitCreateParams>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  habit: Habit;
};


export type QueryHabitArgs = {
  id: Scalars['ID'];
};

export type TimeFrame = {
  endTime: Scalars['DateTime'];
  startTime: Scalars['DateTime'];
};

export type Todo = {
  __typename?: 'Todo';
  description: Scalars['String'];
  id: Scalars['ID'];
  status: Scalars['Boolean'];
};

export type AddHabitMutationVariables = Exact<{
  variables: HabitCreateParams;
}>;


export type AddHabitMutation = { __typename?: 'Mutation', createHabit: { __typename?: 'HabitCreateResponse', habit: { __typename?: 'Habit', name: string } } };

export type GetHabitQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetHabitQuery = { __typename?: 'Query', habit: { __typename?: 'Habit', id: string } };


export const AddHabitDocument = gql`
    mutation addHabit($variables: HabitCreateParams!) {
  createHabit(habit: $variables) {
    habit {
      name
    }
  }
}
    `;
export type AddHabitMutationFn = Apollo.MutationFunction<AddHabitMutation, AddHabitMutationVariables>;

/**
 * __useAddHabitMutation__
 *
 * To run a mutation, you first call `useAddHabitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddHabitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addHabitMutation, { data, loading, error }] = useAddHabitMutation({
 *   variables: {
 *      variables: // value for 'variables'
 *   },
 * });
 */
export function useAddHabitMutation(baseOptions?: Apollo.MutationHookOptions<AddHabitMutation, AddHabitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddHabitMutation, AddHabitMutationVariables>(AddHabitDocument, options);
      }
export type AddHabitMutationHookResult = ReturnType<typeof useAddHabitMutation>;
export type AddHabitMutationResult = Apollo.MutationResult<AddHabitMutation>;
export type AddHabitMutationOptions = Apollo.BaseMutationOptions<AddHabitMutation, AddHabitMutationVariables>;
export const GetHabitDocument = gql`
    query getHabit($id: ID!) {
  habit(id: $id) {
    id
  }
}
    `;

/**
 * __useGetHabitQuery__
 *
 * To run a query within a React component, call `useGetHabitQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHabitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHabitQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetHabitQuery(baseOptions: Apollo.QueryHookOptions<GetHabitQuery, GetHabitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHabitQuery, GetHabitQueryVariables>(GetHabitDocument, options);
      }
export function useGetHabitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHabitQuery, GetHabitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHabitQuery, GetHabitQueryVariables>(GetHabitDocument, options);
        }
export type GetHabitQueryHookResult = ReturnType<typeof useGetHabitQuery>;
export type GetHabitLazyQueryHookResult = ReturnType<typeof useGetHabitLazyQuery>;
export type GetHabitQueryResult = Apollo.QueryResult<GetHabitQuery, GetHabitQueryVariables>;