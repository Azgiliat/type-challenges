type StringToUnion<T extends string, Result extends string = ''> = T extends `${infer R}${infer Rest}` ? StringToUnion<Rest, R | Result> : Exclude<Result, ''>
