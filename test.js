var test = require('tape')
var sum = require('./')

test('sum', function (t) {
  t.plan(1)

  t.equal(sum(1, 1), 2)
})
