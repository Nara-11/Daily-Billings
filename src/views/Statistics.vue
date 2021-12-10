<template>
  <layout>
    <Types class-predix="types" :value.sync="typeChoose"/>
    <Tabs class-predix="interval" :data-source="intervalList" :value.sync="intervalChose"/>
    <div>
      typeChoose:{{typeChoose}},intervalChose:{{intervalChose}}
    </div>
  </layout>
</template>

<script lang="ts">
import Types from '@/components/Types.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from  '@/constants/intervalList';

@Component({
  components: {Tabs, Types},
})
export default class Statistics extends Vue {
  typeChoose = '-';
  intervalChose = 'day';
  intervalList=intervalList;
}
</script>

<style scoped lang="scss">
::v-deep .cancel {
  display: none;
}
</style>