<template>
  <div id="calendar">
    <div class="month">
      <ul>
        <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
        <li class="year-month">
          <span class="choose-year">{{ currentYear }}</span>
          <span class="choose-month">{{ currentMonth }}月</span>
        </li>
        <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
      </ul>
    </div>
    <ul class="weekdays">
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
      <li>日</li>
    </ul>
    <ul class="days">
      <li v-for="dayObject in days" :key="dayObject.day">
        <span v-if="dayObject.day.getMonth()+1 !== currentMonth" class="other-month">
          {{ dayObject.day.getDate() }}
        </span>
        <span v-else @click="pickDay(currentYear,currentMonth,dayObject.day.getDate())">
          <span
              v-if="dayObject.day.getFullYear() === new Date().getFullYear() && dayObject.day.getMonth() === new Date().getMonth() && dayObject.day.getDate() === new Date().getDate()"
              class="active">
            {{ dayObject.day.getDate() }}
          </span>
          <span v-else>{{ dayObject.day.getDate() }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Calendar',
  el: '#calendar',
  data() {
    return {
      currentDay: 1,
      currentMonth: 1,
      currentYear: 1970,
      currentWeek: 1,
      days: [],
    }
  },
  created: function () {
    this.initData(null);
  },
  methods: {
    initData: function (cur) {
      let date;
      if (cur) {
        date = new Date(cur);
      } else {
        let now = new Date();
        let d = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1));
        d.setDate(35);
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
      }
      this.currentDay = date.getDate();
      this.currentYear = date.getFullYear();
      this.currentMonth = date.getMonth() + 1;
      this.currentWeek = date.getDay(); // 1...6,0
      if (this.currentWeek === 0) {
        this.currentWeek = 7;
      }
      let str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay);
      this.days.length = 0;
      for (let i = this.currentWeek - 1; i >= 0; i--) {
        let d = new Date(str);
        d.setDate(d.getDate() - i);
        let dayObject = {};
        dayObject.day = d;
        this.days.push(dayObject);
      }
      for (let i = 1; i <= 35 - this.currentWeek; i++) {
        let d = new Date(str);
        d.setDate(d.getDate() + i);
        let dayObject = {};
        dayObject.day = d;
        this.days.push(dayObject);
      }
    },
    pickPre: function (year, month) {
      let d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    pickNext: function (year, month) {
      let d = new Date(this.formatDate(year, month, 1));
      d.setDate(35);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    pickDay: function (year, month, day) {
      if (confirm("是否将日期修改为" + year + "年" + month + "月" + day + "日")) {
        this.$emit('updateDate', month + "." + day);
        this.$emit('update:value3', this.formatDate(year, month, day));
      }
    },
    formatDate: function (year, month, day) {
      return year + "/" + month + "/" + day
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

#calendar {
  width: 80%;
  margin: 0 auto;
  line-height: 1;
  background: #E8F0F3;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.month {
  width: 100%;
  background: $color-highlight;
}

.month ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.year-month {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.choose-year {
  padding-left: 20px;
  padding-right: 20px;
}

.choose-month {
  text-align: center;
  font-size: 1.5rem;
}

.arrow {
  padding: 30px;
}

.arrow:hover {
  background: rgba(100, 2, 12, 0.1);
}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: $color-highlight;
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: space-around;
}

.weekdays li {
  display: inline-block;
  width: 13.6%;
  text-align: center;
}

.days {
  padding: 0;
  background: #FFFFFF;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.days li {
  list-style-type: none;
  display: inline-block;
  width: 14.2%;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
  font-size: 1rem;
  color: #000;
}

.days li .active {
  padding: 6px 10px;
  background: $color-highlight;
  color: #fff;
}

.days li :hover {
  padding: 6px 5px;
  background: lightgrey;
}

.days li .other-month {
  padding: 5px;
  display: none;
  color: #fff;
}

</style>