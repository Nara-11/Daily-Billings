<template>
  <div>
    <div class="types">
      <router-link to="/addBilling" class="item" :class="value === '-'">
        <span>支出</span>
      </router-link>
      <router-link to="/addBilling2" class="item" :class="value === '+'">
        <span>收入</span>
      </router-link>
      <router-link to="/" class="cancel">
        <span>取消</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop() readonly value:string;

  selectType(type: string): void {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value',type)
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.types {
  background: lightgrey;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  @extend %clearFix;

  > .item {
    padding: 2px 0;
    width: 50%;
    display: flex;
    justify-content: center;
    font-size: 32px;
  }

  > .item.selected {
    color: $color-highlight;

    span {
      border-bottom: 1px solid $color-highlight;
    }
  }

  > .cancel {
    font-size: 20px;
    float: right;
    width: 64px;
    padding-top: 10px;
  }
}
</style>