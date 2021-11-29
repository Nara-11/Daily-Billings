<template>
  <div>
    <ul class="icons">
      <li v-for="icon in dataSource" :key="icon" @click="change(icon)"
          :class="{selected:selectedIcons.indexOf(icon)>=0}">
        <Icon :name="icon"/>
        {{ icon }}
      </li>
      <template>
        <div class="new" @click="addIcon">
          <Icon name="addIcon"></Icon>
          添加
        </div>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Icons extends Vue {
  @Prop() dataSource: string[] | undefined;
  selectedIcons: string[] = [];

  change(icon: string): void {
    this.selectedIcons.splice(this.selectedIcons.indexOf(icon), 1);
    this.selectedIcons.push(icon);
    this.$emit('update:value', this.selectedIcons);
  }

  addIcon(): void {
    const name = window.prompt('新增类别名：');
    if (name === '') {
      window.alert('不能为空');
    } else if (name === null) {
      return;
    } else if (this.dataSource) {
      this.$emit('update:dataSource', [...this.dataSource, name]);
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.icons {
  font-size: 18px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > li {
    padding: 10px 0;
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 64px;
      height: 64px;
      padding: 8px 8px;
      background: lightgrey;
    }

    &.selected {
      .icon {
        background: $color-highlight;
      }
    }
  }
}

.new {
  padding: 10px 0;
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  > .icon {
    width: 64px;
    height: 64px;
    padding: 8px 8px;
    background: lightgrey;
    border: none;
  }
}
</style>