// let emp={id:7,name:"shailu",salary:80000}
// console.log(emp.id+"  "+emp.name+"  "+emp.salary)


//istance objects//

// var emp=new Object();
// emp.name="shailu";
// emp.hubby="nani";
// // console.log(emp.name+" "+emp.hubby);
// console.log(emp)



// //constuctors//

function emp(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
user=new emp(5,"shailu",890000);
console.log(user)