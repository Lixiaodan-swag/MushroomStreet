<template>
  <div class="param-info" v-if="Object.keys(prams).length!=0">
    <table v-for="(table,index) in prams.size" :key="index">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(info,index) in prams.infos" :key="index">
        <td>{{info.key}}{{":"}}</td>
        <td>{{info.value}}</td>
      </tr>
    </table>
    <div>
      <img :src="prams.image" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPram",
  props: {
    prams: {
      type: Object,
      default() {
        return {};
        // console.log(proms);
      }
    }
  }
};
</script>

<style scoped>
td {
  height: 30px;
}
</style>
