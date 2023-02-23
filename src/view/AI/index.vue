<template>
	<div>
		<n-button type="primary" v-for="item in quickQuestions" :key="item" class="mx-10px">
			{{ item }}
		</n-button>

		<n-input class="mt-10px" v-model:value="customQuestion" type="text" placeholder="请输入你想问的问题" />
		<n-button type="info" class="mt-10px" @click="record">提交</n-button>

		<div>
			<div v-for="item in records" :key="item.q">
				<p>{{ item.q }}</p>
				<p>{{ item.r }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { getAIMessages } from '../../api/chatGPT';

const quickQuestions = ref([
	// '分析今天',
	// '分析今月',
	// '分析今年'
]);

const customQuestion = ref('');

const records = ref<Array<{q: string, r: string | undefined}>>([]);

onBeforeMount(async () => {
	const helloRes = await getAIMessages('你好');

	console.log(helloRes);

	records.value.push({q: '你好', r: helloRes})
})

async function record() {

	const customRes = await getAIMessages(customQuestion.value);

	records.value.push({q: customQuestion.value, r: customRes})

	customQuestion.value = ''
}

</script>
