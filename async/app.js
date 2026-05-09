let h1=document.querySelector("h1");

// setTimeout(function(){
//     h1.style.color = "blue";
// },1000);

// setTimeout(function(){
//     h1.style.color = "orange";
// },2000);
// setTimeout(function(){
// h1.style.color = "pink";
// },3000)

//  

// function saveToDb(data,success,failure){
//     let timeInterval = Math.floor(Math.random()*10 + 1);
//     if(timeInterval>4){
//         success();
//     } else{
//         failure();
//     }
// }

// saveToDb("nik",()=>{
//     console.log("success ! data was saved");
//     saveToDb("xyz",()=>{
//         console.log("success 2 ! data was saved");
//         saveToDb("abc",()=>{
//             console.log("success 3 ! data was saved");
//         },()=>{
//             console.log("failure3! Data was not saved");
//         })
//     },()=>{
//         console.log("failure2! Data was not saved");
//     });
// },()=>{
//     console.log("failure! Data was not saved");
// });

function saveToDb(data){
    return new Promise((resolve,reject) => {
        let timeInterval = Math.floor(Math.random()*10 + 1);
        if(timeInterval > 4){
            resolve("success ! Data was Saved ");
        } else {
            reject("Failure ! Data was not Saved");
        }
    
    });
}

saveToDb("abc")
    .then((result)=>{
    console.log("promise solved");
    console.log(result);
    return saveToDb("xyz")
    
        .then((result)=>{
        console.log("data 2 was saved");
        console.log(result);
            return saveToDb("Nik")
            .then((result)=>{
            console.log("data 3 saved");
            console.log(result);
            });
    });
        })
    .catch((error)=>{
    console.log("promise rejected");
    console.log(error);
});

