import { InMemoryCache, ApolloClient } from '@apollo/client'
import { SchemaLink } from '@apollo/client/link/schema'
import bindSchema, { autoConnect, APIOptions, DNAIdMappings } from '.'

// Same as OpenConnectionOptions but for external client where dnaConfig may be autodetected
interface AutoConnectionOptions {
  dnaConfig?: DNAIdMappings,
}

export type ClientOptions = APIOptions & AutoConnectionOptions

export async function initGraphQLClient(options: APIOptions) {

  let { dnaConfig, conductorUri } = await autoConnect();
  // const dnaConfig = {
  //   'habit_tracking': [new Uint8Array(Buffer.from('uhC0kokzPqryK7YbLP4V7xwDzvlBIes5HK6B7bOvHZnkdLigQf1PW')) as HoloHash,new Uint8Array(Buffer.from('uhCAkybfzxlEvEIf4WztnwTB5Ce0OeAwbXA0v22qXMnIiVKaPrDhG')) as AgentPubKey] as CellId
  // }
  const schema = await bindSchema({dnaConfig, conductorUri})//{conductorUri: `ws://localhost:${APP_WS_PORT}`} as APIOptions)

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