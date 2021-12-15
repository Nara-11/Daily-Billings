<template>
  <div>
    <Types class-predix="types" :value.sync="typeChoose"/>
    <ol>
      <li v-for="label in labels" :key="label.id" class="labels">
        <span class="label">
          <span class="left">
            <Icon :name="label.name"/>
            {{ label.name }}
          </span>
          <span class="right">
            <Icon name="close" @click.native="remove(label.id)"/>
          </span>
        </span>
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button @click="createLabel" class="createTag">添加标签</button>
    </div>
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

  createLabel(): void {
    const name = window.prompt('请输入标签名');
    const type=this.typeChoose;
    if (name) {
      this.$store.commit('createLabel', {name, type});
    }
  }

  remove(id: string): void {
    this.$store.commit('removeLabel', id);
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

::v-deep.types {
  width: 80%;
}

::v-deep .cancel {
  display: none;
}

.title {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 32px;
  padding: 2px;
}

.back {
  font-size: 20px;
  float: right;
  width: 64px;
  padding-top: 10px;
  padding-right: 10px;
}

.labels {
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

.createTag {
  background: lightgrey;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>