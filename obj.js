let student={sna:"Praveen",age:24,demo:function(){
    console.log("hello");
}
}
student.demo();



let student1={sna:"Praveen",age:24,demo:function(){
    console.log("hello "+this.sna+" i think your age is "+this.age);
}
}
student1.demo();


let student2=[
    {sna:"Praveen",age:24,sma:94},
    {sna:"Vijay",age:23,sma:88},
    {sna:"Akash",age:25,sma:92}

]
student2.forEach((stu)=>{
    console.log("Hello "+stu.sna+" your age is "+stu.age+" and your mark is "+stu.sma);
});
let newStud=student2.map((stu)=>{
    return {name:stu.sna,score:stu.sma+5};
});
console.log(newStud);