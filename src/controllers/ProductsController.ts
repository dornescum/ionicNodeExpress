import { Request, Response } from 'express';
import {connection} from "../db/config";
import {QueryError, RowDataPacket} from 'mysql2';
import {statusMessages} from "../utils/Messages";

export const getAllProducts = (req: Request, res: Response) => {
    const sql = `SELECT p.id, p.title, p.tag AS productTag, p.favorite, p.price, p.rating, p.flashSale, p.img, p.desc, t.id AS tid, t.tag AS tag
                 FROM ionic_products AS p
                 INNER JOIN \`tags-table\` AS t ON p.tag = t.id`;

    connection.query(sql, (err: Error, result: unknown) => {
        if (err) {
            return res.status(500).send({
                message: statusMessages.errorQueryingTheDatabase,
                statusCode: 500,
                error: err
            });
        }
        return res.status(200).send({
            message: statusMessages.success,
            statusCode: 200,
            data: result
        });
    });
};

export const getProductById = (req: Request, res: Response) => {
    const pid = req.params.pid;

    const sql = `SELECT *
                 FROM ionic_products
                 WHERE id = ?`;

    connection.query(sql, [pid], (err: QueryError | null, result: RowDataPacket[]) => {
        if (err) {
            return res.status(500).send({
                message: statusMessages.errorQueryingTheDatabase,
                statusCode: 500,
                error: err
            });
        }
        if (result.length === 0) {
            return res.status(404).send({
                message: statusMessages.nothingFound,
                statusCode: 404
            });
        }
        return res.status(200).send({
            message: statusMessages.success,
            statusCode: 200,
            data: result
        });
    });
};

export const getProductsByCategory = (req: Request, res: Response) => {
    const category = req.params.name;
    const sql = `SELECT p.id,
                        p.title,
                        p.tag AS productTag,
                        p.favorite,
                        p.price,
                        p.rating,
                        p.flashSale,
                        p.img,
                        p.desc,
                        t.id AS tid,
                        t.tag AS tag
                 FROM ionic_products AS p
                 INNER JOIN \`tags-table\` AS t ON p.tag = t.id
                 WHERE t.tag = ?`;

    connection.query(sql, [category], (err: QueryError | null, result: RowDataPacket[]) => {
        if (err) {
            return res.status(500).send({
                message: statusMessages.errorQueryingTheDatabase,
                statusCode: 500,
                error: err
            });
        }
        return res.status(200).send({
            message: statusMessages.success,
            statusCode: 200,
            data: result
        });
    });
};
