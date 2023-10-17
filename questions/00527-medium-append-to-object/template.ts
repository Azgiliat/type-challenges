type AppendToObject<Source, Key extends string, Value> = {
  [K in keyof Source | Key]: K extends keyof Source ? Source[K] : Value
}
