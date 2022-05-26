import * as  echarts from "echarts";
import { useEffect } from "react";
import './index.css'
function Echarts1() {
    useEffect(() => {
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
    }, []);


    return (
            <div className='center_ech'>
            </div>
    );
}

export default Echarts1;