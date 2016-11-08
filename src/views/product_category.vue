<template>
<div class="page-category">
    <top-header :title="header_title"></top-header>

    <div class="page-category-wrap">
        <div class="list-wrap" v-for="item in product_lists">
            <h3 class="list_title">{{item.name}}</h3>
            <ol class="list_category">
                <li class="J_linksign-customize" v-for="i in item.list">
                    <a href="http://m.mi.com/#/product/list?id={{i.id}}">
                        <div class="img">
                            <img v-bind:src="i.img_url">
                        </div>
                        <div class="name">
                            <span>{{i.name}}</span>
                        </div>
                    </a>
                </li>
            </ol>
        </div>
    </div>
</div>
    <footer-bar></footer-bar>
</template>

<script>
import TopHeader from '../components/top-header';
import footerBar from '../components/footer';
export default {
    data(){
        return {
            header_title: '商品分类',
            product_lists: {}
        }
    },
    ready(){
        this.$http({
            method: 'get',
            url: 'product_category.json'
        }).then(function({data: {code, message, data}}){
            console.log(data);
            this.product_lists = data.list;
        }, function(error){
            console.log(error);
        })
    },
    components: {
     "top-header": TopHeader,
      footerBar
    }
}
</script>


<style>

    .page-category .page-category-wrap{overflow:hidden;background:#F5F5F5;padding-bottom:1.2rem}.page-category .list-wrap{background:#FFF;margin:.2rem .2rem 0;overflow:hidden;border-bottom:1px solid #ECECEC;border-right:1px solid #ECECEC}.page-category .list_title{color:#333;font-size:.3rem;text-align:center;margin:.5rem 0 .6rem;font-weight:400;color:#333}.page-category .list_category{overflow:hidden;margin:0 .25rem}.page-category .list_category li{float:left;width:25%;text-align:center;margin-bottom:.4rem;height:1.6rem;overflow:hidden}.page-category .list_category li .img{width:1rem;height:1rem;margin:0 auto;background:#FFF;overflow:hidden}.page-category .list_category li .img img{width:100%}.page-category .list_category li .name{font-size:.22rem;color:#333;margin-top:.28rem;white-space:nowrap}
</style>
