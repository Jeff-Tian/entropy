import { Decimal } from 'decimal.js'

export function entropy<T>(samples: T[]): Decimal {
  const count = new Map<T, number>();

  for (let i = 0; i < samples.length; i++) {
    if (!count.has(samples[i])) {
      count.set(samples[i], 0)
    }

    count.set(samples[i], count.get(samples[i])! + 1)
  }

  return Array.from(count.values(), (value: number) => {
    const p = Decimal.div(value, samples.length);
    return new Decimal(0).sub(p.times(Decimal.log2(p)))
  }).reduce((prev, next) => Decimal.add(prev, next), new Decimal(0))
}

export function gain<T>(samples: T[], attr: string, cluster: string = 'cluster') {
  return entropy(samples.map(s => s[cluster])).sub(entropy(samples.map(s => s[attr])))
}
