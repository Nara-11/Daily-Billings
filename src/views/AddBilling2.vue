<template>
  <div>
    <Types/>
    <Icons2 :data-source.sync="icons"/>
    <Keyboard/>
  </div>

</template>

<script>
import Types from '@/components/Types.vue';
import Keyboard from '@/components/Keyboard.vue';
import Icons2 from '@/components/Icons2.vue';

export default {
  name: 'AddBilling',
  components: {Icons2, Keyboard, Types},
  data(){
    return{
      icons:['工资','红包','投资','礼金','其他']
    }
  }
};
</script>

<style scoped lang="scss">

</style>