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
        let query = `select * from User`;

        new sql.ConnectionPool(config).connect().then(pool => {
            var request = pool.request();
            request.query(query).then(result => {
                console.log(result);
            });
        });

    }

    init() {
        this.router.get('/', this.find.bind(this));

        let query = `select U.Name  ,UserInfo.Telephone 
        from [User] U
        left join [dbo].[UserInfo] UserInfo on UserInfo.UserId=U.Id
        FOR JSON AUTO `;

        new sql.ConnectionPool(config).connect().then(pool => {
            var request = pool.request();
            request.query(query).then(result => {
                console.log(result);
            });
        });
    }

}

const dbRoutes = new dbRouter();

const router = dbRoutes.router;
export default router;