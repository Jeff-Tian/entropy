import assert = require('assert')
import { entropy, gain } from '../index'
import Decimal from 'decimal.js'

describe('entropy', () => {
  it('1', () => {
    const samples = ['+', '+', '-', '+', '-', '-']

    assert(entropy(samples).toNumber() === 1)
  })

  it('?', () => {
    const samples = ['No', 'Yes', 'Yes', 'Yes', '?']
    assert(entropy(samples).toFixed(2) === '1.37')
  })
})

describe('information gain', () => {
  const samples = [
    {
      cluster: '+',
      a1: 'T',
      a2: 'T',
    },
    {
      cluster: '+',
      a1: 'T',
      a2: 'T',
    },
    {
      cluster: '-',
      a1: 'T',
      a2: 'F',
    },
    {
      cluster: '+',
      a1: 'F',
      a2: 'F',
    },
    {
      cluster: '-',
      a1: 'F',
      a2: 'T',
    },
    {
      cluster: '-',
      a1: 'F',
      a2: 'T',
    },
  ]

  it('information gain of a1', () => {
    assert(gain(samples, 'a1').equals(0))
  })

  it('information gain of a2', () => {
    assert(gain(samples, 'a2').equals(new Decimal(5).div(3).sub(Decimal.log2(3))))
  })
})

describe('information gain for enjoy sports example', () => {
  const samples = [
    {
      Sky: 'Sunny',
      AirTemp: 'Warm',
      Humidity: 'Normal',
      Wind: 'Strong',
      Water: 'Warm',
      Forecast: 'Same',
      决策: 'Yes',
    },
    {
      Sky: 'Sunny',
      AirTemp: 'Warm',
      Humidity: 'High',
      Wind: 'Strong',
      Water: 'Warm',
      Forecast: 'Same',
      决策: 'Yes',
    },
    {
      Sky: 'Rainy',
      AirTemp: 'Cold',
      Humidity: 'High',
      Wind: 'Strong',
      Water: 'Warm',
      Forecast: 'Change',
      决策: 'No',
    },
    {
      Sky: 'Sunny',
      AirTemp: 'Warm',
      Humidity: 'High',
      Wind: 'Strong',
      Water: 'Cool',
      Forecast: 'Change',
      决策: 'Yes',
    },
  ]

  it('entropy = ', () => {
    assert(entropy(samples, '决策').toFixed(20) === '0.81127812445913286391')
  })

  it('information gain of Sky', () => {
    assert(gain(samples, 'Sky', '决策').equals(0))
  })
})
