<template>
  <div class="container">
    home
    <h1>{{$store.state.counter}}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    add(){
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>

</style>
