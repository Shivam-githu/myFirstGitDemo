
var empList=[

    {id:101,name:"samar",post:"QA Enginner",salary:50000,address:"Noida"},
    {id:102,name:"shivam",post:"Software Engineer",salary:100000,address:"Hyderabad"},
    {id:103,name:"anoop",post:"DevOps Enginner",salary:90000,address:"Banglore"},
    {id:104,name:"sateesh",post:"FrontEnd Developer",salary:25000,address:"Banglore"},
    {id:101,name:"deepak",post:"QA Enginner",salary:40000,address:"Noida"},

]

empList.forEach((val)=>{

    if(val.salary>80000){
    console.log(`EmpId:${val.id},Name:${val.name},Post:${val.post},Salary:${val.salary},Address:${val.address}`);
    }
});


var empFilter=empList.filter((val)=>{

    return val.salary>80000;

});
console.log(empFilter);

var empMap=empList.map((val)=>{

    return val.salary+(val.salary*0.20);
});
console.log(empMap);

