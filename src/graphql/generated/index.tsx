import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type AgentProfile = {
  __typename?: 'AgentProfile'
  agentPubKey: Scalars['String']
  profile: Profile
}

export type Burner = Node & {
  __typename?: 'Burner'
  id: Scalars['ID']
  metadata?: Maybe<BurnerMetaData>
  name: Scalars['String']
}

export type BurnerConnection = {
  __typename?: 'BurnerConnection'
  edges: Array<BurnerEdge>
  pageInfo: PageInfo
}

export type BurnerCreateParams = {
  description: Scalars['String']
  hashtag?: InputMaybe<Scalars['String']>
  name: Scalars['String']
}

export type BurnerCreateResponse = {
  __typename?: 'BurnerCreateResponse'
  node: Burner
}

export type BurnerEdge = {
  __typename?: 'BurnerEdge'
  cursor: Scalars['String']
  node: Burner
}

export type BurnerMetaData = {
  __typename?: 'BurnerMetaData'
  description: Scalars['String']
  hashtag?: Maybe<Scalars['String']>
}

export type BurnerUpdateParams = {
  description: Scalars['String']
  hashtag?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  name: Scalars['String']
}

export type BurnerUpdateResponse = {
  __typename?: 'BurnerUpdateResponse'
  newActionHash: Scalars['ID']
  node: Burner
}

export type DeleteResponse = {
  __typename?: 'DeleteResponse'
  deleteActionHash: Scalars['String']
  id: Scalars['ID']
}

export type Habit = Node & {
  __typename?: 'Habit'
  id: Scalars['ID']
  metadata?: Maybe<HabitMetaData>
  name: Scalars['String']
  timeframe: TimeFrame
}

export type HabitConnection = {
  __typename?: 'HabitConnection'
  edges: Array<HabitEdge>
  pageInfo: PageInfo
}

export type HabitCreateParams = {
  description: Scalars['String']
  endTime: Scalars['DateTime']
  isAtomic: Scalars['String']
  name: Scalars['String']
  startTime: Scalars['DateTime']
}

export type HabitCreateResponse = {
  __typename?: 'HabitCreateResponse'
  payload: ResponsePayload
}

export type HabitEdge = {
  __typename?: 'HabitEdge'
  cursor: Scalars['String']
  node: Habit
}

export type HabitMetaData = {
  __typename?: 'HabitMetaData'
  description: Scalars['String']
  isAtomic: Scalars['String']
}

export type HabitUpdateParams = {
  description: Scalars['String']
  endTime: Scalars['DateTime']
  id: Scalars['String']
  isAtomic: Scalars['String']
  name: Scalars['String']
  startTime: Scalars['DateTime']
}

export type Mutation = {
  __typename?: 'Mutation'
  createBurner: BurnerCreateResponse
  createHabit: HabitCreateResponse
  createProfile: AgentProfile
  deleteBurner: DeleteResponse
  updateBurner: BurnerUpdateResponse
  updateHabit: HabitCreateResponse
  updateProfile: AgentProfile
}

export type MutationCreateBurnerArgs = {
  burner?: InputMaybe<BurnerCreateParams>
}

export type MutationCreateHabitArgs = {
  habit?: InputMaybe<HabitCreateParams>
}

export type MutationCreateProfileArgs = {
  profile?: InputMaybe<UserProfileCreateUpdateParams>
}

export type MutationDeleteBurnerArgs = {
  id: Scalars['ID']
}

export type MutationUpdateBurnerArgs = {
  burner?: InputMaybe<BurnerUpdateParams>
}

export type MutationUpdateHabitArgs = {
  habit?: InputMaybe<HabitUpdateParams>
}

export type MutationUpdateProfileArgs = {
  profile?: InputMaybe<UserProfileCreateUpdateParams>
}

export type Node = {
  id: Scalars['ID']
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor: Scalars['String']
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor: Scalars['String']
}

export type Profile = {
  __typename?: 'Profile'
  fields?: Maybe<ProfileFields>
  nickname: Scalars['String']
}

