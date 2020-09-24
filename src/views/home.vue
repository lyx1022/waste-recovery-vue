<template>
  <el-container>
    <el-header style="height: 100px; padding: 0px;">
      <toolbar></toolbar>
    </el-header>
    <el-main>
      <router-view name="mainPanel"></router-view>
    </el-main>
  </el-container>
</template>

<script>
    import toolbar from '@/views/system/toolbar.vue'
    //import homeIndex from '@/views/index.vue'

    export default {
        name: "index",
        components: {
            toolbar: toolbar,
            //homeIndex:homeIndex,
        }
    }
</script>

<style scoped>

</style>
