// 🚀 JavaScript Variables & Strings Challenge
// Follow the instructions and complete each task. 
// Use console.log() to test your work before running `npm run test`.

// 1️⃣ Create a variable labelled `myName` and assign it your name.


// 2️⃣ Create a variable labelled `greeting` that says "Hello, my name is ___" using your `myName` variable.


// 3️⃣ Find the length of `greeting` and store it in a variable labelled `greetingLength`.


// 4️⃣ Create a variable `favoriteFood` and assign it a string value.


// 5️⃣ Use string concatenation to create a sentence:  
// "My favorite food is ___ and I love eating it!"


// 6️⃣ Create a variable `uppercaseGreeting` that stores `greeting` in all uppercase.


// 7️⃣ Create a variable `lowercaseFoodSentence` that stores `foodSentence` in all lowercase.


// Export variables for testing (Do not edit this)
module.exports = { myName, greeting, greetingLength, favoriteFood, foodSentence, uppercaseGreeting, lowercaseFoodSentence };

const myName = "Liam Waymouth"
const greeting = "Hello, my name is " + myName + "."
const greetingLength = this.greetingLength()
console.log(greeting)

const favoriteFood = "Egg Foo Young"
console.log("My favourite food is " + favoriteFood + " it's scrumdiddily-yumshious")

const uppercaseGreeting = greeting.toLocaleUpperCase()
const lowercaseFoodSentence = this.foodSentence.lowercaseFoodSentence()

console.log(myName + favoriteFood)