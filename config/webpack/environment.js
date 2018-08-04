const { environment } = require('@rails/webpacker')

const webpack = require('webpack')

environment.plugins.append('Provide', new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    JQuery: 'jquery',
    Popper: ['popper.js', 'default']
}));

const config = environment.toWebpackConfig()

config.resolve.alias = {
    jquery: "jquery/src/jquery",
}  

module.exports = environment
