echarts.registerMap('zhongguo', Zhongguo);

let oRequ = document.querySelector('.requ .content')
let oRequChart = echarts.init(oRequ)
oRequChart.setOption(RequOption)

let oPaihangbang = document.querySelector('.paihangbang .content')
let oPaihangbangChart = echarts.init(oPaihangbang)
oPaihangbangChart.setOption(PaihangbangOption)

let oQushi = document.querySelector('.qushi .content')
let oQushiChart = echarts.init(oQushi)
oQushiChart.setOption(QushiOption)

let oFazhan = document.querySelector('.fazhan .content')
let oFazhanChart  = echarts.init(oFazhan)
oFazhanChart.setOption(FazhanOption)

