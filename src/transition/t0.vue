<template>
    <div>
        <button @click="show = !show">
            Toggle
        </button>
        <transition name="fade">
            <p v-if="show">hello</p>
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
    components: {}
}
</script>
<style>
.fade-enter-active {
    transition: all 5s ease;
}

.fade-leave-active {
    transition: all 5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}


/* 
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
 */
</style>



