<template>
  <div class="card">
    <li>
      {{ name }}
    </li>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["name"]
};
</script>

<style></style>
