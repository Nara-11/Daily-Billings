<template>
  <div>
    <div class="bar">
      <router-link to="/addBilling" class="item" active-class="selected">
        <span>支出</span>
      </router-link>
      <router-link to="/addBilling2" class="item" active-class="selected">
        <span>收入</span>
      </router-link>
    </div>
    <div class="icons">
      <div class="p">
        <Icon name="food"/>餐食
      </div>
      <div class="p">
        <Icon name="drinks"/>饮料
      </div>
      <div class="p">
        <Icon name="vegetables"/>蔬菜
      </div>
      <div class="p">
        <Icon name="fruits"/>水果
      </div>
      <div class="p">
        <Icon name="snacks"/>零食
      </div>
      <div class="p">
        <Icon name="tobacco and wine"/>烟酒
      </div>
      <div class="p">
        <Icon name="residence"/>日用
      </div>
      <div class="p">
        <Icon name="shopping"/>购物
      </div>
      <div class="p">
        <Icon name="transportation"/>交通
      </div>
      <div class="p">
        <Icon name="entertainment"/>娱乐
      </div>
      <div class="p">
        <Icon name="medicine"/>医疗
      </div>
      <div class="p">
        <Icon name="parents"/>长辈
      </div>
      <div class="p">
        <Icon name="office"/>办公
      </div>
      <div class="p">
        <Icon name="service"/>服务
      </div>
      <div class="p">
        <Icon name="children"/>孩子
      </div>
      <div class="p">
        <Icon name="beauty"/>美容
      </div>
      <div class="p">
        <Icon name="clothes"/>服饰
      </div>
      <div class="p">
        <Icon name="love"/>捐赠
      </div>
      <div class="p">
        <Icon name="education"/>教育
      </div>
      <div class="p">
        <Icon name="commodity"/>日用
      </div>
      <div class="p">
        <Icon name="pets"/>宠物
      </div>
      <div class="p">
        <Icon name="cash"/>礼金
      </div>
      <div class="p">
        <Icon name="furniture"/>家居
      </div>
      <div class="p">
        <Icon name="socializing"/>社交
      </div>
      <div class="p">
        <Icon name="travel"/>旅行
      </div>
      <div class="p">
        <Icon name="phone"/>通讯
      </div>
      <div class="p">
        <Icon name="books"/>书籍
      </div>
      <div class="p">
        <Icon name="sports"/>爱好
      </div>
      <div class="p">
        <Icon name="expressage"/>快递
      </div>
      <div class="p">
        <Icon name="electronics"/>数码
      </div>
      <div class="p">
        <Icon name="maintenance"/>维修
      </div>
      <div class="p">
        <Icon name="present"/>礼物
      </div>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  name: 'AddBilling'
};
</script>

<style scoped lang="scss">
.bar {
  font-size: 32px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > .item {
    padding: 2px 0;
    width: 50%;
    display: flex;
    justify-content: center;
  }
  > .item.selected {
    color: #42b983;
    span{
      border-bottom: 1px solid #42b983;
    }
  }
}

.icons {
  font-size: 18px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > .p {
    padding: 10px 0;
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 64px;
      height: 64px;
      padding: 8px 8px;
      background: lightgrey;
    }
  }
}
</style>