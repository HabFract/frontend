import { Habit, HabitConnection, HabitCreateParams, HabitCreateResponse, HabitEdge, HabitMetaData, Mutation, PageInfo, Query, TimeFrame, Todo } from '../generated/index';

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

export const aHabitCreateParams = (overrides?: Partial<HabitCreateParams>): HabitCreateParams => {
    return {
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'velit',
    };
};

export const aHabitCreateResponse = (overrides?: Partial<HabitCreateResponse>): HabitCreateResponse => {
    return {
        habit: overrides && overrides.hasOwnProperty('habit') ? overrides.habit! : aHabit(),
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
        createHabit: overrides && overrides.hasOwnProperty('createHabit') ? overrides.createHabit! : aHabitCreateResponse(),
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
        habit: overrides && overrides.hasOwnProperty('habit') ? overrides.habit! : aHabit(),
    };
};

export const aTimeFrame = (overrides?: Partial<TimeFrame>): TimeFrame => {
    return {
        endTime: overrides && overrides.hasOwnProperty('endTime') ? overrides.endTime! : 'facilis',
        startTime: overrides && overrides.hasOwnProperty('startTime') ? overrides.startTime! : 'quae',
    };
};

export const aTodo = (overrides?: Partial<Todo>): Todo => {
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'assumenda',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'bcbfc1fd-9f84-4ca5-804f-62522ce5ea92',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : false,
    };
};
