var test = require('tape')
var assertHtml = require('assert-html')
var Markdown = require('./')
var md = Markdown()
var html = require('bel')

test('render html', function (t) {
  var dom = html`<p><strong>Hello</strong> <em>world</em></p>`
  var mdDom = md`**Hello** _world_`
  assertHtml(t, dom.toString(), mdDom)
  t.end()
})

test('render html with argumetns', function (t) {
  var friend = 'Peter'
  var friendLastName = 'Pan'
  var dom = html`<p><strong>Hello</strong> <em>${friend} ${friendLastName}</em></p>`
  var mdDom = md`**Hello** _${friend} ${friendLastName}_`
  assertHtml(t, dom.toString(), mdDom)
  t.end()
})
