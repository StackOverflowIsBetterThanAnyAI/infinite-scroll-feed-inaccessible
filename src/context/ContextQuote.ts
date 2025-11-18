import type { RefObject } from 'react'
import { createContext } from 'react'

export const ContextQuote = createContext<
    RefObject<HTMLQuoteElement | null> | undefined
>(undefined)
