<template>
  <div>
      {{value}}
  </div>
</template>

<script>
export default {
  props: ["value"],
  created() {

    /* 1 Vue中子组件不允许修改父组件穿进来的值 */
    // this.value = [5, 6, 7, 8];

    /* 2
        那么解决方法是什么呢，那就要看你需求了。
        比如传进来的是一个渲染列表，我需要的只是修改渲染的数据，那么可以emit出去，然后在父组件重新赋值，通过双向绑定，触发子组件的再次渲染。
        <son :value="data" @changeProp="changeData"></son>
    */
    // this.$emit("changeProp", [5, 6, 7, 8]);

    /* 3
        <!--日常使用语法糖形态-->
        <comp :foo.sync="bar"></comp>
        <!--↓↓↓↓↓真实形态↓↓↓↓↓↓-->
        <comp :foo="bar" @update:foo="val => bar = val"></comp>
        <!--子组件js代码-->
        this.$emit('update:foo', newValue)
    */
    this.$emit("update:value", [5, 6, 7, 8]);
  }
};
</script>
