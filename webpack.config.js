const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports ={
    mode:"development",
    entry: path.join(__dirname, "assets","js","index.js"),
    output:{
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.?js$/,
                exclude:/node_modules/, 
                use:
                    {
                        loader:"babel-loader",
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }
            },
            {test:/\.css$/i, use:['style-loader', 'css-loader', 'sass-loader']}
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname, "./", "index.html"),
        }),
    ],
    
}