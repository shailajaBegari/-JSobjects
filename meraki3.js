var mainString="My name is kumar, and my friend’s name is Dhamu" 
var subString="is"
var count=0
a=mainString.split(" ")
console.log(a)
for (var i in a){
    if (a[i]==subString){
        count+=1
    }
}
console.log(count)
if(count==2){
    console.log("The substring is there 2 times in main string.")
}else{
    console.log("no")
}
