const express=require("express");
const fs=require("fs");

let app=express();
app.use(express.json());

app.get("/todos",(req,res)=>{
     let data=fs.readFileSync("./db.json","utf-8");
     let parsed_data=JSON.parse(data);
     res.send(parsed_data.todos);
})

app.post("/save",(req,res)=>{
     let todo=req.body;
     let data=fs.readFileSync("./db.json","utf-8");
     let parsed_data=JSON.parse(data);
     let allTodos=parsed_data.todos;
     allTodos.push(todo);
     parsed_data.todos=allTodos;
     fs.writeFileSync("./db.json",JSON.stringify(parsed_data));

     res.send("TODO SAVED");
})

app.delete("/delete",(req,res)=>{
      let id=req.query.id;

      let data=fs.readFileSync("./db.json","utf-8");
      let parsed_data=JSON.parse(data);
      let allTodos=parsed_data.todos;
      let new_todos=allTodos.filter((el)=>el.id!=id);
      parsed_data.todos=new_todos;
      fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
      
      res.send("DELETED");
})

app.listen(3000,()=>{
    console.log("SERVER IS STARTED ON PORT 3000");
})