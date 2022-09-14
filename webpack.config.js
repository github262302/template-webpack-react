// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const webpack = require("webpack");
const isProduction = process.env.NODE_ENV == "production";
const { routes } = require("./config/mock");
const builds = require("builds-webpack-plugin");
const stylesHandler = isProduction
    ? MiniCssExtractPlugin.loader
    : "style-loader";
/**
 * @type {webpack.Configuration}
 * */
const config = {
    // 入口文件
    entry: ["./src/index.tsx", "./src/global.css"],
    // 出口文件
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    // 开发服务器
    devServer: {
        open: false,
        host: "localhost",
        onBeforeSetupMiddleware: s => {
            if (!s) {
                throw new Error("webpack-dev-server is not defined");
            }
            s.app?.use(routes);
        },
    },
    plugins: [
        // 全局变量引入 以免每个tsx都需要引入
        new webpack.ProvidePlugin({
            React: "react",
        }),
        // 摸板html 引入
        new HtmlWebpackPlugin({
            template: "index.html",
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        // loader 规则
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            },
            {
                test: /\.(less|css)$/i,
                use: [
                    stylesHandler,
                    {
                        loader: "css-loader",
                        options: {
                            // 使用 css modules
                            modules: true,
                            importLoaders: 1,
                            import: true,
                        },
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        // 优先加载那些文件
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
        // 加载别名
        alias: {
            "@@": path.resolve(__dirname, "src/components"),
            "@": path.resolve(__dirname, "src"),
        },
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";

        // @ts-ignore
        config.plugins.push(
            new MiniCssExtractPlugin({ filename: "css.[name].[hash].css" }),
            new WorkboxWebpackPlugin.GenerateSW(),
            new builds({
                email: "2623021604@qq.com",
                content: "template-webpack-react",
            })
        );
    } else {
        config.mode = "development";
    }
    return config;
};
