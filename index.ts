import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const corsConfig = {
  origin: true,
  credentials: true,
}

app.use(cors(corsConfig))
app.options('*', cors(corsConfig))

app.get('/', (req, res) => res.send('PONG'))

app.listen(process.env.PORT, () => console.log(`Server started on ${process.env.PORT}`))
