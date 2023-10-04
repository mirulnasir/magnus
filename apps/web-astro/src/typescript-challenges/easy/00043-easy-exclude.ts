// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T



type abc = 'a' | 'b' | 'c'
type c = 'c'
// 'c' extends 'a'|'b'|'c' ~~ c inside either abc
// 
type what<T> = T extends c ? T : never
type whatabc = what<abc>