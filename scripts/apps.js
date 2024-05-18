function saveTask(){
console.log("saving task");
//get values. The values come from http. They're attributes
const title =$("#txtTitle").val();
const description =$("txtDescription").val();
const color =$("#selColor").val();
const date =$("#selDate").val();
const status =$("#selStatus").val();
const budget =$("#numBudget").val();
console.log(title,description,color,date,status,budget);

//build an object using the attributes from above

let taskToSave = new Task (title,description,color,date,status,budget);
console.log(taskToSave);

//save to server

    $.ajax({
        type: "POST",
        url:"http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function(res) {
            console.log(res);
            //displayTask(taskToSave);
            },
        error: function(error) {
            console.log(error);
        }
});




}

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

function loadTask(){
    $.ajax({
        type: "GET",
        url:"http://fsdiapi.azurewebsites.net/api/tasks",
        success: function(response) {

            let data = JSON.parse(response);
            console.log(data);
            for(let i=0; i<data.length; i++)
            {   let task = data[i];
                if(task.name == "Amber")
            {
            displayTask(task)
            }
        }
            displayTask(data);
            console.log(response);
        },
        error: function(error) {
            console.log(error)
        }
});
}


//i=i+1;
//i+=1;

function testReq()
{
    $.ajax({
        type: "GET",
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
loadTask();
}

window.onload = init;//<-- this is a function, and will be executed 

//what is an init?