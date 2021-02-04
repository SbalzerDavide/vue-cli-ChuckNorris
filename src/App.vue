<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <LogoCustom title="ciaone" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ul>
      <CustomForm @sendForm="search" />


      <div v-if="quote != ''" class="quote">
        <h3>quote:</h3>
        <p>{{ quote }}</p>
        <button @click="quote=''" >Show List</button>

      </div>
      <div v-else class="list">
        <h3>Categories:</h3>
        <Cards :cards="categories" />
      </div>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import LogoCustom from "./components/LogoCustom.vue";
import Cards from "./views/Cards";
import CustomForm from "./components/CustomForm";

export default {
  name: "App",
  components: {
    // HelloWorld,
    LogoCustom,
    Cards,
    CustomForm
  },
  data() {
    return {
      categories: [],
      quote: '',
    };
  },
  mounted() {
    console.log(this.base_url);

    this.axios
      .get(this.base_url)
      .then(response => {
        // handle success
        this.categories = response.data;
        // console.log(this.categories);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  },
  methods: {
    search(text) {
      console.log(text);
          this.axios
      .get(`https://api.chucknorris.io/jokes/random?category=${text}`)
      .then(response => {
        // handle success
        this.quote = response.data.value;
        // console.log(this.categories);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });

    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
