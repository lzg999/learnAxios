<template>
    <tab-bar>
      <tab-bar-item link="/home" activeColor="#d4237a">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div> 
      </tab-bar-item>
      <tab-bar-item link="/classify" activeColor="#d4237a">
        <img slot="item-icon" src="~assets/img/tabbar/classify.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/classify_active.png" alt="">
        <div slot="item-text">分类</div> 
      </tab-bar-item>
      <tab-bar-item link="/shopcar" activeColor="#d4237a">
        <img slot="item-icon" src="~assets/img/tabbar/shopcar.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcar_active.png" alt="">
        <div slot="item-text">购物车</div> 
      </tab-bar-item>
      <tab-bar-item link="/profile" activeColor="#d4237a">
        <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
        <div slot="item-text">我的</div> 
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/tabbar/tabbar'
import TabBarItem from 'components/tabbar/tabbarItem'

export default {
  name: "MainTabBar",
  data() {
    return {

    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
