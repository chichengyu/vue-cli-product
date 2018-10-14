<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<router-link to='/city' tag='div'>
			<div class="header-right">
				{{ this.$store.state.currentCity }}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name:'Home-header'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
	height:.86rem
	background:$bgColor
	display:flex
	color:#fff
	line-height:.86rem
	overflow:hidden
	
	.header-left
		width:.64rem
		height:.64rem
		margin-left:.2rem

	.header-input
		flex:1
		height:.64rem
		line-height:.64rem
		background:#fff
		margin:.12rem 0
		border-radius:.1rem
		color:#888
		text-indent:.2rem

	.header-right
		min-width:1.04rem
		padding:0 .1rem
		height:.64rem
		text-align:center
		
		.arrow-icon
			font-size:.2rem
</style>