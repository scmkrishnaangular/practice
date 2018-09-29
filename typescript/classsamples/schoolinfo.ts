import {Student, sampleInfo} from "./studentinfo";

class SchoolInfo {

    student = new Student("Sasi", "5");

    displaySchoolInfo() {
        console.log("School Info =============")
        this.student.displayStrudentInfo();
        sampleInfo();
    }


}

let schoolInfo = new SchoolInfo();
schoolInfo.displaySchoolInfo();
