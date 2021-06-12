<template>
  <div>
    <el-container>
      <el-row>
        <el-col :span="20">北京天拓</el-col>
        <el-col :span="4">管理员</el-col>
      </el-row>
      <el-header>
        <el-menu
          default-active="1"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1" >首页</el-menu-item>
          <el-menu-item index="2">公司介绍</el-menu-item>
          <el-menu-item index="3">能力检测</el-menu-item>
          <el-menu-item index="4">会员中心</el-menu-item>
          <el-menu-item index="5">单项委托</el-menu-item>
          <el-menu-item index="6">合同项目</el-menu-item>
          <el-menu-item index="7">资料下载</el-menu-item>
          <el-menu-item index="8">通知公告</el-menu-item>
          <el-menu-item index="9">联系我们</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item>
            <el-image
              src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
            ></el-image>
          </el-carousel-item>
        </el-carousel>
        <el-row>
          <el-col :span="8">
            <el-aside width="100%">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span><i class="el-icon-eleme"></i>最新动态</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >更多<i class="el-icon-right"></i
                ></el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{ "列表内容 " + o }}
              </div>
            </el-card>
          </el-aside>
          </el-col>
          <el-col :span="16">
            <el-row>
                <el-col :span="24">
                  <el-aside width="100%">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span
                          ><i class="el-icon-message-solid"></i
                          >实验室管理平台介绍</span
                        >
                      </div>
                      <div>
                        <el-image
                          style="width: 150px; height: 150px"
                          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                          fit="fill"
                        ></el-image>
                      </div>
                    </el-card>
                  </el-aside>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-aside width="100%">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span><i class="el-icon-download"></i>资料下载</span>
                        <el-button
                          style="float: right; padding: 3px 0"
                          type="text"
                          >更多<i class="el-icon-right"></i
                        ></el-button>
                      </div>
                      <div v-for="o in 4" :key="o" class="text item">
                        {{ "列表内容 " + o }}
                      </div>
                    </el-card>
                  </el-aside>
                </el-col>
                <el-col :span="12">
                  <el-aside width="100%">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span><i class="el-icon-phone"></i>联系方式</span>
                        <el-button
                          style="float: right; padding: 3px 0"
                          type="text"
                          >更多<i class="el-icon-right"></i
                        ></el-button>
                      </div>
                      <div v-for="o in 4" :key="o" class="text item">
                        {{ "列表内容 " + o }}
                      </div>
                    </el-card>
                  </el-aside>
                </el-col>
              </el-row>
          </el-col>
        </el-row>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goBack() {
      console.log("go back");
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

.el-header {
  color: #333;
  text-align: center;
  padding: 0;
  line-height: 50px;
}

.el-main {
  color: #333;
  padding: 0;
}

.el-aside {
  padding-top: 10px;
  padding-right: 10px;
}

.new-container {
  height: 100%;
}

.el-card__header {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
