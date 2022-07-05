import { ResolverOptions } from '../types.js'
import { DateTimeResolver as DateTime } from 'graphql-scalars'

import { openConnection } from '../connection.js'

import Query from '../queries'
import Mutation from '../mutations'

export default async (options: ResolverOptions) => {
  const { conductorUri, dnaConfig, traceAppSignals = undefined } = options

  // prefetch connection for this API schema
  await openConnection(conductorUri, traceAppSignals)
  return {
    // scalars
    DateTime,

    // root schemas
    Query: Query(dnaConfig, conductorUri),
    Mutation: Mutation(dnaConfig, conductorUri),
  }
}
