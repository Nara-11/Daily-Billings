<template>
  <div>
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
  </div>
</template>

<script lang="ts">
export default {
  name: 'Icons2'
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

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

</style>