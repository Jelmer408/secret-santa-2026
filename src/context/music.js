import { createContext, useContext } from 'react'

export const MusicContext = createContext({ playing: false, supported: false, toggle: () => {} })

export const useMusic = () => useContext(MusicContext)
