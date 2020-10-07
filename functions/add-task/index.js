var uniqid = require('uniqid');



module.exports = async function (context, req) {

    
    context.log('Adding a task to the planner');
   
    const task = req.body;
    
    if (req.method == "GET"){
        context.res = {
            status: 200,
            body: exampletask
        };
    }else{
        
        exampletask.push(task);
        task.id = uniqid("hola")
        context.res = {
            status: 200,
            body: exampletask
        };
    }

    
}

var exampletask = [{ 
                    id : 123,
                    text:"Tarea1",
                    status:"Ready",
                    dueDate: new Date(),
                    responsible:'Johan'},
                   {
                    id : 13233,
                    text:"Do back",
                    status:"Done",
                    dueDate:new Date(),
                    responsible:'Jeisson'},
                    {
                    id : 123213,
                    text: "Frontend",
                    status:"In progress",
                    dueDate:new Date(),
                    responsible:'Johan'}]