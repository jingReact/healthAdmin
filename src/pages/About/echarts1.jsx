import * as  echarts from "echarts";
import React, { useEffect, useState, useContext } from "react";
import './index.css'
import { TestContext } from './index'
// import { allAbout } from "../../api/login";
function Echarts1() {
    const v = useContext(TestContext)
    console.log(v, 90)
    // const [unm,serNum]=useState({num:{}})
    const show = (myChart) => {
        return myChart.showLoading({
            text: "定点医疗机构加载中...",
            color: "#be72ed",
            textColor: "#be72ed",
            maskColor: "rgba(255, 255, 255, 0.2)",
            zlevel: 0,
        })
    }
    const time = (myChart) => {
        return setTimeout(() => {
            myChart.hideLoading()
        }, 1000);
    }
    useEffect(() => {
        const myChart = echarts.init(document.getElementsByClassName('center_ech')[0]);
        show(myChart)
        myChart.setOption({
            tooltip: {
                trigger: "axis",
                axisPointer: { type: "none" },
            },
            xAxis: {
                type: "category",
                data: ['武汉', '襄阳', '十堰', '随州', '荆门', '天门', '黄石', '安陆', '孝感'],
                triggerEvent: true,
                interval: 2,
                axisLabel: {
                    interval: 0,
                    rotate: 0,
                    fontSize: 13,
                    formatter: function (value) {
                        var res = value;
                        if (res.length > 4) {
                            res = res.substring(0, 3) + "..";
                        }
                        return res;
                    },
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
            grid: {
                bottom: "10%",
                left: "7%",
            },
            title: [
                {
                    text: "定点医疗机构(家)",
                    left: "left",
                    padding: [10, 20, 30, 35],
                    textStyle: {
                        color: "#333333",
                        fontSize: 22,
                        fontWeight: "bold",
                    },
                },
            ],
            series: [
                {
                    data: [1, 2, 3, 4, 5, 67, 78, 8, 9],
                    type: "bar",
                    barWidth: 28, //柱图宽度
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "#807bf1",
                                    },
                                    {
                                        offset: 0.5,
                                        color: "#c471ed",
                                    },
                                    {
                                        offset: 1,
                                        color: "#dd99f9",
                                    },
                                ],
                                global: false,
                            },
                        },
                    },
                },
                {
                    type: 'line',
                    symbol: "circle", //拐点样式
                    symbolSize: 10, //拐点大小
                    data: [0, 2, 4, 5, 6, 7, 6, 8, 9],
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 2.5, //折线宽度
                                color: "#cfc4b1", //折线颜色
                            },
                            color: "#fff", //拐点颜色
                            borderColor: "#ffc9ec", //拐点边框颜色
                            borderWidth: 0.5, //拐点边框大小
                        },
                        emphasis: {
                            color: "#fec9db", //hover拐点颜色定义
                        },
                    },
                },
            ],
        });
        time(myChart)
        myChart.on('click', function (v) {
            console.log(1111, v)
            show(myChart)
            time(myChart)
        })
    }, []);
    return (
        <div className='center_ech'>
        </div>
    );
}

export default Echarts1;