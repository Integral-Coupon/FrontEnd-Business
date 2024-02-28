<script setup lang="ts">



  const onClickLeft = () => alert('you sure you want to go back?')


  //const onChange = (index: String) => showToast(`Tab ${index}`);
</script>

<template>

  <van-nav-bar
      title="HomePage"
      left-text="Back"
      left-arrow
      @click-left="onClickLeft"
  >
    <template #right>
      <van-icon name="search" size = "18"/>
    </template>
  </van-nav-bar>


  <div id = "content">
    <router-view />
  </div>



  <van-tabbar  @change="onChange">
    <van-tabbar-item icon="home-o" to="/" name = "home">Home</van-tabbar-item>
    <van-tabbar-item icon="search" to="/search" name = "discover">Discover</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/group" name = "group">Group</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/user" name = 'setting'>Setting</van-tabbar-item>
  </van-tabbar>


</template>

<style scoped>

</style>