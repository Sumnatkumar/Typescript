// console.log("Welcome to my Channel");
//ES5 VAR
//ES6 2015 VAR LET
function subscribe() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("finally outside the block " + i);
}
subscribe();
