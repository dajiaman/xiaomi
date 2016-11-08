<template>
    <div class="page-index" id="home" >

      <div class="index-header">
        <div class="search_bar"><a href="/#!/search/index" ><span class="icon icon-search"></span><span class="text">搜索商品名称</span></a></div>
        <div class="search_bottom"></div>
      </div>


     <slider :banner="banner"></slider>


        <div class="section">
          <div class="mcells_auto_fill">
            <div class="items" v-for="item in cells">
                <a href="{{item.url}}">
                  <img  v-bind:src="item.img" >
                </a>
            </div>
          </div>
        </div>

   <footer-bar></footer-bar>


      </div>

</template>


<script>
import Slider from '../components/slider';
import footerBar from '../components/footer';


export default {
    data(){
        return {
            banner: [],
            cells: [
                {
                  img: 'http://i8.mifile.cn/v1/a1/db9d9aec-6302-bce4-0beb-05dfe06c2f69.png',
                  url: 'http://www.mi.com/#/product/list?id=390'
                },{
                  img: 'http://i8.mifile.cn/v1/a1/5dcaeeb3-b45e-ea66-1f56-567d17707dce.jpg',
                  url: 'http://www.mi.com/#/product/view?product_id=3398'
                },{
                  img: 'http://i8.mifile.cn/v1/a1/5868c0d3-8d72-047d-1aee-2570f9e0204c.jpg',
                  url: 'http://www.mi.com/#/product/list?id=412'
                }
            ]

    }
     },
    components: {
      Slider,
      footerBar
    }
}
</script>

<style>
 .index-header{background:#FFF;padding:0 0 .1rem}.index-header .search_bottom{border:1px solid #E3E3E3;margin:0 .2rem;height:.08rem;border-top:0}.index-header .search_bar{line-height:.34rem}.index-header .search_bar>a{display:block;padding:.2rem .3rem .12rem}.index-header .search_bar .text{font-size:.3rem;color:#9C9C9C}.index-header .search_bar .icon-search{font-size:.4rem;color:#CACACA;padding-right:.1rem}

  .page-index .mcells_auto_fill {
    background: #F5F5F5;
    padding: .1rem 0;
}
  .mcells_auto_fill .items{
    width: 33%;
    display: inline-block;
  }
  .mcells_auto_fill .items img{
    width: 100%;
  }

</style>

