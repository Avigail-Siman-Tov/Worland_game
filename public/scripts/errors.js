//Amount of disqualifications accumulated by the user
var num_life = localStorage.getItem("num_ofLife");

//If disqualified once shows 1 disqualification on the screen
if (num_life == 1) {
    help_mistake1();
}
//If disqualified two shows 2 disqualification on the screen
if (num_life == 2) {
    help_mistake1();
    help_mistake2();

}
//If disqualified three shows 3 disqualification on the screen
if (num_life == 3) {
    help_mistake1();
    help_mistake2();
    help_mistake3(); 
}

//The function displays the first error on the screen.Including the icon of the marked answer and the correct answer
function help_mistake1(){
    var mis1 = localStorage.getItem("mistake1");
    var g1 = localStorage.getItem("good1");
    //Cuts the strings we got so that we have the names clean without quotes
    let sub_mis1 = mis1.substr(1, mis1.length - 2);
    let sub_g1 = g1.substr(1, g1.length - 2);
    //Creates an icon type element
    var element11 = document.createElement("i");
    //Inserting the icon-type element into the class and removing unnecessary quotation marks
    element11.className = localStorage.getItem("icon1").replace(/["]/g, '');  
    element11.style=localStorage.getItem("mistakes1_color").replace(/["]/g, '');
    //Defines and initializes a variable that will be inserted into the value in the HTML by its id
    var answers1 = document.getElementById("icon11");
    answers1.append(element11);                              
    document.getElementById("mistake11").innerHTML = sub_mis1;      //Shows me on the screen the text of the first mistake and the correct answer that corresponds to it
    document.getElementById("good11").innerHTML = sub_g1;           //Shows me on the screen the text of the first mistake and the correct answer that corresponds to it
}

//The function displays the second error on the screen.Including the icon of the marked answer and the correct answer
function help_mistake2(){
    var mis2 = localStorage.getItem("mistake2");
    var g2 = localStorage.getItem("good2");
    //Cuts the strings we got so that we have the names clean without quotes
    let sub_mis2 = mis2.substr(1, mis2.length - 2);
    let sub_g2 = g2.substr(1, g2.length - 2);
    var element22 = document.createElement("i");                            //Creates an icon type element
    element22.className = localStorage.getItem("icon2").replace(/["]/g, '');//Inserting the icon-type element into the class and removing unnecessary quotation marks
    element22.style=localStorage.getItem("mistakes2_color").replace(/["]/g, '');
    var answers2 = document.getElementById("icon22");                     //Defines and initializes a variable that will be inserted into the value in the HTML by its id
    answers2.append(element22);                                           
    document.getElementById("mistake22").innerHTML = sub_mis2;            //Shows me on the screen the text of the second mistake and the correct answer that corresponds to it
    document.getElementById("good22").innerHTML = sub_g2;                 //Shows me on the screen the text of the second mistake and the correct answer that corresponds to it
}
//The function displays the third error on the screen.Including the icon of the marked answer and the correct answer
function  help_mistake3(){
    var mis3 = localStorage.getItem("mistake3");
    var g3 = localStorage.getItem("good3");
    //Cuts the strings we got so that we have the names clean without quotes
    let sub_mis3 = mis3.substr(1, mis3.length - 2);
    let sub_g3 = g3.substr(1, g3.length - 2);
    // Third icon for the third mistake
    var element33 = document.createElement("i");                            //Creates an icon type element
    element33.className = localStorage.getItem("icon3").replace(/["]/g, '');//Inserting the icon-type element into the class and removing unnecessary quotation marks
    element33.style=localStorage.getItem("mistakes3_color").replace(/["]/g, '');
    var answers3 = document.getElementById("icon33");                       //Defines and initializes a variable that will be inserted into the value in the HTML by its id
    answers3.append(element33);                                             //Displays the icon on the screen Errors
    document.getElementById("mistake33").innerHTML = sub_mis3;             //Shows me on the screen the text of the third mistake and the correct answer that corresponds to it
    document.getElementById("good33").innerHTML = sub_g3;                  //Shows me on the screen the text of the third mistake and the correct answer that corresponds to it
}

localStorage.clear();    //cleans the localStorage