<template>
    <n-row>
        <n-col :span="12">
            <n-statistic
                label="任务完成情况"
                :value="missionStore.completeMission.length"
            >
                <template #prefix> </template>
                <template #suffix> / {{ missionStore.all.length }} </template>
            </n-statistic>
        </n-col>
    </n-row>
    <div class="flex w-full">
        <div class="flex-1" id="num"></div>
        <div class="flex-1" id="tend"></div>
    </div>
    <div class="flex w-full">
        <div class="flex-1" id="pan"></div>
        <div class="flex-1" id="grade"></div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { missionStore, userStore } from '../../store/collection';
import { getTodayMission } from '../../../utils/mission/filter';

// 柱状图逻辑
const dates = getDates();
const numChartData = ref<Array<number>>([]);
getNumChartData()
function getNumChartData() {
	numChartData.value = dates.map(item => getTodayMission(item).length)
}
function getDates() {
    let today = new Date(); // 创建一个新的 Date 对象，使用当前时间
    let day = today.getDay(); // 获取当天是星期几
    let diff = today.getDate() - day + (day == 0 ? -6 : 1); // 获取本周第一天的日期

    let startOfWeek = new Date(today.setDate(diff)); // 获取本周第一天的 Date 对象
    let endOfWeek = new Date(today.setDate(diff + 6)); // 获取本周最后一天的 Date 对象

    let dates = []; // 创建一个空数组，用于存储本周的日期

    for (let i = startOfWeek.getDate(); i <= endOfWeek.getDate(); i++) {
				const dateObj = new Date(startOfWeek.setDate(i))
				const info = {year: dateObj.getFullYear(), month: dateObj.getMonth() + 1, date: dateObj.getDate()}
        dates.push(info); // 将本周的每一天添加到数组中
    }

		return dates;
}

// 折现图逻辑
const lineChartData = ref<Array<number>>([]);
function getLineChartData() {
	lineChartData.value = dates.map(item => getTodayMission(item).filter(item => item.status === '1').length)
}

// 饼图逻辑

// 仪表图逻辑

onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    var numChart = echarts.init(
        document.getElementById('num') as HTMLElement,
        undefined,
        {
            width: 600,
            height: 400,
        },
    );
    // 绘制图表
    numChart.setOption({
        title: {
            text: '一周任务量',
        },
        tooltip: {},
        xAxis: {
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        yAxis: {},
        series: [
            {
                name: '任务量',
                type: 'bar',
                data: numChartData.value,
            },
        ],
    });

    var tendChart = echarts.init(
        document.getElementById('tend') as HTMLElement,
        undefined,
        {
            width: 600,
            height: 400,
        },
    );
    // 绘制图表
    tendChart.setOption({
        title: {
            text: '一周完成数',
        },
        tooltip: {},
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: lineChartData.value,
                type: 'line',
            },
        ],
    });

    var panChart = echarts.init(
        document.getElementById('pan') as HTMLElement,
        undefined,
        {
            width: 600,
            height: 600,
        },
    );
    // 绘制图表
    panChart.setOption({
        title: {
            text: '完成占比',
        },
        tooltip: {},
        legend: {
            top: 'bottom',
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true },
            },
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8,
                },
                data: [
                    { value: missionStore.completeMission.length, name: '已完成' },
                    { value: missionStore.all.length - missionStore.completeMission.length, name: '未完成' },
                ],
            },
        ],
    });

    var gradeChart = echarts.init(
        document.getElementById('grade') as HTMLElement,
        undefined,
        {
            width: 600,
            height: 600,
        },
    );
    // 绘制图表
    gradeChart.setOption({
        title: {
            text: '等级评分',
        },
        tooltip: {},
        series: [
            {
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                center: ['50%', '75%'],
                radius: '90%',
                min: 0,
                max: 1,
                splitNumber: 8,
                axisLine: {
                    lineStyle: {
                        width: 6,
                        color: [
                            [0.25, '#FF6E76'],
                            [0.5, '#FDDD60'],
                            [0.75, '#58D9F9'],
                            [1, '#7CFFB2'],
                        ],
                    },
                },
                pointer: {
                    icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                    length: '12%',
                    width: 20,
                    offsetCenter: [0, '-60%'],
                    itemStyle: {
                        color: 'inherit',
                    },
                },
                axisTick: {
                    length: 12,
                    lineStyle: {
                        color: 'inherit',
                        width: 2,
                    },
                },
                splitLine: {
                    length: 20,
                    lineStyle: {
                        color: 'inherit',
                        width: 5,
                    },
                },
                axisLabel: {
                    color: '#464646',
                    fontSize: 20,
                    distance: -60,
                    rotate: 'tangential',
                    formatter: function (value: number) {
                        if (value === 0.875) {
                            return 'Grade A';
                        } else if (value === 0.625) {
                            return 'Grade B';
                        } else if (value === 0.375) {
                            return 'Grade C';
                        } else if (value === 0.125) {
                            return 'Grade D';
                        }
                        return '';
                    },
                },
                title: {
                    offsetCenter: [0, '-10%'],
                    fontSize: 20,
                },
                detail: {
                    fontSize: 30,
                    offsetCenter: [0, '-35%'],
                    valueAnimation: true,
                    formatter: function (value: number) {
                        return Math.round(value * 100) + '';
                    },
                    color: 'inherit',
                },
                data: [
                    {
                        value: missionStore.completeMission.length / missionStore.all.length,
                        name: 'Grade Rating',
                    },
                ],
            },
        ],
    });
});
</script>
