<template>
     <div class="footer">
        <ul>
            <li>
                <a v-link="{path:'/index',activeClass:'on'}" ><div class="nav"><div class="ih ispr"></div><p>首页</p></div></a>
            </li>
            <li>
                <a v-link="{path:'/product/category',activeClass:'on'}"  ><div class="nav"><div class="ic ispr"></div><p>分类</p></div></a>
            </li>
            <li>
            <a  v-link="{path:'/cart/index', activeClass: 'on'}" ><div class="nav"><div class="is ispr"></div><p>购物车</p></div></a>
            </li>
            <li>
            <a  v-link="{path: '/user/index', activeClass: 'on'}"><div class="nav"><div class="if ispr"></div><p>我的</p></div></a>
            </li>
        </ul>
        </div>
</template>


<style>
      .footer{position:fixed;bottom:0;left:0;right:0;background:#FFF;z-index:99;border-top:1px solid #e0e0e0}.footer ul{display:box;display:-webkit-box;box-align:center;-webkit-box-align:center;box-pack:center;-webkit-box-pack:center}.footer .nav .ispr{width:.4rem;height:.4rem;background-image:url(//s1.mi.com/m/images/m/spr1.png);-webkit-background-size:.4rem 3.2rem;-moz-background-size:.4rem 3.2rem;-ms-background-size:.4rem 3.2rem;-o-background-size:.4rem 3.2rem;background-size:.4rem 3.2rem;overflow:hidden;margin:0 auto .08rem}.footer .nav .ispr.ih{background-position-y:-2.8rem}.footer .nav .ispr.ic{background-position-y:-.4rem}.footer .nav .ispr.is{background-position-y:-1.2rem}.footer .nav .ispr.if{background-position-y:-2rem}.footer .nav p{font-size:.22rem;line-height:.8;color:#999}.footer li{-webkit-box-flex:1;box-flex:1;width:100%;text-align:center}.footer li>a{display:block;padding:.12rem 0}.footer li>a.on .nav p{color:#FF5722}.footer li>a.on .nav .ispr.ih{background-position-y:-2.4rem}.footer li>a.on .nav .ispr.ic{background-position-y:0}.footer li>a.on .nav .ispr.is{background-position-y:-.8rem}.footer li>a.on .nav .ispr.if{background-position-y:-1.6rem}
</style>
