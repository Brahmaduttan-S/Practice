// Functions
console.log('Functions')
function show(){
    console.log('Here we start functions')
}
show()

console.log('\nPrg2')
let user = "Admin"
function msg() {
    let msg = "Hello, "+ user
    console.log(msg)
}
msg()

console.log('\nPrg3')
let userName = "Jibin"
function showMsg() {
    userName = "Boby"
    let msg = "Hai, "+ userName
    console.log(msg)
}
console.log(userName)
showMsg()
console.log(userName)

console.log('\nPrg4')
function Message(from, text) {
    console.log(from+': '+text)
}
Message('Jibin','Hello! Boby...')
Message(' Boby','Hai, Jibin... How are you?')
Message('Jibin','I`m good, How about you..')

console.log('\nPrg5')
function sum(a,b){
    return a+b
}
let result = sum(10,45)
console.log(result)

console.log('\nPrg6')
function checkAge(age) {
    if (age>=18) {
        return true
    }else{
        return false
    }
}
let age = 17
if(checkAge(age)){
    console.log('Exam begins at 10:00AM')
}else{
    console.log('You can attend the exam at age of 18')
}