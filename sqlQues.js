// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: `What does SQL stand for?`,
  answer: `Structured Query Language`,
  options: [
    `Structured Query Language`,
    'Structured Query List',
    'Simple Query Language',
    'None of these'
  ]
},
  {
  numb: 2,
  question: `Which operator performs pattern matching?`,
  answer: `LIKE operator`,
  options: [
    `BETWEEN operator`,
    `LIKE operator`,
    `EXISTS operator`,
    `None of these`
  ]
},
  {
  numb: 3,
  question: "What operator tests column for the absence of data?",
  answer: "IS NULL operator",
  options: [
    "EXISTS operator",
    "NOT operator",
    "IS NULL operator",
    "None of these"
  ]
},
  {
  numb: 4,
  question: `In SQL, which command(s) is(are) used to change a table's storage characteristics?`,
  answer: "ALTER TABLE",
  options: [
    "ALTER TABLE",
    "MODIFY TABLE",
    "CHANGE TABLE",
    "None of these"
  ]
},
  {
  numb: 5,
  question: "In SQL, which of the following is not a data definition language command?",
  answer: "UPDATE",
  options: [
    "RENAME",
    "REVOKE",
    "GRANT",
    "UPDATE"
  ]
},
  {
  numb: 6,
  question: `In SQL, which command is used to SELECT only one copy of each set of duplicate rows`,
  answer: `SELECT DISTINCT`,
  options: [
    `SELECT DISTINCT`,
    `SELECT UNIQUE`,
    `SELECT DIFFERENT`,
    `All of the above`
  ]
},
  {
  numb: 7,
  question: `which of the SQL statement is correct ?`,
  answer: "SELECT Username, Password FROM Users",
  options: [
    "SELECT Username AND PAssword FROM Users",
    "SELECT Username, Password WHERE Username = 'user1'",
    "SELECT Username, Password FROM Users",
    "None of these"
  ]
},
  {
  numb: 8,
  question: "The FROM SQL clause is used to ?",
  answer: `specify what table we are selecting or deleting data FROM`,
  options: [
    `specify what table we are selecting or deleting data FROM`,
    `specify range for search condition`,
    `specify search condition`,
    "None of the above"
  ]
},
  {
  numb: 9,
  question: `Which SQL keyword is used to retrieve only unique values?`,
  answer: "DISTINCT",
  options: [
    "DISTINCTIVE",
    "UNIQUE",
    "DISTINCT",
    "DIFFERENT"
  ]
},
  {
  numb: 10,
  question: "Which SQL keyword is used to retrieve a maximun value?",
  answer: "MAX",
  options: [
    "TOP",
    "MOST",
    "UPPER",
    "MAX"
  ]
},
  {
  numb: 11,
  question: `Which of the following SQL command is used to retrieve data?`,
  answer: "SELECT",
  options: [
    "DELETE",
    "SELECT",
    "INSERT",
    "JOIN"
  ]
},
  {
  numb: 12,
  question: `Which of the following is a SQL aggregate function?`,
  answer: "AVG",
  options: [
    "LEFT",
    "AVG",
    "JOIN",
    "LEN"
  ]
},
  {
  numb: 13,
  question: `Which of the following is used to update data in a database?`,
  answer: "UPDATE",
  options: [
    `SAVE`,
    `SAVE AS`,
    "MODIFY",
    "UPDATE"
  ]
},
  {
  numb: 14,
  question: "Which SQL statement is used to delete data from a database?",
  answer: "DELETE",
  options: [
    "DELETE",
    "REMOVE",
    "ALTER",
    "COLLAPSE"
  ]
},
  {
  numb: 15,
  question: "Which SQL keyword is used to sort the result-set?",
  answer: "ORDER BY",
  options: [
    "ORDER BY",
    "SORT BY",
    "ORDER",
    "SORT"
  ]
},
];