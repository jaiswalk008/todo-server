import userRoutes from './UserRoutes';
import todoRoutes from './TodoRoutes';
import { Router, Request, Response, NextFunction } from 'express';

const app = Router();
app.use(userRoutes);
app.use('/todo',todoRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    const error: any = new Error('Not Found');
    error.status = 404;
    next(error);
});
export default app;