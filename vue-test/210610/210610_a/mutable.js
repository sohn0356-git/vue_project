//immutable
let a = 'Hello'
let b = a

a = 'Good'

// a <= Good
// b <= Hello


//mutable
let a = {h:'Hello'}
let b = a

a.h = 'Good'

// a.h <= Good
// b.h <= Good