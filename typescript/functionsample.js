function sumvar(a, b) {
    return a + b;
}
var c = sumvar(10, 15);
console.log("Sum Value =" + c);
function sumvar1(a, b) {
    return a + b;
}
var d = sumvar(10, 15);
console.log("Sum Value =" + d);
/*d=sumvar1("ab",19);
console.log("Sum Value ="+d)*/
function sumvar2(a, b) {
    return a + b;
}
d = sumvar2(10, 10);
console.log(d);
d = sumvar2(10, "ghghg");
console.log("with sting " + d);
d = sumvar2(10, true);
console.log("with boolen " + d);
//optionl parmeter
function sumvar3(b, a) {
    console.log("b value =" + b);
    console.log("a value =" + a);
    return a + b;
}
d = sumvar3(10);
console.log("with optionla parametter " + d);
//default value assign
function sumvar4(a, b) {
    if (b === void 0) { b = 10; }
    console.log("b value =" + b);
    console.log("a value =" + a);
    return a + b;
}
d = sumvar4(100);
console.log("with optionla parametter " + d);
d = sumvar4(100, 50);
console.log("with optionla parametter " + d);
//union
function sumvar5(a, b) {
    if (b === void 0) { b = 10; }
    console.log("b value =" + b);
    console.log("a value =" + a);
}
sumvar5(100, 50);
//console.log("with optionla parametter " + d);
sumvar5("Fita", 50);
//console.log("with optionla parametter " + d);
//union
function sumvar6(a, b) {
    if (b === void 0) { b = 10; }
    console.log("a is number" + typeof (a));
    console.log("b value =" + b);
    console.log("a value =" + a);
}
sumvar6(100, 50);
//console.log("with optionla parametter " + d);
sumvar6("Fita", 50);
sumvar6(true, 50);
