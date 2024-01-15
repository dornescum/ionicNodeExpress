import {Router, Request, Response} from 'express';
import {connection} from "../db/config";
import {QueryError, RowDataPacket} from 'mysql2';
import {statusMessages} from "../utils/Messages";


const router = Router();

router.get('/', (req: Request, res: Response) => {

    const sql = `select p.id,
                        p.title,
                        p.tag as productTag,
                        p.favorite,
                        p.price,
                        p.rating,
                        p.flashSale,
                        p.img,
                        p.desc,
                        t.id  as tid,
                        t.tag as tag
                 from ionic_products as p
                          inner join \`tags-table\` as t on p.tag = t.id`;

    connection.query(sql, (err: Error, result: unknown) => {

        if (err) {
            return res.status(500).send({
                message: statusMessages.errorQueryingTheDatabase,
                statusCode: 500, error: err
            });
        }
        return res.status(200).send({
            message: statusMessages.success, statusCode: 200, data: result
        });
    });
});

router.get('/:pid', (req: Request, res: Response) => {

    const pid = req.params.pid;  // Extracting the 'pid' parameter from the URL

    const sql = `SELECT *
                 FROM ionic_products
                 WHERE id = ?`;


    connection.query(sql, [pid], (err: QueryError | null, result: RowDataPacket[]) => {

        if (err) {
            return res.status(500).send({
                message: statusMessages.errorQueryingTheDatabase, statusCode: 500, error: err
            });
        }
        if (result.length === 0) {
            return res.status(404).send({
                message: statusMessages.nothingFound, statusCode: 404
            });
        }
        return res.status(200).send({
            message: statusMessages.success, statusCode: 200, data: result
        });
    });
});

router.get('/category/:name', (req: Request, res: Response) => {

    const category = req.params.name;
    const sql = `select p.id,
                        p.title,
                        p.tag as productTag,
                        p.favorite,
                        p.price,
                        p.rating,
                        p.flashSale,
                        p.img,
                        p.desc,
                        t.id  as tid,
                        t.tag as tag
                 from ionic_products as p
                          inner join \`tags-table\` as t on p.tag = t.id
                 WHERE t.tag = ?`;

    connection.query(sql, [category], (err: QueryError | null, result: RowDataPacket[]) => {

        if (err) {
            return res.status(500).send({
                message: statusMessages.errorQueryingTheDatabase, statusCode: 500, error: err
            });
        }
        return res.status(200).send({
            message:statusMessages.success, statusCode: 200, data: result
        });
    });
});

export default router;
