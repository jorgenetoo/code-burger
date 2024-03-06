import { Router } from "express"

const routes = new Router()

routes.get('/', (request, response) => {
    return response.jason({ message: "Hello World" })
})

export default routes