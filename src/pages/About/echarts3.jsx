import * as  echarts from "echarts";
import { useEffect } from "react";
import './index.css'
function Echarts1() {
    useEffect(() => {
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
    }, []);
    return (
        <div className='center_ech'>
        </div>
    );
}
export default Echarts1;