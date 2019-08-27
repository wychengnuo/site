<template>
    <div :class="$style.serviceContainer">
        <div :class="$style.service">
            <div :class="$style.serviceMess">
                <p :class="$style.title">
                    <span>{{ title }}</span>
                </p>
                <p :class="$style.desc">
                    {{ desc }}
                </p>
            </div>
            <div :class="$style.serviceCon">
                <i :class="$style.link" />
                <div :class="$style.serviceLeft">
                    {{ serviceMess }}
                </div>
                <div :class="$style.serviceRight">
                    <img :src="SERVICE">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SERVICE from '@/static/service/service.jpg';
export default {
    data() {
        return {
            SERVICE,
            title: '服务 理念',
            desc: '我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务XXXXXXXXX',
            serviceMess: '我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务我们的服务XXXXXXXXX'
        };
    }
};
</script>

<style module>
    @import './ServiceItem.css';
</style>