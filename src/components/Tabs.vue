<template>
  <div>
    <ul class="tabs">
      <li class="item" v-for="item in dataSource" :key="item.value" :class="{selected:item.value===value,[classPredix+'-tabs-item']:classPredix}" @click="select(item)">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string, value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPredix?: string;

  select(item: DataSourceItem) :void{
    this.$emit('update:value', item.value);
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.tabs {
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
    font-size: 22px;
  }

  > .item.selected{
    color: $color-highlight;
    border-bottom: 1px solid $color-highlight;
  }
}
</style>