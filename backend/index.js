const express= require("express");
const rootRouter= require("./routes/index");

const app= express();
app.use(express.json());


app.use("/airbnb", rootRouter);

app.listen(3000);