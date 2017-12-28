<template>
  <div id="Second">
    <span v-bind:title="message">
      鼠标悬停几秒钟后查看此处动态绑定的提示信息
    </span>
  
  </div>
</template>

<script>
export default {
  name:'Second',
  data(){
    return {
      message: '页面加载于 ' + new Date().toLocaleString()
    } 
  }

}
</script>

<style>

</style>
