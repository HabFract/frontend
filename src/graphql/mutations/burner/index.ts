import { mapZomeFn } from '../../connection'
import { DNAIdMappings } from '../../types'
import { HAPP_ID, HAPP_ZOME_NAME_ATOMIC } from '@/app/constants'
import {
  Burner,
  BurnerCreateParams,
  BurnerUpdateParams,
} from '@/graphql/generated/index'

export type createArgs = { burner: BurnerCreateParams }
export type updateArgs = { burner: BurnerUpdateParams }
export type createHandler = (root: any, args: createArgs) => Promise<Burner>
export type updateHandler = (root: any, args: updateArgs) => Promise<Burner>

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const runCreate = mapZomeFn<Omit<Burner, 'id'>, Burner>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_ATOMIC,
    'create_burner',
  )
  const runUpdate = mapZomeFn<Burner, Burner>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_ATOMIC,
    'update_burner',
  )

  const createBurner: createHandler = async (
    _,
    { burner: { name, description, hashtag } },
  ) => {
    console.log('created burner :>> ', name)
    return runCreate({ name, metadata: { description, hashtag } })
  }

  const updateBurner: updateHandler = async (
    _,
    { burner: { id, name, description, hashtag } },
  ) => {
    console.log('update burner to nickname :>> ', description)
    return runUpdate({ id, name, metadata: { description, hashtag } })
  }

  return {
    createBurner,
    updateBurner,
  }
}
