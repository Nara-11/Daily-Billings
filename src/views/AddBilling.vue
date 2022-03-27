<template>
  <div class="addBilling">
    <Types :value.sync="record.types" @update:value="onUpdateTypes"/>
    <div class="icons">
      <Icons :value="selectedIcons" @update:value="onSelectedIcons"/>
    </div>
    <transition name="fade" enter-active-class="animate__animated animate__slideInUp"
                leave-active-class="animate_animated animate_slideOutDown">
      <Keyboard v-show="showKeyboard" @update:value="onUpdateNotes" @update:value2="onUpdateAmounts"
                :value3.sync="record.dates" @update:value3="onUpdateDates" @submit="saveRecord"/>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/Types.vue';
import Keyboard from '@/components/Keyboard.vue';
import Icons from '@/components/Icons.vue';
import {Component} from 'vue-property-decorator';
import 'animate.css';

@Component({
  components: {Icons, Keyboard, Types}
})
export default class AddBilling extends Vue {
  record = {
    icons: [''], notes: '', types: '-', amounts: 0, dates: new Date().toISOString().split("T")[0]
  };
  showKeyboard = false;

  get selectedIcons(): string {
    return this.$store.state.labelList.filter(icon => (icon.type || '-') === this.record.types);
  }

  get recordList(): [] {
    return this.$store.state.recordList;
  }

  created(): void {
    this.$store.commit('fetchLabels');
    this.$store.commit('fetchRecords');
  }

  onUpdateTypes(): void {
    if (this.record.types === '-') {
      this.showKeyboard = false;
    } else if (this.record.types === '+') {
      this.showKeyboard = false;
    }
  }

  onSelectedIcons(value: string[]): void {
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
    this.$store.commit('createRecord', this.record);
  }
}
</script>

<style scoped lang="scss">
.addBilling {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .icons {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>