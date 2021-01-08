// Ornithology
//export const applicator = (a => b) => a => b
// A combinator or apply

// > applicator(x => x + 1)(3)
// 4
//export const becard = (c => d) => (b => c) => (a => b) => a => d
// B3 combinator or function composition (for three functions)

// > becard(x => x * -1)(x => x * 2)(x => x - 1)(3)
// -4
//export const blackbird = (c => d) => (a => b => c) => a => b => d
// B1 combinator

// > blackbird(x => x * -1)(x => y => x + y)(3)(5)
// -8
//export const bluebird = (b => c) => (a => b) => a => c
// B combinator or function composition

// > bluebird(x => x * 2)(x => x - 1)(3)
// 4
//export const bluebird_ = (a => c => d) => a => (b => c) => b => d
// B' combinator

// > bluebird_(x => y => x * y)(2)(x => x + 1)(2)
// 6
//export const bunting = (d => e) => (a => b => c => d) => a => b => c => e
// B2 combinator

// > bunting(x =>  x * -1)(x => y => z => x + y + z)(1)(2)(3)
// -6
//export const cardinal = (a => b => c) => b => a => c
// C combinator or flip

// > cardinal(str => prefix => prefix + str)('-')('birds')
// '-birds'
//export const cardinal_ = (c => a => d) => (b => c) => a => b => d
// C' combinator

// > cardinal_(x => y => x * y)(x => x + 1)(2)(3)
// 8
//export const cardinalstar = (a => c => b => d) => a => b => c => d
// C* combinator - cardinal once removed.

// > cardinalstar(str => prefix => postfix => prefix + str + postfix)('birds')('!')('-')
// '-birds!'
//export const cardinalstarstar = (a => b => d => c => e) => a => b => c => d => e
// C** combinator - cardinal twice removed.

// > cardinalstarstar(a => b => separator => postfix => a + separator + b + postfix)('fantasy')('birds')('!')('-')
// 'fantasy-birds!'
//export const dickcissel = (a => b => d => e) => a => b => (c => d) => c => e
// D1 combinator

// > dickcissel(prefix => postfix => str => prefix + str + postfix)('-')('!')(x => x.toUpperCase())('birds')
// '-BIRDS!'
//export const dove = (a => c => d) => a => (b => c) => b => d
// D combinator

// > dove(postfix => str => str + postfix)('!')(x => x.toUpperCase())('birds')
// 'BIRDS!'
//export const dovekie = (c => d => e) => (a => c) => a => (b => d) => b => e
// D2 combinator

// > dovekie(prefix => str => prefix + str)(x => x.toUpperCase())('fantasy-')(x => x.toLowerCase())('BIRDS')
// 'FANTASY-birds'
//export const eagle = (a => d => e) => a => (b => c => d) => b => c => e
// E combinator

// > eagle(prefix => str => prefix + str)('-')(str => postfix => str + postfix)('birds')('!')
// '-birds!'
//export const eaglebald = (e => f => g) => (a => b => e) => a => b => (c => d => f) => c => d => g
// E^ combinator

// > eaglebald(x => y => y + x)(a => b => b + a)('!')('birds')(a => b => a + b)('fantasy')('-')
// 'fantasy-birds!'
//export const finch = a => b => (b => a => c) => c
// F combinator

// > finch(-1, 3)(x => y => x * y)
// -3
//export const finchstar = (c => b => a => d) => a => b => c => d
//export const finchstarstar = (a => d => c => b => e) => a => b => c => d => e
//export const goldfinch = (b => c => d) => (a => c) => a => b => d
//export const hummingbird = (a => b => a => c) => a => b => c
//export const idiot = a => a
// identity

// > idiot('bird')
// 'bird'
//export const idstar = (a => b) => a => b
//export const idstarstar = (a => b => c) => a => b => c
//export const jalt = (a => c) => a => b => c
//export const jalt_ = (a => b => d) => a => b => c => d
//export const jay = (a => b => b) => a => b => a => b
//export const kestrel = a => b => a
// K combinator or const

// > kestrel('bird')('cat')
// 'bird'
//export const kite = a => b => b
//export const owl = ((a => b) => a) => (a => b) => b
//export const phoenix = (b => c => d) => (a => b) => (a => c) => a => d
//export const psi = (b => b => c) => (a => b) => a => a => c
// PSI combinator or on

// > psi(x => y => x + y)(x => x * -1)(3)(5)
// -8
// export const quacky = a => (a => b) => (b => c) => c
// export const queer = (a => b) => (b => c) => a => c
// export const quirky = (a => b) => a => (b => c) => c
// export const quixotic = (b => c) => a => (a => b) => c
// export const quizzical = a => (b => c) => (a => b) => c
// export const robin = a => (b => a => c) => b => c
// export const robinstar = (b => c => a => d) => a => b => c => d
// export const robinstarstar = (a => c => d => b => e) => a => b => c => d => e
// export const starling = (a => b => c) => (a => b) => a => c
// export const starling_ = (b => c => d) => (a => b) => (a => c) => a => d
// export const thrush = a => (a => b) => b
// export const vireo = a => b => (a => b => c) => c
// export const vireostar = (b => a => b => d) => a => b => b => d
// export const vireostarstar = (a => c => b => c => e) => a => b => c => c => e
// export const warbler = (a => a => b) => a => b
// export const warbler1 = a => (a => a => b) => b
// export const warblerstar = (a => b => b => c) => a => b => c
// export const warblerstarstar = (a => b => c => c => d) => a => b => c => d
