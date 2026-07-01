const loggingMiddleware = (req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const ms = Date.now() - start;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} (${ms}ms)`);
    });
    next();
};
module.exports = loggingMiddleware;