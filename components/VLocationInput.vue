<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';

const props = defineProps<{
  query: string,
}>();

const emit = defineEmits(['update:query', 'get-location']);

const inputText = computed({
  get() {
    return props.query;
  },
  set(value) {
    emit('update:query', value);
  },
});
</script>

<template>
  <ElInput
      v-model="inputText"
      clearable
      @keydown.enter="$emit('get-location')"
  >
    <template #append>
      <ElButton
          :icon="Search"
          @click="$emit('get-location')"
      />
    </template>
  </ElInput>
</template>
