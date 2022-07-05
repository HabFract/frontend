import { DNAIdMappings } from '../../types'
import { Habit, HabitCreateParams } from '@/graphql/generated/index';

import { mapZomeFn } from '../../connection';
import { HAPP_ID, HAPP_ZOME_NAME_ATOMIC } from '@/app/constants';

export type createArgs = { habit: HabitCreateParams }
export type createHandler = (root: any, args: createArgs) => Promise<Habit>

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const runCreate = mapZomeFn<HabitCreateParams, Habit>(dnaConfig, conductorUri, HAPP_ID, HAPP_ZOME_NAME_ATOMIC, 'create_habit')

  const createHabit: createHandler = async (root, args) => {
    return runCreate(args.habit)
  }
  
  return {
    createHabit
  }
}