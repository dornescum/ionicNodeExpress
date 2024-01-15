import express from "express";
import indexRouter from "./routes/index";
import {config} from "dotenv";
config();
import cors from "cors";

const app = express();


const PORT = parseInt(process.env.PORT as string, 10) || 3003;

app.use(cors())
app.use("/", indexRouter);


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running and listening on all interfaces at http://localhost:${PORT}`);
});