console.log("1. Welcome to my first program");
// Variable declaration
var firstName = "Test Program";
var age = 40;
console.log("2. First Name" + firstName + " Age : " + age);
firstName = "Welcome Program";
age = 45;
console.log("2. First Name" + firstName + " Age : " + age);
function test() {
    var a = true;
    if (a) {
        var name_1 = "Krishna";
        var gender = "male";
        console.log("Name " + name_1 + " gender " + gender);
    }
    console.log("gender outside IF : " + gender);
    return "Welcome to my Program !!! ";
}
var freturnValue = test();
console.log("3. Function Retunr Value : " + freturnValue);
