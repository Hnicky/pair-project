import express from 'express'
import router from './routes/form'
import volleyball from 'volleyball'
import mongoose from 'mongoose'
import cors from 'cors'
// mongoose config
mongoose.connect('mongodb://localhost/form_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('On est la !!!')
});

const app = express()
const PORT = 9876;
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.use(volleyball)
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


app.get("/", (req, res) => {
  res.send("On est là !!!!!")
})

app.use("/inscription", router)

app.listen(PORT, ()=> {
  console.log(`Connected on port: ${PORT}`);
})
