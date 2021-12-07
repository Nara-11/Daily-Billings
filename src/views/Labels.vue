<template>
  <div>
    <div class="bar">
      <span class="title">编辑标签</span>
      <router-link to="/addBilling" class="cancel">
        <span>取消</span>
      </router-link>
    </div>
    <ol>
      <li v-for="label in labels" :key="label.id" class="labels">
        <span class="label">
          {{ label.name }}
          <Icon name="close" @click.native="remove(label.id)"/>
        </span>
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button @click="createLabel" class="createTag">添加标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Labels extends Vue {
  get labels():[]{
    return this.$store.state.labelList;
  }
  created() :void{
    this.$store.commit('fetchLabels');
  }

  createLabel(): void {
    const name = window.prompt('请输入标签名');
    if (name) {
      this.$store.commit('createLabel', name);
    }
  }

  remove(id: string): void {
    this.$store.commit('removeLabel',id);
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.bar {
  background: lightgrey;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  @extend %clearFix;
  justify-content: space-between;
  text-align: center;

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 32px;
    padding: 2px;
  }

  > .cancel {
    font-size: 20px;
    float: right;
    width: 64px;
    padding-top: 10px;
    padding-right: 10px;
  }
}

.labels {
  font-size: 16px;
  padding: 0 16px;

  > .label {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 42px;
      height: 42px;
      color: rgb(251, 83, 0);
    }
  }
}

.createTag {
  background: lightgrey;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>