# marli
[![Build Status](https://img.shields.io/travis/YerkoPalma/marli/master.svg?style=flat-square)](https://travis-ci.org/YerkoPalma/marli) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> **mar**kdown tagged template **li**teral render

## Install

```bash
$ npm install --save marli
```

## Usage

```js
var Markdown = require('marli')
var md = Markdown()

var dom = md`
**Hello** _world_
---
`
document.body.appendChild(dom)
```

## API

### md = Markdown([presetName][, options])

Marli uses [markdown-it][markdown-it] under the hood, so it accepts the same 
arguments for it's constructor. Check [markdown-it constructor][constructor] 
docs for more info. You can also pass a rules object as an option property, 
that will be passed to the [renderer][renderer], so you can overrider rules 
like this

```js
function link_open (tokens, idx, options, env, self) { // eslint-disable-line camelcase
  var aIndex = tokens[idx].attrIndex('target')

  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank'])
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank'
  }
  return defaultRender(tokens, idx, options, env, self)
}
var md = require('marli')({ rules: { link_open } })
var mdDom = marli`[google](www.google.com)`
// outputs
// <p><a href="www.google.com" target="_blank">google</a></p>
```

In the same way you can pass plugins to Markdown-it constructor, like this

```js
var Markdown = require('./')
var md = Markdown({plugins: [require('markdown-it-meta')]})
```
## License
[MIT](/license)

[markdown-it]: https://github.com/markdown-it/markdown-it
[constructor]: https://markdown-it.github.io/markdown-it/#MarkdownIt.new
[renderer]: https://github.com/markdown-it/markdown-it/blob/3353462142d519dfe5b613e4d9e79fa29601ff98/lib/renderer.js