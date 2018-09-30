var person = /** @class */ (function () {
    function person(name, age, gender) {
        this.personname = name;
        this.personage = age;
        this.persongender = gender;
    }
    person.prototype.DisplayInfo = function () {
        console.log("Name of person: " + this.personname);
        console.log("Name of person age: " + this.personage);
        console.log("Name of person gender: " + this.personage);
    };
    return person;
}());
var myperson = new person("kumar", 32, 'male');
myperson.DisplayInfo();
