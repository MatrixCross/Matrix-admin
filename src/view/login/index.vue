<template>
    <div
        class="w-screen h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 absolute left-0 top-0 flex justify-center items-center"
    >
        <n-card class="w-400px sm:w-460px" embedded :bordered="true">
            <template #header>
                <i-line-md:discord
                    class="w-20px h-20px bg-black text-white rounded-full p-5px"
                />
            </template>
            <template #header-extra>
                <n-gradient-text type="danger"> Live Forever </n-gradient-text>
            </template>
        </n-card>
    </div>
</template>

<script lang="ts" setup></script>
