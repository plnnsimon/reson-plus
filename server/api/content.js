import connectMongo from '../utils/mongoose'
import ContentModel from '../models/Content'

export default defineEventHandler(async (event) => {
  await connectMongo()

  if (event.node.req.method === 'GET') {
    const content = await ContentModel.find()
    return content
  }

  if (event.node.req.method === 'POST') {
    const body = await readBody(event)
    const newContent = new ContentModel(body)
    await newContent.save()
    return { message: 'Content added successfully' }
  }
})
