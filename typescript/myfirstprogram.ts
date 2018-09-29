console.log("1. Welcome to my first program");

// Variable declaration
var firstName : string = "Test Program";
const age = 40;

console.log("2. First Name" + firstName + " Age : " + age);

firstName = "Welcome Program";

// age = 45;

/* */

console.log("2. First Name" + firstName + " Age : " + age);

function test ()  :string {

    let a = true;

    if (a) {
        let name = "Krishna";
        var gender = "male"
        console.log("Name " + name + " gender " + gender);
    }

    console.log("gender outside IF : " +  gender);

    return "Welcome to my Program !!! ";
}

let freturnValue = test();

console.log("3. Function Retunr Value : " + freturnValue);


let names = ["Ram", 'Sam', "Ravi"];

console.log("Names in the arraay are  : " + names.length + " Second element " + names[2]);

for(let xyz of names) {
    console.log(" Name " + xyz);
}


// old type
for(let i = 0 ; i < names.length; i++) {
    console.log(" Name " + names [i] );
}
//true tupe array
let studentinfo:[string,number,boolean,string ]=['kumar',100,true,'angular'];
 for(let info of studentinfo)
 {
     console.log("info: "+info);
 }



// test commit