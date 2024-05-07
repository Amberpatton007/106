function saveTask(){
console.log("saving task");
//get values. The values come from http. They're attributes
const title =$("#txtTitle").val();
const desc =$("txtDescription").val();
const color =$("#selColor").val();
const date =$("#selDate").val();
const status =$("#selStatus").val();
const budget =$("#numBudget").val();
console.log(title, desc,color,date,status,budget);

//build an object using the attributes from above

let taskToSave = new Task (title,desc,color,date,status,budget);
console.log(taskToSave);
displayTask(taskToSave);
//save to server

//display the task
function displayTask(task){

    let syntax = 
    `<div class="task" style="Border-color: ${task.color};">
    <div class="info">

    <h3>${task.title}</h3>
    <p>${task.description}</p>
    </div>
    <label class="status">${task.status}</label>
    <div class="date-budget">
        <label>${task.date}</label>
        <label>${task.budget}</label>
    </div>
    `;
    $(".pending-task").append(syntax);
}


}

//i=i+1;
//i+=1;

function testReq()
{
    $.ajax({
        type: "delete",
        url:"http://fsdiapi.azurewebsites.net",
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error)
        }
    });
}
function init(){

    //load data

    //hook events
$("#btnSave").click(saveTask)
}

window.onload = init;//<-- this is a function, and will be executed 

//what is an init?