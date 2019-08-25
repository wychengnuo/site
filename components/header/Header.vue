<template>
    <div :class="$style.header">
        <div :class="$style.logo">
            <Logo />
        </div>
        <div :class="$style.menu">
            <router-link to="/" :class="$style.active">首页</router-link>
            <router-link to="/">服务</router-link>
            <router-link to="/">关于我们</router-link>
            <router-link to="/">联系我们</router-link>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo';

export default {
    components: {
        Logo,
    }
};

</script>

<style module>
    @import './Header.css';
</style>
