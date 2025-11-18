import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

export const ContextContentLoaded = createContext<
    | [
          {
              posts: boolean
              quote: boolean
              users: boolean
          },
          Dispatch<
              SetStateAction<{
                  posts: boolean
                  quote: boolean
                  users: boolean
              }>
          >
      ]
    | undefined
>(undefined)
