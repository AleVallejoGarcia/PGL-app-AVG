import React from 'react'
import { userContext, userContextType } from '../contexts/UserContext'

type userProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const UserProvider = (props: userProviderProps) => {

  const { children } = props;
  
  const [isLogged, setIsLogged] = React.useState(false)
  const [user, setUser] = React.useState("")

  const setUserName = (userName: string) => setUser(userName)
  const toggleIsLogged = () => setIsLogged(true);
  const toggleLogOut = () => setIsLogged(false);

  const defaultValue: userContextType = {
    isLogged,
    user,
    toggleIsLogged,
    toggleLogOut,
    setUserName
  }

  return (
    <userContext.Provider value={defaultValue}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider;