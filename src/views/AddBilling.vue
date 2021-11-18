<template>
  <div>
    <Types/>
    <Icons :data-source.sync="icons"/>
    <Keyboard/>
  </div>

</template>

<script>
import Types from '@/components/Types.vue';
import Keyboard from '@/components/Keyboard.vue';
import Icons from '@/components/Icons.vue';
export default {
  name: 'AddBilling',
  components: {Icons, Keyboard, Types},
  data() {
    return{
      icons:['餐食','饮料','蔬菜','水果','零食','购物','美容','房屋','医疗','教育','长辈','孩子','日用','衣服','交通','爱好','通讯','社交','捐赠','家居','烟酒','书籍','数码','维修','礼金','礼物','办公','服务','宠物','旅行','快递','娱乐','其他']
    }
  }
};
</script>

<style scoped lang="scss">

</style>