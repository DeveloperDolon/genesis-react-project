<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>
  This line declares a variable named greeting using the let keyword. However, at this point, the variable greeting has not been assigned any value, so it is undefined. After that an empty object stored in a separate global variable named "greetign" and then consoled it. So the result becomes an empty object.
</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>
  JavaScript is a dynamically typed language, which means it will attempt to perform implicit type conversion when you use the + operator. In this case, JavaScript will try to convert the number 1 to a string and then concatenate the two strings together.

So, the correct answer is: 12
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>
  The food array still contains the original values "🍕", "🍫", "🥑", and "🍔" because the modification was made to a separate property of the info object.
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>
  When you call a function without providing the expected arguments, JavaScript will use undefined as the value for those parameters. In this case, since you haven't passed any argument, the name parameter inside the function will be undefined.
</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>
  For num = 0, the condition if (num) evaluates to false because 0 is falsy. Therefore, count remains 0.
  For num = 1, the condition if (num) evaluates to true because 1 is truthy. So, count becomes 1.
  For num = 2 and num = 3, the conditions if (num) both evaluate to true. count increments by 1 for each of these values.
  So, the output will be 3 because there are three truthy values (1, 2, and 3) in the nums array, and the count variable accumulates the count of those truthy values during the forEach loop
</i>

</p>
</details>
