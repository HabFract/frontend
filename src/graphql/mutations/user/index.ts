import { DNAIdMappings } from '../../types'
import { Profile, UserProfileCreateParams } from '@/graphql/generated/index'

import { mapZomeFn } from '../../connection'
import { HAPP_ID, HAPP_ZOME_NAME_PROFILES } from '@/app/constants'

export type createArgs = { profile: UserProfileCreateParams }
export type createHandler = (root: any, args: createArgs) => Promise<Profile>

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const runCreate = mapZomeFn<Omit<Profile, 'agent_pub_key'>, Profile>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_PROFILES,
    'create_profile',
  )

  const createUser: createHandler = async (
    _,
    { profile: { nickname, location } },
  ) => {
    console.log('nickname, location :>> ', nickname, location)
    return runCreate({ nickname, fields: { location } })
  }

  return {
    createUser,
  }
}
