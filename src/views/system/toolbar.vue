<template>
  <div id="headerDiv">
    <el-row type="flex" class="row-bg" justify="center" align="middle">
      <el-col :span="4">
        <el-image :src="require('@/assets/img/logo.jpg')">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-col>

      <el-col :span="7">
        <div>
          <el-input placeholder="搜索" size="medium" style="width: 230px;float: right">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="3" style="text-align: right">
        <el-button type="primary" id="index—loginBut" round>登录</el-button>
        <el-button id="index—registerBut" round>注册</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center" align="middle" style="background-color: #1379e5">
      <el-col :span="13">
        <div id="zsd-toolbar">
          <ul class="toolbar-menus zsd-toolbar-fl" style="width: auto;">
            <li class="active toolbar-subMenu-box">
              <a class="">首页</a>
            </li>
            <li class="toolbar-subMenu-box">
              <a>知识点</a>
            </li>
            <li class="toolbar-subMenu-box">
              <a>单元测试</a>
            </li>
            <li class="toolbar-subMenu-box">
              <a>工具库<i class="el-icon-s-tools"></i></a>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="1">

      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "toolbar"
    }
</script>

<style>
  #headerDiv {
    border-top: #1379e5 2px solid;
    height: 40px;
    background-color: #fff;
    line-height: 40px;
  }

  #zsd-toolbar ul li {
    display: inline-block;
    position: relative;
    list-style: none;
    margin: 0px; /* 与外界元素的距离为0 */
    padding: 0px;
    width: auto; /* 宽度根据元素内容调整 */
    float: left;
  }

  #zsd-toolbar .zsd-toolbar-fl {
    padding: 0;
    margin: 0;
  }
  #zsd-toolbar ul .active a{
    color: #4469FF;
    font-size: 15px;
    background-color: white;
    font-weight: bold;
  }
  #zsd-toolbar ul .active::after{
    display: block;
    content: '';
    width: 100%;
    height: 2px;
    background: #33ff00;
    position: absolute;
    top: 0;
    left: 0;
  }

  #zsd-toolbar ul li a {
    display: inline-block;
    text-align: center;
    height: 35px;
    line-height: 36px;
    font-size: 14px;
    text-decoration: none;
    display: block;
    padding: 0 10px;
    color: #ececec;
  }

  /* 所有class为menu的div中的ul中的a样式(鼠标移动到元素中的样式) */
  #zsd-toolbar ul li a:hover {
    cursor: pointer;
    font-weight: bold;
    background-color: #ffffff; /* 背景色 */
    color: #4469FF; /* 文字颜色 */
    text-decoration: none; /* 不显示超链接下划线 */
  }

</style>
