config.devServer = Object.assign(
    {},
    config.devServer || {},
    {
        port: 8080,
        historyApiFallback: true
    }
);
