<template>
    <div class="hello">
        [子作用域]
        <input type="txet" placeholder="请输入文字" v-model="msg" @keypress.enter="enterHandler">
        <!--
            mesFather值来自父组件(.vue);
            使用方式：
                在父组件的子组件使用中添加相应的属性值：<input-com mes-father="message from father"></input-com>
                在子组件中添加props属性
        -->
        <p>[来自父区域message] {{mesFather}} </p>
    </div>
</template>

<script>
    export default {
        props: ["mesFather"],
        data() {
            return {
                msg: "hello"
            };
        },
        methods: {
            enterHandler() {
                this.$emit("sonValueChange", this.msg);
                // 子组件发射自定义事件 sonValueChange, 并携带要传递给父组件的值；
                // 如果要传递给父组件很多值，这些值要作为参数依次列出 如 this.$emit('sonValueChange', this.inputValue, this.mesFather);
                // *事件的名称需使用小写
            }
        },
        watch: {
            msg: function (newV, oldV) {
                console.log(newV);
                this.$emit("sonValueChange", newV);

            }
        }
    };
</script>

<style scoped>
    input {
        width: 200px;
        height: 20px;
    }
    p {
        color: red;
    }
</style>