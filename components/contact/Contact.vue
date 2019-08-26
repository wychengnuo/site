<template>
    <div :class="$style.contact">
        <div :class="$style.contactLeft">
            <p :class="$style.title">
                {{title}}
            </p>
            <p :class="$style.desc">
                <span>{{desc1}}</span>
                <span>{{desc2}}</span>
            </p>
            <div v-for="item in contactList" :key="item.id" :class="$style.contactMess">
                <img :src="item.icon">
                <div :class="$style.text">
                    <p>{{item.title}}</p>
                    <p>{{item.desc}}</p>
                </div>
            </div>
        </div>
        <div :class="$style.contactRight">
            <div :class="$style.inputItem">
                <label :class="$style.inputLabel">姓名：</label>
                <p :class="$style.inputElement">
                    <input type="text" />
                </p>
            </div>
            <div :class="$style.inputItem">
                <label :class="$style.inputLabel">电话：</label>
                <p :class="$style.inputElement">
                    <input type="tel" />
                </p>
            </div>
            <div :class="$style.inputItem">
                <label :class="$style.inputLabel">email：</label>
                <p :class="$style.inputElement">
                    <input type="email" />
                </p>
            </div>
            <div :class="$style.inputItem">
                <label :class="$style.inputLabel">公司名称：</label>
                <p :class="$style.inputElement">
                    <input type="text" />
                </p>
            </div>
            <div :class="$style.inputItem">
                <label :class="$style.inputLabel">项目需求：</label>
                <p :class="[$style.inputElement, $style.height]">
                    <textarea rows=5 />
                </p>
            </div>
            <div :class="$style.inputItem">
                <label :class="$style.inputLabel"></label>
                <p :class="$style.inputElement">
                    <a :class="$style.btn" href="javascript:;">提交</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import EMAIL from '~/static/home/email.png';
import TEL from '~/static/home/tel.png';
export default {
    data() {
        return {
            title: '联系我们',
            desc1: '请填写右侧表格 告诉我们您的需求',
            desc2: '我们将为您定制方案',
            contactList: [{
                id: 1,
                icon: EMAIL,
                title: '电子邮箱',
                desc: 'XXXXX@.com',
            },{
                id: 2,
                icon: TEL,
                title: '联系电话',
                desc: 'XXXXXXXXXXX',
            }]
        };
    }
};
</script>

<style module>
    @import './Contact.css';
</style>
