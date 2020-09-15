<template>
  <el-container>
    <el-header style="padding: 0px;">
      <indexheader></indexheader>
    </el-header>
    <el-main>
      <router-view name="mainPanel"></router-view>
    </el-main>
  </el-container>
</template>

<script>
    import indexheader from '@/views/system/header.vue'

    export default {
        name: "index",
        components: {
            indexheader: indexheader,
        }
    }
</script>

<style scoped>

</style>
