import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './router.js'
import fileUpload from 'express-fileupload'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger.js'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/api', router)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected')
        app.listen(PORT, () => console.log(`server started on: ${PORT}`))
    })
    .catch(err => console.log(err))
