class ApiResponse {
    constructor(
        statusCode,
        message = "Success",
        data,
        errors,
        stack,
        cause
    ) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.errors = errors;
        this.stack = stack;
        this.cause = cause;
        this.success = statusCode < 400;
    }
}