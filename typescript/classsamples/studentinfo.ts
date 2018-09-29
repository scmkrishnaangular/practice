import {IStudentInfo} from "./interfacesample"

export class Student  implements IStudentInfo{

    // #1 : Memeber variables 
    static schoolname = "ABC School"
    protected studentid : number = 200;
    protected firstName : string;
    standard;

    constructor(name, standard) {
        this.firstName = name;
        this.standard = standard;
    }

    getSchoolName() : string {
        console.log("School Name : " + Student.schoolname);
        return Student.schoolname;
    }

    displayStrudentInfo() {
        console.log("Student ID : " + this.studentid);
        console.log("Student name : " + this.firstName);
        console.log("Strudent class : " + this.standard);
    }

    claculateAge () {
        console.log("Interface method calc Age called");
        return 20;
    }

}

class EngStudent extends Student {

    subjects = ["Maths", "OS", "Java"]

    constructor(id, name, standard) {
        super(name, standard);
        this.studentid = id;
    }

    // overriding the displayStrudentInfo
    displayStrudentInfo() {
        super.displayStrudentInfo();
        console.log("Subjects : " + this.subjects);
    }

}

export function sampleInfo() {
    console.log("Sample Info");
}

let mystudent = new Student("Krishna", "Angular");
mystudent.displayStrudentInfo();

let engStudent =  new EngStudent(150, "Sasi", "BE CSC");

engStudent.displayStrudentInfo();

console.log("Student Age @@@@ : " + engStudent.claculateAge());

mystudent.getSchoolName();
engStudent.getSchoolName();

Student.schoolname = "XYZ";

mystudent.getSchoolName();
engStudent.getSchoolName();

sampleInfo();
