class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something swent wrong",
        errors = [],
        stack =""
    )
{

    super(message)
        this.message = message,
        this.statuscode= statusCode
        this.errors =errors
        this.success = false;
        this.data = null
    

    if (stack){
        this.stack = stack
    } else{
        Error.captureStackTrace(this,this.constructot)

     }

    }
    

}
export {ApiError}