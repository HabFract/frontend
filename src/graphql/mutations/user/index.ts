import { mapZomeFn } from '../../connection'
import { DNAIdMappings } from '../../types'
import { decode } from '@msgpack/msgpack'
import { HAPP_ID, HAPP_ZOME_NAME_PROFILES } from '@/app/constants'
import {
  AgentProfile,
  Profile,
  UserProfileCreateUpdateParams,
} from '@/graphql/generated/index'

export type createArgs = { profile: UserProfileCreateUpdateParams }
export type updateArgs = { profile: UserProfileCreateUpdateParams }
export type createHandler = (
  root: any,
  args: createArgs,
) => Promise<AgentProfile>
export type updateHandler = (
  root: any,
  args: updateArgs,
) => Promise<AgentProfile>

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const runCreate = mapZomeFn<Profile, AgentProfile>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_PROFILES,
    'create_profile',
    false,
  )
  const runUpdate = mapZomeFn<Profile, AgentProfile>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_PROFILES,
    'update_profile',
    false,
  )

  const createProfile: createHandler = async (
    _,
    { profile: { nickname, location, avatar, isPublic } },
  ) => {
    const res = await runCreate({ nickname, fields: { location, avatar } })

    const agentPubKey = decode((res as any).signed_action.hashed.content.author)

    console.log('created profile', agentPubKey)
    return res
  }
  const updateProfile: updateHandler = async (
    _,
    { profile: { nickname, location, avatar, isPublic } },
  ) => {
    console.log('update profile to nickname :>> ', nickname)
    return runUpdate({ nickname, fields: { location, avatar } })
  }

  return {
    createProfile,
    updateProfile,
  }
}
