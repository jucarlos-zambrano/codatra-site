const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = parseInt(process.env.PORT, 10) || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (error) {
      console.error('Error handling request:', error)
      res.statusCode = 500
      res.end('Internal Server Error')
    }
  }).listen(port, hostname, () => {
    console.log(`Codatra ready on http://${hostname}:${port}`)
  })
})
