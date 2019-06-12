let data = [{
    "name": "贵州",
    "value": 42
}, {
    "name": "湖南",
    "value": 42
}, {
    "name": "湖北",
    "value": 42
}, {
    "name": "河南",
    "value": 42
}, {
    "name": "江苏",
    "value": 42
}, {
    "name": "广西",
    "value": 42
}, {
    "name": "安徽",
    "value": 42
}, {
    "name": "天津",
    "value": 42
}, {
    "name": "内蒙古",
    "value": 41
}, {
    "name": "上海",
    "value": 41
}, {
    "name": "黑龙江",
    "value": 41
}, {
    "name": "福建",
    "value": 41
}, {
    "name": "广东",
    "value": 41
}, {
    "name": "四川",
    "value": 41
}, {
    "name": "吉林",
    "value": 41
}, {
    "name": "陕西",
    "value": 40
}, {
    "name": "重庆",
    "value": 40
}, {
    "name": "辽宁",
    "value": 40
}, {
    "name": "甘肃",
    "value": 40
}, {
    "name": "海南",
    "value": 40
}, {
    "name": "浙江",
    "value": 40
}, {
    "name": "河北",
    "value": 40
}, {
    "name": "江西",
    "value": 40
}, {
    "name": "新疆",
    "value": 40
}, {
    "name": "山西",
    "value": 40
}, {
    "name": "山东",
    "value": 40
}, {
    "name": "北京",
    "value": 40
}, {
    "name": "云南",
    "value": 39
}, {
    "name": "宁夏",
    "value": 38
}, {
    "name": "青海",
    "value": 34
}, {
    "name": "西藏",
    "value": 31
}]

let colors = {
    42: '#0d47a1',
    41: '#1565c0',
    40: '#1976d2',
    39: '#1e88e5',
    38: '#2196f3',
    34: '#42a5f5',
    31: '#64b5f6'
}

let regions = data.map((json)=>{
    json.itemStyle = {
        areaColor: colors[json.value]
    }
    return json
})

var RequOption = {
     title: {
         show:false
     },
     visualMap: {
         show: false
     },
     geo: {
         map: "zhongguo",
         show: true,
         roam: false,
         layoutCenter: ["50%", "50%"],
         layoutSize: "120%",
         itemStyle: {
             normal: {
                 show: true,
                 borderWidth: 0,
                 areaColor: '#283047'
             },
             emphasis: {
                 show: false,
                 color: '#283047'
             }
         },
         regions: regions
     },
     series: []
 };