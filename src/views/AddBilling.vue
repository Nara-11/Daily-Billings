<template>
  <div class="addBilling">
    <!--    {{ recordList }}-->
    <Types :value.sync="record.types" @update:value="onUpdateTypes"/>
    <Icons :data-source.sync=iconsChoose @update:value="onUpdateIcons"/>
    <Keyboard v-show="showKeyboard" @update:value="onUpdateNotes" @update:value2="onUpdateAmounts"
              @update:value3="onUpdateDates" @submit="saveRecord" class="keyboard"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/Types.vue';
import Keyboard from '@/components/Keyboard.vue';
import Icons from '@/components/Icons.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import labelListModel from '@/models/labelListModel';
import Labels from '@/views/Labels.vue';

const recordList = recordListModel.fetch();
const labelList = labelListModel.fetch();

@Component({components: {Icons, Keyboard, Types,Labels}})
export default class AddBilling extends Vue {
  icons = labelList;
  icons1 = ['餐食', '饮料', '蔬菜', '水果', '零食', '购物', '美容', '房屋', '医疗', '教育', '长辈', '孩子', '日用', '衣服', '交通', '爱好', '通讯', '社交', '捐赠', '家居', '烟酒', '书籍', '数码', '维修', '礼金', '礼物', '办公', '服务', '宠物', '旅行', '快递', '娱乐', '其他'];
  icons2 = ['工资', '红包', '投资', '礼金', '其他'];
  recordList = recordList;
  record = {
    icons: [''], notes: '', types: '-', amounts: 0, dates: ''
  };
  showKeyboard = false;
  iconsChoose = this.icons1;

  onUpdateTypes(): void {
    if (this.record.types === '-') {
      this.showKeyboard = false;
      this.iconsChoose = this.icons1;
    } else if (this.record.types === '+') {
      this.showKeyboard = false;
      this.iconsChoose = this.icons2;
    }
  }

  onUpdateIcons(value: string[]): void {
    this.showKeyboard = true;
    if (this.record.types === '-' || this.record.types === '+') {
      this.record.icons = value;
    }
  }

  onUpdateNotes(value: string): void {
    this.record.notes = value;
  }

  onUpdateAmounts(value2: string): void {
    this.record.amounts = parseFloat(value2);
  }

  onUpdateDates(value3: string): void {
    this.record.dates = value3;
  }

  saveRecord(): void {
    recordListModel.create(this.record);
  }

  @Watch('recordList')
  onRecordListChange(): void {
    recordListModel.save();
  }
}
</script>

<style scoped lang="scss">
//.addBilling{
//  position: relative;
//}
//.keyboard{
//  position: absolute;
//  width:100%;
//  bottom:240px;
//}
</style>