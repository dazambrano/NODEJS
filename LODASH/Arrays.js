// Load the full build
var _ = require('lodash');

// chuck
/* 
Creates an array of elements split into groups the length of size. 
If array can't be split evenly, the final chunk will be the remaining elements.
*/
console.info("chuck")
var array_letters = ['a', 'b', 'c', 'd']
console.log(_.chunk(array_letters, 2))
console.log(_.chunk(array_letters, 3))

// compact
/* 
Creates an array with all falsey values removed. 
The values false, null, 0, "", undefined, and NaN are falsey.
*/
console.info("compact")
console.log(_.compact([0, 1, false, 2, '', 3]))
// difference
/*
Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
The order and references of result values are determined by the first array.
*/
console.info("difference")
console.log(_.difference([2, 1, 'a'], [2, 3]))
// differenceBy
/*
This method is like _.difference except that it accepts iteratee which is invoked for each element 
of array and values to generate the criterion by which they're compared. 
The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
*/
console.info("differenceBy")
console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))
// differenceWith
console.info("differenceWith")
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
console.log(_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual))
// drop
/*
Creates a slice of array with n elements dropped from the beginning.
*/
console.info("drop")
console.log(_.drop([1, 2, 3], 0))
// dropRight
console.info("dropRight")
console.log(_.dropRight([1, 2, 3], 0))
// dropRightWhile
var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];
console.info("dropRightWhile")
console.log(_.dropRightWhile(users, function (o) { return !o.active; }))

// The `_.matches` iteratee shorthand.
console.log(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }))

// The `_.matchesProperty` iteratee shorthand.
console.log(_.dropRightWhile(users, ['active', false]))

// The `_.property` iteratee shorthand.
console.log(_.dropRightWhile(users, 'active'))