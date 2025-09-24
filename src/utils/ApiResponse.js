class ApiResponse {
    constructor(statusCode, data, message="Success"){
        this.statusCode = statusCode
        this.data =data
        this.message = message
        this.success= statusCode < 400
    }
    
}

// api have specified status codes
// 100- 200 info related response
// 400 - 500 client error
// 500 - 600 server error response