import express, { Application, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
const options: CorsOptions = { origin: "*" };
const app: Application = express();
const port: number = 3001;

app.use(cors(options));

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Testing the FCM Endpoint on Typescript</h1>");
});

app.listen(port, () => {
  console.log("Application listening on port" + port);
});
