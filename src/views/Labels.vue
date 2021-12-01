<template>
  <div>
    <div class="bar">
      <span>＜</span>
      <span>增删标签</span>
    </div>
    <ol>
      <li v-for="label in labels" :key="label.id" class="labels">
        <span class="label">
          {{ label.name }}
          <Icon name="close"/>
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
import labelListModel from '@/models/labelListModel';

labelListModel.fetch();
@Component
export default class Labels extends Vue {
  labels = labelListModel.data;

  createLabel(): void {
    const name = window.prompt('请输入标签名');
    if (name) {
      const message = labelListModel.create(name);
      if (message === 'duplicated') {
        window.alert('标签名重复');
      } else if (message === 'success') {
        window.alert('添加成功');
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bar{
  background: lightgrey;
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
  background: #767676;
  color: white;
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