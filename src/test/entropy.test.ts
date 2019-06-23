import assert = require('assert')
import { entropy } from '../index'

describe('entropy', () => {
  it('1', () => {
    const samples = [
      '+', '+', '-', '+', '-', '-'
    ]

    assert(entropy(samples) === 1)
  })
})
