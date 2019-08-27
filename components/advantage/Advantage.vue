<template>
    <div :class="$style.advantageContainer">
        <div :class="$style.advantage">
            <div :class="$style.advantageLeft">
                <div :class="$style.title">
                    <p :class="$style.title1">
                        {{ title1 }}
                    </p>
                    <p :class="$style.title2">
                        {{ title2 }}
                    </p>
                </div>
                <p :class="$style.desc">
                    {{ desc }}
                </p>
                <i :class="$style.line" />
            </div>
            <div :class="$style.advantageRight">
                <div v-for="item in advantageList" :key="item.id" :class="$style.advantageItem">
                    <img :src="item.icon">
                    <p :class="$style.advantageTitle">
                        {{ item.title }}
                    </p>
                    <p :class="$style.advantageDesc">
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
            title1: '我们',
            title2: '的优势',
            desc: '我们能做什么XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            advantageList: [{
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
            },]
        };
    }
};
</script>

<style module>
    @import './Advantage.css';
</style>