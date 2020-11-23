<template>
  <div id="app">
  <table >
    <tr>
      <th>key</th>
      <th>value</th>
      <th>Desction</th>
    </tr>
    <tr v-for="(item, key) in list" :key="key">
      <th><input v-model="item.key"/></th>
      <th><input v-model="item.value"/></th>
      <th><input v-model="item.desction"/></th>
    </tr>
  </table>
    <button @click="Submit">提交</button>
    <ul>
      <todo-item
        v-for="(item,index) of list"
        :key="index"
        :content="item"
        :index="index"
        @delete="handleDelete">
      </todo-item>
    </ul>
  </div>
</template>

<script>
import Todoitem from './components/Todoitem'

const itemTemp = {
  inputValue: '2 ',
  key: '2 ',
  value: ' 3',
  desction: {}
}
export default {
  components: {
    'todo-item': Todoitem
  },
  data () {
    return {
      list: [{
        inputValue: ' ',
        key: ' ',
        value: ' ',
        desction: {}
      },{
        inputValue: ' ',
        key: ' ',
        value: ' ',
        desction: {}
      }
      ]
    }
  },
  methods: {
    Submit: function () {
    
      this.list.push(itemTemp)
      console.log(this.list)
    },
    handleDelete: function (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
<style>

</style>
