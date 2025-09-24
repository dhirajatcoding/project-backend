//--->Promise method<----//
const asynchandler = (requestHandler) => {
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err)=>next(err))
    }
}

export {asynchandler}


// error has no format while sending
// we need a standardized format for error --> NodejsApierror (error class)

// --> try catch method<---//
//step by step for this above line
//1. const asynchandler= () => {}
//2. const asynchandler= (func)=>()=>{}
//2. const asynchandler= (func)=> async ()=>{}
// const asynchandler = (fn) => async(req,res,next) => {
//    try {
//     await fn(req, res, next)
//    } catch (error) {
//     res.status(error.code || 500).json({
//         success:  false,
//         message: err.message
//     })
//    } 
// }
// this wrapper function will be used everywhere