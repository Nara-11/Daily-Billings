<template>
  <div>
    <div class="types">
      <router-link to="/addBilling" class="item" active-class="selected">
        <span>支出</span>
      </router-link>
      <router-link to="/addBilling2" class="item" active-class="selected">
        <span>收入</span>
      </router-link>
      <router-link to="/" class="cancel">
        <span>取消</span>
      </router-link>
    </div>
    <div class="icons">
      <div class="p">
        <Icon name="food"/>
        餐食
      </div>
      <div class="p">
        <Icon name="drinks"/>
        饮料
      </div>
      <div class="p">
        <Icon name="vegetables"/>
        蔬菜
      </div>
      <div class="p">
        <Icon name="fruits"/>
        水果
      </div>
      <div class="p">
        <Icon name="snacks"/>
        零食
      </div>
      <div class="p">
        <Icon name="tobacco and wine"/>
        烟酒
      </div>
      <div class="p">
        <Icon name="residence"/>
        日用
      </div>
      <div class="p">
        <Icon name="shopping"/>
        购物
      </div>
      <div class="p">
        <Icon name="transportation"/>
        交通
      </div>
      <div class="p">
        <Icon name="entertainment"/>
        娱乐
      </div>
      <div class="p">
        <Icon name="medicine"/>
        医疗
      </div>
      <div class="p">
        <Icon name="parents"/>
        长辈
      </div>
      <div class="p">
        <Icon name="office"/>
        办公
      </div>
      <div class="p">
        <Icon name="service"/>
        服务
      </div>
      <div class="p">
        <Icon name="children"/>
        孩子
      </div>
      <div class="p">
        <Icon name="beauty"/>
        美容
      </div>
      <div class="p">
        <Icon name="clothes"/>
        服饰
      </div>
      <div class="p">
        <Icon name="love"/>
        捐赠
      </div>
      <div class="p">
        <Icon name="education"/>
        教育
      </div>
      <div class="p">
        <Icon name="commodity"/>
        日用
      </div>
      <div class="p">
        <Icon name="pets"/>
        宠物
      </div>
      <div class="p">
        <Icon name="cash"/>
        礼金
      </div>
      <div class="p">
        <Icon name="furniture"/>
        家居
      </div>
      <div class="p">
        <Icon name="socializing"/>
        社交
      </div>
      <div class="p">
        <Icon name="travel"/>
        旅行
      </div>
      <div class="p">
        <Icon name="phone"/>
        通讯
      </div>
      <div class="p">
        <Icon name="books"/>
        书籍
      </div>
      <div class="p">
        <Icon name="sports"/>
        爱好
      </div>
      <div class="p">
        <Icon name="expressage"/>
        快递
      </div>
      <div class="p">
        <Icon name="electronics"/>
        数码
      </div>
      <div class="p">
        <Icon name="maintenance"/>
        维修
      </div>
      <div class="p">
        <Icon name="present"/>
        礼物
      </div>
    </div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="点击添加备注">
      <div class="output">￥100</div>
    </label>
    <div class="numberPad">
      <div class="buttons">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>今天</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>0</button>
        <button>.</button>
        <button>×</button>
        <button>完成</button>
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
@import "~@/assets/style/helper.scss";

.types {
  background: lightgrey;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  @extend %clearFix;

  > .item {
    padding: 2px 0;
    width: 50%;
    display: flex;
    justify-content: center;
    font-size: 32px;
  }

  > .item.selected {
    color: $color-highlight;

    span {
      border-bottom: 1px solid $color-highlight;
    }
  }

  > .cancel {
    font-size: 20px;
    float: right;
    width: 64px;
    padding-top: 10px;
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
      //&.selected{
      //  background: $color-highlight;
      //}
    }
  }
}

.notes {
  font-size: 18px;
  background: lightgrey;
  padding: 0 16px;
  display: flex;
  align-items: center;

  input {
    height: 56px;
    width: 50vw;
    flex-grow: 1;
    padding-left: 16px;
    background: transparent;
    border: none;
  }

  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
  }
}

.numberPad {
  .buttons {
    display: flex;
    flex-wrap: wrap;

    > button {
      width: 25%;
      height: 64px;
      background: lightgrey;
      border: 1px solid white;
    }
  }
}
</style>