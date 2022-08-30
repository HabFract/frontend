import { BurnerContext } from '@/contexts/burnerContext'
import React, { useContext } from 'react'

export const useCurrentBurner = () => {
  const context = useContext(BurnerContext)
  if (!context) {
    throw new Error(`useBurner must be used within a BurnerProvider`)
  }
  return context as any
}
