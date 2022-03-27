<template>
  <div>
    <ul class="icons">
      <li v-for="icon in value" :key="icon.id" @click="change(icon)"
          :class="{selected:selectedIcons.indexOf(icon)>=0}">
        <Icon :name="icon.svg"/>
        {{ icon.name }}
      </li>
      <template>
        <div class="new">
          <router-link to="/labels">
            <Icon name="settings" class="iconAdd"></Icon>
            <span class="add">设置</span>
          </router-link>
        </div>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

interface IconType {
  id: number;
  name: string;
  type: '+' | '-';
  svg:string;
}

@Component
export default class Icons extends Vue {
  @Prop() value: IconType[] | undefined;
  selectedIcons: IconType[] = [];

  change(icon: IconType): void {
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
      background: $color-background;
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
    background: $color-background;
    border: none;
  }

  .add {
    display: block;
    text-align: center;
  }
}
</style>