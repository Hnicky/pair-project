import express from 'express'
import router from './routes/form'
import volleyball from 'volleyball'

const app = express()
const PORT = 9876;

app.get("/", (req, res) => {
  res.send("On est là !!!!!")
})

app.use("/inscription", router)
app.use(volleyball)

app.listen(PORT, ()=> {
  console.log(`Connected on port: ${PORT}`);
})
