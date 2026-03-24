let todo =[];
let a = prompt("Enter above refernces to do the tasks");

while (true){
    
    if(a=="quit"){
        console.log("You Quit the App");
        break;
    }


    if (a=="list"){
    console.log("--------------");
    for(task of todo){
        console.log(task);
    }
    console.log("--------------");
}   else if(a=="add"){
    let task= prompt("enter the activity you want to add");
    todo.push(task);
    console.log("task added");
    }
    a = prompt("Enter above refernces to do the tasks"); 
}   
    
   


    