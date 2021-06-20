import express from "express";

export class MineSweepersServer {
    public readonly port: string;

    private readonly _app: express.Application;

    constructor(port: string | number) {

        if (port === undefined ) {
            throw Error("Port number required");
        }

        this.port = port as string;
        this._app = express();

        this._listen();
    }

    get app(): express.Application {
        return this._app;
    }

    private _listen() {
        this._app.get('/', (_, res) => {
            res.send('MineSwppersServer is running');
        });

        this._app.listen(this.port, () => {
            console.log(`MineSweeperServer running on port : ${this.port}`);
        });
    }
}