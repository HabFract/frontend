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
    // Burner: async (_, args): Promise<Burner> => {
    //   return read(args.id)
    // },

    burners: async (): Promise<any> => {
      const maybeBurners = await readMany(null)
      const burners = (maybeBurners || []) as Record[]
      console.log('get all burners :>> ', burners)

      const response = {
        burners: {
          edges: burners.map((b) => ({ node: b })),
        },
      }
      console.log('response :>> ', response)

      return Promise.resolve(response)
    },
  }
}
