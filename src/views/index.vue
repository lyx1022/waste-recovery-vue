<template>
  <div id="mainDiv">
    <el-row type="flex" class="row-bg" justify="center" align="middle" gutter="10">
      <el-col :span="10">
        <el-card shadow="never">
          从不显示
        </el-card>
      </el-col>

      <el-col :span="4">
        !!!
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
