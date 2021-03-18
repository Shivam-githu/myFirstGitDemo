//for each
var student:string[]=["Ramesh","Shyam","Sanju","Vikas","Deepak"];
var stdList:string="";

student.forEach((val) =>{
    stdList+=val+",";
})
console.log(stdList);

//map
var num :number[]=[10,15,32,20,21,17,29,32,26,35];
var mapOut=num.map((val)=>{
    return val*2;
})
console.log(mapOut);

//filter:it calls method once for each array element and return array element those who pass the condition
var filterOut=num.filter((val)=>{
    return val>30;
})
console.log("FilterOut():"+filterOut);

//every: it calls method once for each array element and return true only if all array element satisfy condition.
var everyOut=num.every((val)=>{
    return val >24;
})
console.log("Every():"+everyOut);

//some:it calls method once for each array element and return true if some array element pass condition.
var someOut=num.some((val)=>{
    return val>25;
})
console.log("Some():"+someOut);

// reduce/reduceright:it calls method once for each array element and return array as single value.
var reduceOut=num.reduce((pre,text)=>{
        return pre-text;
})
console.log(reduceOut);

//
//ES6
//let:it define variable within block only
//const:it create constant,when create constant we need to initialize

function demo(){
    var num1=100;
    const num2=200;
    if(num1>50){
        let num1=500;
        const num2=300;
        console.log(num1);
        console.log(num2);
    }
    console.log(num1);
    console.log(num2);
}
demo();