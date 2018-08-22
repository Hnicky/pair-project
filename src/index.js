import express from 'express'
import router from './routes/form'
import volleyball from 'volleyball'

const app = express()
const PORT = 9876;
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.use(volleyball)

app.get("/", (req, res) => {
  res.send("On est là !!!!!")
})

app.use("/inscription", router)

app.listen(PORT, ()=> {
  console.log(`Connected on port: ${PORT}`);
})
