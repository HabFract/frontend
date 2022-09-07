import { serializeHash } from '@holochain-open-dev/utils'
import { DNAIdMappings } from '../../types'
import { HAPP_ID, HAPP_ZOME_NAME_ATOMIC } from '@/app/constants'
import {
  Burner,
  BurnerCreateParams,
  BurnerUpdateParams,
} from '@/graphql/generated/index'
import { decode } from '@msgpack/msgpack'
import {
  getMutationHandlers,
  mapZomeFn,
  MutationHandlersDictionary,
} from '../..'

export type createArgs = { burner: BurnerCreateParams }
export type updateArgs = { burner: BurnerUpdateParams }
export type deleteArgs = { burner: string }
export type createHandler = (root: any, args: createArgs) => Promise<Burner>
export type updateHandler = (root: any, args: updateArgs) => Promise<Burner>
export type deleteHandler = (root: any, args: deleteArgs) => Promise<any>

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const handlers: MutationHandlersDictionary<Burner> = getMutationHandlers(
    ['create_burner', 'update_burner', 'delete_my_burner'],
    HAPP_ZOME_NAME_ATOMIC,
    dnaConfig,
    conductorUri,
  )
  const { createOne, updateOne, deleteOne } = handlers

  const createBurner: createHandler = async (
    _,
    { burner: { name, description, hashtag } },
  ) => {
    const record: any = await createOne({
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
    const record: any = await updateOne({
      originalActionHash: id,
      updatedBurner: { name, metadata: { description, hashtag } },
    })

    // console.log('burner update record :>> ', record)
    const newActionHash = record && (record as any).signed_action.hashed.hash
    const previousActionHash =
      record &&
      (record as any).signed_action.hashed.content.original_action_address
    const element = decode((record.entry as any).Present.entry) as Burner

    const response = {
      node: {
        id: previousActionHash,
        name: element.name,
        metadata: {
          ...element.metadata,
        },
      },
      newActionHash,
    }
    return Promise.resolve(response as any)
  }

  const deleteBurner = async (_, { id }) => {
    const hash: any = await deleteOne(id)

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
