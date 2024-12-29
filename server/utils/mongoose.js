import mongoose from 'mongoose'

export default async function connectMongo() {
  const config = useRuntimeConfig()

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise()
  }

  return mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
  })
}
