import { DNAIdMappings } from '../../types'
import {
  AgentProfile,
  Profile,
  UserProfileCreateParams,
} from '@/graphql/generated/index'

import { mapZomeFn } from '../../connection'
import { HAPP_ID, HAPP_ZOME_NAME_PROFILES } from '@/app/constants'

export type createArgs = { profile: UserProfileCreateParams }
export type createHandler = (
  root: any,
  args: createArgs,
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

  const createUser: createHandler = async (
    _,
    { profile: { nickname, location, avatar, isPublic } },
  ) => {
    console.log(
      'nickname, loacation, avatar, isPublic :>> ',
      nickname,
      location,
      avatar,
      isPublic,
    )
    return runCreate({ nickname, fields: { location, avatar } })
  }

  return {
    createUser,
  }
}
