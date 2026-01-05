class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something swent wrong",
        errors = [],
        stack =""
    )
{

    super(message)//to acess the class /constructor
        this.message = message,
        this.statuscode= statusCode
        this.errors =errors
        this.success = false;
        this.data = null
    

    if (stack){
        this.stack = stack
    } else{
        Error.captureStackTrace(this,this.constructor)

     }

    }
    

}
export {ApiError}