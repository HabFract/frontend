import { DNAIdMappings } from '../types'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  return {
    __resolveType: (obj, ctx, info) => obj.__typename
  }
}