export type ProfileFields = {
  __typename?: 'ProfileFields'
  avatar?: Maybe<Scalars['String']>
  isPublic?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  burner: Burner
  burners: BurnerConnection
  habit: Habit
  habits: HabitConnection
  me: AgentProfile
}

export type QueryBurnerArgs = {
  id: Scalars['ID']
}

export type QueryHabitArgs = {
  id: Scalars['ID']
}

export type ResponsePayload = {
  __typename?: 'ResponsePayload'
  entryHash: Scalars['String']
  headerHash: Scalars['String']
}

export type TimeFrame = {
  __typename?: 'TimeFrame'
  endTime: Scalars['DateTime']
  startTime: Scalars['DateTime']
}

export type Todo = {
  __typename?: 'Todo'
  description: Scalars['String']
  id: Scalars['ID']
  status: Scalars['Boolean']
}

export type UserProfileCreateUpdateParams = {
  avatar?: InputMaybe<Scalars['String']>
  isPublic?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  nickname: Scalars['String']
}

export type AddBurnerMutationVariables = Exact<{
  burnerFields: BurnerCreateParams
}>

export type AddBurnerMutation = {
  __typename?: 'Mutation'
  createBurner: {
    __typename?: 'BurnerCreateResponse'
    node: { __typename?: 'Burner'; id: string }
  }
}

export type DeleteBurnerMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type DeleteBurnerMutation = {
  __typename?: 'Mutation'
  deleteBurner: {
    __typename?: 'DeleteResponse'
    id: string
    deleteActionHash: string
  }
}

export type UpdateBurnerMutationVariables = Exact<{
  burnerFields: BurnerUpdateParams
}>

export type UpdateBurnerMutation = {
  __typename?: 'Mutation'
  updateBurner: {
    __typename?: 'BurnerUpdateResponse'
    newActionHash: string
    node: {
      __typename?: 'Burner'
      id: string
      name: string
      metadata?: {
        __typename?: 'BurnerMetaData'
        description: string
        hashtag?: string | null
      } | null
    }
  }
}

export type AddHabitMutationVariables = Exact<{
  variables: HabitCreateParams
}>

export type AddHabitMutation = {
  __typename?: 'Mutation'
  createHabit: {
    __typename?: 'HabitCreateResponse'
    payload: {
      __typename?: 'ResponsePayload'
      headerHash: string
      entryHash: string
    }
  }
}

export type UpdateHabitMutationVariables = Exact<{
  habitFields: HabitUpdateParams
}>

export type UpdateHabitMutation = {
  __typename?: 'Mutation'
  updateHabit: {
    __typename?: 'HabitCreateResponse'
    payload: {
      __typename?: 'ResponsePayload'
      entryHash: string
      headerHash: string
    }
  }
}

export type AddUserMutationVariables = Exact<{
  profileFields: UserProfileCreateUpdateParams
}>

export type AddUserMutation = {
  __typename?: 'Mutation'
  createProfile: {
    __typename?: 'AgentProfile'
    agentPubKey: string
    profile: { __typename?: 'Profile'; nickname: string }
  }
}

export type UpdateUserMutationVariables = Exact<{
  profileFields: UserProfileCreateUpdateParams
}>

export type UpdateUserMutation = {
  __typename?: 'Mutation'
  updateProfile: {
    __typename?: 'AgentProfile'
    agentPubKey: string
    profile: { __typename?: 'Profile'; nickname: string }
  }
}

export type GetBurnerQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type GetBurnerQuery = {
  __typename?: 'Query'
  burner: {
    __typename?: 'Burner'
    id: string
    name: string
    metadata?: {
      __typename?: 'BurnerMetaData'
      description: string
      hashtag?: string | null
    } | null
  }
}

export type GetBurnersQueryVariables = Exact<{ [key: string]: never }>

export type GetBurnersQuery = {
  __typename?: 'Query'
  burners: {
    __typename?: 'BurnerConnection'
    edges: Array<{
      __typename?: 'BurnerEdge'
      node: {
        __typename?: 'Burner'
        id: string
        name: string
        metadata?: {
          __typename?: 'BurnerMetaData'
          description: string
          hashtag?: string | null
        } | null
      }
    }>
  }
}

