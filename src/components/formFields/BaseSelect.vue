<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleChange = ($event) => {
  emit("update:modelValue", $event.target.value);
};
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    class="field"
    v-bind="$attrs"
    @change="handleChange"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>
