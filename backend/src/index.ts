import { Hono } from 'hono'
import {user} from './routes/user'
import {blog} from './routes/blog'
import { decode } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';

type Bindings = {
  DATABASE_URL: string,
  JWT_KEY:string
}

type Variables = {
  prisma: PrismaClient
}

const app = new Hono<{Bindings: Bindings, Variables: Variables}>().basePath('api/v1');

app.use('*', async(c,next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate())
  c.set("prisma",prisma)
  await next()
})

app.route('/user', user)
app.route('/blog', blog)



// app.post('/api/v1/user/signin', (c) => c.text('POST /'))
// app.post('/api/v1/blog', (c) => c.text('PUT /'))
// app.put('/api/v1/blog', (c) => c.text('DELETE /'))
// app.get('/api/v1/blog/:id', (c) => c.text('GET /'))
// app.get('/api/v1/blog/bulk', (c) => c.text('POST /'))

export default app
