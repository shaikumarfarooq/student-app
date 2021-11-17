import express from "express";
import registerAPI from "./src/api.js";
import cors from "cors";

export const app = express();

app.use(cors())


app.listen("5000", () => {
    console.log(`Student app listening at http://localhost:${5000}`)
});

registerAPI();
