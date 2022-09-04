//pass to screen game
function delay() {
    location.href = 'game';
}
//print two number on screen
setTimeout(function () {
    var big = document.querySelector(".show-numbers > .big-outer");
    big.innerHTML = "2";
}, 1000);
//print one number on screen
setTimeout(function () {
    var big = document.querySelector(".show-numbers > .big-outer");
    big.innerHTML = "1";
}, 2000);
//print go word on screen
setTimeout(function () {
    var big = document.querySelector(".show-numbers > .big-outer");
    var small = document.querySelector(".show-numbers > .small-fill");
    big.innerHTML = "GO!";
    big.classList.remove("animate-big-left-to-right");
    small.innerHTML = "GO!";
    small.classList.remove("animate-small-left-to-right");
    small.classList.add("show-scale-2");
    small.style.left = "50%";
    small.style.fontSize = "25vh";
}, 3000);
setTimeout(function () {
    var show = document.querySelector(".show-numbers");
    show.style.display = "none";
}, 4500);
