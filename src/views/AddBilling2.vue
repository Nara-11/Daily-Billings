<template>
  <div>
    <Types/>
    <Icons2/>
    <Keyboard/>
  </div>

</template>

<script lang="ts">
import Types from '@/components/Types.vue';
import Keyboard from '@/components/Keyboard.vue';
import Icons2 from '@/components/Icons2.vue';

export default {
  name: 'AddBilling',
  components: {Icons2, Keyboard, Types}
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