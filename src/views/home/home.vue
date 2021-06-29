<template>
  <div class="home" id="home">
    <span class="router" @click="xiaohei"></span>
    <Banner @apply="apply" @changeAnchor="changeAnchor"></Banner>
    <div class="container-box">
      <div class="container">
        <About></About>
        <Flow id="flow"></Flow>
        <Star id="star"></Star>
        <div class="upload" id="upload">
          <Title :title="'线上考核'"></Title>
          <p class="upload-text">
            为下方素材<span>录制一段解说视频</span>，结尾附带<span>舞蹈</span>、<span>演唱</span>、<span>乐器</span>等才艺表演可获得<span
              >额外积分 （解说+才艺表演总时长不超过八分钟）</span
            >
          </p>
          <div class="upload-box">
            <img class="ssx" src="@/assets/imgs/ssx.png" />
            <el-upload action="" ref="upload" :file-list="fileList" :auto-upload="false" :limit="1" :multiple="false" :on-change="uploadVideo">
              <p class="upload-btn">立即投稿</p>
            </el-upload>
            <div class="video-box">
              <div class="img-video">
                <video src="@/assets/video/kpl.mp4" controls></video>
              </div>
            </div>
          </div>
        </div>

        <Rules id="rules"></Rules>
        <Award id="award" @apply="apply"></Award>
      </div>
    </div>
    <div class="fixed-bar">
      <p v-for="(item, index) in sliber" :key="index" :class="['slider', 'slider' + index]" @click="sliberClick(index)">
        {{ item }}
        <img src="@/assets/imgs/top.png" v-if="index === 6" alt="" />
      </p>
    </div>
    <div class="form" v-if="formShow">
      <div class="form-box">
        <span class="close-form" @click="closeForm()"></span>
        <p class="form-text">*请您认真填写个人信息，如因信息有误导致无法联系后果自负。</p>
        <ul class="form-body">
          <li>
            <span>您的姓名</span>
            <el-input v-model="name" placeholder="请您输入"></el-input>
          </li>
          <li>
            <span>您的电话</span>
            <el-input v-model="phone" placeholder="请您输入"></el-input>
          </li>
          <li>
            <span>游戏ID</span>
            <el-input v-model="gameId" placeholder="请您输入"></el-input>
          </li>
          <li>
            <span>游戏大区</span>
            <el-input v-model="gameArae" placeholder="请您输入"></el-input>
          </li>
          <li>
            <span>目前段位</span>
            <el-input v-model="level" placeholder="请您输入"></el-input>
          </li>
          <li>
            <span>历史最高段位</span>
            <el-input v-model="hishory" placeholder="请您输入"></el-input>
          </li>
        </ul>
        <div class="form-btn">
          <p class="btn btn1" @click="submit">确认提交</p>
          <p class="btn" @click="reset">重新填写</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./home.ts">
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './home.scss';
</style>
