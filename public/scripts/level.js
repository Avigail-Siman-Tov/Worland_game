//A function intended for the light level,keeps me level,Redirects to the level page
function easy(){
  localStorage.setItem("levelPlay", "1");
  location.href='game'
}
//A function intended for the intermediate level,keeps me level,Redirects to the level page
function normal(){
  localStorage.setItem("levelPlay", "2");
  location.href='game';
}
//A function designed for the hard level,keeps me level,Redirects to the level page
function hard(){
  localStorage.setItem("levelPlay", "3");
  location.href='game';
}





