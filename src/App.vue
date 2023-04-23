<template>
  <router-view></router-view>
</template>

<script>
import Layout from './layouts/Layout'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
  * {
    margin:0;
    padding:0;
  }
  body,html {
    height: 100%;
    width: 100%;
  }
  a {
    text-decoration:none!important;
  }
  li {
    list-style:none
  }
  img {
    vertical-align:top;
    border:none
  }
</style>
