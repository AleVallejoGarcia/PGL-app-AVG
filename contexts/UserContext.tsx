import React from 'react'

type userContextType = {
  user: string;
  isLogged: boolean;
  setUserName: Function;
  toggleIsLogged: Function;
  toggleLogOut: Function
}

const userContext = React.createContext({} as userContextType)

export {userContext, userContextType};