export type GetHabitQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type GetHabitQuery = {
  __typename?: 'Query'
  habit: {
    __typename?: 'Habit'
    name: string
    timeframe: { __typename?: 'TimeFrame'; startTime: any; endTime: any }
    metadata?: {
      __typename?: 'HabitMetaData'
      description: string
      isAtomic: string
    } | null
  }
}

export type GetHabitsQueryVariables = Exact<{ [key: string]: never }>

export type GetHabitsQuery = {
  __typename?: 'Query'
  habits: {
    __typename?: 'HabitConnection'
    edges: Array<{
      __typename?: 'HabitEdge'
      node: {
        __typename?: 'Habit'
        name: string
        timeframe: { __typename?: 'TimeFrame'; startTime: any; endTime: any }
        metadata?: {
          __typename?: 'HabitMetaData'
          description: string
          isAtomic: string
        } | null
      }
    }>
  }
}

export type GetMeQueryVariables = Exact<{ [key: string]: never }>

export type GetMeQuery = {
  __typename?: 'Query'
  me: {
    __typename?: 'AgentProfile'
    agentPubKey: string
    profile: {
      __typename?: 'Profile'
      nickname: string
      fields?: {
        __typename?: 'ProfileFields'
        avatar?: string | null
        location?: string | null
      } | null
    }
  }
}

export const AddBurnerDocument = gql`
  mutation addBurner($burnerFields: BurnerCreateParams!) {
    createBurner(burner: $burnerFields) {
      node {
        id
      }
    }
  }
`
export type AddBurnerMutationFn = Apollo.MutationFunction<
  AddBurnerMutation,
  AddBurnerMutationVariables
>

/**
 * __useAddBurnerMutation__
 *
 * To run a mutation, you first call `useAddBurnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBurnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBurnerMutation, { data, loading, error }] = useAddBurnerMutation({
 *   variables: {
 *      burnerFields: // value for 'burnerFields'
 *   },
 * });
 */
export function useAddBurnerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddBurnerMutation,
    AddBurnerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddBurnerMutation, AddBurnerMutationVariables>(
    AddBurnerDocument,
    options,
  )
}
export type AddBurnerMutationHookResult = ReturnType<
  typeof useAddBurnerMutation
>
export type AddBurnerMutationResult = Apollo.MutationResult<AddBurnerMutation>
export type AddBurnerMutationOptions = Apollo.BaseMutationOptions<
  AddBurnerMutation,
  AddBurnerMutationVariables
>
export const DeleteBurnerDocument = gql`
  mutation deleteBurner($id: ID!) {
    deleteBurner(id: $id) {
      id
      deleteActionHash
    }
  }
`
export type DeleteBurnerMutationFn = Apollo.MutationFunction<
  DeleteBurnerMutation,
  DeleteBurnerMutationVariables
>

/**
 * __useDeleteBurnerMutation__
 *
 * To run a mutation, you first call `useDeleteBurnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBurnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBurnerMutation, { data, loading, error }] = useDeleteBurnerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBurnerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBurnerMutation,
    DeleteBurnerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteBurnerMutation,
    DeleteBurnerMutationVariables
  >(DeleteBurnerDocument, options)
}
export type DeleteBurnerMutationHookResult = ReturnType<
  typeof useDeleteBurnerMutation
>
export type DeleteBurnerMutationResult =
  Apollo.MutationResult<DeleteBurnerMutation>
export type DeleteBurnerMutationOptions = Apollo.BaseMutationOptions<
  DeleteBurnerMutation,
  DeleteBurnerMutationVariables
>
export const UpdateBurnerDocument = gql`
  mutation updateBurner($burnerFields: BurnerUpdateParams!) {
    updateBurner(burner: $burnerFields) {
      node {
        id
        name
        metadata {
          description
          hashtag
        }
      }
      newActionHash
    }
  }
`
export type UpdateBurnerMutationFn = Apollo.MutationFunction<
  UpdateBurnerMutation,
  UpdateBurnerMutationVariables
>

/**
 * __useUpdateBurnerMutation__
 *
 * To run a mutation, you first call `useUpdateBurnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBurnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBurnerMutation, { data, loading, error }] = useUpdateBurnerMutation({
 *   variables: {
 *      burnerFields: // value for 'burnerFields'
 *   },
 * });
 */
