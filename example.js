var Markdown = require('.')
var Highlight = require('highlight-syntax')
var highlight = Highlight([ require('highlight-syntax/js') ])
var css = require('sheetify')
css('highlight-syntax/light.css')

var md = Markdown({
  highlight: function (str, lang) {
    if (lang) {
      try {
        return highlight(str, { lang: lang })
      } catch (__) {}
    }

    return ''
  }
})

var dom = md`
**Hello** _world_

  \`\`\`js
  var hello = 'world'
  function print (str) {
    console.log(str)
  }
  \`\`\`
`
document.body.appendChild(dom)
