// Iteration 1: Names and Input
const hacker1 = 'Henrique'
const hacker2 = 'Bruno'

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
    else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }

// Iteration 3: Loops

for (let i=0; i<hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase())
}

const stringSplit = hacker2.split("")
console.log(stringSplit)

const reverseArray = stringSplit.reverse()
console.log(reverseArray)

const joinArray = reverseArray.join("")
console.log(joinArray)

let namesOrder = [hacker1,hacker2]
namesOrder.sort()
console.log(namesOrder)

if(namesOrder[0] === hacker1 && namesOrder[0] === hacker2) {
  console.log(`What?! You both have the same name?`)
}
else if (namesOrder[0] === hacker1){
  console.log(`The driver's name goes first.`)
}
else {
  console.log(`Yo, the navigator goes first definitely.`)
}