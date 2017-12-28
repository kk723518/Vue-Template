<template>
   <div id="Thrid">
    <p>{{message}}</p>
    <input v-model="message"><br>
    <button v-on:click="reverseMessage">逆转消息</button>

    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple-dark">dddd</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-dark">dddd</div>
        </el-col>
        </el-row>

        <el-container style="margin-bottom:30px;">
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
   </div>
</template>

<script>
export default {
   name: 'Thrid',
   data() {
    return{
        message: 'Hello Vue.js!',
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }

}
</script>

<style>

</style>
