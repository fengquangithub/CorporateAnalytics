var xAxis = ["1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
var mydata = [184, 993, 3883, 5737, 4030, 1805, 5480, 6660, 8923, 6668, 9104, 34790, 25206, 14215, 26842, 40965, 34714, 40692, 44588, 57450, 78242, 97367, 102805, 96278, 113570, 127340, 191643, 207730, 184094, 249887, 191206, 403326, 271941, 307234, 325609, 349049, 404360, 400790, 463723, 490779, 379729, 164646]

var tongbizengzhang = [0]
var tongbifazhan = [0]
var huanbizengzhang = [0]

for(var i=1;i<mydata.length;i++){
    tongbizengzhang.push((mydata[i]-mydata[i-1])/mydata[i-1])
    tongbifazhan.push(mydata[i] / mydata[i - 1])
    huanbizengzhang.push((mydata[i]-mydata[i-1])/mydata[i-1])
}

var FazhanOption = {
    title: {
        show:false
    },
    tooltip: {
        show:false,
    },
    toolbox: {
        show:false
    },
    grid: {
        top:"5%",
        left:'5%',
        right:'5%',
        bottom:'5%',
        containLabel: true
    },
    legend: {
        data: ['环比增长', '环比发展','同比增长']
    },
    xAxis: [{
        type: 'category',
        axisLabel:{
            color: '#212344',
            interval: 1,
            rotate:45,
        },
        axisTick: {
            show:false
        },
        axisLine:{
            show:false
        },
        data: xAxis
    }],
    yAxis: [{
        type: 'value',
        name: '增速',   
        axisLabel: {
            color: '#212344',
            formatter: '{value} %'
        },
        splitLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        }
    }],
    series: [{
        name: '环比增长',
        type: 'line',
        stack: '总量',
        symbol:'none',
        color: '#5d62b5',
        label: {
            normal: {
                show: false,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: tongbizengzhang
    },
    {
        name: '环比发展',
        type: 'line',
        stack: '总量',
        symbol: 'none',
        color: '#29c3be',
        label: {
            normal: {
                show: false,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: tongbifazhan
    },
    {
        name: '同比增长',
        type: 'line',
        stack: '总量',
        symbol: 'none',
        color: '#f2726f',
        label: {
            normal: {
                show: false,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: huanbizengzhang
    }]
};