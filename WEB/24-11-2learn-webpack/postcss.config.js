module.exports = ({ env }) => {
    console.log(env);
    return {
        plugins: [
            require('postcss-preset-env')({
                stage: 1,  // 定义可以使用的CSS特性的阶段
                // browserslist: [
                //     "> 0.5%",              // 使用量超过1%的浏览器
                //     "last 2 versions",   // 每个浏览器的最后两个版本
                //     "Firefox ESR",       // Firefox Extended Support Release
                //     "not dead",          // 排除已经不再维护的浏览器
                //     "ie >= 11"           // 支持IE 11及以上版本
                // ],
                // browsers: 'last 2 versions',  // 目标浏览器配置
                autoprefixer: { grid: true },  // 启用网格布局的自动前缀添加
                features: {
                    'custom-properties': true,  // 启用CSS自定义属性（CSS变量）
                    'nesting-rules': true  // 启用嵌套规则
                }
            }),
            env === 'production' ? require('cssnano')({  // 启用 cssnano 进行压缩
                preset: 'default',  // 使用默认配置
            }) : false
        ]
    }
};