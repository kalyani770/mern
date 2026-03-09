import express from "express";
import session  from "express-session";
import expressLayouts from "express-ejs-layouts";
const app = express();
app.use(expressLayouts)
app.use(express.static("mern")) //public
app.set("layout","layout")
app.set("view engine","ejs");
app.set("views","views");
app.use(express.urlencoded({extended:true}));
app.use(
    session({
        secret:"mysecretkey",//recomended to store env file
        resave:false,        //session is saved every request even if there is no chnage
        saveUninitialized:false,  //if true a default cookie gets created immediately 
    }),
);
//Array of objects
let users=[
    {name:"Kalyani",email:"kalyani@gmail.com",password:"7707"},
    {name:"heidi",email:"heidi@gmail.com",password:"1234"},
    {name:"shinchan",email:"shinchan@gmail.com",password:"5678"},
];
 
app.get("/login",(req,res)=>{
    res.render("login",{error:null});
});

app.post("/login",(req,res)=>{
    // res.redirect("/")
    const {email,password} =req.body;
    const user =users.find((user)=>user.email===email);
    if(user){
        if(user.password===password){
            req.session.user=user; //session id gets created,check in browswer--inspect--application--cookies
            res.redirect("/");         //redirect--file path
        }else{
            res.render("login",{error:"Invalid password"});    //render---file name
        }

    }else{
        res.render("login",{error: "User not found"});
    }       
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/register",(req,res)=>{
    users=[...users,req.body];
    res.redirect("/");
    // const {name,email,password} =req.body;
    // users=[...users,name=name,
    //     email=email,
    //     password=password
    // ];
    // res.redirect("/");
    

});
app.get("/",(req,res)=>{
    if(req.session.user){
        res.render("dashboard",{users});  //render-asking /requesting data by server
    }
    else{
        res.redirect("/login");
    }
});

app.listen(2000,()=>console.log("server started"));

// in order to run login page http://localhost:5000/login

