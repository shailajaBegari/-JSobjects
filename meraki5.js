var n=require("readline-sync")
var m=n.question("enter the string:")
dict={name:"Raju", marks:56}
m.hasOwnProperty()
//if (dict.hasOwnProperty(m))// this one also we can write//
if(m in dict){
    console.log("yes")
}else{
    console.log("no")
}

///////////////////////////////////////////////******************************* */

// if( m  in dict){
//     console.log("exsits")
// }else{
//     console.log("no")
// }

// console.log(dict)