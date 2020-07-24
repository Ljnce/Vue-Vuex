<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1> Number of clicks: {{ counter }}</h1>
    <h1> Double of clicks: {{ double }}</h1>
    <h1> Double of clicks: {{ three }}</h1>
    <button @click="clicked()"> Clicca qui </button>
    <h1> Clicca qui: {{ test | minus  }}</h1>
    <button @click="push()"> Clicca qui </button>
  </div>
</template>

<script>

export default {
  name: "Home",
  // data() {
  //   return {
  //     counter: []
  //   }
  // },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    double() {
      return this.$store.getters.doubleClicks;
    },
    three() {
      return this.$store.getters.triple;
    },
    test() {
      return this.$store.state.number;
    }
  },
  methods: {
    clicked() {
      this.$store.commit('increment');
    },
    push() {
      this.$store.commit('minus')
    }
  },
  filters: {
    minus (value) {
      return value * 2;
    }
  }
};

</script>
