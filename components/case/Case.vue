<template>
    <div :class="$style.caseContainer">
        <div :class="$style.case">
            <div :class="$style.caseMess">
                <p :class="$style.title">
                    {{ title }}
                </p>
                <p :class="$style.desc">
                    {{ desc }}
                </p>
            </div>
            <div :class="$style.caseCon">
                <div :class="$style.caseLeft">
                    <div :class="$style.cases">
                        <div :class="[$style.caseFirst, $style.caseItem]">
                            <p :class="$style.caseFirstText">
                                CASES
                            </p>
                        </div>
                        <div v-for="(item, index) in imgList" :key="index" :class="[$style.caseImg, $style.caseItem]">
                            <img :src="item">
                        </div>
                        <div :class="[$style.caseLast, $style.caseItem]">
                            <div :class="$style.caseMore">
                                <router-link to="">
                                    更多案例
                                </router-link>
                                <i :class="$style.link" />
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="$style.caseRight" />
            </div>
        </div>
    </div>
</template>

<script>

import SERVICE from '@/static/service/service.jpg';

export default {
    data() {
        return {
            title: '服务案例',
            desc: 'XXXXXXx',
            imgList: [
                SERVICE,
                SERVICE,
                SERVICE,
                SERVICE,
                SERVICE,
                SERVICE,
            ],
        };
    }
};
</script>

<style module>
    @import './Case.css';
</style>