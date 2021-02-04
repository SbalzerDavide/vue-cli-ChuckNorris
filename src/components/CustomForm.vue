<template>
  <div class="search">
    <h2>cerca per categoria</h2>
    <form action="" v-on:submit.prevent>
      <!-- <input type="text" v-model="searchText" /> -->
      <BaseInput
        type="text"
        placeholder="inserisci un nome"
        :value="searchText"
        @input="searchText = $event"
        name="name"
      />
      <BaseInput type="submit" value="search" @click="sendSearch" name="name" />
      <!-- <input type="submit" value="cerca" @click="sendSearch" /> -->
    </form>
  </div>
</template>

<script>
import BaseInput from "./BaseInput";
export default {
  name: "CustomFrom",
  components: {
    BaseInput
  },
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    sendSearch() {
      this.$emit("sendForm", this.searchText);
      this.searchText = "";
    }
  }
};
</script>

<style></style>
