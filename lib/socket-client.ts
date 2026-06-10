import EventEmitter from "events";
import io, { Socket } from "socket.io-client";

type SocketIoClientConfig = {
  url: string;
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
      autoConnect: false
    });

    this.socket.on("connect", () => {
      console.log("WebSocket connection established");
      this.socket?.emit("join", "Hello from client!");
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
      this.emit("disconnect", "WebSocket disconnected");
      this.socket.close();
    }
  }
}


    // this.socket.on("message", (event) => {
    //   if(this.socket?.connected) {
    //   console.log("Received message:", event);
    //     this.emit("message", event);
    //   } else {
    //     console.warn("Received message but WebSocket is not connected");
    //   }
    // });

    // this.socket.on("disconnect", () => {
    //   console.log("WebSocket connection closed");
    //   this.emit("disconnect", "WebSocket disconnected");
    // });