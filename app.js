// // Assinment-1 (MCQ's):-


// // Q-1:- Write a program that checks whether a number is even or odd?
// const input = 2
// if (isNaN(input)) {
//     console.log('invalid value!');
// } else {
//     if (input % 2 == 0) {
//         console.log(input + " is even");
//     } else {
//         console.log(input + " is odd");
//     }
// }
// // Output:- 2 is even


// // Q-2:- If someone's age is more than or equal to 18, print "Eligible to vote", otherwise print "Not eligible"?
// let age = 31;
// if(age >= 18)console.log('Eligible to Vote');
// else console.log('Not Eligible');
// // Output:- Eligible to Vote


// // Q-3:- Print numbers from 1 to 10 using a for loop?
// for (let num = 1; num <= 10; num++) console.log(num); 
// // Output:- 1 2 3 4 5 6 7 8 9 10


// // Q-4:- Print even numbers between 1 to 20 using a while loop?
// let num = 1;
// while (num <= 20 ) if(num % 2 === 0) console.log(num); num++;
// // Output:- 2 4 6 8 10 12 14 16 18 20


// // Q-5:-Print the reverse of a given string using a for loop?
// let start = 'yahya'; //console.log(start);
// let reversed = '';   //console.log(reversed);
// for (let a = start.length - 1; a >= 0; a--) reversed += start[a]; console.log(reversed);
// // Output:- ayhay


// // Q-6:- Write a function that adds two numbers and returns the result?
// const addTwoNum = (a,b) => a+b;
// console.log(addTwoNum(2,3));
// // Output:- 5


// // Q-7:- Write a function that returns the factorial of a number?
// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers.";
//     }
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(3)); 
// // Output:- 6


// // Q-8:- Write a function that checks if a given string is a palindrome (e.g., "madam")?
// function isPalindrome(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return str === reversed;
// }
// console.log(isPalindrome("lerrel"));  // Output:- true
// console.log(isPalindrome(1221));      // Output:- false


// // Q-9:- Create an object student with the following properties: name, rollNo, marks, isPassed?
// const obj={
//     name:'yahya',
//     rollNo:23,
//     marks:43,
//     isPassed:true
// }
// console.log(obj); // Output:- {name: 'yahya', rollNo: 23, marks: 43, isPassed: true}


// // Q-10:-  Access the properties of the student object using dot and bracket notation.
// const obj={
//     name:'yahya',
//     rollNo:23,
//     marks:43,
//     isPassed:true
// }
// console.log(obj.name);        // Output:- 43
// console.log(obj.rollNo);      // Output:- 23
// console.log(obj.marks);       // Output:- 43
// console.log(obj.isPassed);    // Output:- true
// console.log(obj['name']);     // Output:- 43
// console.log(obj['rollNo']);   // Output:- 23
// console.log(obj['marks']);    // Output:- 43
// console.log(obj['isPassed']); // Output:- true


// // Q-11:- Add a method inside the student object that prints: "Hello, I am [name]"?
// const student={
//     name: 'yahya',
//     fname:'ramzani',
//     class:'XII',
//     rollnumber:43,
//     print:function () {
//         console.log('Hello, I am '+ this.name);
//     }
// }
// student.print();
// // Output:- Hello, I am yahya


// // Q-12:- Create a function that takes an object and prints all keys and values using a loop?
// const student={
//     name: 'yahya',
//     fname:'ramzani',
//     class:'XII',
//     rollnumber:43,
// }
// function obj(obj) {
//     for (const key in obj) {
//         console.log(key+':'+obj[key]);
//     }
// }
// obj(student); // Output: [name:yahya fname:ramzani class:XII rollnumber:43]


// // Q-13:- Create an array of your favorite fruits?
// const fruits=['apple','banana','mango','matermelon']
// console.log(fruits); // Output: ['apple','banana','mango','matermelon']


// // Q-14:-  Add a new fruit to the array?
// const fruits=['apple','banana','mango','matermelon']
// console.log(fruits); // Output: ['apple','banana','mango','matermelon']
// fruits.push('pomegranate')
// console.log(fruits); // Output: ['apple','banana','mango','matermelon','pomegranate']


// // Q-15:-  Remove the last fruit from the array?
// const fruits=['apple','banana','mango','matermelon']
// console.log(fruits); // Output: ['apple','banana','mango','matermelon']
// fruits.pop()
// console.log(fruits); // Output: ['apple','banana','mango']


// // Q-16:-  Check if "banana" is present in the array using .includes()?
// const fruits = ['apple', 'banana', 'mango', 'matermelon']
// fruits.includes('banana') ? console.log('yes, banana is in the array')
//     : console.log('No, banana is not in the array'); 
// // Output: yes, banana is in the array


// // Q-17:- Create an array of numbers. Return a new array where each number is multiplied by 2 ?
// const num=[1,2,3,4,5,6]
// const addnum=num.map((element) => element*2)
//     console.log(addnum); // Output: [2,4,6,8,10,12]
//     console.log(num);    // Output: [1,2,3,4,5,6]


// // Q-18:- Create an array of ages. Return only those who are 18 or older? 
// const ages=[6,8,13,16,18,20,34]
// const olderages=ages.filter((age)=>age>=18)
// console.log(olderages); // Output: [18,20,34]


// // Q-19:-  Use .find() to get the first number greater than 10 from an array? 
// const arr=[4,9,67,3,12,34,65]
//  const greater=arr.find((arr)=>arr>10)
//  console.log(greater); // Output: 67


