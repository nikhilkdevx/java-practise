//  let id= setInterval(()=>{
//     console.log("You will be ahead if not watched");
// },1000);

// console.log(id)
// let square = n => n*n;
// let id1= setInterval(()=>{
//     console.log("Hello World");
// },2000);
    
// setTimeout(()=>{
//     clearInterval(id1);
// },5000);

// let arrayAverage = (array)=>{
//     let total = 0;
//     for(let number of array){
//         total += number;

//     }
//     return total/ array.length;

// };
// let array=[3,5,6];
// console.log(arrayAverage(array));

// let Even = (n) =>{
//     if(n%2==0){
//         console.log("Even");
//     }
//     else{
//         console.log("odd");
//     }

// };
// let array = [1,2,3,4,5];
// // function print(el){
// //     console.log(el);
// // }
// // array.forEach(print);

// array.forEach((el)=>{
//     console.log(el);
// })

// let array=[{
//     Name:"Nik",
//     Marks:50 
// },{
//     Name:"kauk",
//     Marks:70 
// },{
//     Name:"Lauk",
//     Marks:70 
// }];
// let gpa = array.map((el) =>{
//     return el.Marks/10 ;
// });
// console.log(gpa);




// array.forEach((el)=>{console.log(el.Marks)});
// let num = [1,2,3,4];
// let triple = num.map((el)=>{
//     return el*3;
// })
// console.log(triple);

let num = [1,2,3,4,5,6,7,8, 9,10];
let even = num.filter((el)=>{
    return (el %2 !=0);
})
console.log(even);