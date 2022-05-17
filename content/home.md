---
title: Introduction
description: Learn how to use @nuxt/content.
hola: que tal...

---

##  Learn how to use @nuxt/content.
Full amount of content beyond the more divider.

Codeblocks in Markdown are wrapped inside 3 backticks. Optionally, you can define the language of the codeblock to enable specific syntax highlighting.

Originally markdown did not support filenames or highlighting specific lines inside codeblocks. However, this module allows it with its own custom syntax:

<nuxt-link to="/components/buttons">Nuxt Link to Blog</nuxt-link>

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

