// Type string
const name = "Khrystyna"
// Type number
const years = 21
// Type boolean
const teacher = true

// Type null
const nothing = null

console.log('nothing', nothing)
// Type undefined
const notFound = undefined
let city
console.log('city', city)

// Type bigint (від -(2^53 - 1)  до (2^53))
const bigint = BigInt(2839479823749832749823749832749823749832749837298473879342978297332497)
console.log('bigint', bigint)

// Type Symbol - unique
const id1 = Symbol("id")
const id2 = Symbol("id")
const number = Symbol(1)

console.log("id" === "id") // true
console.log('symbol', id1 === id2) // false

const age = prompt("Enter your age")

// if (age > 18) {
//     console.log('Welcome')
// } else {
//     console.log("Don't allow")
// }

// Condition ? if true : else

// console.log(age > 18 ? "Welcome" : "Don't allow")

let anything = ""

if (age < 10) {
    anything = "Child"
} else if (age >= 10 && age < 18) {
    anything = "Teenager"
} else {
    anything = "Adult"
}

const anything2 = age < 10
    ? "Child"
    : (age >= 10 && age < 18)
        ? "Teenage"
        : age > 120
            ? "Died"
            : "Adult"

console.log('anything2', anything2)

// sayHi("Khrystyna")

// Function declaration
function sayHi(name) {
    alert("Hi, " + name)
}

// Function expression
const sayHello = function (name) {
    alert("Hello, " + name)
    return "hello"
}

let func = sayHello
let func2 = sayHi

// 1 == "1" - true
// 1 === "1" - false

console.log(sayHello === func)
console.log(sayHi === func2)

// sayHello("Khrystyna2")
// func("Khrystyna3")

function add(a,b) {
    return a + b
}

function pow(a, b) {
    return a ** b
}

console.log(pow(2, 4))
console.log(add(2, 5))













