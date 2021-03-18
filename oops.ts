export class Employee{
   protected empId: number;
   protected empName: string;
     salary: number;

    constructor(id:number,name:string,sal:number){
        this.empId=id;
        this.empName=name;
        this.salary=sal;
    }

    displayDetail(){
        console.log(`EmpId: ${this.empId},EmpName: ${this.empName},Salary: ${this.salary}`);
    }
}
    // var empObject=new Employee(101,"Narendra",4000);
    //  console.log(empObject.empName);
    //  empObject.displayDetail();



export class Position extends Employee{
    post:string;
    address:string;
    constructor(id:number,name:string,sal:number,post:string,address:string){
         super(id,name,sal);
         this.post=post;
         this.address=address;
    }

    displayDetail(){
        console.log(`EmpId: ${this.empId},EmpName: ${this.empName},Salary: ${this.salary},Post: ${this.post},Address:${this.address}`);
    }
}
var posObj=new Position(101,"Narendra",40000,"Java Developer","Hyderabad");
posObj.displayDetail();