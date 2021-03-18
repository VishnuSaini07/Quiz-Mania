// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: `Choose the correct JavaScript syntax to change the content of the following HTML code.<br>
  &lt;p id="geek"&gt;GeeksforGeeks&lt;/p&gt; `,
  answer: "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
  options: [
    "document.getElement(“geek”).innerHTML=”I am a Geek”;",
    "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
    "document.getId(“geek”)=”I am a Geek”;",
    "document.getElementById(“geek”).innerHTML=I am a Geek;"
  ]
},
  {
  numb: 2,
  question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?:",
  answer: "alert(“GeeksforGeeks”);",
  options: [
    "alertbox(“GeeksforGeeks”);",
    "msg(“GeeksforGeeks”);",
    "msgbox(“GeeksforGeeks”);",
    "alert(“GeeksforGeeks”);"
  ]
},
  {
  numb: 3,
  question: `Predict the output of the following JavaScript code.<br>
  &lt;script type="text/javascript"&gt;<br> 
  a = 8 + "8";<br>
  document.write(a);<br>
  &lt;/script&gt;`,
  answer: "88",
  options: [
    "16",
    "Compilation Error",
    "88",
    "Run Time Error"
  ]
},
  {
  numb: 4,
  question: `Predict the output of the following JavaScript code.<br>
  &lt;script type="text/javascript"&gt;<br>
  var a="GeeksforGeeks";<br>
  var x=a.lastIndexOf("G");<br>
  document.write(x);<br>
  &lt;/script&gt;`,
  answer: "8",
  options: [
    "8",
    "0",
    "9",
    "Error"
  ]
},
  {
  numb: 5,
  question: "Which of the following is not a reserved word in JavaScript?",
  answer: "program",
  options: [
    "interface",
    "throws",
    "program",
    "short"
  ]
},
  {
  numb: 6,
  question: `Predict the output of the following JavaScript code.<br>
  &lt;script type="text/javascript" language="javascript"&gt;<br>
  var a = "GeeksforGeeks";<br>
  var result = a.substring(4, 5);<br>
  document.write(result);<br>    
  &lt;/script&gt;`,
  answer: "s",
  options: [
    "s",
    "ks",
    "sf",
    "k"
  ]
},
  {
  numb: 7,
  question: `Predict the output of the following JavaScript code.<br>
  &lt;script type="text/javascript" language="javascript"&gt;<br>
  var x=5;<br>
  var y=6;<br>
  var res=eval("x*y");<br>
  document.write(res);<br>
  &lt;/script&gt;`,
  answer: "30",
  options: [
    "'30'",
    "'5*6'",
    "5*6",
    "30"
  ]
},
  {
  numb: 8,
  question: "What is the syntax for creating a function in JavaScript named as Geekfunc?",
  answer: "function Geekfunc()",
  options: [
    "function = Geekfunc() function = Geekfunc()",
    "function Geekfunc()",
    "function := Geekfunc()",
    "function : Geekfunc()"
  ]
},
  {
  numb: 9,
  question: `How to write an ‘if’ statement for executing some code.<br>
  If “i” is NOT equal to 5?`,
  answer: "if(i!=5)",
  options: [
    "if(i<>5)",
    "if i<>5",
    "if i!=5",
    "if(i!=5)"
  ]
},
  {
  numb: 10,
  question: "How to initialize an array in JavaScript?",
  answer: "var Geeks=[“Geek1”, “Geek2”, “Geek3”]",
  options: [
    "var Geeks=[“Geek1”, “Geek2”, “Geek3”]",
    "var Geeks=(1=Geek1, 2=Geek2, 3=Geek3)",
    "var Geeks=(1:Geek1, 2:Geek2, 3:Geek3)",
    "var Geeks= “Geek1”, “Geek2”, “Geek3”"
  ]
},
  {
  numb: 11,
  question: `What will be the output of the following code?
  &lt;script&gt;<br>
  document.write(typeof(24.49));<br>
  &lt;/script&gt;`,
  answer: "number",
  options: [
    "float",
    "integer",
    "number",
    "double"
  ]
},
  {
  numb: 12,
  question: "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
  answer: "trim()",
  options: [
    "strip()",
    "stripped()",
    "trim()",
    "trimmed()"
  ]
},
  {
  numb: 13,
  question: "What will be the command to print the number of characters in the string “GeeksforGeeks”?",
  answer: "document.write(“GeeksforGeeks”.length);",
  options: [
    "document.write(“GeeksforGeeks”.length);",
    "document.write(sizeof(“GeeksforGeeks”));",
    "document.write(“GeeksforGeeks”.len);",
    " document.write(lenof(“GeeksforGeeks”));"
  ]
},
  {
  numb: 14,
  question: "What is the JavaScript syntax for printing values in Console?",
  answer: "console.log(5);",
  options: [
    "print(5)",
    "console.print(5);",
    "print.console(5);",
    "console.log(5);"
  ]
},
  {
  numb: 15,
  question: "How is the function called in JavaScript?",
  answer: "Geekfunc();",
  options: [
    "Geekfunc();",
    "call Geekfunc();",
    "call function GeekFunc();",
    "function Geekfunc();"
  ]
},
];