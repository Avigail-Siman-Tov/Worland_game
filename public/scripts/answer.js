
var x = localStorage.getItem("mistakes1");//Gets the first string of the first error and the correct answer
var y = localStorage.getItem("mistakes2");//Gets the second string of the second error and the correct answer
var z = localStorage.getItem("mistakes3");//Gets the third string of the third mistake and the correct answer

let subX = x.substr(1, x.length-2);//Cuts the incorrect and correct company name string to get the name only
let subY = y.substr(1, y.length-2);//Cuts the incorrect and correct company name string to get the name only
let subZ = z.substr(1, z.length-2);//Cuts the incorrect and correct company name string to get the name only



//First icon for the first mistake 
var e=document.createElement("i");//Creates an icon type element
e.className=localStorage.getItem("mistakes4").replace(/["]/g, '');//Inserting the icon-type element into the class and removing unnecessary quotation marks
// console.log(e.className);
// var z=document.createElement("i");
// z.style.color=localStorage.getItem("mistakes1_color");
// var answersss=document.getElementById("answer7");//Defines and initializes a variable that will be inserted into the value in the HTML by its id
// answersss.append(z);
var answers1=document.getElementById("answer1");//Defines and initializes a variable that will be inserted into the value in the HTML by its id
answers1.append(e);//Displays the icon on the screen Errors
document.getElementById("answer4").innerHTML =subX+"<br>" +" <br>";//Shows me on the screen the text of the first mistake and the correct answer that corresponds to it
//A second icon for the second mistake 
var r=document.createElement("i");//Creates an icon type element
r.className=localStorage.getItem("mistakes5").replace(/["]/g, '');//Inserting the icon-type element into the class and removing unnecessary quotation marks
var answers2=document.getElementById("answer2");//Defines and initializes a variable that will be inserted into the value in the HTML by its id
answers2.append(r);//Displays the icon on the screen Errors
document.getElementById("answer5").innerHTML =subY+" <br>"+" <br>" ;//Shows me on the screen the text of the second mistake and the correct answer that corresponds to it
// Third icon for the third mistake
var q=document.createElement("i");//Creates an icon type element
q.className=localStorage.getItem("mistakes6").replace(/["]/g, '');//Inserting the icon-type element into the class and removing unnecessary quotation marks
var answers3=document.getElementById("answer3");//Defines and initializes a variable that will be inserted into the value in the HTML by its id
answers3.append(q);//Displays the icon on the screen Errors
document.getElementById("answer6").innerHTML =subZ+" <br>";//Shows me on the screen the text of the third mistake and the correct answer that corresponds to it
localStorage.clear();//cleans the localStorage
