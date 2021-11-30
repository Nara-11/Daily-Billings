<template>
  <div class="addBilling">
    <!--    {{ recordList }}-->
    <Types :value.sync="record.types" @update:value="onUpdateTypes"/>
    <Icons :data-source.sync=iconsChoose @update:value="onUpdateIcons"/>
    <Keyboard v-show="showKeyboard" @update:value="onUpdateNotes" @update:value2="onUpdateAmounts"
              @update:value3="onUpdateDates" @submit="saveRecord"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/Types.vue';
import Keyboard from '@/components/Keyboard.vue';
import Icons from '@/components/Icons.vue';
import {Component, Watch} from 'vue-property-decorator';
import model from '@/model';

const recordList= model.fetch();

@Component({components: {Icons, Keyboard, Types}})
export default class AddBilling extends Vue {
  icons = ['餐食', '饮料', '蔬菜', '水果', '零食', '购物', '美容', '房屋', '医疗', '教育', '长辈', '孩子', '日用', '衣服', '交通', '爱好', '通讯', '社交', '捐赠', '家居', '烟酒', '书籍', '数码', '维修', '礼金', '礼物', '办公', '服务', '宠物', '旅行', '快递', '娱乐', '其他'];
  icons2 = ['工资', '红包', '投资', '礼金', '其他'];
  recordList = recordList;
  record = {icons: [], icons2: [], notes: '', types: '-', amounts: 0, dates: ''};
  showKeyboard = false;
  iconsChoose = this.icons;

  onUpdateTypes(value: string): void {
    console.log(value);
    console.log(this.record.types);
    if (this.record.types === '-') {
      this.iconsChoose = this.icons;
    } else if (this.record.types === '+') {
      this.iconsChoose = this.icons2;
    }
  }

  onUpdateIcons(value: string[]): void {
    this.showKeyboard = true;
    this.record.icons = value;
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
    const record2 = model.clone(this.record);
    record2.dates = (new Date()).toLocaleDateString();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange(): void {
    model.save(this.recordList);
  }
}
</script>

<style scoped lang="scss">

</style>