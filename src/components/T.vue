<template>
	<button @click="num++">{{num}}</button>
</template>

<script>
	export default {
		name: 'T',
		data () {
			return {
				num: 1
			}
		}
	}
</script>

<style>
</style>
