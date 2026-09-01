import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("."));

app.listen(port, () => console.log(`Total Comfort Air: http://localhost:${port}`));