<template>
    <div>
        <table style="width:800px">
            <tr>
                <td>[数据双向绑定]</td>
                <td><input v-model="message"></td>
                <td>{{ message }}</td>
                <td>{{messageUP}}</td>
                <td>{{ message.split('').reverse().join('') }}</td>
            </tr>
            <tr>
                <td>[父区域赋予初始值，通过子区域input改变]</td>
                <td>
                    [父作用域]
                    {{sonValue}}
                </td>
                <td>
                    <input-com :mes-father="message" @sonValueChange="receiveSonValue"></input-com>
                </td>
            </tr>
            <tr>
                <td>[一个简单的按钮]</td>
                <td>
                    <ict-button :disabled="false" :btn-active="true" :title="'按钮'"
                                :btn-click="simpleBtnTestHandler"></ict-button>
                    <!-- title="按钮" -->
                    <!--  @ict-click="simpleBtnTestHandler"  this.$emit("ictclick")-->
                </td>
            </tr>
            <tr>
                <td>[父子组件之间不相互干扰]</td>
                <td>
                    {{num}}
                </td>
                <td>
                    <up-down @upDown="upOrDownHandler" :init="1"></up-down>
                    <up-down @upDown="upOrDownHandler" :init="100"></up-down>
                </td>
            </tr>
            <tr>
                <td>
                    [一个简单的模板]
                </td>
                <td>
                    <simple-temp></simple-temp>
                </td>
            </tr>
        </table>
        <br/>

        <!--
            写法1，传递给组件的值是父组件作用域：
            <input-com :mes-father="message" @sonvaluechange="receive"></input-com>
            写法2，传递给组件的值是输入的字符串：
            <input-com mes-father="message" @sonvaluechange="receive"></input-com>
            -->

    </div>
</template>

<script>
    import IctButton from "./btn.vue";
    import InputCom from "./inputCom.vue";
    import UpDown from "./upDown.vue";
    import simpleTemp from "./simpleTemp.vue";

    export default {
        data() {
            return {
                message: "12345abc",
                sonValue: "son value default",
                num: 0
            };
        },
        methods: {
            receiveSonValue(mes) {
                // recieve 事件需要设置参数，这些参数就是子组件传递过来的数据，因此，参数的个数，也要和子元素传递过来的一致。
                this.sonValue = mes;
            },
            simpleBtnTestHandler() {
                console.log("按钮的回调函数执行了！");
            },
            upOrDownHandler(val) {
                console.log(1111);

                if (val == "UP") {
                    this.num++;
                } else {
                    this.num--;
                }
            }
        },
        computed: {
            messageUP() {
                return this.message.toUpperCase();
            }
        },
        components: {IctButton, InputCom, UpDown, simpleTemp}
    };
</script>
<style>
</style>