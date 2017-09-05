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
arguments for it's constructor. Check [markdown-it constructor][constructor] docs for more info

## License
[MIT](/license)

[markdown-it]: https://github.com/markdown-it/markdown-it
[constructor]: https://markdown-it.github.io/markdown-it/#MarkdownIt.new