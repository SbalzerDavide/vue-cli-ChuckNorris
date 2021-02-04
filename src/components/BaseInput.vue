<template>
  <div>
    <input
      v-if="type === 'submit'"
      :type="type"
      :id="id"
      :value="value"
      name="name"
      @click="$emit('click')"
    />

    <input
      v-else
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      name="name"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    id: {
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      type: String
    }
  }
};
</script>

<style></style>
