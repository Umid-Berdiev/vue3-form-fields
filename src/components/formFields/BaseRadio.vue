<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    v-bind="{
      ...$attrs,
      onChange: () => {
        $emit('update:modelValue', value);
      },
    }"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
