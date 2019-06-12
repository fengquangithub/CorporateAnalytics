var xAxis = ["1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
var mydata = [184, 993, 3883, 5737, 4030, 1805, 5480, 6660, 8923, 6668, 9104, 34790, 25206, 14215, 26842, 40965, 34714, 40692, 44588, 57450, 78242, 97367, 102805, 96278, 113570, 127340, 191643, 207730, 184094, 249887, 191206, 403326, 271941, 307234, 325609, 349049, 404360, 400790, 463723, 490779, 379729, 164646]
var QushiOption = {
    title: {
        show:false,
    },
    grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxis,
        axisLabel: {
            color: '#212344',
            interval: 1,
            rotate:45,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            color: '#212344'
        },

        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show:false
        }
    }],
    series: [{
        type: 'line',
        smooth: true, 
        showAllSymbol: false,
        symbol: 'circle',
        symbolSize: 0,
        
        label: {
            show: false
        },
        itemStyle: {
            color: "#fff",
            borderColor: "#fff",
            borderWidth: 3
        },
        tooltip: {
            show: false
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#c86589'
                    },
                    {
                        offset: 1,
                        color: '#06a7ff'
                    }
                ], false)
            }
        },
        data: mydata
    }]
};