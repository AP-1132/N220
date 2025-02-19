## Weekly Recap

### Key Takeaways

### DOM Manipulation

DOM (Document Object Model) represents the structure of a webpage that allows JavaScript to access and modify the page dynamically.

#### Some Ways to Reference Elements:

- `document.getElementByID(id)`

This selects an element based on its unique `id`

- `document.querySelector(selector)`

This selects an element based on a CSS selector. _Note it only targets the FIRST matching element, not all_

- `document.querySelectorAll(selector)`

This selects ALL matching elements and returns a NodeList, allowing iteration with `forEach`

### Arrays

Arrays are a type of object that is able to store multiple variables in a single variable. It is used to organize and manipulate data efficiently. They are commonly used to manage lists of related data such as names, numbers, or Boolean values.

#### The Main Method to Create an Array

`let fruits = ["blueberry", "orange", "pineapple"];`

`let scores = [31, 40, 82, 54, 99];`

`let flags = [true, false, true];`

#### Loops

Loops are used to process each element in an array. There are multiple ways to iterate through arrays, however you will primarily use `for` loops

#### `For` Loop

`let numbers = [10, 20, 30, 40, 50];`

`for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);}`

## Live Links

[Index](https://ap-1132.github.io/N220/homework-4/index.html)
