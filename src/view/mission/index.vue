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
                    <span class="text-12px w-100px truncate">{{
                        item.name
                    }}</span>
                    <div class="text-12px">
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
    // 计算天数
    const day = Math.abs(Math.floor(e.hours / 24));
    const hourLast = Math.abs(e.hours % 24);
    return e.hours < 0 || e.minutes < 0 || e.seconds < 0 || e.milliseconds
        ? `已过期${day}天${hourLast}:${Math.abs(e.minutes)
              .toString()
              .padStart(2, '0')}:${Math.abs(e.seconds)
              .toString()
              .padStart(2, '0')}`
        : `${day}天${hourLast}:${e.minutes
              .toString()
              .padStart(2, '0')}:${e.seconds.toString().padStart(2, '0')}`;
}
</script>
