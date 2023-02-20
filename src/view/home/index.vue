<template>
    <n-layout has-sider>
        <div class="flex flex-col min-h-screen justify-between">
            <n-layout-header bordered>
                <div class="flex h-60px justify-between items-center border-box px-12px">
                    <div class="flex items-center ml-10px">
                        <img :src="mainIcon" class="w-40px h-40px" />
                        <n-gradient-text
                            class="text-16px ml-10px"
                            gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
                        >
                            MatrixCross
                        </n-gradient-text>
                    </div>
                    <identity></identity>
                </div>
            </n-layout-header>
            <div class="flex flex-1">
                <n-layout-sider
                    bordered
                    collapse-mode="width"
                    :collapsed-width="2"
                    :width="240"
                    :collapsed="collapsed"
                    show-trigger
                    @collapse="collapsed = true"
                    @expand="collapsed = false"
                >
                    <n-menu
                        v-model:value="activeMenuKey"
                        :collapsed="collapsed"
                        :collapsed-width="64"
                        :collapsed-icon-size="22"
                        :options="menuOptions"
                    />
                </n-layout-sider>
                <n-layout-content>
                    <div class="p-10px">
                        <RouterView></RouterView>
                    </div>
                </n-layout-content>
            </div>

            <n-layout-footer bordered>
                <div class="w-screen h-20px text-10px flex justify-center items-center">
                    {{ footer }}
                </div>
            </n-layout-footer>
        </div>
    </n-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { MenuOption } from 'naive-ui';
import identity from './identity.vue';
import mainIcon from '../../assets/images/main_icon.png';

const footer = import.meta.env.VITE_APP_FOOTER;
const router = useRouter();

const activeMenuKey = ref<string>('personal');
const collapsed = ref(true);

const menuOptions: MenuOption[] = [
		{
				label: '工作台',
				key: 'workbench',
		},
    {
        label: '个人主页',
        key: 'personal',
    },
    {
        label: '任务中心',
        key: 'mission',
        children: [
            {
                label: '查询任务',
                key: 'mission',
            },
            {
                label: '新增任务',
                key: 'addMission',
            },
        ],
    },
		{
        label: 'OKR',
        key: 'OKR',
				children: [
            {
                label: '统计面板',
                key: 'statistics',
            },
            {
                label: '行为轨迹',
                key: 'trajectory',
            },
						{
								label: '日程设置',
								key: 'schedule'
						}
        ],
    },
		{
        label: '人工智能',
        key: 'AI',
    },
]

watchEffect(() => {
    router.push(activeMenuKey.value);
});
</script>
