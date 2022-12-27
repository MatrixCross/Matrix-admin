<template>
    <div
        class="w-screen h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 absolute left-0 top-0 flex justify-center items-center"
    >
        <n-card class="w-400px sm:w-460px" embedded :bordered="true">
            <template #header>
                <i-line-md:coffee-loop
                    class="w-30px h-30px bg-black text-white rounded-full p-5px box-border"
                />
            </template>
            <template #header-extra>
                <n-gradient-text
                    :size="80"
                    :gradient="{
                        deg: 270,
                        from: 'rgb(192, 132, 252)',
                        to: 'rgb(239, 68, 68)',
                    }"
                >
                    Metu
                </n-gradient-text>
            </template>
            <template #default>
                <n-gradient-text
                    class="pb-5px"
                    :size="30"
                    :gradient="{
                        deg: 270,
                        from: 'rgb(236, 72, 153)',
                        to: 'rgb(239, 68, 68)',
                    }"
                >
                    账密登录
                </n-gradient-text>
                <n-form>
                    <n-form-item label="账号">
                        <n-input v-model="username" clearable />
                    </n-form-item>
                    <n-form-item label="密码">
                        <n-input v-model="password" clearable />
                    </n-form-item>
                </n-form>
                <n-button
                    color="rgb(192, 132, 252)"
                    :circle="true"
                    class="w-full h-10px mt-5px"
                >
                    登录
                </n-button>
            </template>
        </n-card>
    </div>
</template>

<script lang="ts" setup>
let username = ''
let password = ''
</script>
