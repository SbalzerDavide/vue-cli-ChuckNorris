<template>
  <div class="cards">
    <!-- <li v-for="(card, index) in cards" :key="index">
        {{ card }}
    </li> -->
    <Card v-for="(card, index) in cards" :key="index" :name="card" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Cards",
  props: ["cards"],
  // data(){
  //     return :{

  //     }
  // },
  components: {
    Card
  },
  created() {
    // console.log(this.cards);
    // console.log("ciaoneeeee");
  }
};
</script>

<style></style>
