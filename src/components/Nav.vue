<template>
  <nav>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="billings"/>
      账单
    </router-link>
    <router-link to="/addBilling" class="item" active-class="selected">
      <Icon name="billing"/>
      记账
    </router-link>
    <router-link to="/settings" class="item" active-class="selected">
      <Icon name="charts"/>
      图表
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav'
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
nav {
  font-size: 16px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #2c3e50;

    .icon {
      width: 32px;
      height: 32px;
    }
  }

  > .item.selected {
    color: $color-highlight;
  }
}
</style>