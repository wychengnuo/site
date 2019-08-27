<template>
    <div :class="$style.productContainer">
        <div :class="$style.product">
            <div :class="$style.productMess">
                <p :class="$style.title">
                    {{ title }}
                </p>
                <p :class="$style.desc">
                    {{ desc }}
                </p>
            </div>
            <div :class="$style.productCon">
                <div v-for="item in productList" :key="item.id" :class="$style.productItem">
                    <img :src="item.icon">
                    <p :class="$style.productTitle">
                        {{ item.title }}
                    </p>
                    <p :class="$style.productDesc">
                        {{ item.desc }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ICON from '@/static/service/service.jpg';
export default {
    data() {
        return {
            title: '我们能做什么',
            desc: '我们能做什么XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            productList: [{
                id: 1,
                icon: ICON,
                title: 'XXXX',
                desc: 'XXXXXXXX',
            },{
                id: 2,
                icon: ICON,
                title: 'XXXX',
                desc: 'XXXXXXXX',
            },{
                id: 3,
                icon: ICON,
                title: 'XXXX',
                desc: 'XXXXXXXX',
            },{
                id: 4,
                icon: ICON,
                title: 'XXXX',
                desc: 'XXXXXXXX',
            },{
                id: 5,
                icon: ICON,
                title: 'XXXX',
                desc: 'XXXXXXXX',
            },]
        };
    }
};
</script>

<style module>
    @import './productItem.css';
</style>