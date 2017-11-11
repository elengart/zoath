module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: "app/components/Main/Main.jsx",
            Login: "app/components/Login/Login.jsx",
            Users: "app/components/Users/Users.jsx"
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders:[
            {
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2017', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                loaders: ["style-loader","css-loader"],
                test: /\.css$/,
                exclude: /(node_modules)/
            }
        ]
    }
};
