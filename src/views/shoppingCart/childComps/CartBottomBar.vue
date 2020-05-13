<template>
  <div id="bottom-bar">
    <!-- ///////全选////// -->
    <div class="check-content">
      <CheckButton :ischecked="ischeck" @checkClick="allChecked" />
      <span>全选</span>
      <!-- ///////合计////// -->

      <span class="alltotal">总价: {{totalPrice}}</span>
      <!-- ///////去计算////// -->
      <span class="calculate">去计算:{{checkLength}}</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    ischeck() {
      return this.cartList.every(itemInfo => {
        return itemInfo.checked;
      });
    },
    totalPrice() {
      return this.cartList
        .filter(itemInfo => {
          return itemInfo.checked;
        })
        .reduce((preValue, itemInfo) => {
          return preValue + itemInfo.price * itemInfo.count;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.cartList.filter(itemInfo => itemInfo.checked).length;
    }
  },
  data() {
    return {};
  },
  methods: {
    allChecked() {
      //判断是否有位选中的按钮
      let boo = this.cartList.every(itemInfo => itemInfo.checked);
      //有未被选中的需要进行全部选中操作,没有未被选中的需要全部取消
      if (boo) {
        this.$store.commit("clearCheck");
      } else {
        this.$store.commit("allCheck");
      }
    }
  }
};
</script>

<style scoped>
#bottom-bar {
  height: 44px;
  line-height: 44px;
  width: 100%;
  position: fixed;
  bottom: 44px;
  background: #ccc;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.check-content {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}
.calculate {
  background: coral;
  width: 100px;
  position: fixed;
  right: 0;
  color: white;
}
</style>
