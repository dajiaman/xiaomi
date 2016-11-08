<template>
    <top-header :title="header_title"></top-header>

    <footer-bar></footer-bar>
</template>

<script>
import TopHeader from '../components/top-header';
import footerBar from '../components/footer';
export default {
    data(){
        return {
            header_title: '个人中心'
        }
    },
    components: {
     "top-header": TopHeader,
      footerBar
    }
}
</script>
