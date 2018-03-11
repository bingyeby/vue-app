<style lang="stylus" scoped>
    body {
        overflow: hidden;
    }
    body, ul {
        padding: 0px;
        margin: 0px;
    }
    /*1*/
    .wrapper {
        height: 230px;
        overflow: hidden;
        outline: 1px solid blue;
    }
    .content {
        outline: 1px solid red;
    }
    .content > li {
        text-align: center;
        height: 50px;
        outline: 1px solid lightcoral;
        list-style: none;
    }
    /*2*/
    #outer {
        width: 100%;
        /*height: 100%;*//*++*/
        outline: 1px solid lightcoral;
        top: 0;
        left: 0;
        background: white;
    }
    #inner { /*width为屏幕的宽度*/
        outline: 1px solid lightcoral;
        white-space: nowrap;
        position: relative;
        vertical-align: top;
        font-size: 0;
    }
    #inner > div {
        outline: 1px solid lightcoral;
        display: inline-block;
        /*height: 100%;*//*++*/
        letter-spacing: normal;
        font-size: 50px;
    }
    /*3*/
    .swiper-container {
        width: 100%;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
    }
    .swiper-wrapper {
        position: relative;
        width: 100%;
        display: flex;
    }
    .swiper-slide {
        outline: 1px solid lightcoral;
        flex: 1 0 100%;
        font-size: 50px;
        line-height: 2rem;
    }
</style>

<template>
    <div>
        <!--1 纵向滚动-->
        <div class="wrapper" ref="wrapper">
            <ul class="content">
                <li v-for="(v,i) in li">{{i+"=="+i}}</li>
                <li v-show="loadingShow">loading</li>
            </ul>
        </div>
        <!--2 横向滚动-->
        <div id="outer" ref="outer" v-show="outerShow">
            <div id="inner" v-bind:style="{width:totalWidth+'px'}">
                <div :style="{width:clientWidth+'px'}">1</div>
                <div :style="{width:clientWidth+'px'}">2</div>
                <div :style="{width:clientWidth+'px'}">3
                    CLOSE
                </div>
            </div>
        </div>
        <!--3 swiper-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">slider1</div>
                <div class="swiper-slide">slider2</div>
                <div class="swiper-slide">slider3</div>
            </div>
        </div>
    </div>
</template>

<script>
    /*
      BetterScroll：可能是目前最好用的移动端滚动插件
      https://juejin.im/post/59b777015188257e764c716f
    */
    import Bscroll from "better-scroll";

    let clientWidth = document.body.clientWidth;

    export default {
        data() {
            return {
                clientWidth,
                li: new Array(10).fill(0),
                outerShow: true,
                loadingShow: false
            };
        },
        computed: {
            totalWidth() {
                return 3 * clientWidth;
            }
        },
        methods: {
            bsInit_1() {
                this.scroll_1 = new Bscroll(this.$refs.wrapper, {
                    click: true,//响应用户点击事件
                    pullDownRefresh: {
                        threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                        stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
                    },
                    pullUpLoad: {
                        threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
                    }

                });
                this.scroll_1.on("pullingDown", () => {
                    console.log("请求数据中");
                    setTimeout(() => {
                        console.log("数据请求完成");
                        this.scroll_1.finishPullDown();
                    }, 2000)
                });
                this.scroll_1.on("pullingUp", () => {
                    console.log("请求数据中");
                    this.loadingShow = true;
                    setTimeout(() => {
                        console.log("数据请求完成");
                        this.li.push(...new Array(8).fill(0));
                        this.scroll_1.finishPullUp();
                        this.loadingShow = false;
                    }, 2000)
                });
            },
            bsInit_2() {
                this.scroll_2 = new Bscroll(this.$refs.outer, {
                    scrollX: true,
                    snap: {
                        // loop: true, // 开启循环播放
                        stepX: clientWidth, // 每页宽度为 200px
                        // stepY: 100, // 每页高度为 100px
                        threshold: 0.3, // 滚动距离超过宽度/高度的 30% 时切换图片
                        speed: 400 // 切换动画时长 400ms
                    }
                });
                this.scroll_2.on("beforeScrollStart", () => {
                    console.log("每次触发滚动都会执行");
                }); // 每次触发滚动都会执行
                this.scroll_2.goToPage(2, 0);// 滚动到下标2
            },
            bsInit_3() {
                let swiper_1 = new Swiper(".swiper-container", {
                    autoplay: true,//自动播放
                    loop: false//循环
                })
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.bsInit_1();
                this.bsInit_2();
                this.bsInit_3();
            });
        },
        components: {}
    };
</script>