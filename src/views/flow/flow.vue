<template>
  <div class="flow">
    <Title :title="'比赛流程'"></Title>
    <div class="flow-box">
      <ul class="lc">
        <li>
          <p class="time">即日起</p>
          <p class="play">比赛报名</p>
        </li>
        <li>
          <p class="time">11月26日</p>
          <p class="play">线上评选</p>
        </li>
        <li>
          <p class="time">11月28日-11月29日</p>
          <p class="play">线下复赛</p>
        </li>
        <li>
          <p class="time">12月11日-12月13日</p>
          <p class="play">线下决赛</p>
        </li>
        <li>
          <p class="time">12月14日</p>
          <p class="play">公布排名</p>
        </li>
      </ul>
      <ul class="xy-box">
        <li class="yx1">
          <img src="@/assets/imgs/yx1.png" />
          <span class="jt jt1"></span>
        </li>
        <li class="yx2">
          <img src="@/assets/imgs/yx2.png" />
          <span class="jt jt2"></span>
        </li>
        <li class="yx3">
          <img src="@/assets/imgs/yx3.png" />
          <span class="jt jt3"></span>
        </li>
        <li class="yx4">
          <img src="@/assets/imgs/yx4.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./flow.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './flow.scss';
</style>
