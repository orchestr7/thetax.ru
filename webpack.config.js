let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: [require('path').resolve(__dirname, "kotlin/thetax-frontend.js")]
};
config.output = {
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "frontend.js"
            : "frontend-[name].js";
    },
    library: "frontend",
    libraryTarget: "umd",
    globalObject: "this"
};
config.output.path = require('path').resolve(__dirname, "../../../../frontend/build/kotlin-webpack/js/productionExecutable")
    // source maps
    config.module.rules.push({
            test: /\.m?js$/,
            use: ["source-map-loader"],
            enforce: "pre"
    });
    config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]
    
// KotlinWebpackCssRule[css]
;(function(config) {
            const use = [{
    loader: 'style-loader',
    options: {}
},{
    loader: 'css-loader',
    options: {}
}]
config.module.rules.push({
    test: /\.css$/,
    use: use,
    exclude: undefined,
    include: undefined,
})
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);

// css.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

config.module.rules.push(
    {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,  // creates CSS files from css-loader's output
            'css-loader', // translates CSS into CommonJS
            {
                loader: 'postcss-loader', // Run postcss actions
                options: {
                    postcssOptions: {
                        plugins: [
                            "autoprefixer",
                        ],
                    },
                },
            },
            'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ]
    },
    {
        // loader for fonts
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
            loader: 'file-loader',
        }
    },
);

config.plugins.push(
    new MiniCssExtractPlugin()
)


// dev-server.js
config.devServer = Object.assign(
    {},
    config.devServer || {},
    {
        port: 8080,
        historyApiFallback: true
    }
);


// optimizations.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.plugins.push(
    new HtmlWebpackPlugin({
        template: 'index.html',
        publicPath: '/',
    })
);

if (config.mode === "production") {
    config.optimization = {
        // todo: use https://webpack.js.org/guides/output-management/ instead of manually adding js files into html
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    };
}


// plugins.js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//config.plugins.push(
//    new BundleAnalyzerPlugin()
//);

config.resolve.fallback = {
    "os": require.resolve("os-browserify/browser"),
    "path": require.resolve("path-browserify")
}


module.exports = config
