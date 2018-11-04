I'm struggling with what looks like a generic error from Webpack after trying to optimise my source code. 

Assuming I have the following files in `./src:`

>     ├── main.js
>     ├── moduleA.js
>     └── moduleB.js
> 

    main.js imports and uses ModuleA.
    
    moduleA.js imports and uses ModuleB
    
    ModuleA.js and ModuleB.js both import flatten-array from node_modules

**My expectation is that if I try to optimise my bundle (see below) it will output two files:** 

    1. index.js
    2. vendors~main.index.js

**Trying to execute the `index.js` output bundle results in:**

    /******/ 		modules[moduleId].call(module.exports, module,
    module.exports, __webpack_require__);
             		                 ^
    
    TypeError: Cannot read property 'call' of undefined


**Although the files are generated, `main.js` doesn't appear to import vendors~main.index.js.**

**Is this the correct assumption? How can I make it work like this?**

While this is a bundle for Node, there are valid reasons that I'd like to export a vendors file. 

Files are:

### main.js  

    const  moduleA  = require('./moduleA');

    moduleA.log('log from main.js');

---

## moduleA.js

    const moduleB = require('./moduleB');
    const flatten = require('array-flatten');
    
    module.exports.log = function(msg){
    	moduleB.log('logging from moduleA.js');
    	console.log(`ModuleA logging: ${msg}`);
    	console.log(`flattened: ${flatten([[1,2,3],[4,5],[6,7]])}`)
    };

--- 

## moduleB.js

    const flatten = require('array-flatten');
    
    module.exports.log = function(msg){
    	console.log(`ModuleB logging: ${msg}`);
        console.log(`flattened: ${flatten([[1,2,3],[4,5],[6,7]])}`)
    };

---

## webpack.config.js
 
    const CleanWebpackPlugin = require('clean-webpack-plugin');
        
        module.exports = {
            module: {
                rules: [{
                    include: [path.resolve(__dirname, 'src')],
                    loader: 'babel-loader',
        
                    options: {
                        plugins: ['syntax-dynamic-import'],
        
                        presets: [['env', {
                            'modules': 'commonjs'
                        }]]
                    },
        
                    test: /\.js$/
                }]
            },
        
            entry: './src/main',
            target: 'node',
        
            output: {
                filename: 'index.js',
                path: path.resolve(__dirname, 'dist')
            },
        
            mode: 'development',
        
            optimization: {
                splitChunks: {
                    cacheGroups: {
                        vendors: {
                            priority: -10,
                            test: /[\\/]node_modules[\\/]/,
                            enforce: true
                        },
                    },
                    // concatenateModules: false,
                    chunks: 'all',
                    minChunks: 1,
                    minSize: 0,
                    name: true
                }
            },
        
            plugins: [
                new CleanWebpackPlugin(['dist']),
            ]
        };
        
 https://stackoverflow.com/questions/53142650/webpack-vendor-bundle-not-imported-in-main-output       
