<template>
  <div>
    <ul class="icons">
      <li v-for="icon in dataSource" :key="icon" @click="change(icon)"
          :class="{selected:selectedIcons.indexOf(icon)>=0}">
        <Icon :name="icon"/>
        {{ icon }}
      </li>
      <template>
        <div class="new">
          <router-link to="/labels">
            <Icon name="addIcon" class="iconAdd"></Icon>
            <span class="add">添加</span>
          </router-link>
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
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: column;

  .iconAdd {
    display: block;
    width: 64px;
    height: 64px;
    padding: 8px 8px;
    background: lightgrey;
    border: none;
  }
  .add{
    display: block;
    text-align: center;
  }
}
</style>