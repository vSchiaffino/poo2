const sum = require('./sum')

test('adds 1 + 2 must be equal to 3', () => {
  expect(sum(1, 2)).toBe(3)
})
