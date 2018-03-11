<template>
    <div>
        {{initNumShow}}
        <button @click="upClickHandler">+</button>
        <button @click="downClickHandler">-</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sonNum: 0,
            initNum: this.init/* 转化一下 */
        }
    },
    props: {
        init: Number
    },
    computed: {
        initNumShow() {
            return this.initNum * 2
        }
    },
    methods: {
        upClickHandler() {
            this.initNum++
            this.$emit("upDown", "UP");
        },
        downClickHandler() {
            this.initNum--
            this.$emit("upDown", "DOWN");
        }
    }
}
</script>

<style>

</style>