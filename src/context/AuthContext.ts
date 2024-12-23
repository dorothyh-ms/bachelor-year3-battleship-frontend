import { createContext } from 'react'
import User from '../models/User'

export interface ISecurityContext {
    isAuthenticated: () => boolean
    user: User | undefined
    login: () => void
    logout: () => void
}

export default createContext<ISecurityContext>({
    isAuthenticated: () => false,
    user: undefined,
    login: () => {},
    logout: () => {},
})
