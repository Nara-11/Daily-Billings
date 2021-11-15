<template>
  <div>
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
  name: 'Keyboard'
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

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