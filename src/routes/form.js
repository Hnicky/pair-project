import express from 'express'

const router = express.Router()

router.get('/form', (req, res) => {
  console.log("coucou");
})


export default router
