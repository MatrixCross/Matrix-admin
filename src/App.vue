<script setup lang="ts">

</script>

<template>
    <div>
        <n-notification-provider>
					<n-dialog-provider>
            <RouterView />
					</n-dialog-provider>
        </n-notification-provider>
    </div>
</template>
