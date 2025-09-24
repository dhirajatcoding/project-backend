import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at port: ${process.env.PORT}`);        
    })
})
.catch((err)=>{
      console.log("Mongodb connection failed",err);     
})






// wrapper bana le connection ka toh direct function mai wrapper lagake execute kar denge
// middlewares ya configuration setting --> app.use()
// req.body se json,files aa sakte hein
// url se mostly req.params se data aata hai
//async method complete hone pe promise return karta hai




















// import express from "express"
// const app = express()

// ( async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
//        app.on("error",(error)=>{
//         console.log("error",error);
//        })

//        app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.error("ERROR:", error)
//     }
// })()