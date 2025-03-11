import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import AuthRouter from './routes/authRoute.js'
import connectionDatabase from './database.js'

const app = express()
const port = process.env.PORT || 4213


connectionDatabase(process.env.MongoDB_URI)

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(AuthRouter)


app.listen(port, console.log(`Server is started ${port}`))

