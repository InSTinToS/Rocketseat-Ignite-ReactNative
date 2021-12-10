import React, { createContext, ReactNode, useContext, useState } from 'react'

import api from 'src/services/api'

interface User {
  id: string
  name: string
  email: string
  avatar: string
  driver_license: string
}

interface SignInParams {
  email: string
  password: string
}

type SignIn = (credentials: SignInParams) => Promise<void>

interface AuthState {
  user?: User
  token: string
}

interface AuthContext {
  user?: User
  signIn: SignIn
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContext>(undefined)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>()

  const signIn: SignIn = async credentials => {
    const res = await api.post('/sessions/', credentials)
    const { user, token } = res.data

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    setData({ token, user })
  }

  return (
    <AuthContext.Provider value={{ user: data?.user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContext => {
  const context = useContext(AuthContext)

  return context
}

export { useAuth, AuthProvider }
