class AppError extends Error {
    statusCode: number;
    status: string;
    isOperational: boolean;

    constructor(message: string, statusCode: number) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        // Ensure that the properties are defined on the instance
        Object.defineProperty(this, 'name', {
            value: this.constructor.name,
            configurable: true,
            writable: true,
        });

        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;
