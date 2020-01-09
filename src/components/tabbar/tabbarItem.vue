<template>
  <div class="tabbar-item" @click="ItemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  props: {
    link: String,
    activeColor: {
      type: String,
      default: "pink"
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  components: {

  },
  methods: {
    ItemClick() {
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tabbar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }
  .active {
    color: pink;
  }
</style>
