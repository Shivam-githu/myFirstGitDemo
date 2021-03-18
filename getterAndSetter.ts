class Employee1{
    private empName:string;
    private empPost:string;
    private empSalary:number;

    set _name(value){
       this.empName=value;
    }

    get _name(){
        return this.empName;
    }

    set _post(value){
        this.empPost=value;
    }
    get _post(){
        return this.empPost;
    }

    set _salary(value){
        this.empSalary=value;
    }
    get _salary(){
        return this.empSalary;
    }

    displayEmployeeDetails(){
     console.log(`Employee Name:${this.empName},Post:${this.empPost},Salary:${this.empSalary}`);   
    }
}

var empObj=new Employee1();
empObj._name="Lingeshwar";
console.log("Name :"+empObj._name);
empObj._post="Angular Developer";
console.log("Post :"+empObj._post);
empObj._salary=30000;
console.log("Salary :"+empObj._salary);
