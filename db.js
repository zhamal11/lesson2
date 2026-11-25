import 'dotenv/config'
import mongoose from 'mongoose'

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('✅ MongoDB подключена')
  } catch (err) {
    console.error('❌ Ошибка подключения:', err.message)
    process.exit(1)
  }
}

export default connectDB