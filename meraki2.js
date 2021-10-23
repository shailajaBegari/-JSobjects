var n=require("readline-sync")
var m=n.question("enter the number::")
d={}
for(i=1;i<=m;i++){
    d[i]=i*i
}
console.log(d)