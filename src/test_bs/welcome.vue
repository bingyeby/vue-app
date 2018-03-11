<template>
    <!--2 横向滚动-->
    <div id="outer" ref="outer" v-show="outerShow">
        <div id="inner" v-bind:style="{width:totalWidth+'px'}">
            <div :style="{width:clientWidth+'px'}">1</div>
            <div :style="{width:clientWidth+'px'}">2</div>
            <div :style="{width:clientWidth+'px'}">3
                <br>
                <span @click="closeHandler">close</span>
            </div>
        </div>
    </div>
</template>
<!--从index.vue中提取出来的，具体细节请查看index.vue-->
<script>
    import Bscroll from "better-scroll";

    let clientWidth = document.body.clientWidth;

    export default {
        data() {
            return {
                clientWidth,
                outerShow: true,
                totalWidth: 3 * clientWidth
            };
        },
        computed: {},
        methods: {
            closeHandler() {
                console.log("closeHandler");
            },
            bsInit_2() {
                this.scroll_2 = new Bscroll(this.$refs.outer, {
                    scrollX: true,
                    snap: {
                        click: true,
                        // loop: true, // 开启循环播放
                        stepX: clientWidth, // 每页宽度为 200px
                        // stepY: 100, // 每页高度为 100px
                        threshold: 0.3, // 滚动距离超过宽度/高度的 30% 时切换图片
                        speed: 400 // 切换动画时长 400ms
                    }
                });
                this.scroll_2.on("beforeScrollStart", () => {// 每次触发滚动都会执行
                    console.log(11);
                });
                // this.scroll_2.goToPage(1, 0);// 滚动到下标1
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.bsInit_2();
            });
        },
        components: {}
    };
</script>
<style lang="stylus" scoped>
    /*2*/
    #outer {
        width: 100%;
        height: 100%;
        outline: 1px solid lightcoral;
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        background: white;
    }
    #inner { /*width为屏幕的宽度*/
        outline: 1px solid lightcoral;
        white-space: nowrap;
        font-size: 0;
    }
    #inner > div {
        outline: 1px solid lightcoral;
        display: inline-block;
        height: 100%;
        letter-spacing: normal;
        font-size: 50px;
        vertical-align: top;
    }
</style>