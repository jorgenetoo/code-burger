const { Router } = require("express")

const routes = new Router()

routes.get('/', (request, response) => {
    return response.jason({ message: "Hello World" })
})

module.exports = routes