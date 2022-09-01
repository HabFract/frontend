import {
  AgentProfile,
  Burner,
  BurnerConnection,
  BurnerCreateParams,
  BurnerCreateResponse,
  BurnerEdge,
  BurnerMetaData,
  BurnerUpdateParams,
  Habit,
  HabitConnection,
  HabitCreateParams,
  HabitCreateResponse,
  HabitEdge,
  HabitMetaData,
  HabitUpdateParams,
  Mutation,
  Node,
  PageInfo,
  Profile,
  ProfileFields,
  Query,
  ResponsePayload,
  TimeFrame,
  Todo,
  UserProfileCreateUpdateParams,
} from '../generated/index'

export const anAgentProfile = (
  overrides?: Partial<AgentProfile>,
): AgentProfile => {
  return {
    agentPubKey:
      overrides && overrides.hasOwnProperty('agentPubKey')
        ? overrides.agentPubKey!
        : 'error',
    profile:
      overrides && overrides.hasOwnProperty('profile')
        ? overrides.profile!
        : aProfile(),
  }
}

export const aBurner = (overrides?: Partial<Burner>): Burner => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '385647d3-1721-4788-af94-6b7b642d3a88',
    metadata:
      overrides && overrides.hasOwnProperty('metadata')
        ? overrides.metadata!
        : aBurnerMetaData(),
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'officia',
  }
}

export const aBurnerConnection = (
  overrides?: Partial<BurnerConnection>,
): BurnerConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aBurnerEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aBurnerCreateParams = (
  overrides?: Partial<BurnerCreateParams>,
): BurnerCreateParams => {
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'natus',
    hashtag:
      overrides && overrides.hasOwnProperty('hashtag')
        ? overrides.hashtag!
        : 'aut',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'omnis',
  }
}

export const aBurnerCreateResponse = (
  overrides?: Partial<BurnerCreateResponse>,
): BurnerCreateResponse => {
  return {
    payload:
      overrides && overrides.hasOwnProperty('payload')
        ? overrides.payload!
        : aResponsePayload(),
  }
}

export const aBurnerEdge = (overrides?: Partial<BurnerEdge>): BurnerEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'rem',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aBurner(),
  }
}

export const aBurnerMetaData = (
  overrides?: Partial<BurnerMetaData>,
): BurnerMetaData => {
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'quam',
    hashtag:
      overrides && overrides.hasOwnProperty('hashtag')
        ? overrides.hashtag!
        : 'ex',
  }
}

export const aBurnerUpdateParams = (
  overrides?: Partial<BurnerUpdateParams>,
): BurnerUpdateParams => {
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'rem',
    hashtag:
      overrides && overrides.hasOwnProperty('hashtag')
        ? overrides.hashtag!
        : 'et',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'consequatur',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'nobis',
  }
}

export const aHabit = (overrides?: Partial<Habit>): Habit => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '40329ca5-e4a6-41a7-9938-6f67a92c7f6a',
    metadata:
      overrides && overrides.hasOwnProperty('metadata')
        ? overrides.metadata!
        : aHabitMetaData(),
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'odit',
    timeframe:
      overrides && overrides.hasOwnProperty('timeframe')
        ? overrides.timeframe!
        : aTimeFrame(),
  }
}

export const aHabitConnection = (
  overrides?: Partial<HabitConnection>,
): HabitConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aHabitEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  }
}

export const aHabitCreateParams = (
  overrides?: Partial<HabitCreateParams>,
): HabitCreateParams => {
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'modi',
    endTime:
      overrides && overrides.hasOwnProperty('endTime')
        ? overrides.endTime!
        : '2015-07-31T01:12:05+00:00',
    isAtomic:
      overrides && overrides.hasOwnProperty('isAtomic')
        ? overrides.isAtomic!
        : 'velit',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'velit',
    startTime:
      overrides && overrides.hasOwnProperty('startTime')
        ? overrides.startTime!
        : '1973-03-23T04:31:15+00:00',
  }
}

export const aHabitCreateResponse = (
  overrides?: Partial<HabitCreateResponse>,
): HabitCreateResponse => {
  return {
    payload:
      overrides && overrides.hasOwnProperty('payload')
        ? overrides.payload!
        : aResponsePayload(),
  }
}

export const aHabitEdge = (overrides?: Partial<HabitEdge>): HabitEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'omnis',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aHabit(),
  }
}

export const aHabitMetaData = (
  overrides?: Partial<HabitMetaData>,
): HabitMetaData => {
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'quia',
    isAtomic:
      overrides && overrides.hasOwnProperty('isAtomic')
        ? overrides.isAtomic!
        : 'at',
  }
}

