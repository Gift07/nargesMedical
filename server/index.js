import express from 'express'
import cors from 'cors'
import bodyParser  from 'body-parser'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import userRoutes from './routes/user.js'


dotenv.config();

const app = express()

app.use(bodyParser.json({limit: '30mb', extended:true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended:true}))
app.use(cors())

app.use('/api/user', userRoutes)


app.get('/', (req,res) =>{
   res.send('Medical awards api backend')
})


const PORT = process.env.PORT || 5000


mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
   .then(() =>{ app.listen(PORT, () => console.log(`server running on port ${PORT}`))})
   .catch((error) => console.log(error.message))

