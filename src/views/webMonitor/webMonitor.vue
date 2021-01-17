<template>
    <div class="chartsContainer">
        <div id="myChart1"></div>
        <div id="myChart2"></div>
        <div id="myChart3"></div>
    </div>
</template>

<script>
    export default {
        name: "webMonitor",
        mounted() {
            this.drawLine1();
            this.drawLine2();
            this.drawLine3();
        },
        methods: {
            drawLine1() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart1'))
                // 绘制图表
                myChart.setOption({
                    title: {text: '今日访问流量',
                        textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                            color:"#DA251D"
                        },},
                    tooltip:{

                    },
                    toolbox:{
                        show:true,
                        feature:{
                            saveAsImage:{
                                show:true
                            }
                        }
                    },
                    xAxis: {
                        data: ["掌阅门户", "Wiki搜索", "AutoCom", "淘宝监控", "B站监控", "访客门户"],
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#DA251D",
                                fontWeight: "bolder"
                            },
                            interval:0,
                            rotate:40
                        }
                    },
                    yAxis: {
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#fff"
                            }
                        }
                    },
                    series: [{
                        name: '访问流量',
                        type: 'bar',
                        data: [1678, 5043, 300, 234, 2097, 564],
                        itemStyle:{
                            normal:{
                                color:function(params){
                                    var colorlist = ['#DA251D','#E67716','#FBC300','#11440f','#32585a','#00ff77'];
                                    return colorlist[params.dataIndex];
                                }
                            }
                        }
                    }]
                });
            },
            drawLine2() {
                var myChart=this.$echarts.init(document.getElementById("myChart2"));
                //指定图表的配置项和数据
                var option={
                    title: {text: '主站流量',
                        textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                            color:"#DA251D"
                        },},
                    tooltip:{

                    },
                    toolbox:{
                        show:true,
                        feature:{
                            saveAsImage:{
                                show:true
                            }
                        }
                    },
                    //图例-每一条数据的名字叫销量
                    legend:{
                        data:['点击量']
                    },
                    xAxis: {
                        data: ["2021-01-05", "2021-01-06", "2021-01-07", "2021-01-08", "2021-01-09", "2021-01-10"],
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#DA251D",
                                fontWeight: "bolder"
                            },
                            interval:0,
                            rotate:40
                        }
                    },
                    yAxis: {
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#fff"
                            }
                        }
                    },
                    //数据-data是最终要显示的数据
                    series:[{
                        name:'点击量',
                        type:'line',
                        data:[40,20,35,60,55,10]
                    }]
                };
                //使用刚刚指定的配置项和数据项显示图表
                myChart.setOption(option);
            },
            drawLine3() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart3'))
                // 绘制图表
                myChart.setOption({
                    title: {text: '今日访问流量',
                        textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                            color:"#DA251D"
                        },},
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: 'bottom',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    toolbox:{
                        show:true,
                        feature:{
                            saveAsImage:{
                                show:true
                            }
                        }
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
        }
    }
</script>

<style>
    #myChart1,#myChart2,#myChart3{
        height: 300px;
        width: 50%;
        display: inline-block;
    }
</style>