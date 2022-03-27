<template>
  <div>
    <div class="deleteTitle"><span>删除该条记录</span>
      <button class="back" @click="back">取消</button>
    </div>
    <ul class="main">
      <li>
        <label>
          <span class="name">类型</span>
          <span class="text">{{ currentRecord.types === '-' ? '支出' : '收入' }}</span>
        </label>
      </li>
      <li>
        <label>
          <span class="name">类别</span>
          <span class="text">{{ name }}</span>
        </label>
      </li>
      <li>
        <label>
          <span class="name">金额</span>
          <span class="text">{{ currentRecord.amounts }}</span>
        </label>
      </li>
      <li>
        <label class="date">
          <span class="name">日期</span>
          <span class="text">{{ currentRecord.dates }}</span>
        </label>
      </li>
      <li>
        <label>
          <span class="name">备注</span>
          <span class="text">{{ currentRecord.notes }}</span>
        </label>
      </li>
    </ul>
    <div class="delete-wrapper">
      <button @click="remove" class="delete">删除记录</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class DeleteBilling extends Vue {
  currentRecord = {icons: [], notes: '', types: '-', amounts: 0, dates: '', index: ''};
  name: string;

  beforeCreate(): void {
    this.$store.commit('fetchRecords');
  }

  // eslint-disable-next-line no-undef
  get recordList(): RecordItem[] {
    return this.$store.state.recordList;
  }

  created(): void {
    this.currentRecord = this.recordList.filter(item => item.index === this.$route.params.index)[0];
    this.name = {...this.currentRecord.icons}[0].name;
  }

  back(): void {
    this.$router.replace('/');
  }

  remove(): void {
    if (this.currentRecord) {
      this.$store.commit('removeRecord', this.currentRecord.index);
      this.$router.replace('/');
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.deleteTitle {
  font-size: 24px;
  background: $color-background;
  padding: 10px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .back {
    font-size: 16px;
    float: right;
    width: 64px;
    padding-left: 12px;
    background: inherit;
    border: none;
  }
}

.main {
  font-size: 16px;

  > li {
    padding: 12px 16px 12px 16px;
    border-bottom: 1px solid #dddddd;

    > label {
      display: flex;
      align-items: center;

      .name {
        color: #999999;
        margin-right: 16px;
      }

      .type {
        height: 40px;
        display: flex;
        align-items: center;
      }
    }
  }
}

.delete {
  background: $color-button;
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