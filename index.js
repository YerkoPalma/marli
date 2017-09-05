var Markdownit = require('markdown-it')

function Marli (presetName, opts) {
  var md = Markdownit(presetName, opts)
  return function (strings) {
    var arglen = arguments.length
    var result = ''
    for (var i = 0; i < arglen; i++) {
      var arg = arguments[ i + 1 ] || ''
      result += strings[i] + arg
    }
    return md.render(result)
  }
}
module.exports = Marli