export const aHabitUpdateParams = (
  overrides?: Partial<HabitUpdateParams>,
): HabitUpdateParams => {
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'voluptatem',
    endTime:
      overrides && overrides.hasOwnProperty('endTime')
        ? overrides.endTime!
        : '1979-10-29T08:42:02+00:00',
    id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'quia',
    isAtomic:
      overrides && overrides.hasOwnProperty('isAtomic')
        ? overrides.isAtomic!
        : 'a',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'minus',
    startTime:
      overrides && overrides.hasOwnProperty('startTime')
        ? overrides.startTime!
        : '2013-05-04T02:08:00+00:00',
  }
}

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
  return {
    createBurner:
      overrides && overrides.hasOwnProperty('createBurner')
        ? overrides.createBurner!
        : aBurnerCreateResponse(),
    createHabit:
      overrides && overrides.hasOwnProperty('createHabit')
        ? overrides.createHabit!
        : aHabitCreateResponse(),
    createProfile:
      overrides && overrides.hasOwnProperty('createProfile')
        ? overrides.createProfile!
        : anAgentProfile(),
    updateBurner:
      overrides && overrides.hasOwnProperty('updateBurner')
        ? overrides.updateBurner!
        : aBurnerCreateResponse(),
    updateHabit:
      overrides && overrides.hasOwnProperty('updateHabit')
        ? overrides.updateHabit!
        : aHabitCreateResponse(),
    updateProfile:
      overrides && overrides.hasOwnProperty('updateProfile')
        ? overrides.updateProfile!
        : anAgentProfile(),
  }
}

export const aNode = (overrides?: Partial<Node>): Node => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '95bb2f34-6c86-495f-bfdc-f25b025cdba5',
  }
}

export const aPageInfo = (overrides?: Partial<PageInfo>): PageInfo => {
  return {
    endCursor:
      overrides && overrides.hasOwnProperty('endCursor')
        ? overrides.endCursor!
        : 'id',
    hasNextPage:
      overrides && overrides.hasOwnProperty('hasNextPage')
        ? overrides.hasNextPage!
        : true,
    hasPreviousPage:
      overrides && overrides.hasOwnProperty('hasPreviousPage')
        ? overrides.hasPreviousPage!
        : false,
    startCursor:
      overrides && overrides.hasOwnProperty('startCursor')
        ? overrides.startCursor!
        : 'eum',
  }
}

export const aProfile = (overrides?: Partial<Profile>): Profile => {
  return {
    fields:
      overrides && overrides.hasOwnProperty('fields')
        ? overrides.fields!
        : aProfileFields(),
    nickname:
      overrides && overrides.hasOwnProperty('nickname')
        ? overrides.nickname!
        : 'sunt',
  }
}

export const aProfileFields = (
  overrides?: Partial<ProfileFields>,
): ProfileFields => {
  return {
    avatar:
      overrides && overrides.hasOwnProperty('avatar')
        ? overrides.avatar!
        : 'quo',
    isPublic:
      overrides && overrides.hasOwnProperty('isPublic')
        ? overrides.isPublic!
        : 'autem',
    location:
      overrides && overrides.hasOwnProperty('location')
        ? overrides.location!
        : 'reprehenderit',
  }
}

export const aQuery = (overrides?: Partial<Query>): Query => {
  return {
    burner:
      overrides && overrides.hasOwnProperty('burner')
        ? overrides.burner!
        : aBurner(),
    burners:
      overrides && overrides.hasOwnProperty('burners')
        ? overrides.burners!
        : aBurnerConnection(),
    habit:
      overrides && overrides.hasOwnProperty('habit')
        ? overrides.habit!
        : aHabit(),
    habits:
      overrides && overrides.hasOwnProperty('habits')
        ? overrides.habits!
        : aHabitConnection(),
    me:
      overrides && overrides.hasOwnProperty('me')
        ? overrides.me!
        : anAgentProfile(),
  }
}

export const aResponsePayload = (
  overrides?: Partial<ResponsePayload>,
): ResponsePayload => {
  return {
    entryHash:
      overrides && overrides.hasOwnProperty('entryHash')
        ? overrides.entryHash!
        : 'similique',
    headerHash:
      overrides && overrides.hasOwnProperty('headerHash')
        ? overrides.headerHash!
        : 'consequatur',
  }
}

export const aTimeFrame = (overrides?: Partial<TimeFrame>): TimeFrame => {
  return {
    endTime:
      overrides && overrides.hasOwnProperty('endTime')
        ? overrides.endTime!
        : '1999-10-31T01:41:30+00:00',
    startTime:
      overrides && overrides.hasOwnProperty('startTime')
        ? overrides.startTime!
        : '1972-01-14T01:05:16+00:00',
  }
}

export const aTodo = (overrides?: Partial<Todo>): Todo => {
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'assumenda',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'bcbfc1fd-9f84-4ca5-804f-62522ce5ea92',
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : false,
  }
}

export const aUserProfileCreateUpdateParams = (
  overrides?: Partial<UserProfileCreateUpdateParams>,
): UserProfileCreateUpdateParams => {
  return {
    avatar:
      overrides && overrides.hasOwnProperty('avatar')
        ? overrides.avatar!
        : 'molestias',
    isPublic:
      overrides && overrides.hasOwnProperty('isPublic')
        ? overrides.isPublic!
        : 'quae',
    location:
      overrides && overrides.hasOwnProperty('location')
        ? overrides.location!
        : 'illo',
    nickname:
      overrides && overrides.hasOwnProperty('nickname')
        ? overrides.nickname!
        : 'quam',
  }
}
