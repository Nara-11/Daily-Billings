<template>
  <Layout>
    <Types :value.sync="typeChoose"></Types>
    <div class="wrapper" ref="wrapper">
      <div class="charts" id="figure">
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import {Component, Watch} from 'vue-property-decorator';
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import echarts from 'echarts';
import _ from 'lodash';
import day from 'dayjs';
import Types from '@/components/Types.vue';
import clone from '@/lib/clone';
import dayjs from 'dayjs';

@Component({
  components: {Types, Layout}
})
export default class Charts extends Vue {
  typeChoose = '-';

  mounted(): void {
    const div = this.$refs.wrapper as HTMLDivElement;
    div.scrollLeft = div.scrollWidth;
    this.chartOptions();
  }

  @Watch('typeChoose')
  onOptionsChange(): void {
    this.chartOptions();
  }

  get recordList(): RecordItem[] {
    return (this.$store.state as RootState).recordList;
  }

  get groupedList() {
    const {recordList} = this;
    const newList = clone(recordList).filter(r => r.types === this.typeChoose).sort((a, b) => dayjs(b.dates).valueOf() - dayjs(a.dates).valueOf());
    if (newList.length === 0) {return [];}
    type Result = { title: string, total?: number, items: RecordItem[] }[];
    const result: Result = [{title: dayjs(newList[0].dates).format('YYYY-MM-DD'), items: [newList[0]]}];

    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.dates), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.dates).format('YYYY-M-D'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.amounts;
      }, 0);
    });
    return result;
  }


  get kvPairs() {
    const today = new Date();
    const array = [];
    for (let i = 0; i <= 29; i++) {
      const dates = day(today).subtract(i, 'day').format('YYYY-MM-DD');
      const find = _.find(this.groupedList, {title: dates});
      array.push({keys: dates, values: find ? find.total : 0});
    }
    array.sort((a, b) => {
      if (a.keys > b.keys) {
        return 1;
      } else if (a.keys === b.keys) {
        return 0;
      } else {
        return -1;
      }
    });
    return array;
  }

  chartOptions():void {
    const figure = echarts.init(document.getElementById('figure') as HTMLDivElement);
    const keys = this.kvPairs.map(item => item.keys);
    const values = this.kvPairs.map(item => item.values);
    figure.setOption({
      grid: {
        left: 0,
        right: 0
      },
      xAxis: {
        type: 'category',
        data: keys,
        axisTick: {show: false},
        axisLine: {lineStyle: {color: '#lightgrey'}},
        axisLabel: {
          formatter: function (value: string) {
            return value.substr(5);
          }
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          data: values,
          type: 'line',
          symbolSize: 12,
          itemStyle: {borderWidth: 1, color: '#lightgrey', borderColor: '#lightgrey'},
          symbol: 'circle'
        },
        {
          data: [9, 9, 5, 5],
          type: 'line',
          symbolSize: 12,
          itemStyle: {borderWidth: 1, color: '#lightgrey', borderColor: '#lightgrey'},
          symbol: 'circle'
        }
      ],
      tooltip: {
        show: true,
        triggerOn: 'mousemove',
        formatter: '{c}',
        position: 'top'
      }
    });
  }
}
</script>

<style scoped lang="scss">
::v-deep .cancel {
  display: none;
}

::v-deep .back {
  display: none;
}

.wrapper {
  overflow: auto;
}

.charts {
  height: 400px;
  width: 430%;
}
</style>