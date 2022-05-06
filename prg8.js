// Logical operators
// OR operator
console.log('OR operator')
let x=15
if(10<x||5>x){
    console.log('anyone is true')
}else{
    console.log('Both are false')
}

console.log(1||0)
console.log(0||0)
console.log(null||1)
console.log(null||0)
console.log(undefined||null||1)
console.log(undefined||null||0)

// AND operator
console.log('\nAND Operator')
let y=30
if(y>20 && y<10){
    console.log('Both conditions are true')
}else{
    console.log('one condition is false')
}

let hour = 6, minute = 15
if (hour==06 && minute==15) {
    console.log('Time is 06:15 now')
} else {
    console.log('TIme is not correct')
}

console.log(0&&0)
console.log(0&&1)
console.log(1&&0)
console.log(1&&1)
console.log(1&&5)
console.log('\n')

// NOT operator
console.log('NOT operator')
console.log(!true)
console.log(!0)
console.log(!!false)
console.log(!!1)
console.log(!null)
console.log(Boolean(null))
console.log(Boolean("a string"))
console.log(Boolean(""))