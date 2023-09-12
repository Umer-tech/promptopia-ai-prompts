import React from 'react'
import { SessionProvider } from 'next-auth/react';

const Provider = ({children, session}) => {
  return (
    <SessionProvider sessio={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider
