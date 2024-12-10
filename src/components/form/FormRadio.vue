<script setup lang="ts">
defineProps<{
  modelValue: string;
  label: string;
  options: { value: string; label: string; }[];
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      {{ label }}
    </label>
    <div class="flex gap-4">
      <label
        v-for="option in options"
        :key="option.value"
        class="inline-flex items-center"
      >
        <input
          type="radio"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="$emit('update:modelValue', option.value)"
          class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
        >
        <span class="ml-2">{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>