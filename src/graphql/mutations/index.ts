import { DNAIdMappings } from '../types'
import Habit from './habit'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  return {
    ...Habit(dnaConfig, conductorUri),
  }
}