<template>
  <div id="app">
    dome 1=>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="router">
      <router-view></router-view>
    </div>
    <br/>
    dome 2=>
    路由 测试
    <br/>
    <router-link to='/'>首页</router-link>
    <br/>
    <router-link to='/home'>home</router-link>
    <br/>
    <router-link to='/label'>label</router-link>
    <br/>
    <br/>
    dome 3=>
    form 校验自定义rule
    <router-link to='/form'>form</router-link>
    
    <br/>
    <br/>
    dome 4=>
    <router-link to='/xlsx'>xlsx</router-link>
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
.router{
  position: absolute;
  left: 500px;
  top: 100px;
}
</style>
