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
        <Icon name="salary"/>
        工资
      </div>
      <div class="p">
        <Icon name="luckyMoney"/>
        红包
      </div>
      <div class="p">
        <Icon name="investment"/>
        投资
      </div>
      <div class="p">
        <Icon name="cash"/>
        礼金
      </div>
      <div class="p">
        <Icon name="others"/>
        其他
      </div>
    </div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="点击添加备注">
      <span class="output">￥0.00</span>
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