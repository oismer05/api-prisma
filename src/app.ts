import express from 'express' 
import cors from 'cors'
import morgan from 'morgan'

import routeTarea from './routes/TareaRoutes';
import routeAuth from './routes/AuthRoutes';
import routeRoles from './routes/RolRoutes';

import dotenv from 'dotenv'

dotenv.config()
const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors()) 

app.use('/api',routeTarea)
app.use('/api',routeAuth)
app.use('/api',routeRoles)
export default app;