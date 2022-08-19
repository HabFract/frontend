import {
  AgentProfile,
  Burner,
  BurnerConnection,
  BurnerEdge,
  BurnerMetaData,
  Habit,
  HabitConnection,
  HabitCreateParams,
  HabitCreateResponse,
  HabitEdge,
  HabitMetaData,
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
        : 'voluptatibus',
    isAtomic:
      overrides && overrides.hasOwnProperty('isAtomic')
        ? overrides.isAtomic!
        : 'velit',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'velit',
    startTime:
      overrides && overrides.hasOwnProperty('startTime')
        ? overrides.startTime!
        : 'quasi',
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

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
  return {
    createHabit:
      overrides && overrides.hasOwnProperty('createHabit')
        ? overrides.createHabit!
        : aHabitCreateResponse(),
    createProfile:
      overrides && overrides.hasOwnProperty('createProfile')
        ? overrides.createProfile!
        : anAgentProfile(),
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
        : 'facilis',
    startTime:
      overrides && overrides.hasOwnProperty('startTime')
        ? overrides.startTime!
        : 'quae',
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
