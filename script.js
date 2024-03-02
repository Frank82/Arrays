// Arrays

const groceries = ['banana', 'apple', 'orange', 'pear']
console.log(groceries)

// Grabbing the index
// console.log(groceries[0])
// console.log(groceries[1])
// console.log(groceries[2])
// console.log(groceries[3])

// Array methods
groceries.push('cookie')
// console.log(groceries)

groceries.push('blueberry')
// console.log(groceries)

// Array slice
// Start from 0 INCLUSIVE and UP to 2 [0, 1]
console.log(groceries.slice(0, 2))

// Array methods (slice, push, indefOf, length)

console.log(groceries.indexOf('orange'))

console.log(groceries.length)