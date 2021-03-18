// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: `What is a correct syntax to output "Hello World" in Java?`,
  answer: `System.out.println("Hello World");`,
  options: [
    `Console.WriteLine("Hello World");`,
    'System.out.println("Hello World");',
    'print ("Hello World");',
    'echo("Hello World");'
  ]
},
  {
  numb: 2,
  question: "Which method can be used to return a string in upper case letters?",
  answer: "toUpperCase()",
  options: [
    "tuc()",
    "uppercase()",
    "touppercase()",
    "toUpperCase()"
  ]
},
  {
  numb: 3,
  question: "Which method can be used to find the highest value of x and y?",
  answer: "Math.max(x,y)",
  options: [
    "Math.maximum(x,y)",
    "Math.max(x,y)",
    "Math.largest(x,y)",
    "Math.maxNum(x,y)"
  ]
},
  {
  numb: 4,
  question: `Which keyword is used to import a package from the Java API library?`,
  answer: "import",
  options: [
    "import",
    "getlib",
    "package",
    "lib"
  ]
},
  {
  numb: 5,
  question: "Which statement is used to stop a loop?",
  answer: "break",
  options: [
    "return",
    "stop",
    "exit",
    "break"
  ]
},
  {
  numb: 6,
  question: `Which of the following is true about inheritance in Java?<br>
  1) Private methods are final.<br>
  2) Protected members are accessible within a package and 
     inherited classes outside the package.<br>
  3) Protected methods are final.<br>
  4) We cannot override private methods. `,
  answer: "1, 2 and 4",
  options: [
    "1, 2 and 4",
    "Only 1 and 2",
    "1, 2 and 3",
    "2, 3 and 4"
  ]
},
  {
  numb: 7,
  question: `Predict the output of following Java program?<br>
  class Test {<br>
    int i;<br>
  },<br>
  class Main {<br>
     public static void main(String args[]) {<br>
       Test t;<br>
       System.out.println(t.i);<br>
  } `,
  answer: "compiler error",
  options: [
    "0",
    "garbage value",
    "compiler error",
    "runtime error"
  ]
},
  {
  numb: 8,
  question: "java.util.Collections is a:",
  answer: `Class`,
  options: [
    "Class",
    "Interface",
    "Object",
    "None of the above"
  ]
},
  {
  numb: 9,
  question: `Which of those doesn't have an index based structure?`,
  answer: "Set",
  options: [
    "List",
    "Map",
    "Set",
    "Array"
  ]
},
  {
  numb: 10,
  question: "HashSet internally uses?",
  answer: "HashMap",
  options: [
    "Set",
    "List",
    "Collection",
    "HashMap"
  ]
},
  {
  numb: 11,
  question: `Which of the following is FALSE about arrays on Java`,
  answer: "Length of array can be changed after creation of array",
  options: [
    "A java array is always an object",
    "Length of array can be changed after creation of array",
    "Arrays have an index based structure",
    "Arrays in Java are always allocated on heap"
  ]
},
  {
  numb: 12,
  question: `Predict the output?<br>
  public class Main {<br>
      public static void main(String args[]) {<br>
         int arr[] = {10, 20, 30, 40, 50};<br>
         for(int i=0; i < arr.length; i++) {<br>
               System.out.print(" " + arr[i]);<br>           
         }<br>
      }<br>
  }`,
  answer: "10 20 30 40 50",
  options: [
    "10 20 30 40 50",
    "Compiler Error",
    "10 20 30 40",
    "50 40 30 20 10"
  ]
},
  {
  numb: 13,
  question: `Predict the output?<br>
  class Test {<br>
    public static void main(String args[]) {<br>
      int arr[2];<br>
      System.out.println(arr[0]);<br>
      System.out.println(arr[1]);<br>
    }<br>
 }`,
  answer: "Compiler Error",
  options: [
    `0<br>
    0`,
    `garbage value<br>
    garbage value`,
    "Compiler Error",
    "Exception"
  ]
},
  {
  numb: 14,
  question: "Type IV JDBC driver is a driver",
  answer: "which communicates through Java sockets",
  options: [
    "which is written in C++",
    "which requires an intermediate layer",
    "which communicates through Java sockets",
    "which translates JDBC function calls into API not native to DBMS"
  ]
},
  {
  numb: 15,
  question: "Which of the following is used to make an Abstract class?",
  answer: "Making atleast one member function as pure virtual function",
  options: [
    "Making atleast one member function as pure virtual function",
    "Making atleast one member function as virtual function",
    "Declaring as Abstract class using virtual keyword",
    "Declaring as Abstract class using static keyword"
  ]
},
];