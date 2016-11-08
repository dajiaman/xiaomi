<template>
    <div class="header">
   <div class="left">
    <a class="home" @click="goHome"><img src="//s1.mi.com/m/images/m/icon_back_n.png" class="ib" /></a>
    <!--vue-if-->
    <!--vue-if-->
   </div>
   <div class="tit">
    <h2 ><span class="title">{{title}}</span></h2>
    <!--vue-if-->
   </div>
   <div class="right">
    <a @click="goSearch">
     <div class="icon icon-search"></div>
     </a>
   </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods: {
            goHome(){
                var self=this;
                this.$route.router.go({path:'/index'})
            },
            goSearch(){
              var self=this;
              this.$route.router.go({path:'/search/index'})
            }
        },
        props: {
            title: {
                require: true,
                type: String
            }
        }
    }
</script>

<style>
    .header{display:box;display:-webkit-box;height:.84rem;box-align:center;-webkit-box-align:center;padding:0 .2rem;background:#f2f2f2;position:relative;border-bottom:1px solid #eee}.header .icon-gouwuche{position:relative}.header .icon-gouwuche span{line-height:.2rem;min-width:.2rem;text-align:center;overflow:hidden;-webkit-border-radius:100%;-moz-border-radius:100%;-ms-border-radius:100%;-o-border-radius:100%;border-radius:100%;position:absolute;right:-.1rem;top:-.1rem;font-size:.15rem;font-weight:700;color:#FFF;padding:.02rem;background:#FF5722}.header .left{position:relative;z-index:1}.header .left a{display:block}.header .left .text-home{font-size:.32rem}.header .left .text-home strong{font-weight:200;color:#666}.header .left .text-home span{font-size:.24rem;color:#A5A5A5;margin-left:.06rem}.header .left .icon{font-size:.5rem;color:#999}.header .left .ib{width:.44rem;height:.44rem}.header .tit{-webkit-box-flex:1;box-flex:1;width:100%}.header .tit h2{text-align:center;position:absolute;top:0;right:0;bottom:0;left:0;line-height:.84rem}.header .tit span{font-size:.3rem;color:#666;font-weight:400}.header .right{position:relative}.header .right .icon{color:#999}.header .right a{display:inline-block;margin-left:.2rem;width:.44rem;height:.44rem;font-size:.44rem}
</style>
