import { HAPP_ID } from '@/app/constants'
import { BoundZomeFn, mapZomeFn } from './connection'
import { DeleteResponse } from './generated'
import { ById, DNAIdMappings, AddressableIdentifier } from './types'
import { Record } from '@holochain/client'

export interface QueryHandlersDictionary {
  readOne: BoundZomeFn<ById, Promise<Record>>
  readMany: BoundZomeFn<null, Promise<Record[]>>
}

function getQueryHandlers<T>(
  zomeFunctionNames: Array<string>,
  zomeName: string,
  dnaConfig: DNAIdMappings,
  conductorUri: string,
): QueryHandlersDictionary {
  const handlers = {} as QueryHandlersDictionary
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

export type UpdateParams<T> = {
  originalActionHash: AddressableIdentifier
  updated: Omit<T, 'id'>
}
export interface MutationHandlersDictionary<T> {
  createOne: BoundZomeFn<Omit<T, 'id'>, Promise<Record>>
  updateOne: BoundZomeFn<UpdateParams<T>, Promise<Record>>
  deleteOne: BoundZomeFn<AddressableIdentifier, Promise<DeleteResponse>>
}

function getMutationHandlers<T>(
  zomeFunctionNames: Array<string>,
  zomeName: string,
  dnaConfig: DNAIdMappings,
  conductorUri: string,
): MutationHandlersDictionary<T> {
  const handlers = {} as MutationHandlersDictionary<T>
  zomeFunctionNames.forEach((zomeFunctionName, i) => {
    switch (i) {
      case 0:
        // createOne
        handlers['createOne'] = mapZomeFn<Omit<T, 'id'>, Record>(
          dnaConfig,
          conductorUri,
          HAPP_ID,
          zomeName,
          zomeFunctionName,
        )
        break
      case 1:
        //updateOne
        handlers['updateOne'] = mapZomeFn<any, Record>(
          dnaConfig,
          conductorUri,
          HAPP_ID,
          zomeName,
          zomeFunctionName,
        )
        break
      case 2:
        //deleteOne
        handlers['deleteOne'] = mapZomeFn<
          AddressableIdentifier,
          DeleteResponse
        >(dnaConfig, conductorUri, HAPP_ID, zomeName, zomeFunctionName)
        break
    }
  })
  return handlers
}

export { getQueryHandlers, getMutationHandlers }
