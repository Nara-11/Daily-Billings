<template>
  <div class="labelsSet">
    <Types class-predix="types" :value.sync="typeChoose"/>
    <ol class="labels">
      <li v-for="label in labels" :key="label.id">
        <span class="label">
          <span class="left">
            <Icon :name="label.svg"/>
            {{ label.name }}
          </span>
          <span class="right">
            <Icon name="close" @click.native="remove(label.id)"/>
          </span>
        </span>
      </li>
    </ol>
    <router-link to="/addIcon" class="createTag-wrapper">
      <button class="createTag">添加标签</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/Types.vue';

@Component({
  components: {Types},
})
export default class Labels extends Vue {
  typeChoose = '-';

  get labels(): [] {
    return this.$store.state.labelList.filter(r => r.type === this.typeChoose);
  }

  created(): void {
    this.$store.commit('fetchLabels');
  }

  remove(id: string): void {
    this.$store.commit('removeLabel', id);
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.labelsSet {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 32px;
    padding: 2px;
  }

  .labels {
    flex-grow: 1;
    overflow: auto;

    > li {
      font-size: 20px;
      padding: 0 16px;

      > .label {
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6;

        .left svg {
          margin-left: 16px;
        }

        .right svg {
          width: 42px;
          height: 42px;
          color: rgb(251, 83, 0);
        }
      }
    }
  }

  .createTag {
    background: $color-button;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;

    &-wrapper {
      display: block;
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }
}
</style>