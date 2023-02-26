<template>
    <n-layout has-sider>
        <div class="flex flex-col min-h-screen justify-between">
            <n-layout-header bordered>
                <div class="flex h-46px justify-between items-center box-border px-12px py-20px">
                    <div class="flex items-center">
                        <img :src="mainIcon" class="w-30px h-30px" />
                        <n-gradient-text
                            class="text-16px pl-10px"
                            gradient="linear-gradient(90deg, rgb(73, 85, 121) 0%, rgb(255, 251, 235) 50%, rgb(37, 23, 73) 100%)"
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
                    <div class="p-10px h-full box-border">
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
import { QueryMission } from '../../api/mission';
import { userStore, missionStore } from '../../store/collection';

const footer = import.meta.env.VITE_APP_FOOTER;
const router = useRouter();
const route = useRoute();

const target = route.fullPath.split('/')[1] || 'workbench';

const activeMenuKey = ref<string>(target);
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
        key: 'statistics',
    },
		{
        label: '人工智能',
        key: 'AI',
    },
]

userStore.info = JSON.parse(
    localStorage.getItem('info') ||
        '{"email":"","phone":"","roleIds":"","userId":0,"username":"未登录"}',
);

missionStore.updateMission()

watchEffect(() => {
    router.push(activeMenuKey.value);
		missionStore.updateMission()
});
</script>
