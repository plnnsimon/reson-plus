import mongoose from 'mongoose'

const contentSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  description: String,
})

const Content =
  mongoose.models.Content || mongoose.model('Content', contentSchema)
export default Content
