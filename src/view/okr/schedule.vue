<template>
    <n-calendar
        v-model:value="today"
        #="{ year, month, date }"
        @update:value="handleUpdateValue"
    >
        {{ year }}-{{ month }}-{{ date }}
    </n-calendar>
    <n-modal v-model:show="showModal">
        <n-table :bordered="false" :single-line="false">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>任务名</th>
                    <th>任务详情</th>
                    <th>最后期限</th>
                    <th>创建时间</th>
                    <th>任务状态</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in missionList" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.detail }}</td>
                    <td>{{ item.dealline }}</td>
                    <td>{{ item.createtime }}</td>
                    <td>
                        <div @click="changeStatus(item.id)">
                            <n-switch
                                checked-value="1"
                                unchecked-value="0"
                                v-model:value="item.status"
                            >
                                <template #checked> 已完成 </template>
                                <template #unchecked> 未完成 </template>
                            </n-switch>
                        </div>
                    </td>
                </tr>
            </tbody>
        </n-table>
    </n-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getTodayMission } from '../../../utils/mission/filter';
import { missionStore } from '../../store/collection';

const missionList = ref<Array<Mission>>([]);

const today = ref(Date.now());

const showModal = ref(false);

function handleUpdateValue(
    timestamp: number,
    info: { year: number; month: number; date: number },
) {
    missionList.value = getTodayMission(info);
    showModal.value = true;
}

function changeStatus(id: number) {
    missionStore.changeMissionStatus(id);
}
</script>
