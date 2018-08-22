import mongoose from 'mongoose'

const Schema = mongoose.Schema

const formSchema = new Schema({
  email: String,
  password: String,
  adress: String,
  adress2: String,
  city: String,
  state: String,
  zip: Number,
  checkbox: Boolean,
})

const formSchema = mongoose.model("formSchema", formSchema)

export default formSchema