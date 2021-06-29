<template>
  <div class="rules">
    <Title :title="'赛事规则'"></Title>
    <div class="rules-box">
      <p class="rules-title">比赛规则</p>
      <p class="rules-text"><span>1</span>考核机制：报名信息内容为唯一联系方式，请务必保证资料准确 ；</p>
      <p class="rules-text"><span>2</span>在线上评选期间，根据组委会提供的一段视频进行解说，根据解说的内容获得相对应的积分；</p>
      <p class="rules-text"><span>3</span>线上面试中组委会会相对应提出关于游戏方面的知识来考核该参赛选手，根据答题获得相对应的积分标准</p>
      <p class="rules-text"><span>4</span>参赛选手的才艺表演，例如舞蹈、演唱、乐器等才艺可获得相对应积分。</p>
      <p class="rules-text"><span>5</span>综合评分排前16选手晋级线下复赛。</p>
      <p class="rules-text">
        <span>6</span
        >线下复赛将由一名KPL官方或专业解说搭配两名晋级解说，组成解说团进行比赛现场解说。比赛结束后，KPL官方解说将根据现场两名解说的表现进行点评和打分，结合外场评委团的综合评分，两人中得分高的解说将晋级到总决赛的解说当中。十六名解说将分为六场进行比赛，共决出六人晋级参与到线下总决赛的解说当中。
      </p>
      <p class="rules-text">
        <span>7</span
        >晋级总决赛的八名解说，<i>两人一组分成三组</i>，参与到线下总决赛的解说当中，四组解说将在直播平台同步直播，最终根据四组解说在线上直播间的观看人数，和由KPL官方解说组成的评委团队，进行综合打分，<i>综合得分排名前三</i>的选手，即为本次大赛的前三名。
      </p>
      <p class="rules-title rules-title2">线上评选标准</p>
      <p class="rules-text"><span>1</span>视频解说中，<i>最高可加10分</i>，视频中参赛选手着装5分，形象5分考核标准；</p>
      <p class="rules-text"><span>2</span>线上赛事解说视频录制<i>最高可加80分</i>，根据解说录制的普通话20分，解说中的语言使用20分，对王者荣耀游戏中的理解程度20分，对每个英雄技能的称呼20分，为考核标准；</p>
      <p class="rules-text"><span>3</span>参赛选手才艺表演<i>最高可获得10分</i>。</p>
    </div>
  </div>
</template>

<script lang="ts" src="./rules.ts">
</script>

<style rel="stylesheet/scss" lang="scss">
@import './rules.scss';
</style>
