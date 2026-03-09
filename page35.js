import express from "express"
const app=express()
const productRouter=express.Router();
const userRouter=express.Router();

productRouter.get("/list",(req,res)=>{
    res.send("Product list")
});

userRouter.get("/list",(req,res)=>{
    res.send("users list")
});

app.use("/products",productRouter);
app.use("/users",userRouter);
app.listen(5000,()=>console.log("Server started"));

//the above code implements the solution for the same router problem 

//same Router(variable) use case

// Router.get("/list",(req,res)=>{
//     res.send("Hello World")
// });                                          http://localhost/products/list ----same router

// Router.get("/user",(req,res)=>{
//     res.send("Hello World")
// });                                        http://localhost/users/list-----same router
// app.use("/products",Router)
// app.use("/users",Router)




// Router.get("/list",(req,res)=>{
//     res.send("Hello World")
// });
// app.use("/products",Router)
// app.listen(5000,()=>console.log("Server started"));


//to run http://localhost:5000/products/list
