type FilterOut<Source extends any[], FilterValue, Result extends any[] = []> = Source extends [infer R, ...infer Rest]
  ? [R] extends [FilterValue]
      ? FilterOut<Rest, FilterValue, Result> : FilterOut<Rest, FilterValue, [...Result, R]>
  : [...Result]

// type FilterOut<T extends any[], F> = any
