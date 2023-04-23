import { Request, Response } from 'express'

export default {
    name: '/', method: 'get',

    async execute(req: Request, res: Response) {
        return res.render('index')
    }
}