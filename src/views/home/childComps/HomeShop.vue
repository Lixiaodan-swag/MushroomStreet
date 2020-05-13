<!--  -->
<template>

<div> 
    <h3>本周流行</h3>
  <div class="shoplist">
     <div class="shoplist-item" v-for="(item,index) in shoplists" :key="index">
       <!-- <a :href="item.link"> -->
       <img :src="item.image" alt="">
       <div>{{item.title}}</div>
     <!-- </a> -->
     </div>    
   </div>
  </div>
</template>

<script>

export default {
    name:"HomeShop",
     props:{
        shoplists:{
            type:Array,
            default(){
                return[]
            }
        }   
 },
methods: {

},
}
</script>
<style scoped>
h3{
   text-align: center;
   padding: 10px;
}
.shoplist{
display: flex;
flex-direction: row;
flex-wrap: wrap;
text-align: center;
}
.shoplist-item{
width: 25%;
}
.shoplist-item img{
width: 65px;
height: 65px;
}
</style>