<template>
  <div class="table">
    <div>
      <el-button @click="refresh">刷新</el-button>
    </div>
    <div class="table-box">
      <el-table :data="tableData" style="width: 100%" height="100%" stripe :default-sort="{ prop: 'uploadDate' }">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="uploadDate" sortable label="时间"></el-table-column>
        <el-table-column label="姓名">
          <div slot-scope="scope">
            {{ tableTransform(scope.row.businessId, 0) }}
          </div>
        </el-table-column>
        <el-table-column label="电话">
          <div slot-scope="scope">
            {{ tableTransform(scope.row.businessId, 1) }}
          </div>
        </el-table-column>
        <el-table-column label="游戏ID">
          <div slot-scope="scope">
            {{ tableTransform(scope.row.businessId, 2) }}
          </div>
        </el-table-column>
        <el-table-column label="游戏大区">
          <div slot-scope="scope">
            {{ tableTransform(scope.row.businessId, 3) }}
          </div>
        </el-table-column>
        <el-table-column label="目前段位">
          <div slot-scope="scope">
            {{ tableTransform(scope.row.businessId, 4) }}
          </div>
        </el-table-column>
        <el-table-column label="历史最高段位">
          <div slot-scope="scope">
            {{ tableTransform(scope.row.businessId, 5) }}
          </div>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <div slot-scope="scope">
            <el-button @click="delteVideo(scope.row)">删除</el-button>
            <el-button @click="playVideo(scope.row.fileId)">播放</el-button>
             <el-button @click="dowonVideo(scope.row.fileId)">下载</el-button>
          </div>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="播放视频" custom-class="video-dialog" width="800px" :visible.sync="dialogTableVisible">
      <video v-if="dialogTableVisible" :src="videoUrl" controls autoplay ></video>
    </el-dialog>
  </div>
</template>

<script lang="ts" src="./table.ts">
</script>

<style rel="stylesheet/scss" lang="scss">
@import './table.scss';
</style>
