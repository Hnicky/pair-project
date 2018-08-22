import express from 'express'

const app = express()
const PORT = 9876;

app.get("/", (req, res)=>{
  res.send("On est là !!!!!")
})
app.listen(PORT, ()=> {
  console.log(`Connected on port: ${PORT}`);
})
