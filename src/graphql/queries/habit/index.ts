import { DNAIdMappings, ReadParams } from '../../types'
import { Habit } from '@/graphql/generated/index';

import { mapZomeFn } from '../../connection';

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {

  const read = mapZomeFn<ReadParams, Habit>(dnaConfig, conductorUri, 'habit_tracking', 'atomic_habits', 'get_habit')
  const readAll = mapZomeFn<null, Habit[]>(dnaConfig, conductorUri, 'habit_tracking', 'atomic_habits', 'get_habits')
  
  return {
    action: async (root, args): Promise<Habit> => {
      return read(args)
    },

    Habits: async (root, args): Promise<Habit[]> => {
      return readAll(null)
    },
  }
}