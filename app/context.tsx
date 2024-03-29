import type { ReactNode } from 'react'
import type { Socket } from 'socket.io-client'
import { createContext, useContext } from 'react'

type ProviderProps = {
  socket: Socket | undefined
  children: ReactNode
}

const context = createContext<Socket | undefined>(undefined)

export function useSocket() {
  return useContext(context)
}

export function SocketProvider({ socket, children }: ProviderProps) {
  return <context.Provider value={socket}>{children}</context.Provider>
}
