export function entropy<T>(samples: T[]) {
  const count = new Map<T, number>();

  for (let i = 0; i < samples.length; i++) {
    if (!count.has(samples[i])) {
      count.set(samples[i], 0)
    }

    count.set(samples[i], count.get(samples[i])! + 1)
  }

  return Array.from(count.values(), (value: number) => {
    const p = value / samples.length;
    return -p * Math.log2(p)
  }).reduce((prev, next) => prev + next, 0)
}