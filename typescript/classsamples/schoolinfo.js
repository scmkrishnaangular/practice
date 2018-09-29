"use strict";
exports.__esModule = true;
var studentinfo_1 = require("./studentinfo");
var SchoolInfo = /** @class */ (function () {
    function SchoolInfo() {
        this.student = new studentinfo_1.Student("Sasi", "5");
    }
    SchoolInfo.prototype.displaySchoolInfo = function () {
        console.log("School Info =============");
        this.student.displayStrudentInfo();
        studentinfo_1.sampleInfo();
    };
    return SchoolInfo;
}());
var schoolInfo = new SchoolInfo();
schoolInfo.displaySchoolInfo();
