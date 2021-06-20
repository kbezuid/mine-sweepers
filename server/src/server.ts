import { MineSweepersServer } from "./MineSweepersServer";

const port = process.env.PORT || 3000;
const server = new MineSweepersServer(port).app;

export { server };
