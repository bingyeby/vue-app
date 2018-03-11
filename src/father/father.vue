<template>
    <!--父组件HTML内容-->
    <div>
        <son :value.sync="data"></son>
    </div>
</template>

<!--父组件的js内容-->
<script>
    import son from "./son.vue";

    export default {
        data() {
            return {
                data: [1, 2, 3, 4]
            };
        },
        methods: {
            changeData(data1) {
                this.data = data1;
            }
        },
        components: {son}
    };
</script>
