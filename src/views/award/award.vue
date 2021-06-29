<template>
  <div class="award">
    <Title :title="'赛事奖励'"></Title>
    <p class="award-text">表现优异的选手将有机会签约成为官方解说</p>
    <img class="jl" src="@/assets/imgs/jp.png" />
    <p class="ljbm" @click="apply()">立即报名</p>
  </div>
</template>

<script lang="ts" src="./award.ts">
</script>

<style rel="stylesheet/scss" lang="scss">
@import './award.scss';
</style>
