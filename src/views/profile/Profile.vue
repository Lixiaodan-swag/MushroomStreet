<template>
  <div class="Profile">
    <CategoryBar />
    <Navbar class="Profile-title">
      <div slot="center">商城</div>
    </Navbar>
    <BetterScroll class="better-scroll" ref="scroll" :click="true">
      <!-- ////////登录部分////////// -->
      <div class="Profile-login">
        <div>
          <i class="iconfont icon-wodedangxuan"></i>
        </div>
        <!-- <i class="iconfont icon-yun"></i> -->
        <div class="login-item">
          登录/注册
          <div class="login-item1">
            <i class="iconfont icon-shouji"></i>暂时无绑定手机号
          </div>
        </div>
        <div class="login-item2">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
      <!-- ////////积分部分////////// -->
      <div class="Profile-score">
        <div class="score">
          <span class="num">0.00</span>
          元
          <div>我的余额</div>
        </div>
        <div class="score">
          <span class="num">0</span>个
          <div>我的优惠</div>
        </div>
        <div class="score">
          <span class="num">0</span>分
          <div>我的积分</div>
        </div>
      </div>
      <ul>
        <li>
          <i class="iconfont icon-wodexiaoxi"></i>我的消息
        </li>
        <li>
          <i class="iconfont icon-jifenshangcheng"></i>积分商城
        </li>
        <li>
          <i class="iconfont icon-huangguan"></i>会员卡
        </li>
        <li>
          <i class="iconfont icon-qicheqianlian-"></i>我的购物车
        </li>
        <li>
          <i class="iconfont icon-xiazai"></i>下载购物APP
        </li>
      </ul>
    </BetterScroll>
  </div>
</template>

<script>
import CategoryBar from "../category/childComps/CategoryBar";
import Navbar from "../../components/common/nav-bar/Navbar";
import BetterScroll from "../../components/common/better-scroll/BetterScroll";
export default {
  name: "Profile",
  components: {
    CategoryBar,
    Navbar,
    BetterScroll
  }
};
</script>

<style scoped>
.Profile {
  height: 100vh;
}
.better-scroll {
  height: calc(100% - 149px);
}
.Profile-title {
  background: pink;
  color: white;
}
.Profile-login {
  background: pink;
  display: flex;
  color: white;
  padding: 10px 0px;
}
.Profile-score {
  display: flex;
  justify-content: space-between;
}
.login-item {
  /* padding-left: 20px; */
}
.login-item1 {
  font-size: 14px;
}
.login-item2 {
  position: fixed;
  right: 0px;
}
.num {
  font-size: 24px;
  font-weight: bold;
  color: red;
}
ul {
  padding-top: 10px;
}
li {
  padding-top: 10px;
}
.score {
  border-right: 1px solid #ccc;
}
</style>