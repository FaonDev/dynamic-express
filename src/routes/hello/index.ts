import { Request, Response } from 'express'

export default {
    name: '/hello', method: 'get',

    async execute(req: Request, res: Response) {
        return res.send('Hello World!')
    }
}