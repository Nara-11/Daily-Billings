<template>
  <div>
    <ul class="types">
      <li class="item" :class="{selected: value === '-',[classPredix+'-item']:classPredix}" @click="selectType('-')">
        支出
      </li>
      <li class="item" :class="{selected: value === '+',[classPredix+'-item']:classPredix}" @click="selectType('+')">
        收入
      </li>
      <template>
        <button class="cancel" @click="back">取消</button>
      </template>
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
  back():void {
    this.$router.go(-1);
  }

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.types {
  background: $color-background;
  display: flex;
  flex-direction: row;
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

  > .cancel {
    font-size: 16px;
    float: right;
    width: 64px;
    padding-left: 12px;
    background: inherit;
    border: none;
  }
}
</style>