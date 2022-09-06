import { serializeHash } from '@holochain-open-dev/utils'
import { mapZomeFn } from '../../connection'
import { ById, DNAIdMappings } from '../../types'
import { HAPP_ID, HAPP_ZOME_NAME_ATOMIC } from '@/app/constants'
import {
  Burner,
  BurnerCreateParams,
  BurnerUpdateParams,
} from '@/graphql/generated/index'
import { decode } from '@msgpack/msgpack'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const runCreate = mapZomeFn<Omit<Burner, 'id'>, Burner>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_ATOMIC,
    'create_burner',
  )
  const runUpdate = mapZomeFn<any, any>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_ATOMIC,
    'update_burner',
  )
  const runDelete = mapZomeFn<ById, any>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_ATOMIC,
    'delete_my_burner',
  )

  const createBurner = async (
    _,
    { burner: { name, description, hashtag } },
  ) => {
    const record: any = await runCreate({
      name,
      metadata: { description, hashtag },
    })

    const headerHash = record && (record as any).signed_action.hashed.hash
    const element = decode((record.entry as any).Present.entry) as Burner
    console.log('created burner :>> ', record, element)

    const response = {
      node: {
        id: headerHash,
      },
    }
    return Promise.resolve(response as any)
  }
  const updateBurner = async (
    _,
    { burner: { id, name, description, hashtag } },
  ) => {
    console.log('update burner :>> ', id)
    const record: any = await runUpdate({
      originalActionHash: id,
      updatedBurner: { name, metadata: { description, hashtag } },
    })
    console.log('burner update record :>> ', record)
    const headerHash = record && (record as any).signed_action.hashed.hash
    const element = decode((record.entry as any).Present.entry) as Burner

    const response = {
      node: {
        id: headerHash,
      },
    }
    return Promise.resolve(response as any)
  }
  const deleteBurner = async (_, { id }) => {
    const hash: any = await runDelete(id)

    const response = {
      deleteActionHash: serializeHash(hash),
    }
    console.log('delete response :>> ', response)
    return Promise.resolve(response as any)
  }

  return {
    createBurner,
    updateBurner,
    deleteBurner,
  }
}
