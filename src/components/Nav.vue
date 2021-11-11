<template>
  <div class="nav">
    <router-link to="/charts">图表</router-link>
    |
    <router-link to="/billing">记账</router-link>
    |
    <router-link to="/settings">设置</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Nav'
};
</script>

<style scoped lang="scss">
.nav {
  border: 1px solid red
}
</style>