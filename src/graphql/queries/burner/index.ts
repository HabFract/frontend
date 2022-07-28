import { DNAIdMappings, ById } from '../../types'
import { Burner } from '@/graphql/generated/index'

import { mapZomeFn } from '../../connection'
import { HAPP_ID, HAPP_ZOME_NAME_ATOMIC } from '@/app/constants'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  // const read = mapZomeFn<ById, Burner>(
  //   dnaConfig,
  //   conductorUri,
  //   HAPP_ID,
  //   HAPP_ZOME_NAME_ATOMIC,
  //   'get_Burner',
  // )
  const readAll = mapZomeFn<null, Burner[]>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_ATOMIC,
    'get_all_burners',
  )

  return {
    // Burner: async (_, args): Promise<Burner> => {
    //   return read(args.id)
    // },

    burners: async (): Promise<Burner[]> => {
      const maybeBurners = await readAll(null)

      console.log('maybeBurners :>> ', maybeBurners)
      return Promise.resolve(maybeBurners || [])
    },
  }
}
