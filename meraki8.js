var list1=["one","two","three","four","five"]
var list2=[1,2,3,4,5,]
d={}
for( i in list1){
        d[list1[i]]=list2[i]
}
console.log(d)