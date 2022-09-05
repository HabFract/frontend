import { HAPP_ID } from '@/app/constants'
/**
 * GraphQL schema interface
 *
 * A GraphQL schema (suitable for use with `apollo-link-schema`) which defines
 * bindings between to the Holochain backend.
 *
 */
import {
  mapZomeFn,
  autoConnect,
  openConnection,
  sniffHolochainAppCells,
  BoundZomeFn,
} from './connection.js'
import generateResolvers from './resolvers'
import typeDefs from './schema/schema.graphql'
import {
  APIOptions,
  ResolverOptions,
  DNAIdMappings,
  CellId,
  ById,
} from './types.js'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { Record } from '@holochain/client'

export interface QueryHandlersDictionary<T> {
  readOne: BoundZomeFn<ById, Promise<Record>>
  readMany: BoundZomeFn<null, Promise<Record[]>>
}

function getQueryHandlers<T>(
  zomeFunctionNames: Array<string>,
  zomeName: string,
  dnaConfig: DNAIdMappings,
  conductorUri: string,
): QueryHandlersDictionary<T> {
  const handlers = {} as QueryHandlersDictionary<T>
  zomeFunctionNames.forEach((zomeFunctionName, i) => {
    switch (i) {
      case 0:
        // readOne
        handlers['readOne'] = mapZomeFn<ById, Record>(
          dnaConfig,
          conductorUri,
          HAPP_ID,
          zomeName,
          zomeFunctionName,
        )
        break
      case 1:
        //readMany
        handlers['readMany'] = mapZomeFn<null, Record[]>(
          dnaConfig,
          conductorUri,
          HAPP_ID,
          zomeName,
          zomeFunctionName,
        )
        break
    }
  })
  return handlers
}

export {
  // direct access to resolver callbacks generator for apps that need to bind to other GraphQL schemas
  generateResolvers,
  // connection handling methods
  autoConnect,
  openConnection,
  sniffHolochainAppCells,
  // direct access to Holochain zome method bindings for authoring own custom resolvers bound to non-REA DNAs
  mapZomeFn,
  getQueryHandlers,
}
export type {
  // types that wrapper libraries may need to manage conductor DNA connection logic
  DNAIdMappings,
  CellId,
  APIOptions,
}

/**
 * A schema generator ready to be plugged in to a GraphQL client
 *
 * Required options: conductorUri, dnaConfig
 *
 * @return GraphQLSchema
 */
export default async (options: APIOptions) => {
  const coreResolvers = await generateResolvers(options as ResolverOptions)
  const resolvers = {
    ...coreResolvers,
    Query: {
      ...(coreResolvers.Query || {}),
    },
    Mutation: {
      ...(coreResolvers.Mutation || {}),
    },
  }

  return makeExecutableSchema({
    typeDefs,
    resolvers,
  })
}
