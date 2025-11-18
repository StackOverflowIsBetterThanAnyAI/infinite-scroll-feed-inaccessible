import type { RefObject } from 'react'
import { createContext } from 'react'

export const ContextTopTenPosts = createContext<
    RefObject<HTMLDivElement | null> | undefined
>(undefined)
