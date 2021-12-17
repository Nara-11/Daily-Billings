<template>
  <div class="page">
    <Layout>
      <Types :value.sync="typeChoose"/>
      <div class="content">
        <ol v-if="groupedList.length>0">
          <li v-for="(group,index) in groupedList" :key="index">
            <h3 class="title">{{ beautify(group.title) }}<span>￥{{ group.total }}</span></h3>
            <ol>
              <li v-for="(item, i) in group.items" :key="i" class="record">
                <span v-for="icon in item.icons" :key="icon.id" class="iconName">{{ icon.name }}</span>
                <span class="notes">{{ item.notes }}</span>
                <span>￥{{ item.amounts }}</span>
              </li>
            </ol>
          </li>
        </ol>
        <div v-else class="noResult">
          目前没有记录，点击记账开始记录吧
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Types from '@/components/Types.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import dayjs from 'dayjs';
import clone from '@/lib/clone';

@Component({
  components: {Types},
})
export default class Statistics extends Vue {
  typeChoose = '-';

  get recordList(): RecordItem[] {
    return (this.$store.state as RootState).recordList;
  }

  beautify(string: string): string {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
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

  beforeCreate(): void {
    this.$store.commit('fetchRecords');
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

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item;
  background: #e6e6e6;
}

.record {
  @extend %item;
}

.iconName {
  min-width: 10%;
}

.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}

.noResult {
  padding: 16px;
  text-align: center;
}

.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  overflow: auto;
  flex-grow: 1;
}
</style>