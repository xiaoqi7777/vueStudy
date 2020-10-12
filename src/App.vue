<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <br/>
    路由显示
    <br/>
    <router-link to='/'>首页</router-link>
    <br/>
    <router-link to='/home'>home</router-link>
    <br/>
    <router-link to='/label'>label</router-link>
    <br/>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
