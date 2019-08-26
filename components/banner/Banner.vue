<template>
    <div :class="$style.banner">
        <el-carousel height="720px">
            <el-carousel-item v-for="item in 4" :key="item" />
        </el-carousel>
    </div>
</template>

<style module>
    @import './Banner.css';
</style>
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
