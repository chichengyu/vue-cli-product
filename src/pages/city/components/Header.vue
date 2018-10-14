<template>
	<div class="city-header">
		城市选择
		<router-link class="header-left" to='/' tag='div'>
			<span class="iconfont header-back">&#xe624;</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name:'city-header'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.city-header
	position:relative
	height:$headerHeight
	line-height:$headerHeight
	text-align:center
	background:$bgColor
	color:#fff
	font-size:.32rem

	.header-left
		position:absolute
		top:0
		left:.04rem
		width:.64rem
		height:.64rem
</style>