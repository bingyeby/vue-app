<template>
    <div>
        <button @click="showHandler">
            Toggle
        </button>
        <transition name="larger">
            <div class="test" v-show="show">大</div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        showHandler() {
            this.show = !this.show
        }
    },
    components: {}
}
</script>
<style  lang="stylus" >
.test
    width 100px
    height 100px
    background red
    color white
    font-size 25px
    text-align center
    line-height 100px
    border-radius 50%
    &.larger-enter
        width 10px
        height 10px
        line-height 10px
    &.larger-leave-to
        width 10px
        height 10px
        line-height 10px
    &.larger-enter-active
        transition all 2s ease-in-out
    &.larger-leave-active
        transition all 2s ease-in-out    
</style>



