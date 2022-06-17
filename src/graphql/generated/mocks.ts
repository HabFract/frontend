import { Habit, HabitConnection, HabitEdge, HabitMetaData, Mutation, PageInfo, Query, TimeFrame } from '../generated/index';

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
