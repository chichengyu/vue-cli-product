<template>
	<div class="weekend-container">
		<div class="title">周末去哪儿</div>
		<div class="item" v-for='item in weekend' :key='item.id'>
			<div class="item-img">
				<img :src="item.imgUrl" alt="">
			</div>
			<div class="item-info">
				<h3>{{ item.title }}</h3>
				<p>{{ item.desc }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"Home-Recommend",
	props:['weekend']
}
</script>

<style lang="stylus" scoper>
@import '~@/assets/styles/mixins.styl'
.weekend-container
	.title
		line-height:.8rem
		background:#eee
		margin-top:.2rem
		text-indent:.2rem
	
	.item
		overflow:hidden
		margin-top:.1rem
		.item-img
			height:0
			padding-bottom:37.09%
			overflow:hidden
			img
				width:100%
		
		.item-info
			padding:.1rem
			h3
				line-height:.54rem
				font-size:.32rem
				ellipsis()

			p
				line-height:.4rem
				color:#ccc
				ellipsis()
</style>