import { fastify } from 'fastify'

const app = fastify()

app.get('/', () => {
    return 'Hi there'
})

app.listen({
    port: 3333,
}).then(() => console.log('Server is running'))