import { BurnerEdge } from './../../generated/index'
import { decode } from '@msgpack/msgpack'
import { Record } from '@holochain/client'
import { DNAIdMappings, ById } from '../../types'
import { HAPP_ZOME_NAME_ATOMIC } from '@/app/constants'
import { Burner, BurnerConnection } from '@/graphql/generated/index'
import { getQueryHandlers, QueryHandlersDictionary } from '../..'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const handlers: QueryHandlersDictionary<Burner> = getQueryHandlers(
    ['get_burner', 'get_all_burners'],
    HAPP_ZOME_NAME_ATOMIC,
    dnaConfig,
    conductorUri,
  )
  const { readOne, readMany } = handlers

  return {
    burner: async (_, args): Promise<any> => {
      const record: any = await readOne(args.id)
      const response = {
        cursor: '',
        node: (record || {}) as Burner,
      } as BurnerEdge
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
