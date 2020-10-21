module.exports = {
    outputDir: 'docs/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Xenphira Hollyvine";
                return args;
            })
    }
}
