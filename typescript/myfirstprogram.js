console.log("1. Welcome to my first program");
// Variable declaration
var firstName = "Test Program";
var age = 40;
console.log("2. First Name" + firstName + " Age : " + age);
firstName = "Welcome Program";
// age = 45;
/* */
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
var names = ["Ram", 'Sam', "Ravi"];
console.log("Names in the arraay are  : " + names.length + " Second element " + names[2]);
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var xyz = names_1[_i];
    console.log(" Name " + xyz);
}
// old type
for (var i = 0; i < names.length; i++) {
    console.log(" Name " + names[i]);
}
var studentinfo = ['kumar', 100, true, 'angular'];
for (var _a = 0, studentinfo_1 = studentinfo; _a < studentinfo_1.length; _a++) {
    var info = studentinfo_1[_a];
    console.log("info" + info);
}
// test commit