export function useUpdateBurnerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBurnerMutation,
    UpdateBurnerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateBurnerMutation,
    UpdateBurnerMutationVariables
  >(UpdateBurnerDocument, options)
}
export type UpdateBurnerMutationHookResult = ReturnType<
  typeof useUpdateBurnerMutation
>
export type UpdateBurnerMutationResult =
  Apollo.MutationResult<UpdateBurnerMutation>
export type UpdateBurnerMutationOptions = Apollo.BaseMutationOptions<
  UpdateBurnerMutation,
  UpdateBurnerMutationVariables
>
export const AddHabitDocument = gql`
  mutation addHabit($variables: HabitCreateParams!) {
    createHabit(habit: $variables) {
      payload {
        headerHash
        entryHash
      }
    }
  }
`
export type AddHabitMutationFn = Apollo.MutationFunction<
  AddHabitMutation,
  AddHabitMutationVariables
>

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
export function useAddHabitMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddHabitMutation,
    AddHabitMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddHabitMutation, AddHabitMutationVariables>(
    AddHabitDocument,
    options,
  )
}
export type AddHabitMutationHookResult = ReturnType<typeof useAddHabitMutation>
export type AddHabitMutationResult = Apollo.MutationResult<AddHabitMutation>
export type AddHabitMutationOptions = Apollo.BaseMutationOptions<
  AddHabitMutation,
  AddHabitMutationVariables
>
export const UpdateHabitDocument = gql`
  mutation updateHabit($habitFields: HabitUpdateParams!) {
    updateHabit(habit: $habitFields) {
      payload {
        entryHash
        headerHash
      }
    }
  }
`
export type UpdateHabitMutationFn = Apollo.MutationFunction<
  UpdateHabitMutation,
  UpdateHabitMutationVariables
>

/**
 * __useUpdateHabitMutation__
 *
 * To run a mutation, you first call `useUpdateHabitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHabitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHabitMutation, { data, loading, error }] = useUpdateHabitMutation({
 *   variables: {
 *      habitFields: // value for 'habitFields'
 *   },
 * });
 */
export function useUpdateHabitMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateHabitMutation,
    UpdateHabitMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateHabitMutation, UpdateHabitMutationVariables>(
    UpdateHabitDocument,
    options,
  )
}
export type UpdateHabitMutationHookResult = ReturnType<
  typeof useUpdateHabitMutation
>
export type UpdateHabitMutationResult =
  Apollo.MutationResult<UpdateHabitMutation>
export type UpdateHabitMutationOptions = Apollo.BaseMutationOptions<
  UpdateHabitMutation,
  UpdateHabitMutationVariables
>
export const AddUserDocument = gql`
  mutation addUser($profileFields: UserProfileCreateUpdateParams!) {
    createProfile(profile: $profileFields) {
      agentPubKey
      profile {
        nickname
      }
    }
  }
`
export type AddUserMutationFn = Apollo.MutationFunction<
  AddUserMutation,
  AddUserMutationVariables
>

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      profileFields: // value for 'profileFields'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserMutation,
    AddUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(
    AddUserDocument,
    options,
  )
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>
export type AddUserMutationOptions = Apollo.BaseMutationOptions<
  AddUserMutation,
  AddUserMutationVariables
>
export const UpdateUserDocument = gql`
  mutation updateUser($profileFields: UserProfileCreateUpdateParams!) {
    updateProfile(profile: $profileFields) {
      agentPubKey
      profile {
        nickname
      }
    }
  }
`
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      profileFields: // value for 'profileFields'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  )
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>
export const GetBurnerDocument = gql`
  query getBurner($id: ID!) {
    burner(id: $id) {
      id
      name
      metadata {
        description
        hashtag
      }
    }
  }
`