// // Q-20:- Use .forEach() to print every name from an array of names?
// const students = [
//   { stud_name: "Ali", marks: 80 },
//   { stud_name: "Zara", marks: 95 },
//   { stud_name: "Umar", marks: 45 }
// ];
// students.forEach((name)=>console.log(name.stud_name)) // Output: Ali Zara Umar 


// // Q-21:- Use .map() to return an array of only student names?
// const students = [
//  ['yahya','hamza','ali'],
//  [43,12,25]
// ];
// const stunames=students[0].map((name)=>name) 
//  console.log(stunames); // Output: ['yahya','hamza','ali']


// // Q-22:- Use .filter() to return students who scored more than 50? 
// const students=[
//     {name:'hamza',marks:40},
//     {name:'ali',marks:90},
//     {name:'yahya' ,marks:87},
//     {name:'waqar',marks:20}
// ]
// const pass_stud=students.filter((score)=>score.marks>50)
// console.log(pass_stud); // Output: {name:'ali',marks:90} {name:'yahya' ,marks:87}


// // Q-23:- Use .find() to get the student whose name is "Zara"?
// const students=['yahya','ahmed','zara'] 
// const stud=students.find((name)=>name==='zara')
// console.log(stud); // Output: zara


// // Q-24:- Use .forEach() to print each student’s name and marks?
// const students = [
//     { name: 'hamza', mark: 40 },
//     { name: 'ali', mark: 90 },
//     { name: 'yahya', mark: 87 },
//     { name: 'waqar', mark: 20 }
// ]
// students.forEach((namesandmarks) => console.log(namesandmarks.name, namesandmarks.mark))
// // // Output:  hamza 40  ali 90  yahya 87  waqar 20 


// // Q-25:- You have an array [2, 4, 6, 8]. Return a new array with each number squared.→ Output: [4, 16, 36, 64]?
// const arr=[2,4,6,8]
// const newarr=arr.map(num=>num*num)
// console.log(newarr); // Output: [4, 16, 36, 64]


// // Q-26:- Given: ["Ali", "Zara", "Umar", "Ahmed"]. Display each name one by one?
// const given= ["Ali", "Zara", "Umar", "Ahmed"]
// given.forEach((name)=>console.log(name)) // Output: Ali Zara Umar Ahmed


// // Q-27:-  From [12, 25, 17, 20, 16, 30], return only the ages above 18.?
// const ages= [12, 25, 17, 20, 16, 30]
// const above_age=ages.filter((num)=>num>18)
// console.log(above_age); // Output: 25 20 


// // Q-28:-  Check if "apple" exists in the array ["banana", "mango", "grapes", "apple"].?
// const array=["banana", "mango", "grapes", "apple"]
// const result=array.find((fruit)=>fruit==='apple')
// console.log(result); // Output: apple


// // Q-29:- From the following list, find the first student who scored more than 90?
// const array=[
//   { name: "Ali", marks: 75 },
//   { name: "Zara", marks: 92 },
//   { name: "Umar", marks: 85 }
// ]
// const result=array.find((score)=>score.marks>90)
// console.log(result); // Output: { name: "Zara", marks: 92 }


// // Q-30:- You have an array [200, 150, 300, 100]. Return the total sum → Output: 750?
// const num=[200, 150, 300, 100]
// const result=num.reduce((sum,corect)=>sum+corect)
// console.log(result); // Output: 750


// // Q-31:- From this array:
// // [
    // //   { id: 1, username: "ali123" },
    // //   { id: 2, username: "zara88" },
    // //   { id: 3, username: "umar_01" }
    // // ]
    // // Return a new array of only usernames.?
    // const user = [
        //     { id: 1, username: "ali123" },
        //     { id: 2, username: "zara88" },
        //     { id: 3, username: "umar_01" }
        // ]
        // const result = user.map((name) => name.username)
        // console.log(result); // Output:  ['ali123', 'zara88', 'umar_01']
        

// // Q-32:- From [1, 2, 3, 4, 5, 6], return only odd numbers → Output: [1, 3, 5]
// const num =[1, 2, 3, 4, 5, 6]
// const newarr=num.filter((odd)=>odd % 2 !== 0)
//         console.log(newarr); // Output:- [1, 3, 5]


// // Q-33:- Count how many vowels are present in the string "javascript".
// const languge ='yahyae'
// const vowels ='aeiou'
// const result=languge.split('').filter((letter)=>vowels.includes(letter))
//         console.log(result); // Output:- ['a', 'a', 'e']


// // Q-34:- Loop through this array and log:
// Task: [taskName] - Status: [Completed/Incomplete]
// const tasks=[
//   { task: "Assignment", completed: true },
//   { task: "Homework", completed: false }
// ]
// tasks.forEach(item => {
//   const status = item.completed ? "Completed" : "Incomplete";
//   console.log(`Task: ${item.task} - Status: ${status}`);
// });
    // Output:- Task: Assignment - Status: Completed   Task: Homework - Status: Incomplete


    // // Q-35:- From a list of employees, return a new array that adds a new field:"status": "active" to each object.
// const employees=[
//   { name: "ali", },
//   { tanamesk: "umer", }
// ]
// const newfield=employees.map((emp)=>{
//     return{
//         ...emp,
//         status:'active'
//     }
// })
// console.log(newfield); 
// Output: [{name: 'ali', status: 'active'}, {tanamesk: 'umer', status: 'active'}]
