var test = require('tape')
var assertHtml = require('assert-html')
var html = require('bel')

test('render html', function (t) {
  var Markdown = require('./')
  var md = Markdown()
  var dom = html`<p><strong>Hello</strong> <em>world</em></p>`
  var mdDom = md`**Hello** _world_`
  assertHtml(t, dom.toString(), mdDom)
  t.end()
})

test('render html with argumetns', function (t) {
  var Markdown = require('./')
  var md = Markdown()
  var friend = 'Peter'
  var friendLastName = 'Pan'
  var dom = html`<p><strong>Hello</strong> <em>${friend} ${friendLastName}</em></p>`
  var mdDom = md`**Hello** _${friend} ${friendLastName}_`
  assertHtml(t, dom.toString(), mdDom)
  t.end()
})

test('allow access to override rules', function (t) {
  var defaultRender = function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

  function link_open (tokens, idx, options, env, self) { // eslint-disable-line camelcase
    var aIndex = tokens[idx].attrIndex('target')

    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank'])
    } else {
      tokens[idx].attrs[aIndex][1] = '_blank'
    }
    return defaultRender(tokens, idx, options, env, self)
  }
  var marli = require('./')({ rules: { link_open } })
  var dom = html`<p><a href="www.google.com" target="_blank">google</a></p>`
  var mdDom = marli`[google](www.google.com)`
  assertHtml(t, dom.toString(), mdDom)
  t.end()
})

test('allow passing plugins to Markdown-it', function (t) {
  var Markdown = require('./')
  var md = Markdown({plugins: [require('markdown-it-meta')]})

  md`---
title: Welcome to Markdown-it-meta
keywords: markdown-it-meta
---
## Hello World`
  t.deepEqual(md._md.meta, {
    title: 'Welcome to Markdown-it-meta',
    keywords: 'markdown-it-meta'
  })
  t.end()
})
