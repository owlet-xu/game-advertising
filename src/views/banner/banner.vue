<template>
  <div class="banner">
    <img class="banner-img" src="@/assets/imgs/banner.jpg" />
    <ul class="nav">
      <li class="btn" v-for="(item, index) in navText" :key="index" @click="apply(index)">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts" src="./banner.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './banner.scss';
</style>
