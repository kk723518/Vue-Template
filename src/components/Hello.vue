<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<ul>
			<li>
				<a href="https://m33pj3rx7y.codesandbox.io/first" target="_blank">1.声明式渲染 </a>
			</li>
			<br/>
			<li>
				<a href="https://forum.vuejs.org" target="_blank">Forum</a>
			</li>
			<li>
				<a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
			</li>
			<li>
				<a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
			</li>
			<br>
			<li>
				<a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
  name: 'hello',  //类型：类似是string function HTMLElement
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>