d1 = {'a': 100, 'b': 200, 'c':300}
d2 = {'a': 300, 'b': 200, 'd':400}
d3={}
for(var k1 in d1){
    for(var k2 in d2){
        if (k1==k2){
            d3[k1]=d1[k1]+d2[k2]
        }
    }
}
d3[k1]=d1[k1]
d3[k2]=d2[k2]
console.log(d3)