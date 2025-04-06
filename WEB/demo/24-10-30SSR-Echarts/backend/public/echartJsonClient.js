document.addEventListener('DOMContentLoaded', () => {
    const chart = echarts.init(document.getElementById('echartJson'));
    chart.setOption(echartJsonOption)
    fetch('/api/chart-data')
        .then((response) => response.json())
        .then((data) => {
            chart.setOption({
                series: {
                    data: data
                }
            })
        })
})