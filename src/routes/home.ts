import { Router, Request, Response } from 'express';
import {connection} from "../db/config";

const router = Router();

router.get('/', (req: Request, res: Response) => {

    const sql = `SELECT * FROM Users`;

    connection.query(sql, (err: Error, result: unknown) => {

        return res.status(403).send({
            message: 'connected to db',
            statusCode: 403,
            data: result
        });
    });
});

export default router;
