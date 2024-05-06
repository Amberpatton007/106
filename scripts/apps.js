function saveTask(){
console.log("saving task");
//get values
const title =$("#txtTitle").val();
const desc =$("txtDescription").val();
const color =$("#selColor").val();
const date =$("#selDate").val();
const status =$("#selStatus").val();
const budget =$("#numBudget").val();
console.log(title, desc,color,date,status,budget);
//build an object

//save to server

//display the task

}

//i=i+1;
//i+=1;
function init(){

    //load data

    //hook events
$("#btnSave").click(saveTask)
}

window.onload = init;//<-- this is a function, and will be executed 

//what is an init?