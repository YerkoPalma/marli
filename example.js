var Markdown = require('.')
var md = Markdown()

var dom = md`
**Hello** _world_
`
console.log(dom)
