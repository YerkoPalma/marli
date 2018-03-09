var Markdownit = require('markdown-it')

function Marli (presetName, opts) {
  if (typeof presetName === 'object') {
    opts = presetName
    presetName = 'default'
  }
  var rules
  if (opts && opts.rules) {
    rules = opts.rules
    delete opts.rules
  }
  var md = Markdownit(presetName, opts)
  if (opts && opts.plugins && Array.isArray(opts.plugins)) {
    opts.plugins.forEach(plugin => {
      md.use(plugin)
    })
  }
  if (typeof rules === 'object') {
    for (var rule in rules) {
      md.renderer.rules[rule] = rules[rule]
    }
  }
  function _md (strings) {
    var arglen = arguments.length
    var result = ''
    for (var i = 0; i < arglen; i++) {
      var arg = arguments[ i + 1 ] || ''
      result += strings[i] + arg
    }
    if (typeof document !== 'undefined') {
      var div = document.createElement('div')
      div.innerHTML = md.render(result)
      return div
    } else {
      return md.render(result)
    }
  }
  _md._md = md
  return _md
}
module.exports = Marli
