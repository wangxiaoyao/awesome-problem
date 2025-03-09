const echarts = require('echarts');
const { createCanvas } = require('canvas')

const generateEchart = () => {
    const width = 800;
    const height = 600;
    let canvas = createCanvas(width, height);
    let chart = echarts.init(canvas)
    const option = {
        title: {
            text: 'echart-SSR渲染图'
        },
        xAxis: {
            data: ['A', 'B', 'C']
        },
        yAxis: {},
        series: {
            name: 'series',
            type: 'bar',
            data: [10, 20, 40]
        }
    }
    chart.setOption(option);
    return canvas.toDataURL();
}

module.exports = generateEchart;