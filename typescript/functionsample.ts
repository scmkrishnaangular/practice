function sumvar(a:number,b:number):number
{
return a+b;
}

let c=sumvar(10,15);
console.log("Sum Value ="+c);


function sumvar1(a,b)
{
return a+b;
}

let d=sumvar(10,15);
console.log("Sum Value ="+d)

/*d=sumvar1("ab",19);
console.log("Sum Value ="+d)*/

function sumvar2(a:number,b:any)
{
return a+b;
}
d=sumvar2(10,10);

console.log(d);

d=sumvar2(10,"ghghg");

console.log("with sting "+d);

d=sumvar2(10,true);

console.log("with boolen "+ d);

//optionl parmeter

function sumvar3(b:any, a?:number)
{
    console.log("b value ="+b);
    console.log("a value ="+a);
return a+b;
}
d=sumvar3(10);
console.log("with optionla parametter " + d);


//default value assign
function sumvar4(a:number, b=10)
{
    console.log("b value ="+b);
    console.log("a value ="+a);
return a+b;
}
d=sumvar4(100);
console.log("with optionla parametter " + d);

d=sumvar4(100, 50);
console.log("with optionla parametter " + d);

//union
function sumvar5(a:number | string, b=10)
{
    console.log("b value ="+b);
    console.log("a value ="+a);

}
sumvar5(100,50);
//console.log("with optionla parametter " + d);

sumvar5("Fita",50);
//console.log("with optionla parametter " + d);
//union
function sumvar6(a:number | string | boolean, b=10)
{
    
        console.log("a is number" +typeof(a) )
    

    console.log("b value ="+b);
    console.log("a value ="+a);

}
sumvar6(100,50);
//console.log("with optionla parametter " + d);
sumvar6("Fita",50);
sumvar6(true,50);