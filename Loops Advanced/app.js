let fruits =[
    ["banana","mango","litchi"] , 
    ["guava","grapes","papaya"]
]
for (let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);

for(let j=0;j<fruits[i].length;j++){
    console.log(`j=${j},${fruits[i][j]}`);
}
}

