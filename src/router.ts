import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { html } from 'hono/html'
import { HonoPressConfig } from './base/config'

const app = new Hono()
const config = HonoPressConfig;

app.get('/', (c) => c.html(html`
    <!DOCTYPE html>
    <head>
        ${config.RawHead}
        <title>${config.title}</title>
        <meta name="description" content="${config.description}">
    </head>
    <body>
        a
    </body>
`))

serve(app)
