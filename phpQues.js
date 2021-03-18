// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: `What does PHP stand for?`,
  answer: `PHP: Hypertext Preprocessor`,
  options: [
    `Private Home Page`,
    'Personal Hypertext Processor',
    'PHP: Hypertext Preprocessor',
    'Pre Hypertext Prepocessor'
  ]
},
  {
  numb: 2,
  question: `How do you write "Hello World" in PHP`,
  answer: `echo "Hello World";`,
  options: [
    `"Hello World";`,
    `alert("Hello World");`,
    `Document.Write("Hello World");`,
    `echo "Hello World";`
  ]
},
  {
  numb: 3,
  question: "All variables in PHP start with which symbol?",
  answer: "$",
  options: [
    "&",
    "%",
    "!",
    "$"
  ]
},
  {
  numb: 4,
  question: `The PHP syntax is most similar to:`,
  answer: "import",
  options: [
    "JavaScript",
    "VBScript",
    "Perl and C",
    "C++"
  ]
},
  {
  numb: 5,
  question: "What is the correct way to create a function in PHP?",
  answer: "function myFunction()",
  options: [
    "new_function myFunction()",
    "create myFunction()",
    "function myFunction()",
    "myFunction()"
  ]
},
  {
  numb: 6,
  question: `What is the correct way to open the file "time.txt" as readable?`,
  answer: `fopen("time.txt","r");`,
  options: [
    `fopen("time.txt","r");`,
    `open("time.txt","read");`,
    `open("time.txt");`,
    `fopen("time.txt","r+");`
  ]
},
  {
  numb: 7,
  question: `Which superglobal variable holds information about headers, paths, and script locations?`,
  answer: "$_SERVER",
  options: [
    "$GLOBALS",
    "$_GET",
    "$_SERVER",
    "$_SESSION"
  ]
},
  {
  numb: 8,
  question: "How do you create an array in PHP?",
  answer: `$cars = array("Volvo", "BMW", "Toyota");`,
  options: [
    `$cars = array["Volvo", "BMW", "Toyota"];`,
    `$cars = array("Volvo", "BMW", "Toyota");`,
    `$cars = "Volvo", "BMW", "Toyota";`,
    "None of the above"
  ]
},
  {
  numb: 9,
  question: `What is the correct way to add 1 to the $count variable?`,
  answer: "$count++;",
  options: [
    "count++;",
    "$count =+1",
    "++count",
    "$count++;"
  ]
},
  {
  numb: 10,
  question: "What is the correct way to end a PHP statement?",
  answer: ";",
  options: [
    ".",
    ";",
    "New Line",
    "&lt;/php&gt;"
  ]
},
  {
  numb: 11,
  question: `How do you get information from a form that is submitted using the "get" method?`,
  answer: "$_GET[];",
  options: [
    "$_GET[];",
    "Request.QueryString;",
    "Request.Form;",
    "POST_GET[];"
  ]
},
  {
  numb: 12,
  question: `PHP is an example of ___________ scripting language.`,
  answer: "Server-side",
  options: [
    "Server-side",
    "Browser-side",
    "In-side",
    "Client-side"
  ]
},
  {
  numb: 13,
  question: `Which of the following is not true?`,
  answer: "PHP can not be embedded into html",
  options: [
    `PHP applications can not be compile`,
    `PHP can not be embedded into html`,
    "PHP makes a website dynamic",
    "PHP can be used to develop web applications"
  ]
},
  {
  numb: 14,
  question: "Which of the following method sends input to a script via a URL?",
  answer: "Get",
  options: [
    "Post",
    "Get",
    "Both",
    "None"
  ]
},
  {
  numb: 15,
  question: "Which of the following function returns the number of characters in a string variable?",
  answer: "strlen($variable)",
  options: [
    "strcount($variable)",
    "count($variable)",
    "strlen($variable)",
    "len($variable)"
  ]
},
];