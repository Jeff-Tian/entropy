import assert = require('assert')
import { entropy, gain } from '../index'
import Decimal from 'decimal.js';

describe('entropy', () => {
  it('1', () => {
    const samples = [
      '+', '+', '-', '+', '-', '-'
    ]

    assert(entropy(samples).toNumber() === 1)
  })
})

describe('information gain', () => {
  const samples = [
    {
      cluster: '+',
      a1: 'T',
      a2: 'T'
    },
    {
      cluster: '+',
      a1: 'T',
      a2: 'T'
    },
    {
      cluster: '-',
      a1: 'T',
      a2: 'F'
    },
    {
      cluster: '+',
      a1: 'F',
      a2: 'F'
    },
    {
      cluster: '-',
      a1: 'F',
      a2: 'T'
    },
    {
      cluster: '-',
      a1: 'F',
      a2: 'T'
    }
  ]

  it('information gain of a1', () => {
    assert(gain(samples, 'a1').equals(0))
  })

  it('information gain of a2', () => {
    assert(gain(samples, 'a2').equals((new Decimal(5).div(3).sub(Decimal.log2(3)))))
  })
})
