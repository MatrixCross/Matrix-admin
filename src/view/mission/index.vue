<template>
    <n-empty
        description="当前没有任何成功部署的任务"
        v-if="missionStore.all.length === 0"
    >
        <template #extra> </template>
    </n-empty>
    <div v-else class="w-full flex justify-around">
        <n-card
            class="w-33% min-w-250px relative"
            v-for="item in missionStore.all"
            :key="item.id"
        >
            <template #header>
                <div class="flex justify-between">
                    <span class="text-16px">{{ item.name }}</span>
										<div class="text-16px">
											<n-countdown
                        :render="renderCountdown"
                        :duration="getS(item.dealline)"
                        :active="true"
                    	/>
										</div>
                </div>
            </template>

            <n-empty description="不知道是什么情况" v-if="!item.detail">
                <template #extra> </template>
            </n-empty>
            <p v-else>{{ item.detail }}</p>
        </n-card>
    </div>
</template>

<script lang="ts" setup>
import router from '../../router';
import { missionStore } from '../../store/collection';

function goToAdd() {
    router.push('addMission');
}

function getS(time: string) {
    var nowTime = +new Date();
    var inputTime = +new Date(time);
    // 得到秒数
    var remain = inputTime - nowTime;

    return remain;
}

function renderCountdown(e: {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}) {
    console.log(e);
    // 计算天数
    const day = Math.floor(e.hours / 24);
    const hourLast = e.hours % 24;
    return `${day}天${hourLast}:${e.minutes}:${e.seconds}`;
}
</script>
