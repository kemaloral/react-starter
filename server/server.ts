import * as bodyParser from "body-parser";
import * as express from "express";
import { Router, Request, Response, NextFunction } from 'express';

import * as path from "path";
import corsPrefetch from 'cors-prefetch-middleware';
import dbRouter from './db-router';

class App {
    /** Ref to Express instance */
    public express: express.Application;

    /** Run configuration methods on the Express instance. */
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    /** Configure Express middleware. */
    private middleware(): void {

        this.express.use(corsPrefetch);


        this.express.use(bodyParser.json({ limit: '50mb' }));
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }


    /** Configure API endpoints. */
    private routes(): void {
        let router = express.Router();
        this.express.use(express.static("public"));
        this.express.use(express.static("dist"));
        this.express.use(express.static("dist/uploads"));
        this.express.use(/\/((?!api).)*/, function (req, res) {
            res.sendFile('index.html', { root: path.resolve(".", "dist") }, function (err) {
                if (err) {
                    res.status(500).send(err)
                }
            })
        })

        this.express.use("/", router);

        this.express.use("/api/db", dbRouter);
    }
}

export default new App().express;