import express from 'express'
import formSchema from '../models/inscription'

const router = express.Router()

router.get('/form', (req, res) => {
  res.render('form')
})

router.post('/inscrit', (req, res) => {
  const newForm = new formSchema(req.body)
  console.log(req.body);
  
  newForm.save((err, formSave) => {
    if (err) res.send(err)
    res.send(formSave)
    console.log('okay!');
    
  })
})


export default router
