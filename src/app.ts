import express from 'express' 
import cors from 'cors'
import morgan from 'morgan'
import routeTarea from './routes/TareaRoutes';

const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors()) 

app.use('/api',routeTarea)

export default app;