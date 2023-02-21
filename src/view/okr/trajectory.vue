<template>
  <n-calendar
    v-model:value="today"
    #="{ year, month, date }"
    :is-date-disabled="isDateDisabled"
    @update:value="handleUpdateValue"
  >
    {{ year }}-{{ month }}-{{ date }}
  </n-calendar>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import { useMessage } from 'naive-ui'

const today = ref(Date.now())
</script>