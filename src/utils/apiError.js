class ApiError extends Error {
    constructor(statusCode = '500', ...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params)

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError)
        }

        this.name = 'ApiError'
        // Custom debugging information
        this.statusCode = statusCode
        this.date = new Date()
    }
}

export default ApiError
