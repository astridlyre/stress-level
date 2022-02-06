import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction, LinksFunction } from 'remix'
import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'
import stylesUrl from './styles/index.css'
import { useEffect, useState } from 'react'
import { SocketProvider } from './context'

export const meta: MetaFunction = () => {
  return { title: 'Kippum Stress-o-Meter' }
}

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: stylesUrl,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/site.webmanifest' },
]

export default function App() {
  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const newSocket = io()
    setSocket(newSocket)
    return () => {
      newSocket.close()
    }
  }, [])

  useEffect(() => {
    if (!socket) return
    socket.on('confirmation', (data) => {
      console.log(data)
    })
  }, [socket])

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <SocketProvider socket={socket}>
          <Outlet />
        </SocketProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
