import express, { Application, Request, Response } from "express"
import cors from "cors"
import author from "./router/authorRouter"
import article from "./router/articleRouter"
import rating from "./router/ratingRouter"
import friend from "./router/friendRouter"
import category from "./router/categoryRouter"


export const mainApp = (app:Application) => {
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
try {
    res.status(200).json({
        message: "Home Page!!!"
    });
} catch (error) {
    res.status(404).json({
        message: "Home Page Error",
    });
}
});

app.use("/api/v1", author);
app.use("/api/v1", article);
app.use("/api/v1", rating);
app.use("/api/v1", friend);
app.use("/api/v1", category);

}