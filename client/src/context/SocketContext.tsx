import { Socket } from "dgram";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import { ISocketContext, IUser } from "../constants";
import io from "socket.io-client";

const Context = React.createContext<ISocketContext>({
  login: (username: string, password: string) => null,
});

export const SocketContext = (props: { children: ReactElement }) => {
  /* const ENDPOINT = "localhost:5000";
  let socket: SocketIOClient.Socket;
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on("loginReturn", (result: IUser) => {

    });
  }, [ENDPOINT]);

  const login = (username: string, password: string):Promise<IUser => {
    socket.emit("login", { username, password });
  };
*/
  return <Context.Provider value={{ login: () => null }} {...props} />;
};
export const useSocketContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("Error using SocketContext");
  }
  return context;
};
