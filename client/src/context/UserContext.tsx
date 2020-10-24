import React, { ReactElement, useContext, useState } from "react";
import { IUser, IUserContext } from "../constants";
const Context = React.createContext<IUserContext>({
  user: null,
  login: (userInp:IUser) => {},
  logout: () => {},
});

export const UserContext = (props: { children: ReactElement }) => {
  const [contextUser, setContextUser] = useState<IUserContext>({
    user: null,
    login: (userInp:IUser) => {},
    logout: () => {}
  });

   
  return <Context.Provider value={contextUser} {...props} />;
};
export const useUserContext = (): IUserContext => {
  const context = useContext<IUserContext>(Context);
  if (context === undefined) {
    throw new Error("Error using UserContext");
  }
  return context;
};
