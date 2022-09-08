import { decode } from '@msgpack/msgpack'
import { Record } from '@holochain/client'
import { DNAIdMappings } from '../../types'
import { HAPP_ZOME_NAME_ATOMIC } from '@/app/constants'
import { Burner } from '@/graphql/generated/index'
import { getQueryHandlers, QueryHandlersDictionary } from '../../helpers'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const handlers: QueryHandlersDictionary = getQueryHandlers(
    ['get_my_live_burner', 'get_my_live_burners'],
    HAPP_ZOME_NAME_ATOMIC,
    dnaConfig,
    conductorUri,
  )
  const { readOne, readMany } = handlers

  return {
    burner: async (_, args): Promise<any> => {
      const record: any = await readOne(args.id)

      const response = {
        ...(decode((record.entry as any).Present.entry) as Burner),
        id: (record as any).signed_action.hashed.hash,
      } as Burner

      return Promise.resolve(response)
    },

    burners: async (): Promise<any> => {
      const records = await readMany(null)
      const burners = (records || []) as Record[]

      const response = {
        edges: burners.map((b) => ({
          cursor: null,
          node: {
            ...(decode((b.entry as any).Present.entry) as Burner),
            id: (b as any).signed_action.hashed.hash,
          },
        })),
      }

      return Promise.resolve(response)
    },
  }
}
