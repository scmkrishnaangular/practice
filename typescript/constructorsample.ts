
class person
{
    private personname;  
   persongender;
     personage: number;
     
        constructor(name,age,gender)
        {
        this.personname=name;
        this.personage=age;
        this.persongender=gender;
        }
        public DisplayInfo()
        {
        console.log("Name of person: "+ this.personname);
        console.log("Name of person age: "+ this.personage);
        console.log("Name of person gender: "+ this.persongender);

        }

    
        
}
let myperson =new person("kumar",32,'male');
myperson.DisplayInfo();