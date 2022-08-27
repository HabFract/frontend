import { mapZomeFn } from '../../connection'
import { DNAIdMappings } from '../../types'
import { HAPP_ID, HAPP_ZOME_NAME_ATOMIC } from '@/app/constants'
import { Burner, BurnerCreateUpdateParams } from '@/graphql/generated/index'

export type createArgs = { burner: BurnerCreateUpdateParams }
export type createHandler = (root: any, args: createArgs) => Promise<Burner>

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const runCreate = mapZomeFn<Omit<Burner, 'id'>, Burner>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_ATOMIC,
    'create_burner',
  )

  const createBurner: createHandler = async (
    _,
    { burner: { name, ...metadata } },
  ) => {
    return runCreate({ name, metadata })
  }

  return {
    createBurner,
  }
}
