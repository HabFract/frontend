import { APP_WS_PORT } from '@/app/constants'
import { InMemoryCache, ApolloClient } from '@apollo/client'
import { SchemaLink } from '@apollo/client/link/schema'

import bindSchema, { autoConnect, APIOptions, DNAIdMappings } from '.'

// Same as OpenConnectionOptions but for external client where dnaConfig may be autodetected
interface AutoConnectionOptions {
  dnaConfig?: DNAIdMappings,
}

export type ClientOptions = APIOptions & AutoConnectionOptions

export async function initGraphQLClient(options: APIOptions) {
  const schema = await bindSchema({conductorUri: `ws://localhost:${APP_WS_PORT}`} as APIOptions)

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema })
  });
}

async function connect(options: ClientOptions) {
    // autodetect `CellId`s if no explicit `dnaConfig` is provided
    if (!options.dnaConfig) {
      let { dnaConfig } = await autoConnect(options.conductorUri)
      options.dnaConfig = dnaConfig
    }
  
    return await initGraphQLClient(options)
  }
  
  export default connect;