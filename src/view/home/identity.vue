<template>
    <div
        class="h-full flex justify-center items-center"
        @click="goToRouter"
    >
        <n-avatar
            :style="{
                backgroundColor: 'transparent',
            }"
            :src="info.username !== '未登录' ? defaultAvator : logoutAvator"
            :size="30"
        >
        </n-avatar>
        <span class="ml-10px text-16px">{{ info.username }}</span>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Identity',
};
</script>

<script lang="ts" setup>
import defaultAvator from '../../assets/images/login.png';
import logoutAvator from '../../assets/images/logout.png';

const router = useRouter();

const info = JSON.parse(
    localStorage.getItem('info') ||
        '{"email":"","phone":"","roleIds":"","userId":0,"username":"未登录"}',
);

function goToRouter() {
    if (info.username === '未登录') router.push('login');
    else router.push('/');
}
</script>
