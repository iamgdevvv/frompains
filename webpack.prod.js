const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const AppManifestWebpackPlugin = require('app-manifest-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new AppManifestWebpackPlugin({
            // Your source logo
            logo: './src/assets/images/logo-favicon.png',
            // Prefix for file names
            prefix: '/', // default '/'
            // Output path for icons (icons will be saved to output.path(webpack config) + this key)
            output: '/icons-[hash:8]/', // default '/'. Can be absolute or relative
            // Emit all stats of the generated icons
            emitStats: false,
            // The name of the json containing all favicon information
            statsFilename: 'manifest.json', // can be absolute path
            // Encode html entities in stats file (Example json_decode from php doesn't support html strings with escaped double quotes but it's valid json)
            statsEncodeHtml: false,
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin. Default true
            inject: true,
            // favicons configuration object. Support all keys of favicons (see https://github.com/haydenbleasel/favicons)
            config: {
                appName: 'From Pains', // Your application's name. `string`
                appDescription: 'Funny quotes for programmers base on their work.', // Your application's description. `string`
                developerName: 'Grafis Nuresa', // Your (or your developer's) name. `string`
                developerURL: 'https://hellogerafis.github.com/simple-portofolio', // Your (or your developer's) URL. `string`
                background: '#1a202c', // Background colour for flattened icons. `string`
                theme_color: '#1a202c', // Theme color for browser chrome. `string`
                display: 'standalone', // Android display: "browser" or "standalone". `string`
                orientation: 'portrait', // Android orientation: "portrait" or "landscape". `string`
                start_url: '/', // Android start application's URL. `string`
                version: '1.0', // Your application's version number. `number`
                logging: false, // Print logs to console? `boolean`
                icons: {
                    // Platform Options:
                    // - offset - offset in percentage
                    // - shadow - drop shadow for Android icons, available online only
                    // - background:
                    //   * false - use default
                    //   * true - force use default, e.g. set background for Android icons
                    //   * color - set background for the specified icons
                    //
                    android: true, // Create Android homescreen icon. `boolean` or `{ offset, background, shadow }`
                    appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }`
                    appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }`
                    coast: { offset: 25 }, // Create Opera Coast icon with offset 25%. `boolean` or `{ offset, background }`
                    favicons: true, // Create regular favicons. `boolean`
                    firefox: true, // Create Firefox OS icons. `boolean` or `{ offset, background }`
                    windows: true, // Create Windows 8 tile icons. `boolean` or `{ background }`
                    yandex: true, // Create Yandex browser icon. `boolean` or `{ background }`
                },
            }
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    },
});