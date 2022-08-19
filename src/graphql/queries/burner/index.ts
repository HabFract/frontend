import { mapZomeFn } from '../../connection'
import { DNAIdMappings, ById } from '../../types'
import { HAPP_ID, HAPP_ZOME_NAME_ATOMIC } from '@/app/constants'
import { BurnerConnection } from '@/graphql/generated/index'
import { aBurnerConnection } from '@/graphql/generated/mocks'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  // const read = mapZomeFn<ById, Burner>(
  //   dnaConfig,
  //   conductorUri,
  //   HAPP_ID,
  //   HAPP_ZOME_NAME_ATOMIC,
  //   'get_Burner',
  // )
  const readAll = mapZomeFn<null, BurnerConnection>(
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

    burners: async (): Promise<BurnerConnection> => {
      // const maybeBurners = await readAll(null)

      // console.log('maybeBurners :>> ', maybeBurners)

      let tester = aBurnerConnection()
      console.log('tester :>> ', tester)
      return Promise.resolve(tester) // (maybeBurners || [])
    },
  }
}
