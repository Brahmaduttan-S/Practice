// Array Methods
const car = ['BMW','Benz','Toyato','Hyundai','Bugatti']
console.log(car[1])
car[2] = 'Mesaratti'
console.log(car)
console.log(car.toString())
console.log(car.join(" => "))
console.log(car.pop())
console.log(car.push("Lamborgini"))
console.log(car)
console.log(car.shift())
console.log(car)
console.log(car.unshift("Audi"))
console.log(car)
console.log(car.unshift("Audi"))
console.log(car.shift())
console.log(car)
console.log(car.length)
console.log(car.splice(1,2,"Toyato","Rolls Royce"))
console.log(car)
console.log(car.slice(1,3))
console.log(car.concat(1,4))
console.log(car.pop())
console.log(car.pop())
console.log(car)
console.log(car.concat("Hyundai","Lamborgini"))
console.log(car)
console.log(car.push("Hyundai"))
console.log(car.push("Lamborgini"))
console.log(car)
console.log(car[2].toUpperCase())

// Loops
for (let i = 0; i < car.length; i++) {
    if (i%2==0) {
    const element = car[i];
    console.log(element.toUpperCase())
    }else{
        const element = car[i];
        console.log(element)
    }
}

for(let cars of car){
    console.log(cars)
}
for(let veh in car){
    console.log(car[veh])
}

let n=1.2345
console.log(n.toFixed(3))
