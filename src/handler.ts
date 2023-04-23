import { Application, Request, Response } from 'express'
import { readdirSync } from 'fs'

export default async function (expressApp: Application) {
    const Routes = readdirSync(__dirname + '/routes')
    console.log(`Successfully loaded ${Routes.length} route(s).`)
    
    for (const route of Routes) {
        const { default: { method, name, execute } } = await import(`./routes/${route}`)
        expressApp[method as keyof Application](name, (req: Request, res: Response) => execute(req, res))
    }
}