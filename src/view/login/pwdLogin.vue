<template>
                <n-form>
                    <n-form-item label="账号">
                        <n-input v-model:value="username" clearable />
                    </n-form-item>
                    <n-form-item label="密码">
                        <n-input v-model:value="password" clearable />
                    </n-form-item>
                </n-form>
								<div class="flex justify-between items-center text-4px">
                    <span @click="goToRegister">注册账号</span>
                    <span>忘记密码？</span>
                </div>
                <n-button
                    color="rgb(192, 132, 252)"
                    :circle="true"
                    class="w-full h-10px mt-5px"
                    @click="submit"
                >
                    登录
                </n-button>
</template>

<script lang="ts" setup>
import { emit } from 'process';
import { post, get } from '../../../utils/request';
let username = ref('');
let password = ref('');

async function submit() {
    const res = await get('http://127.0.0.1:8000/backend/login', {
        username: username.value,
        password: password.value,
    });
    console.log(res);
}

const emit = defineEmits(['activeChange']);

function goToRegister() {
	emit('activeChange', 'register')
}
</script>
