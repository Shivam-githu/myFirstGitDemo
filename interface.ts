interface IStudent{
    stdName:string;
    stdContact:number;
    stdDetail();
}

class StudentImpl implements IStudent{
    stdName;
    stdContact;
    constructor(sname:string,scontact:number){
        this.stdName=sname;
        this.stdContact=scontact;
    }
    stdDetail(){
        console.log(`Student Name : ${this.stdName}, Contact No. :${this.stdContact}`);
    }
}

var studentObj=new StudentImpl("Jhanvi",9532421585);
studentObj.stdDetail();