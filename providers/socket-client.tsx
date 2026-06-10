'use client';

import React, { createContext, useRef, useState } from "react";
import SocketIoClient from "../lib/socket-client";

interface SocketIoContextValue {
  socketClient: SocketIoClient | null;
  connected: boolean;
}
export const socketIoContext = createContext<SocketIoContextValue>({
  socketClient: null,
  connected: false,
});


export function ProvideSocketIoClient({ children }: { children: React.ReactNode}) {
  const socketIo = useProvideSocketIoClient();
  
  return (
    <socketIoContext.Provider
      value={{
        socketClient: socketIo?.client || null,
        connected: socketIo?.connected || false,
      }}
    >
      {children}
    </socketIoContext.Provider>
  );
}

function useProvideSocketIoClient() {
  const clientRef = useRef<SocketIoClient | null>(null);
  const [connected, setConnected] = useState<boolean>(false);

  if (typeof window === "undefined") return;

  const url = process.env.NEXT_PUBLIC_BASE_URL || "";

  const config = {
    url: url,
    token: "",
  };

  if (!clientRef.current) {
    clientRef.current = new SocketIoClient(config);
    clientRef.current.on("connect", () => {
      setConnected(true);
      console.log("Socket.io client connected");
    });
    clientRef.current.on("disconnect", () => {
      setConnected(false);
      console.log("Socket.io client disconnected");
    });
  }
  return { client: clientRef.current, connected };
}