<template>
        <!-- v-on:click @click -->
    <div class="ict-item-questionnaire" :class="{'ict-item-disabled':disabled, 'ict-item-active': btnActive_}" @click="clickHandler">
        {{title}}
    </div>
</template>

<script>
export default {
  data() {
    return {
      btnActive_: this.btnActive
    };
  },
  props: {
    disabled: Boolean,
    title: String,
    order: String,
    option: String,
    btnActive: Boolean,
    btnClick: Function
  },
  methods: {
    clickHandler() {
      this.btnActive_ = !this.btnActive_;
      this.btnClick();
      // this.$emit("ict-click");
    }
  }
};
</script>

<style>
.ict-item-questionnaire {
  color: #666;
  height: 0.8rem;
  border-radius: 0.675rem;
  border: 1px solid #eee;
  /*padding: .2rem .3rem;*/
  margin-right: 0.5rem;
  display: inline-block;
  line-height: 0.8rem;
  padding: 10px;
}

.ict-item-questionnaire:hover {
  cursor: pointer;
}

.ict-item-active {
  color: white;
  background: #00b0f0;
}

.ict-item-disabled {
  background: wheat;
}
</style>