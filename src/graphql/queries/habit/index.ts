import { DNAIdMappings, ById } from '../../types'
import { Habit, HabitConnection } from '@/graphql/generated/index'

import { mapZomeFn } from '../../connection'
import { HAPP_ID, HAPP_ZOME_NAME_ATOMIC } from '@/app/constants'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const read = mapZomeFn<ById, Habit>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_ATOMIC,
    'get_habit',
  )
  const readAll = mapZomeFn<null, HabitConnection>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_ATOMIC,
    'get_all_habits',
  )

  return {
    habit: async (_, args): Promise<Habit> => {
      return read(args.id)
    },

    habits: async (): Promise<HabitConnection> => {
      const maybeHabits = await readAll(null)

      return Promise.resolve(maybeHabits || [])
    },
  }
}
