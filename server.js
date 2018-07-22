const express = require('express')
const next = require('next')
const Parser = require("rss-parser")
const NodeCache = require( "node-cache" )

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const stripHTML = function(string) {return string.replace(/<.*?>/g, '')}
const myCache = new NodeCache()

app.prepare()
.then(() => {
  const server = express()

  server.get('/medium', (req, res) => {
    let articles = myCache.get("MEDIUM_RSS")

    if (articles == undefined ){
      const parser = new Parser();
      const feed = parser.parseURL('https://medium.com/feed/@toruticas').then((feed) => {
        articles = feed.items.map(item => ({
          content: stripHTML(item["content:encoded"]).slice(0, 400) + "...",
          createdAt: item.isoDate,
          link: item.link,
          tags: item.categories,
          title: item.title,
        }))

        myCache.set("MEDIUM_RSS", articles)

        res.send(articles)
      })
    } else {
      res.send(articles)
    }
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
