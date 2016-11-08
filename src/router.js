export default function(router){
    router.map({
        '*':{
            component(resolve){
                router.go({path:'/index'})
            }
        },
        '/index': {
            component (resolve){
                require(['./views/index.vue'], resolve)
            }
        },
        '/search/index': {
            component(resolve){
                require(['./views/search.vue'], resolve)
            }
        },
        '/product/category': {
            component(resolve){
                require(['./views/product_category.vue'], resolve)
            }
        },
        'cart/index': {
            component(resolve){
                require(['./views/cart.vue'], resolve)
            }
        },
        'user/index': {
            component(resolve){
                require(['./views/user.vue'], resolve)
            }
        }
    });
}
