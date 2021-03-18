// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: `What is a correct syntax to output "Hello World" in C++?`,
  answer: `cout << "Hello World"; `,
  options: [
    `cout << "Hello World"; `,
    'System.out.println("Hello World");',
    'print ("Hello World");',
    'Console.WriteLine("Hello World");'
  ]
},
  {
  numb: 2,
  question: "How do you insert COMMENTS in C++ code?",
  answer: "// This is a comment  ",
  options: [
    "# This is a comment",
    "/* This is a comment",
    "// This is a comment  ",
    "/* This is a comment */"
  ]
},
  {
  numb: 3,
  question: "Which data type is used to create a variable that should store text?",
  answer: "string",
  options: [
    "String",
    "string",
    "Txt",
    "myString"
  ]
},
  {
  numb: 4,
  question: `How do you create a variable with the numeric value 5?`,
  answer: "int x = 5;",
  options: [
    "x = 5;",
    "num x = 5",
    "double x = 5;",
    "int x = 5;"
  ]
},
  {
  numb: 5,
  question: "How do you create a variable with the floating number 2.8?",
  answer: "double x = 2.8;",
  options: [
    "x = 2.8;",
    "double x = 2.8;",
    "byte x = 2.8",
    "int x = 2.8;"
  ]
},
  {
  numb: 6,
  question: `Which method can be used to find the length of a string?`,
  answer: "length()",
  options: [
    "getSize()",
    "length()",
    "getLength()",
    "len()"
  ]
},
  {
  numb: 7,
  question: `Which operator is used to add together two values?`,
  answer: "The + sign",
  options: [
    "The + sign",
    "The * sign",
    "The & sign",
    "The ~ sign"
  ]
},
  {
  numb: 8,
  question: "How do you start writing a while loop in C++?",
  answer: `while (x > y)`,
  options: [
    "while x > y:",
    "x > y while {",
    "while (x > y)",
    "while x > y {"
  ]
},
  {
  numb: 9,
  question: `Which operator can be used to compare two values?`,
  answer: "==",
  options: [
    "<>",
    "==",
    "=",
    "><"
  ]
},
  {
  numb: 10,
  question: "To declare an array in C++, define the variable type with:",
  answer: "[]",
  options: [
    "()",
    "{}",
    "<>",
    "[]"
  ]
},
  {
  numb: 11,
  question: `How do you create a function in C++?`,
  answer: "functionName()",
  options: [
    "functionName.",
    "functionName[]",
    "functionName()",
    "(functionName)"
  ]
},
  {
  numb: 12,
  question: "How do you call a function in C++?",
  answer: "functionName();",
  options: [
    "functionName();",
    "functionName[];",
    "(functionName);",
    "functionName;"
  ]
},
  {
  numb: 13,
  question: "Which keyword is used to create a class in C++?",
  answer: "class",
  options: [
    "class()",
    "className",
    "class",
    "MyClass"
  ]
},
  {
  numb: 14,
  question: "What is the correct way to create an object called myObj of MyClass?",
  answer: "MyClass myObj;",
  options: [
    "class MyClass = new myObj();",
    "MyClass myObj;",
    "new myObj = MyClass();",
    "class myObj = new MyClass();"
  ]
},
  {
  numb: 15,
  question: "How do you create a reference variable of an existing variable?",
  answer: "With the & operator",
  options: [
    "With the REF word",
    "With the * operator",
    "With the ref word",
    "With the & operator"
  ]
},
];