/**
 * __useGetBurnerQuery__
 *
 * To run a query within a React component, call `useGetBurnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBurnerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBurnerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBurnerQuery(
  baseOptions: Apollo.QueryHookOptions<GetBurnerQuery, GetBurnerQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetBurnerQuery, GetBurnerQueryVariables>(
    GetBurnerDocument,
    options,
  )
}
export function useGetBurnerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBurnerQuery,
    GetBurnerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetBurnerQuery, GetBurnerQueryVariables>(
    GetBurnerDocument,
    options,
  )
}
export type GetBurnerQueryHookResult = ReturnType<typeof useGetBurnerQuery>
export type GetBurnerLazyQueryHookResult = ReturnType<
  typeof useGetBurnerLazyQuery
>
export type GetBurnerQueryResult = Apollo.QueryResult<
  GetBurnerQuery,
  GetBurnerQueryVariables
>
export const GetBurnersDocument = gql`
  query getBurners {
    burners {
      edges {
        node {
          id
          name
          metadata {
            description
            hashtag
          }
        }
      }
    }
  }
`

/**
 * __useGetBurnersQuery__
 *
 * To run a query within a React component, call `useGetBurnersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBurnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBurnersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBurnersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBurnersQuery,
    GetBurnersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetBurnersQuery, GetBurnersQueryVariables>(
    GetBurnersDocument,
    options,
  )
}
export function useGetBurnersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBurnersQuery,
    GetBurnersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetBurnersQuery, GetBurnersQueryVariables>(
    GetBurnersDocument,
    options,
  )
}
export type GetBurnersQueryHookResult = ReturnType<typeof useGetBurnersQuery>
export type GetBurnersLazyQueryHookResult = ReturnType<
  typeof useGetBurnersLazyQuery
>
export type GetBurnersQueryResult = Apollo.QueryResult<
  GetBurnersQuery,
  GetBurnersQueryVariables
>
export const GetHabitDocument = gql`
  query getHabit($id: ID!) {
    habit(id: $id) {
      name
      timeframe {
        startTime
        endTime
      }
      metadata {
        description
        isAtomic
      }
    }
  }
`

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
export function useGetHabitQuery(
  baseOptions: Apollo.QueryHookOptions<GetHabitQuery, GetHabitQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetHabitQuery, GetHabitQueryVariables>(
    GetHabitDocument,
    options,
  )
}
export function useGetHabitLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHabitQuery,
    GetHabitQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetHabitQuery, GetHabitQueryVariables>(
    GetHabitDocument,
    options,
  )
}
export type GetHabitQueryHookResult = ReturnType<typeof useGetHabitQuery>
export type GetHabitLazyQueryHookResult = ReturnType<
  typeof useGetHabitLazyQuery
>
export type GetHabitQueryResult = Apollo.QueryResult<
  GetHabitQuery,
  GetHabitQueryVariables
>
export const GetHabitsDocument = gql`
  query getHabits {
    habits {
      edges {
        node {
          name
          timeframe {
            startTime
            endTime
          }
          metadata {
            description
            isAtomic
          }
        }
      }
    }
  }
`

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
export function useGetHabitsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHabitsQuery,
    GetHabitsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetHabitsQuery, GetHabitsQueryVariables>(
    GetHabitsDocument,
    options,
  )
}
export function useGetHabitsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHabitsQuery,
    GetHabitsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetHabitsQuery, GetHabitsQueryVariables>(
    GetHabitsDocument,
    options,
  )
}
export type GetHabitsQueryHookResult = ReturnType<typeof useGetHabitsQuery>
export type GetHabitsLazyQueryHookResult = ReturnType<
  typeof useGetHabitsLazyQuery
>
export type GetHabitsQueryResult = Apollo.QueryResult<
  GetHabitsQuery,
  GetHabitsQueryVariables
>
export const GetMeDocument = gql`
  query getMe {
    me {
      agentPubKey
      profile {
        nickname
        fields {
          avatar
          location
        }
      }
    }
  }
`

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options,
  )
}
export function useGetMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options,
  )
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>
export type GetMeQueryResult = Apollo.QueryResult<
  GetMeQuery,
  GetMeQueryVariables
>
