<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
  #tabbar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -3px 1px rgba(200, 200, 200, .1)
  }
</style>
