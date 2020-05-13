export function debounce(method, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      method.apply(this, args);
    }, delay);
  }
}
// let fn = debounce(function () {
//   this.themeTopYs = [];
//   this.themeTopYs.push(0);
//   this.themeTopYs.push(-this.$refs.params.$el.offsetTop + 44);
//   this.themeTopYs.push(-this.$refs.recomment.$el.offsetTop + 44);
//   this.themeTopYs.push(-this.$refs.list.$el.offsetTop + 44);
// }, 300)