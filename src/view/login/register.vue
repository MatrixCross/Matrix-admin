<template>
    <n-form :model="formValue">
        <n-form-item label="账号" path="username">
            <n-input v-model:value="formValue.username" clearable />
        </n-form-item>
        <n-form-item label="密码" path="password">
            <n-input v-model:value="formValue.password" clearable />
        </n-form-item>
				<n-form-item label="电子邮箱" path="email">
            <n-input v-model:value="formValue.email" clearable />
        </n-form-item>
        <n-form-item label="电话号码" path="phone">
            <n-input v-model:value="formValue.phone" clearable />
        </n-form-item>
    </n-form>
		<n-button
        color="rgb(192, 132, 252)"
        :circle="true"
        class="w-full h-10px mt-5px"
        @click="goToPwdLogin"
    >
        已有账号，马上登录
    </n-button>
    <n-button
        color="rgb(192, 132, 252)"
        :circle="true"
        class="w-full h-10px mt-5px"
        @click="submit"
    >
        注册
    </n-button>
</template>

<script lang="ts" setup>
import { post, get } from '../../../utils/request';
let formValue = ref({
	username: '',
	password: '',
	email: '',
	phone: ''
});

async function submit() {
    const res = await post('http://127.0.0.1:8000/backend/user/register', {
        username: formValue.value.username,
        password: formValue.value.password,
				email: formValue.value.email,
				phone: formValue.value.phone
    });
    console.log(res);
}

const emit = defineEmits(['activeChange']);

function goToPwdLogin() {
	emit('activeChange', 'pwd-login')
}
</script>
