import { Burner } from '@/graphql/generated'
import { useState, useMemo, createContext } from 'react'

export const BurnerContext = createContext(null)

export const CurrentBurnerProvider = (props) => {
  const [burner, setBurner] = useState<Omit<Burner, '__typename'>>(props?.value)
  const value = useMemo(() => [burner, setBurner], [burner])

  return <BurnerContext.Provider {...props} value={value} />
}
