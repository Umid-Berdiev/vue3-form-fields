<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input
    :placeholder="label"
    class="field"
    :value="modelValue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
