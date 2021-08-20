const express = require("express");
const app = express();
const router = express.Router()
const port = 2000 || process.env.PORT
const { router: IndexRouter } = require("./router/index")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.json({ message: "Hello World" });
})

app.use('/api', IndexRouter);
app.use(router);

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});