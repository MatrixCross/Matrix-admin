<template>
	<div class="flex justify-center">
		<Trajectory class="w-1/2"></Trajectory>
		<div class="w-1/2">
			<Schedule></Schedule>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Schedule from './schedule.vue';
import Trajectory from './trajectory.vue';
</script>
