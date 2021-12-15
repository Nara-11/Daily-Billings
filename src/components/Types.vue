<template>
  <div>
    <ul class="types">
      <li class="item" :class="{selected: value === '-',[classPredix+'-item']:classPredix}" @click="selectType('-')">
        支出
      </li>
      <li class="item" :class="{selected: value === '+',[classPredix+'-item']:classPredix}" @click="selectType('+')">
        收入
      </li>
      <router-link to="/" class="cancel">
        <span>取消</span>
      </router-link>
      <router-link to="/addBilling" class="back">
        <span>取消</span>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop(String) readonly value!:string;
  @Prop(String)classPredix?:string;

  selectType(type: string): void {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value',type);
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
    align-items: center;
    font-size: 24px;
    height: 64px;
  }

  > .item.selected {
    color: $color-highlight;
    border-bottom: 1px solid $color-highlight;
  }

  > .cancel,.back {
    font-size: 20px;
    float: right;
    width: 64px;
    padding-top: 10px;
  }
}
</style>