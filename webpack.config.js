// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

let PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
}

const config = {
    //entry: './src/index.js',
    entry: {
        app: path.resolve(process.cwd(), 'src', 'index.js'),
        darktheme: path.resolve(process.cwd(), 'src', 'darktheme.js'),
    },
    output: {
        filename: `js/[name].js`,
        path: PATHS.dist,
        publicPath: '/', // относительная ссылка в браузере на папку выходную
        clean: true,
    },

    // optimization: {
    //     //...defaultConfig.optimization,
    //     splitChunks: {
    //         cacheGroups: {
    //             main: {
    //                 name: 'main',
    //                 test: /main-theme\.s?css$/,
    //                 chunks: 'all',
    //                 enforce: true,
    //             },
    //             dark: {
    //                 name: 'dark',
    //                 test: /dark-theme\.s?css$/,
    //                 chunks: 'all',
    //                 enforce: true,
    //             },
    //         },
    //     },
    // },

    devServer: {
        open: true,
        host: 'localhost',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            // {
            //     test: /\.(eot|ttf|woff|woff2)$/i,
            //     loader: 'file-loader',
            //     type: 'asset',
            //     options: {
            //         name: 'fonts/[name].[ext]'
            //     }
            // },
            // {
            //     test: /\.(svg|png|jpg|jpeg|webp|gif)$/i,
            //     loader: 'file-loader',
            //     type: 'asset',
            //     options: {
            //         name: 'img/[name].[ext]'
            //     }
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    //stylesHandler,
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader'
                    },],
            },
            {
                test: /\.css$/i,
                use: [
                    //stylesHandler,
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    'postcss-loader'],
            },

            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader',
            //         //MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader?url=false',
            //             options:{
            //                 url: true
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 //sourceMap: true, 
            //                 postcssOptions: {
            //                     plugins: {
            //                         "autoprefixer": {},
            //                         "css-mqpacker": {},
            //                         "cssnano": {},
            //                       },
            //                 }
            //             }
            //         },
            //         {
            //             loader: 'sass-loader'
            //             //options: { sourceMap: true }
            //         }
            //     ]
            // },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options:{
            //                 url: true
            //             }
            //         }, {
            //             loader: 'postcss-loader',
            //             options: {
            //                 sourceMap: true,
            //                 postcssOptions: {
            //                     plugins: {
            //                         "autoprefixer": {},
            //                         "css-mqpacker": {},
            //                         "cssnano": {},
            //                       },
            //                 }
            //             }
            //         }
            //     ]
            // }, 
            {
                test: /\.html$/,
                loader: "twig-loader"
            }
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `css/[name].css`,
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: `${PATHS.src}/img`, to: `${PATHS.dist}/img` },
                { from: `${PATHS.src}/fonts`, to: `${PATHS.dist}/fonts` },
                { from: `${PATHS.src}/static`, to: `${PATHS.dist}/static` }
            ],
        }),
        // new HtmlWebpackPlugin({
        //     template: 'index.html',
        // }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html',
            minify: {
                //collapseWhitespace: true,
                removeComments: true
                //removeRedundantAttributes: true,
                //removeScriptTypeAttributes: true,
                //removeStyleLinkTypeAttributes: true,
                //useShortDoctype: true
            }
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/404.html`,
            filename: './404.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/tours.html`,
            filename: './tours.html'
        }),

        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/matches.html`,
        //     filename: './matches.html'
        // }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/match_live.html`,
            filename: './match_live.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/match_past.html`,
            filename: './match_past.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/match_pubg.html`,
            filename: './match_pubg.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/match_pubg_past.html`,
            filename: './match_pubg_past.html'
        }),

        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/page_text.html`,
        //     filename: './page_text.html'
        // }),

        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/user_account.html`,
        //     filename: './user_account.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/user_log.html`,
        //     filename: './user_log.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/user_reg.html`,
        //     filename: './user_reg.html'
        // }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/news.html`,
            filename: './news.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/news_v2.html`,
            filename: './news_v2.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/news_list.html`,
            filename: './news_list.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/news_list_word.html`,
            filename: './news_list_word.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/elements.html`,
            filename: './elements.html'
        }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/players_list.html`,
        //     filename: './players_list.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/players_list_pubg.html`,
        //     filename: './players_list_pubg.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/teams_list.html`,
        //     filename: './teams_list.html'
        // }),

        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/teams_list2.html`,
        //     filename: './teams_list2.html'
        // }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/tour.html`,
            filename: './tour.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/tour_stadia.html`,
            filename: './tour_stadia.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/tour_group.html`,
            filename: './tour_group.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/match_HS.html`,
            filename: './match_HS.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/player_pubg.html`,
            filename: './player_pubg.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/player_hs.html`,
            filename: './player_hs.html'
        }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/tour_group_stadia.html`,
        //     filename: './tour_group_stadia.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/team.html`,
        //     filename: './team.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/player.html`,
        //     filename: './player.html'
        // }),


        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/video.html`,
        //     filename: './video.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/highlights.html`,
        //     filename: './highlights.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/highlight.html`,
        //     filename: './highlight.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/icons.html`,
        //     filename: './icons.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/search.html`,
        //     filename: './search.html'
        // }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/match_cs_past.html`,
            filename: './match_cs_past.html'
        }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/job.html`,
        //     filename: './job.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/transfers.html`,
        //     filename: './transfers.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/team2.html`,
        //     filename: './team2.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/mail.html`,
        //     filename: './mail.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/pwd.html`,
        //     filename: './pwd.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/pwd_count.html`,
        //     filename: './pwd_count.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/reg.html`,
        //     filename: './reg.html'
        // }),
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/externallink.html`,
        //     filename: './externallink.html'
        // })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

        //config.plugins.push(new MiniCssExtractPlugin());

    } else {
        config.mode = 'development';
    }
    return config;
};
