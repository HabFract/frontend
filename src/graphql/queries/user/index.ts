import { DNAIdMappings, ById } from '../../types'
import { AgentProfile } from '@/graphql/generated/index'

import { mapZomeFn } from '../../connection'
import { HAPP_ID, HAPP_ZOME_NAME_PROFILES } from '@/app/constants'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const readMe = mapZomeFn<null, AgentProfile>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_PROFILES,
    'get_my_profile',
  )
  const read = mapZomeFn<ById, AgentProfile>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_PROFILES,
    'get_agent_profile',
  )
  const readAll = mapZomeFn<null, AgentProfile[]>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_PROFILES,
    'get_all_profiles',
  )

  return {
    me: async (_: any): Promise<AgentProfile> => {
      return readMe(null)
    },

    // user: async (_, args): Promise<Habit> => {
    //   console.log('args :>> ', args)
    //   return read(args.id)
    // },

    // users: async (): Promise<Habit[]> => {
    //   return readAll(null)
    // },
  }
}
