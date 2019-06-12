var xAxis = ["广东", "上海", "北京", "江苏", "山东", "浙江", "福建", "安徽", "河南", "四川", "陕西", "辽宁", "河北", "山西", "天津", "吉林", "贵州", "湖北", "重庆", "内蒙古", "湖南", "广西", "江西", "甘肃", "黑龙江", "云南", "新疆", "海南", "宁夏", "青海", "西藏"]
var value = [294094, 293711, 283599, 276403, 272613, 260254, 251903, 251371, 247387, 223064, 218531, 217458, 205818, 199682, 191229, 188045, 184193, 183665, 183586, 180637, 177236, 157923, 155569, 153429, 147133, 138513, 124908, 122025, 81375, 65096, 43827]

var PaihangbangOption = {
    grid: {
        top: "15%",
        bottom: "10%",
        left:'15%',
        right:'5%'
    },
    tooltip: {
        show:false
    },
    legend: {
        show:false,
        data: ["同比", "投资额"],
        top: "15%",
        textStyle: {
            color: "#ffffff"
        }
    },
    xAxis: {
        data: xAxis.slice(0,10),
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#212344"
            }
        }
    },
    yAxis: [{
            type: "value",
            nameTextStyle: {
                color: "#212344"
            },
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#212344"
                }
            }
        }
    ],
    series: [
        {
            name: "投资额",
            type: "bar",
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#6f3d9e"
                        },
                        {
                            offset: 1,
                            color: "#3637a3"
                        }
                    ])
                }
            },
            data: value.slice(0,10)
        }
    ]
};