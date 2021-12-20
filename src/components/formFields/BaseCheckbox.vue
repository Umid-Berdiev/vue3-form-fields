<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

function handleChange($event) {
  emit("update:modelValue", $event.target.checked);
}
</script>

<template>
  <input
    type="checkbox"
    :value="modelValue"
    class="field"
    :checked="modelValue"
    @change="handleChange"
  />
  <label v-if="label">{{ label }}</label>
</template>
