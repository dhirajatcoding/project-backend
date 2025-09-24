// Api errors will be handled in this way
class ApiError extends Error{
    // own constructor
    constructor(
        statusCode,
        message= "something went wrong",
        error = [],
        stack =""
    ){
        super(message)
        this.statusCode= statusCode
        this.data = null
        this.message =message
        this.success = false;
        this.errors = errors 

        if(stack){
            this.stack = stack
         }else{
            Error.captureStackTrace(this,this.constructor)
         }
    }
}

export {ApiError}
// errors nodejs trace karta hai
// but req res core nodejs nahi karta express framework karte hein