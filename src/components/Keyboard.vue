<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" v-model="value" placeholder="不超过十个字">
      <span class="output">￥{{ output || '0.00' }}</span>
    </label>
    <div class="numberPad">
      <div class="buttons">
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <div class="date">
          <input type="date" v-model="dates" class="button" id="date">
          <label for="date">{{ dateString }}</label>
        </div>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button @click="operation">+</button>
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button @click="operation">-</button>
        <button @click="inputContent">0</button>
        <button @click="inputContent">.</button>
        <button @click="remove">
          <Icon name="delete"/>
        </button>
        <button @click="submit" id="equal">完成</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Keyboard extends Vue {
  output = '';
  value = '';
  seen = false;
  dates = null;


  get dateString() {
    if (this.dates === null) return '今天';
    return this.dates.split('-').slice(1, 3).join('/');
  }

  inputContent(event: MouseEvent): void {
    const button = (event.target as HTMLButtonElement);
    const input = (button.textContent as string);
    if (this.output.length >= 10) {return;}
    if (this.output.indexOf('.') >= 0) {
      if ((this.output.split('.'))[1].length === 2) {return;} else if (input === '.') {return;}
    }
    if (this.output === '0') {
      if (input === '0') {return;} else if ('123456789'.indexOf(input) >= 0) {this.output = this.output.slice(1);}
    }
    if (this.output === '0.0' && input === '0') {return;}
    if (this.output === '0.00' && '0123456789'.indexOf(input) >= 0) {this.output = this.output.slice(4);}
    this.output += input;
  }

  remove(): void {this.output = this.output.slice(0, -1);}

  operation(event: MouseEvent): void {
    const button = (event.target as HTMLButtonElement);
    const input = (button.textContent as string);
    if (input === '+' || input === '-') {
      let equal = document.getElementById('equal') as HTMLButtonElement;
      equal.innerText = '=';
      if (this.output.indexOf('+') >= 0 && input === '+') {this.output = String(Number(this.output.split('+')[0]) + Number(this.output.split('+')[1]));} else if (this.output.indexOf('-') >= 0 && input === '-') {this.output = String(Number(this.output.split('-')[0]) - Number(this.output.split('-')[1]));} else if (this.output.indexOf('+') >= 0 && input === '-') {this.output = String(Number(this.output.split('+')[0]) + Number(this.output.split('+')[1]));} else if (this.output.indexOf('-') >= 0 && input === '+') {this.output = String(Number(this.output.split('-')[0]) - Number(this.output.split('-')[1]));} else if (this.output[this.output.length - 1] === '+' && input === '-') {this.output = this.output.slice(0, -1);} else if (this.output[this.output.length - 1] === '-' && input === '+') {this.output = this.output.slice(0, -1);}
      this.output += input;
    }
  }

  submit(event: MouseEvent): void {
    const button = (event.target as HTMLButtonElement);
    let input = (button.textContent as string);
    if (input === '=') {
      if (this.output.indexOf('+') >= 0) {
        this.output = String(Number(this.output.split('+')[0]) + Number(this.output.split('+')[1]));
      } else if (this.output.indexOf('-') >= 0) {
        this.output = String(Number(this.output.split('-')[0]) - Number(this.output.split('-')[1]));
      }
      button.innerText = '完成';
    } else {
      if (this.output === '0' || this.output === '0.0' || this.output === '') {
        window.alert('请输入金额');
      } else {
        if (this.value.length <= 10) {
          this.$emit('update:value', this.value);
          this.$emit('update:value2', this.output);
          this.$emit('update:value3', this.dates);
          this.$emit('submit', this.output);
          this.output = '';
          this.$router.push('/');
        } else {
          window.alert('备注字数超过限制');
          return;
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.notes {
  font-size: 18px;
  background: $color-background;
  padding: 0 16px;
  display: flex;
  align-items: center;

  .name {
    min-width: 36px;
  }

  input {
    height: 56px;
    flex-grow: 1;
    padding-left: 16px;
    background: transparent;
    border: none;
  }

  .output {
    font-size: 18px;
    font-family: Consolas, monospace;
    min-width: 60px;
    max-width: 120px;
  }
}

.numberPad {
  .buttons {
    display: flex;
    flex-wrap: wrap;

    > button {
      width: 25%;
      height: 64px;
      background: $color-background;
      border: 1px solid white;

      > .icon {
        width: 24px;
        height: 24px;
      }
    }

    .date {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background: $color-background;
      border: 1px solid white;
      width: 25%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        appearance: none;
        background: transparent;
        border: none;
        @media (max-width: 500px) {
          opacity: 0;
        }
      }
    }
  }
}


//noinspection CssInvalidPseudoSelector
input[type=date]::-webkit-datetime-edit {
  display: none;
}

</style>