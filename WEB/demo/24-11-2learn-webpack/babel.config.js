module.exports = {
    presets: [
        ['@babel/preset-env', {
            "useBuiltIns": "usage", // 按需引入 polyfill
            "corejs": 3 // 指定 core-js 版本
        }]
    ]
}