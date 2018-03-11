<template>
    <div>
        <t0></t0>
        <t1></t1>
        <t2></t2>
    </div>
</template>

<script>
    import t0 from "./t0.vue";
    import t1 from "./t1.vue";
    import t2 from "./t2.vue";

    export default {
        data() {
            return {
                show: true
            };
        },
        components: {t0, t1, t2}
    };
</script>

<style>
</style>