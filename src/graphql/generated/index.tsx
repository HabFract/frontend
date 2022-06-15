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
  apiVersion: Scalars['String'];
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
  habits: HabitConnection;
};

export type TimeFrame = {
  endTime: Scalars['DateTime'];
  startTime: Scalars['DateTime'];
};

export type GetHabitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHabitsQuery = { __typename?: 'Query', habits: { __typename?: 'HabitConnection', edges: Array<{ __typename?: 'HabitEdge', node: { __typename?: 'Habit', id: string, name: string, timeframe: never, metadata?: { __typename?: 'HabitMetaData', description: string, isAtomic: boolean, atomicListEntryHash: string } | null } }> } };


export const GetHabitsDocument = gql`
    query getHabits {
  habits {
    edges {
      node {
        id
        name
        timeframe {
          startTime
          endTime
        }
        metadata {
          description
          isAtomic
          atomicListEntryHash
        }
      }
    }
  }
}
    `;

/**
 * __useGetHabitsQuery__
 *
 * To run a query within a React component, call `useGetHabitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHabitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHabitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHabitsQuery(baseOptions?: Apollo.QueryHookOptions<GetHabitsQuery, GetHabitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHabitsQuery, GetHabitsQueryVariables>(GetHabitsDocument, options);
      }
export function useGetHabitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHabitsQuery, GetHabitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHabitsQuery, GetHabitsQueryVariables>(GetHabitsDocument, options);
        }
export type GetHabitsQueryHookResult = ReturnType<typeof useGetHabitsQuery>;
export type GetHabitsLazyQueryHookResult = ReturnType<typeof useGetHabitsLazyQuery>;
export type GetHabitsQueryResult = Apollo.QueryResult<GetHabitsQuery, GetHabitsQueryVariables>;

export const aHabit = (overrides?: Partial<Habit>): Habit => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '40329ca5-e4a6-41a7-9938-6f67a92c7f6a',
        metadata: overrides && overrides.hasOwnProperty('metadata') ? overrides.metadata! : aHabitMetaData(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'odit',
        timeframe: overrides && overrides.hasOwnProperty('timeframe') ? overrides.timeframe! : aTimeFrame(),
    };
};

export const aHabitConnection = (overrides?: Partial<HabitConnection>): HabitConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aHabitEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
    };
};

export const aHabitEdge = (overrides?: Partial<HabitEdge>): HabitEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'omnis',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aHabit(),
    };
};

export const aHabitMetaData = (overrides?: Partial<HabitMetaData>): HabitMetaData => {
    return {
        atomicListEntryHash: overrides && overrides.hasOwnProperty('atomicListEntryHash') ? overrides.atomicListEntryHash! : 'eos',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'quia',
        isAtomic: overrides && overrides.hasOwnProperty('isAtomic') ? overrides.isAtomic! : false,
    };
};

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
    return {
        apiVersion: overrides && overrides.hasOwnProperty('apiVersion') ? overrides.apiVersion! : 'quia',
    };
};

export const aPageInfo = (overrides?: Partial<PageInfo>): PageInfo => {
    return {
        endCursor: overrides && overrides.hasOwnProperty('endCursor') ? overrides.endCursor! : 'id',
        hasNextPage: overrides && overrides.hasOwnProperty('hasNextPage') ? overrides.hasNextPage! : true,
        hasPreviousPage: overrides && overrides.hasOwnProperty('hasPreviousPage') ? overrides.hasPreviousPage! : false,
        startCursor: overrides && overrides.hasOwnProperty('startCursor') ? overrides.startCursor! : 'eum',
    };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        habits: overrides && overrides.hasOwnProperty('habits') ? overrides.habits! : aHabitConnection(),
    };
};

export const aTimeFrame = (overrides?: Partial<TimeFrame>): TimeFrame => {
    return {
        endTime: overrides && overrides.hasOwnProperty('endTime') ? overrides.endTime! : 'facilis',
        startTime: overrides && overrides.hasOwnProperty('startTime') ? overrides.startTime! : 'quae',
    };
};
