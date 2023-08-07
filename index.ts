import express, { Application } from "express"
import { mainApp } from "./mainApp";
import env from "dotenv"
import { Db } from "./config/Db";
env.config();


const port: number = parseInt(process.env.PORT!);

const app: Application = express();

mainApp(app)

const server = app.listen(process.env.PORT|| port,() => {
    console.log("")
    // console.log("Server is up and running", port)
Db();
})

process.on("uncaughtException", (error: Error) => {
console.log("Server is shutting down due to uncaughtException")
console.log("Error", error)
process.exit(1)
})

process.on("unhandledRejection", (reason: any) => {
console.log("Server is shutting down due to unhandledRejection")
console.log("Error", reason)

server.close(() => {
    process.exit(1)
})
})