import { Router, Request, Response, NextFunction } from 'express';
import * as sql from 'mssql';

const config = {
    user: 'sa',
    password: '01012000',
    server: 'DESKTOP-6L95NG5', // You can use 'localhost\\instance' to connect to named instance
    database: 'TESTNODE'
}

export class dbRouter {

    router: Router

    constructor() {
        this.router = Router();
        this.init();
    }

    public find(req: Request, res: Response, next: NextFunction): void {
        let query = `select U.Name  ,UserInfo.Telephone 
        from [User] U
        left join [dbo].[UserInfo] UserInfo on UserInfo.UserId=U.Id`;

        new sql.ConnectionPool(config).connect().then(pool => {
            var request = pool.request();
            request.query(query).then(result => {
                res.status(201).send(result.recordset);
            });
        });

    }

    public findUser(req: Request, res: Response, next: NextFunction): void {
        let query = `select U.Name  
        from [User] U`;

        new sql.ConnectionPool(config).connect().then(pool => {
            var request = pool.request();
            request.query(query).then(result => {
                res.status(201).send(result.recordset);
            });
        });

    }

    public userById(req: Request, res: Response, next: NextFunction): void {
        let id = req.params.id;
        let query = `select Name  
        from [User] where Id=@Id`;

        new sql.ConnectionPool(config).connect().then(pool => {
            var request = pool.request();
            request.input("Id", id).query(query).then(result => {
                res.status(201).send(result.recordset);
            });
        });

    }

    init() {
        this.router.get('/', this.find.bind(this));
        this.router.get('/user', this.findUser.bind(this));
        this.router.get('/user/:id', this.userById.bind(this));
    }

}

const dbRoutes = new dbRouter();

const router = dbRoutes.router;
export default router;