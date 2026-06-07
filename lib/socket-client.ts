import EventEmitter from "events";
import io, { Socket } from "socket.io-client";

type SocketIoClientConfig = {
  url: string;
  token: string;
};

export default class SocketIoClient extends EventEmitter {
    private socket: Socket | null;
  private config: SocketIoClientConfig;

  constructor(config: SocketIoClientConfig) {
    super();
    this.config = config;
     this.socket = null;
    this.connect();
  }

  private connect() {
    this.socket = io(this.config.url, {
      auth: {
        token: this.config.token,
      },
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });


    this.socket.on("connect", () => {
      console.log("WebSocket connection established");
      // Optionally, send the token for authentication
      if (this.config.token) {
        this.socket?.emit("auth", { token: this.config.token });
      }
    });

    this.socket.on("message", (event) => {
      console.log("Received message:", event);
        this.emit("message", event);
    });

    this.socket.on("disconnect", () => {
      console.log("WebSocket connection closed");
      this.emit("disconnect");
    });

    this.socket.on("error", (error) => {
        console.error("WebSocket error:", error);
        this.emit("error", error);
    });
  }

  public sendMessage(message: string) {
    if (this.socket && this.socket.connected) {
      this.socket.emit("message", message);
    } else {
      console.error("WebSocket is not connected. Unable to send message.");
    }
  }

  public isConnected(): boolean {
    return this.socket?.connected || false;
  }

  public disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }
}