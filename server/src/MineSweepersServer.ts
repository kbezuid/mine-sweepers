import express from "express";
import { createServer, Server } from "http";
import * as socketIo from "socket.io";
import { SocketEvent } from "./SocketEvents";

export class MineSweepersServer {
  public readonly port: string;

  private readonly _app: express.Application;
  private readonly _server: Server;
  private readonly _socket: socketIo.Server;

  constructor(port: string | number) {
    if (port === undefined) {
      throw Error("Port number required");
    }

    this.port = port as string;
    this._app = express();

    this._server = createServer(this._app);
    this._socket = new socketIo.Server(this._server);

    this._initSocket();
    this._listen();
  }

  get app(): express.Application {
    return this._app;
  }

  private _listen() {
    this._app.get("/", (_, res) => {
      res.send("MineSwppersServer is running");
    });

    this._app.listen(this.port, () => {
      console.log(`MineSweeperServer running on port : ${this.port}`);
    });
  }

  private _initSocket() {
    this._socket.on(SocketEvent.CONNECT, () => {
      console.log("Client connected");
    });
  }
}
