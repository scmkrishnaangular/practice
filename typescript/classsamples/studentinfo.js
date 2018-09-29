"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(name, standard) {
        this.studentid = 200;
        this.firstName = name;
        this.standard = standard;
    }
    Student.prototype.getSchoolName = function () {
        console.log("School Name : " + Student.schoolname);
        return Student.schoolname;
    };
    Student.prototype.displayStrudentInfo = function () {
        console.log("Student ID : " + this.studentid);
        console.log("Student name : " + this.firstName);
        console.log("Strudent class : " + this.standard);
    };
    Student.prototype.claculateAge = function () {
        console.log("Interface method calc Age called");
        return 20;
    };
    // #1 : Memeber variables 
    Student.schoolname = "ABC School";
    return Student;
}());
exports.Student = Student;
var EngStudent = /** @class */ (function (_super) {
    __extends(EngStudent, _super);
    function EngStudent(id, name, standard) {
        var _this = _super.call(this, name, standard) || this;
        _this.subjects = ["Maths", "OS", "Java"];
        _this.studentid = id;
        return _this;
    }
    // overriding the displayStrudentInfo
    EngStudent.prototype.displayStrudentInfo = function () {
        _super.prototype.displayStrudentInfo.call(this);
        console.log("Subjects : " + this.subjects);
    };
    return EngStudent;
}(Student));
function sampleInfo() {
    console.log("Sample Info");
}
exports.sampleInfo = sampleInfo;
var mystudent = new Student("Krishna", "Angular");
mystudent.displayStrudentInfo();
var engStudent = new EngStudent(150, "Sasi", "BE CSC");
engStudent.displayStrudentInfo();
console.log("Student Age @@@@ : " + engStudent.claculateAge());
mystudent.getSchoolName();
engStudent.getSchoolName();
Student.schoolname = "XYZ";
mystudent.getSchoolName();
engStudent.getSchoolName();
sampleInfo();
