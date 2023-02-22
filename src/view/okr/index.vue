<template>
	<div id="main" class="w-300px h-200px scale-50"></div>
	<div class="w-200px h-200px scale-50">
		<Schedule></Schedule>
	</div>
	
	<Trajectory></Trajectory>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import Schedule from './schedule.vue';
import Trajectory from './trajectory.vue';

onMounted(() => {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('main') as HTMLElement);
	// 绘制图表
	myChart.setOption({
		title: {
			text: 'ECharts 入门示例'
		},
		tooltip: {},
		xAxis: {
			data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
		},
		yAxis: {},
		series: [
			{
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20]
			}
		]
	});
})

</script>
