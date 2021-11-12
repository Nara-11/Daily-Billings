<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout'
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.nav-wrapper {
  border: 1px solid $color-highlight;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex-grow: 1;
  overflow: auto;
}
</style>