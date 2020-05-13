  <template>
  <div>
    <Tabbar>
      <TabbarItem path="/home" activeColor="blue">
        <i class="iconfont icon-jingdongicon-" slot="tab-icon"></i>
        <i class="iconfont icon-yun" slot="tab-icon-active"></i>
        <div slot="tab-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category" activeColor="blue">
        <i class="iconfont icon-fenlei" slot="tab-icon"></i>
        <i class="iconfont icon-yun" slot="tab-icon-active"></i>
        <div slot="tab-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/center" activeColor="blue">
        <i class="iconfont icon-jifen" slot="tab-icon"></i>
        <i class="iconfont icon-yun" slot="tab-icon-active"></i>
        <div slot="tab-text">京喜</div>
      </TabbarItem>
      <TabbarItem path="/car" activeColor="blue">
        <i class="iconfont icon-che" slot="tab-icon"></i>
        <i class="iconfont icon-yun" slot="tab-icon-active"></i>
        <div slot="tab-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile" activeColor="blue">
        <i class="iconfont icon-wodedangxuan" slot="tab-icon"></i>
        <i class="iconfont icon-yun" slot="tab-icon-active"></i>
        <div slot="tab-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "../tab-bar/Tabbar";
import TabbarItem from "./Tabbar-item";
export default {
  name: "mainTabbar",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style scoped>
@import "../../../assets/css/base.css";
@import "../../../assets/css/fontnew/iconfont.css";
</style>
