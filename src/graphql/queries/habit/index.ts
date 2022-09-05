import { HabitConnection } from './../../generated/index'
import { DNAIdMappings } from '../../types'
import { HAPP_ZOME_NAME_ATOMIC } from '@/app/constants'
import { Habit } from '@/graphql/generated/index'
import { getQueryHandlers, QueryHandlersDictionary } from '../..'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const handlers: QueryHandlersDictionary<Habit> = getQueryHandlers(
    ['get_habit', 'get_all_habits'],
    HAPP_ZOME_NAME_ATOMIC,
    dnaConfig,
    conductorUri,
  )

  const { readOne, readMany } = handlers

  return {
    habit: async (_, args): Promise<any> => {
      return readOne(args.id)
    },

    habits: async (): Promise<any> => {
      const maybeHabits = await readMany(null)

      return Promise.resolve(maybeHabits || [])
    },
  }
}
