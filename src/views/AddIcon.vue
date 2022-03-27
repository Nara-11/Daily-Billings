<template>
  <div class="addIcons">
    <div class="addTitle">
      <span @click="back">
        <Icon name="left"/>
      </span>
      <Types class-predix="types" :value.sync="typeChoose"/>
      <span @click="submit" class="submit">完成</span>
    </div>
    <div class="input">
      <input type="text" v-model="value" placeholder="请输入不超过四个字的标签名">
    </div>
    <div class="icons">
      <ul>
        <li v-for="(icon,index) in addIcons" :key="index" @click="change(icon)"
            :class="{selected:selectedIcons.indexOf(icon)>=0}">
          <Icon :name="icon"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import addLabelsList from '@/constants/addLabelsList';
import Types from '@/components/Types.vue';

@Component({
  components: {Types},
})
export default class AddIcon extends Vue {
  value = '';
  selectedIcons: string[] = ['饮料'];
  typeChoose = '-';
  addIcons = addLabelsList;

  submit(): void {
    const name = this.value;
    if (!name) {
      window.alert('请输入标签名');
      return;
    } else if (name.length <= 4) {
      this.$store.commit('createLabel', {name, type: this.typeChoose, svg: this.selectedIcons[0]});
      this.$router.replace('/labels');
    } else {
      window.alert('标签名字数超过限制');
      return;
    }
  }

  change(icon: string): void {
    this.selectedIcons.splice(this.selectedIcons.indexOf(icon), 1);
    this.selectedIcons.push(icon);
  }

  back(): void {
    this.$router.replace('/labels');
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

::v-deep .cancel {
  display: none;
}

::v-deep .types {
  min-width: 250px;
  max-width: 300px;
}

.addIcons {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .addTitle {
    font-size: 24px;
    background: $color-background;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .submit {
      font-size: 16px;
    }
  }

  .input {
    font-size: 18px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dddddd;

    input {
      height: 56px;
      width: 50vw;
      flex-grow: 1;
      padding-left: 16px;
      background: transparent;
      border: none;
    }
  }

  .icons {
    flex-grow: 1;
    overflow: auto;

    > ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      > li {
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
          background: $color-background;
        }

        &.selected {
          .icon {
            background: $color-highlight;
          }
        }
      }
    }
  }
}
</style>