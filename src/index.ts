import { Decimal } from 'decimal.js'

export function entropy<T>(samples: T[], by?: string): Decimal {
  const count = new Map<T, number>()

  for (let i = 0; i < samples.length; i++) {
    const key = by ? samples[i][by] : samples[i]

    if (!count.has(key)) {
      count.set(key, 0)
    }

    count.set(key, count.get(key)! + 1)
  }

  return Array.from(count.values(), (value: number) => {
    const p = Decimal.div(value, samples.length)
    return new Decimal(0).sub(p.times(Decimal.log2(p)))
  }).reduce((prev, next) => Decimal.add(prev, next), new Decimal(0))
}

export function gain<T>(samples: T[], attr: string, cluster: string = 'cluster') {
  return entropy(samples.map(s => s[cluster])).sub(entropy(samples.map(s => s[attr])))
}
