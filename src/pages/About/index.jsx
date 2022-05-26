import React, { Component, useState, useEffect } from 'react';
// import ReactEcharts from 'echarts-for-react';
import * as  echarts from "echarts";
import { AlertOutlined, ApiOutlined, AppstoreAddOutlined, RedditOutlined } from '@ant-design/icons'
import './index.css'
function About() {
    // const [a, b] = useState(0)
    // function handleClickFn() {
    //     b((prevCount) => {
    //         console.log(prevCount, 999)
    //         return prevCount + 1
    //     })
    // }
    useEffect(() => {
        const myChart = echarts.init(document.getElementsByClassName('center_ech')[0]);
        //  myChart.showLoading({
        //     text: "定点医疗机构加载中...",
        //     color: "#be72ed",
        //     textColor: "#be72ed",
        //     maskColor: "rgba(255, 255, 255, 0.2)",
        //     zlevel: 0,
        //   })
        myChart.setOption({
            tooltip: {
                trigger: "axis",
                axisPointer: { type: "none" },
            },
            xAxis: {
                type: "category",
                data: ['武汉', '襄阳', '十堰', '随州', '荆门', '天门', '黄石'],
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
                    data: [1, 2, 3, 4, 5, 67, 78, 8],
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
                    data: [0, 2, 4, 5, 6, 7, 6, 7, 8, 9],
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

        const myChart1 = echarts.init(document.getElementsByClassName('center_ech')[1]);
        myChart1.setOption({
            title: {
                text: "定点医疗机构救治设备信息",
                padding: [20, 20, 10, 20],
                textStyle: {
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "#333333",
                },
            }, //标题
            tooltip: {
                trigger: "item",
                // formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
            legend: {
                show: true,
                orient: "vertical",
                x: "right",
                padding: [40, 90, 30, 40],
                data: [1, 3, 4, 5, 6, 7, 8, 9],
            }, //图
            graphic: {
                type: "text",
                left: "center",
                top: "center",
                style: {
                    text: `123\n总数`, //使用“+”可以使每行文字居中
                    textAlign: "center",
                    font: "italic bolder 21px cursive",
                    fill: "#000",
                    width: 30,
                    height: 30,
                },
            },
            series: [
                {
                    type: "pie",
                    radius: ["35%", "65%"],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                            textColor: "#000",
                        },
                    },
                    data: [1, 3, 4, 5, 6, 7, 8, 9],
                    color: ["#f9783d", "#51CEC6", "#FFB703", "#5FA0FA", "#bc78ff", "#7f25d8", "#fc20ff", "#2b92f9", "#9effce", "#d886af"],
                },
            ],
        });

        const myChart2 = echarts.init(document.getElementsByClassName('center_ech')[2]);
        // myChart2.showLoading({
        //     text: '定点医疗机构人员加载中...',
        //     color: '#fa6b98',
        //     textColor: '#fa6b98',
        //     maskColor: 'rgba(255, 255, 255, 0.2)',
        //     zlevel: 0,
        //   })
        myChart2.setOption({
            tooltip: {
                trigger: "axis",
            },
            legend: {
                //菜单字体样式
                //菜单位置
                x: "right",
                padding: [20, 290, 30, 40],
                //菜单数据
                data: ["医师人数", "护士人数", "医技人数"],
            },
            xAxis: {
                type: "category",
                data: ['武汉', '襄阳', '十堰', '随州', '荆门', '天门', '黄石', '孝感', '鄂州'],
                interval: 2,
                triggerEvent: true,
                axisLabel: {
                    interval: 0, rotate: 0, fontSize: 13,
                    formatter: function (value) {
                        var res = value;
                        if (res.length > 6) {
                            res = res.substring(0, 5) + "..";
                        }
                        return res;
                    }
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
                left: "3%",
            },
            title: [
                {
                    text: "定点医疗机构人员(人)",
                    left: "left",
                    padding: [10, 20, 30, 30],
                    textStyle: {
                        color: "#333333",
                        fontSize: 22,
                        fontWeight: "bold",
                    },
                },
            ],
            series: [
                {
                    name: "医师人数",
                    data: [11, 22, 33, 445, 6, 7, 33, 4, 5, 66, 7, 88],
                    type: "bar",
                    barWidth: 28, //柱图宽度
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#7771d7',
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#a984fc',
                                    },
                                    {
                                        offset: 1,
                                        color: '#f05c87',
                                    },
                                ],
                                global: false
                            }
                        },
                    },
                },
                {
                    name: "护士人数",
                    data: [1, 2, 3, 4, 5, 6, 7, 66, 7, 8, 99],
                    type: "bar",
                    barWidth: 28, //柱图宽度
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#fe9dc5',
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#ff749c',
                                    },
                                    {
                                        offset: 1,
                                        color: '#f55b84',
                                    },
                                ],
                                global: false
                            }
                        },
                    },
                },
                {
                    name: "医技人数",
                    data: [12, 33, 44, 55, 66, 77, 66, 777, 88, 999],
                    type: "bar",
                    barWidth: 28, //柱图宽度
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#55faf3',
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#37edd7',
                                    },
                                    {
                                        offset: 1,
                                        color: '#1cdac6',
                                    },
                                ],
                                global: false
                            }
                        },
                    },
                },
            ],
        });
    }, [])
    return (
        <div>
            <header className='header'>
                <div className="cont">
                    <div>医疗机构总数<div className="num_span">11 家</div></div>
                    <div>
                        <AlertOutlined className='AlertOutlined' />
                    </div>
                </div>
                <div className="cont">
                    <div>医疗机构床位总数<div className="num_span">11 家</div></div>
                    <div>
                        <ApiOutlined className='ApiOutlined' />
                    </div>
                </div>
                <div className="cont">
                    <div>医疗机构人员编制总数<div className="num_span">11 家</div></div>
                    <div>
                        <AppstoreAddOutlined className='AppstoreAddOutlined' />
                    </div>
                </div>
                <div className="cont">
                    <div>医疗机构人员在编人数<div className="num_span">11 家</div></div>
                    <div>
                        <RedditOutlined className='RedditOutlined' />
                    </div>
                </div>
            </header>
            <div className='actionc_diyljg'>
                {/* <button onClick={handleClickFn}>点我加1{a}</button> */}
                {/* <h2 className='actionc_h2'>定点医疗机构</h2> */}
                <div className='center_ech'>

                </div>
                <div className='center_ech  ech2'>

                </div>
            </div>
            <footer className='footer'>
                <div className='center_ech'>

                </div>
            </footer>
        </div>
    );
}

export default About