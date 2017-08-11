const proxy = require('redbird')({
  port: 80
})

proxy.register('blog.iama.re', 'http://localhost:8081')
proxy.register('iama.re', 'http://localhost:8080')
