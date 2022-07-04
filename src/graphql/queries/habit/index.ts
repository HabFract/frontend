import { DNAIdMappings, ReadParams } from '../../types'
import { Habit } from '@/graphql/generated/index';

import { mapZomeFn } from '../../connection';
import { HAPP_ID } from '@/app/constants';

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {

  const read = mapZomeFn<ReadParams, Habit>(dnaConfig, conductorUri, HAPP_ID, 'atomic_habits', 'get_habit')
  const readAll = mapZomeFn<null, Habit[]>(dnaConfig, conductorUri, HAPP_ID, 'atomic_habits', 'get_habits')
  
  return {
    habit: async (root, args): Promise<Habit> => {
      return read(args)
    },

    // habits: async (root, args): Promise<Habit[]> => {
    //   return readAll(null)
    // },
  }
}