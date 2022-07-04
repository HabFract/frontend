import { DNAIdMappings, ReadParams } from '../../types'
import { Habit, HabitCreateParams } from '@/graphql/generated/index';

import { mapZomeFn } from '../../connection';
import { HAPP_ID } from '@/app/constants';

export type createHandler = (root: any, args: CreateArgs) => Promise<Habit>

export interface CreateArgs {
  input: HabitCreateParams,
}

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
console.log('dnaConfig :>> ', dnaConfig);
  const runCreate = mapZomeFn<CreateArgs, Habit>(dnaConfig, conductorUri, HAPP_ID, 'atomic_habits', 'create_habit')

  const createHabit: createHandler = async (root, args) => {
    return runCreate(args)
  }
  
  return {
    createHabit
  }
}