import express from "express";
import userRoutes from "./routes/user.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes); 

app.listen(8800, () => {
    console.log("Servidor rodando na porta 8800 🚀");
  });
