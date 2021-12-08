<template>
  <div>
    <Calendar v-if="seen" class="cal"/>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" v-model="value" placeholder="点击添加备注">
      <span class="output">￥{{ output || '0.00' }}</span>
    </label>
    <div class="numberPad">
      <div class="buttons">
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button @click="date">今天</button>
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
import Calendar from '@/components/Calendar.vue';

@Component({
  components: {Calendar}
})
export default class Keyboard extends Vue {
  output = '';
  value = '';
  seen = false;

  inputContent(event: MouseEvent): void {
    const button = (event.target as HTMLButtonElement);
    const input = (button.textContent as string);
    if (this.output.length === 10) {return;}
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
      this.$emit('update:value', this.value);
      this.$emit('update:value2', this.output);
      this.$emit('submit', this.output);
      // this.output = this.value.toString();
    }
  }

  date(): void {
    this.seen = true;
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.cal{
  flex-grow: 1;
  overflow: auto;
}

.notes {
  font-size: 18px;
  background: lightgrey;
  padding: 0 16px;
  display: flex;
  align-items: center;

  input {
    height: 56px;
    width: 50vw;
    flex-grow: 1;
    padding-left: 16px;
    background: transparent;
    border: none;
  }

  .output {
    font-size: 18px;
    font-family: Consolas, monospace;
  }
}

.numberPad {
  .buttons {
    display: flex;
    flex-wrap: wrap;

    > button {
      width: 25%;
      height: 64px;
      background: lightgrey;
      border: 1px solid white;
    }
  }
}
</style>