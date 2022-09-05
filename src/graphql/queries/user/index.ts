import { mapZomeFn } from '../../connection'
import { DNAIdMappings, ById } from '../../types'
import { HAPP_ID, HAPP_ZOME_NAME_PROFILES } from '@/app/constants'
import { AgentProfile, Profile } from '@/graphql/generated/index'
import { AgentPubKey, Record } from '@holochain/client'
import { decode } from '@msgpack/msgpack'
import { serializeHash } from '@holochain-open-dev/utils'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  const readMe = mapZomeFn<null, Record>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_PROFILES,
    'get_my_profile',
  )
  const read = mapZomeFn<ById, Record>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_PROFILES,
    'get_agent_profile',
  )
  const readAll = mapZomeFn<null, Record[]>(
    dnaConfig,
    conductorUri,
    HAPP_ID,
    HAPP_ZOME_NAME_PROFILES,
    'get_all_profiles',
  )

  return {
    me: async (_: any): Promise<AgentProfile> => {
      const record: any = await readMe(null)

      const agentHash =
        record &&
        serializeHash((record as any).signed_action.hashed.content.author)
      const element = decode((record.entry as any).Present.entry) as Profile

      const blankAgent: AgentProfile = {
        agentPubKey: '',
        profile: { nickname: '', fields: undefined },
      }
      const returnedProfile = element
        ? ({
            agentPubKey: agentHash,
            profile: element,
          } as AgentProfile)
        : blankAgent

      return Promise.resolve(returnedProfile)
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
