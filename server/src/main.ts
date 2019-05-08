import * as express from 'express'

const app = express()
app.use(express.json());
app.get('/', (req, res) => {
    res.send('this is a test')
})

app.use((req, res) => {
    console.log(req.body)
})

const server = app.listen(8000, "localhost", () => {
    console.log("服务器已启动, 地址是：http://localhost:8000")
});