const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const methodOverride=require("method-override");
const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.listen(port,()=>{
  console.log(`listening at port ${port}`);
})
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "*******",
});

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),

    faker.internet.password(),
  ];
};

// let data=[];
// for (i = 1; i <= 100; i++) {
//   data.push(createRandomUser());
// }
// let q = "create table user(id varchar(40) primary key,username varchar(40),email varchar(40),password varchar(40))";
// let t="drop table user";
// let w = "insert into user values ?";
// let users = [
//   [3, "Sahil"],
//   [4, "Pavan"],
// ];
// 
// // try {
// //   connection.query(w, [data], (error, result) => {
// //     if (error) throw error;
// //     console.log(result);
// //   });
// // } catch (error) {
// //   console.log(error);
// // }

// try {
//   connection.query(z, (error, result) => {
//     if (error) throw error;
//     console.log(result);
//   });
// } catch (error) {
//   console.log(error);
// }

// //   console.log(createRandomUser());

// connection.end();


let count="select count(username) as count from user";
let val;
try{
  connection.query(count,(error,result)=>{
    if(error) throw error;
    let {count}=result[0];
    val=count;

  })
}
catch(error){
  console.log(error);
}

function func(){
  return new Promise((resolve,reject)=>{
    let z = "select * from user";


  connection.query(z,(error,result)=>{
    if(error) {
      reject(error);
    }
    else{
      resolve(result);
    }
    
  });

  });
}

// console.log(info);
app.get('/',(req,resp)=>{
  resp.send({val});
});

app.get('/users',async (req,resp)=>{
  try{
    let users=await func();
    if(!users) throw new error("Users not found");
    resp.render("index.ejs",{users}); 
  }
  catch(error){
    console.log(error);
  }
})

app.get('/users/new',(req,resp)=>{
    resp.render("new.ejs");
});

app.post('/users',(req,resp)=>{
    let {username,email,password}=req.body;
    // console.log(username,email,password);
    let id=faker.string.uuid();
    let q="insert into user (id,username,email,password) values (?,?,?,?)";
    try{
      connection.query(q,[
        
        
        id,username,email,password],(error,result)=>{
        if(error) throw error;
        resp.redirect("/users");
      })
    }
    catch(error){
      console.log(error);
    }
    
});

app.get('/users/:id',(req,resp)=>{
  let {id}=req.params;
  let q="select * from user where id=?";
  // console.log(id);
  try{
    connection.query(q,[id],(error,result)=>{
      if(error) throw error;
      let user=result[0];
      resp.render("edit.ejs",{user});
    })
  }
  catch(error){
    console.log(error);
  }
  
});

app.patch('/users/:id',(req,resp)=>{
  let {id}=req.params;
  let {username}=req.body;
  console.log(id);
  let q="update user set username=? where id=?;";
 try{
  connection.query(q,[username,id],(error,result)=>{
    if(error) throw error;
    // console.log(result);
    resp.redirect("/users");
  })
 }
 catch(error){
  console.log(error);
 }
});

app.delete('/users/:id',(req,resp)=>{
    let {id}=req.params;
    let q="delete from user where id=?";
    try{
      connection.query(q,[id],(error,result)=>{
        if(error) throw error;
        console.log(result);
        resp.redirect("/users");
      })
    }
    catch(error){
      console.log(error);
    }
})

