<template>
	<div>
		<div>人工智能</div>
		<div v-for="item in quickQuestions.length" :key="item" class="w-200px h-200px bg-red">
			{{ item }}
		</div>
		<!-- <div>
			<div v-for="item in records" :key="item.q" class="w-200px h-200px bg-red">
				{{ item.q }}
				{{ item.r }}
			</div>
		</div> -->
	</div>
</template>

<script lang="ts" setup>
import { getAIMessages } from '../../api/chatGPT';

const quickQuestions = ref([
	'分析今天',
	'分析今月',
	'分析今年'
]);

// const records = ref<Array<{q: string, r: string | undefined}>>([{q: '示范', r: 'nihao'}]);

// const helloRes = await getAIMessages('你好');

// records.value.push({q: '你好', r: helloRes})


</script>
