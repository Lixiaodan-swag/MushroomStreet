import BackTop from "./back-top/BackTop"
export let backTopMixin = {
  data() {
    return {
      isShowTop: false
    }
  },
  // comments:
  methods: {
    backTop() {
      this.$refs.scroll.bs.scrollTo(0, 0, 3000);
    },
    getBackTopShow(position) {
      this.isShowTop = position.y < -800;
    }
  },
  components: {
    BackTop
  }
}