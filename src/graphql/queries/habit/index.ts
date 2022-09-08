import { DNAIdMappings } from '../../types'
import { HAPP_ZOME_NAME_ATOMIC } from '@/app/constants'
import { getQueryHandlers, QueryHandlersDictionary } from '../../helpers'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const handlers: QueryHandlersDictionary = getQueryHandlers(
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
