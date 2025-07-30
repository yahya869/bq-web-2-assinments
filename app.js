// // Assinment-02 (MCQ's):-

// // Q-1 : Unique Words Counter
// // ------------------------
// // Input: A string
// // const text = "JavaScript is great and JavaScript is powerful";
// // Task: Return an object with each unique word and its count.
// // Answer:-
// const text = "JavaScript is great and javaScript is powerful";
// function countUniqueWords(text) {
//     const countWords={};
//     const words = text.toLowerCase().split(/\s+/);
//     for (const word of words) {
//         countWords[word]=(countWords[word] || 0) + 1; 
//     }
//     return countWords;
// }
// console.log(countUniqueWords(text));
// // Output:-
// // {
// //     and:1
// //     great:1
// //     is:2
// //     javaScript:2
// //     powerful:1
// // }




// // Q-2 : Group Students by Class
// // ---------------------------
// // Input: Array of objects
// // const students = [
// //   { name: "Ali", class: "10th" },
// //   { name: "Sara", class: "9th" },
// //   { name: "Ahmed", class: "10th" },
// //   { name: "Zara", class: "9th" }
// // ];
// // Task: Return an object like { "10th": [...], "9th": [...] }
// // Answer:-
// const students = [
//     { name: "Ali", class: "10th" },
//     { name: "Sara", class: "9th" },
//     { name: "Ahmed", class: "10th" },
//     { name: "Zara", class: "9th" }
// ];
// function allStudents(students) {
//     const grouped = {};
//     for (const student of students) {
//         const className = student.class;
//         if (!grouped[className]) {
//             grouped[className] = [];
//         }
//         grouped[className].push(student)
//     }
//     return grouped;
// }
// console.log(allStudents(students));
// // Output:-
// // {
// //     "9th": [
// //         { name: "Sara", class: "9th" },
// //         { name: "Zara", class: "9th" }
// //     ],
// //     "10th": [
// //         { name: "Ali", class: "10th" },
// //         { name: "Ahmed", class: "10th" }
// //     ]
// // }




// // Q-3 : Filter Products by Price Range
// // ----------------------------------
// // const products = [
// //   { name: "Laptop", price: 800 },
// //   { name: "Mouse", price: 20 },
// //   { name: "Phone", price: 500 },
// // ];
// // Task: Create a function that takes min and max price and returns filtered products
// // Answer:-
// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 20 },
//   { name: "Phone", price: 500 },
// ];
// function filtered(min,max) {
//     return products.filter(product => product.price >=min & product.price <= max)
// }
// console.log(filtered(400,900));
// // Output:-
// // [
// //   { name: "Laptop", price: 800 }
// //   { name: "Phone", price: 500 }
// // ]




// // Q-4 :  Check Palindrome Using Function
// // -----------------------------------
// // Input: A string like "madam"
// // Task: Check if it is palindrome using a function
// // Answer:-
// function isPalindrome(str) {
//    const reversed = str.split('').reverse().join('');
//    return str===reversed
// }
// console.log(isPalindrome('madam'));
// // Output:-
// // true




// // Q-5 :  Flatten Array
// // -----------------
// // const nestedArray = [1, [2, [3, 4]], 5];
// // Task: Flatten the array to [1, 2, 3, 4, 5] using recursion or array methods
// // Answer:-
// const nestedArray = [1, [2, [3, 4]], 5];
// function flattenArr(arr) {
//    let resultArr=[];
//    for (const num of arr) {
//     if(Array.isArray(num)){
//         resultArr = resultArr.concat(flattenArr(num));
//     }else{
//         resultArr.push(num);
//     }
//    }
//    return resultArr;
// }
// console.log(flattenArr(nestedArray));
// // Output:-
// //  [1, 2, 3, 4, 5]




// // Q-6 : Total Salary Calculation (Using Reduce)
// // -------------------------------------------
// // const employees = [
// //   { name: "Ali", salary: 1000 },
// //   { name: "Zara", salary: 1500 },
// //   { name: "Ahmed", salary: 1200 },
// // ];
// // Task: Get total salary of all employees
// // Answer:-
// const employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Zara", salary: 1500 },
//   { name: "Ahmed", salary: 1200 },
// ];
// const totalsalary = employees.reduce((prev,curr) =>  prev+curr.salary,0);
// console.log(totalsalary);
// // Output:-
// // 3700




// // Q-7 : Sum of All Even Numbers in Nested Array
// // --------------------------------------------
// // const data = [1, 2, [4, 5, [6, 8]], 10];
// // Task: Return sum of all even numbers, regardless of depth
// // Answer:-
// const data = [1, 2, [4, 5, [6, 8]], 10];
// function sumOfAllEvenNum(arr){
//     return arr.reduce((prev,curr)=>{
//         if (Array.isArray(curr)) {
//             return prev + sumOfAllEvenNum(curr);
//         } if(curr % 2 === 0){
//             return prev + curr;
//         }else{
//             return prev;
//         }
//     },0);
// }
// console.log(sumOfAllEvenNum(data));
// // Output:-
// // 30




// // Q-8 : Rest Operator in Function
// // ------------------------------
// // Task: Write a function that takes any number of numbers and returns their average
// // Answer:-
// function restOperatorAverage(...num){
//     if (num.length === 0) return 0;
//     const sum = num.reduce((prev,curr)=> prev+curr,0)
//     return sum / num.length 
    
// }
// console.log(restOperatorAverage(2,3,4,5));
// // Output:-
// // 3.5




// // Q-9 : Rest Operator in Function
// // ------------------------------
// // Task: Write a function that takes any number of numbers and returns their average
// // Answer:-
// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const frequency = arr.reduce((acc, fruit) => {
//   return {
//     ...acc,
//     [fruit]: (acc[fruit] || 0) + 1
//   };
// }, {});

// console.log(frequency);
// // Output:-
// // {apple: 3, banana: 2, orange: 1}




// // Q-10 Toggle Status
// // ------------------
// // const tasks = [
// //   { id: 1, name: "Code", done: false },
// //   { id: 2, name: "Eat", done: true },
// // ];
// // Task: Write a function that toggles done status of a task by id
// // Answer:-
// const tasks = [
//   { id: 1, name: "Code", done: false },
//   { id: 2, name: "Eat", done: true },
// ];
// function toggleTaskStatus(tasks, id) {
//   return tasks.map(task =>
//     task.id === id ? { ...task, done: !task.done } : task
//   );
// }
// console.log(toggleTaskStatus(tasks,1));
// // Output:-
// // [
// //   { id: 1, name: "Code", done: true }
// //   { id: 2, name: "Eat", done: true }
// // ]




// // Q-11 Sort by Name Length
// // ------------------------
// // const names = ["Ali", "Zara", "Ahmed", "Usman"];
// // Task: Sort names by length in ascending order
// // Answer:-
// const names = ["Ali", "Zara", "Ahmed",'Ramzani', "Usman"];
// names.sort((a, b) => a.length - b.length);
// console.log(names);
// // Output:-
// // ['Ali', 'Zara', 'Ahmed', 'Usman', 'Ramzani']