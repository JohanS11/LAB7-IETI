module.exports = async function (context, req) {


    context.log('Adding a task to the planner');
   
    const task = req.body;
    const id = uniqid(task.id);
   
    if (req.method == "GET"){
        context.res = {
            status: 200,
            body: exampletask
        };
    }else{
        context.res = {
            status: 200,
            body: "hola"
        };
    }

    
}

var exampletask = [{ 
                    text:"Tarea1",
                    status:"Ready",
                    dueDate: new Date(),
                    responsible:'Johan'},
                   {
                   
                    text:"Do back",
                    status:"Done",
                    dueDate:new Date(),
                    responsible:'Jeisson'},
                    {
            
                    text: "Frontend",
                    status:"In progress",
                    dueDate:new Date(),
                    responsible:'Johan'}]