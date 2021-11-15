<template>
  <div>
    <Types/>
    <Icons/>
    <Keyboard/>
  </div>

</template>

<script lang="ts">
import Types from '@/components/Types.vue';
import Keyboard from '@/components/Keyboard.vue';
import Icons from '@/components/Icons.vue';
export default {
  name: 'AddBilling',
  components: {Icons, Keyboard, Types}
};
</script>

<style scoped lang="scss">

</style>