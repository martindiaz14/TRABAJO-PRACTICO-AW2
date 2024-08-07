import express from 'express'
import userRouter from './routes/user.routes.js';
import prodRouter from './routes/prod.routes.js';
import saleRouter from './routes/sales.routes.js'
import 'dotenv/config'
const app = express()
const port = process.env.PORT

app.use(express.json());

app.listen(port, ()=> {
    console.log(`servidor levantado en puerto ${port}`)
})

app.use(express.static('./public'))

app.use('/user', userRouter)
app.use('/prod', prodRouter)
app.use('/sales', saleRouter)
