import { DNAIdMappings } from '../types'
import Habit from './habit'
import User from './user'
import Burner from './burner'

export default (dnaConfig: DNAIdMappings, conductorUri: string) => {
  return {
    ...Burner(dnaConfig, conductorUri),
    ...Habit(dnaConfig, conductorUri),
    ...User(dnaConfig, conductorUri),
  }
}
