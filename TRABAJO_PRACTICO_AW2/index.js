import express from 'express'
import userRouter from './routes/user.routes.js';
import prodRouter from './routes/prod.routes.js';
import saleRouter from './routes/sales.routes.js';
const app = express()
 
const port = 3000

app.use(express.json());

app.listen(port, ()=> {
    console.log(`servidor levantado en puerto ${port}`)
})

app.use('/user', userRouter);
app.use('/prod', prodRouter);
app.use('/sales', saleRouter);
