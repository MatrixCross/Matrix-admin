<template>
    <div
        class="w-screen h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 absolute left-0 top-0 flex justify-center items-center"
    >
        <n-card class="w-300px sm:w-360px" embedded :bordered="true">
            <template #footer> #footer </template>
            <template #action> #action </template>
            <template #header>
                <i-line-md:discord class="w-50px h-50px bg-black text-white rounded-full p-10px" />
            </template>
        </n-card>
    </div>
</template>

<script lang="ts" setup>
</script>
