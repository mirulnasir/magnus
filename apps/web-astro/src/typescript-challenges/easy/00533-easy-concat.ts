// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]


// ============= Your Code Here =============
// type Concat<T extends unknown[], U extends unknown[]> = T extends [] ? U extends [] ? [] : U : U extends [] ? [] : [...T, ...U]

type Tuple = readonly unknown[]
type Concat<T extends Tuple, U extends Tuple> = [...T, ...U]

type earr = []
type ar1 = [1]
type isar<T> = T extends [] ? true : false //is empty arr
type anyr<T> = T extends any[] ? true : false
type isearrr = isar<earr>
type isearr1 = isar<ar1>
type anyisearrr = anyr<earr>
type anyisearr1 = anyr<ar1>

