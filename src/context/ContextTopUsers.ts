import type { RefObject } from 'react'
import { createContext } from 'react'

export const ContextTopUsers = createContext<
    RefObject<HTMLDivElement | null> | undefined
>(undefined)
