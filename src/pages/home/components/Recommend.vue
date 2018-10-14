<template>
	<div class="recommed-container">
		<div class="title">热销推荐</div>
		<router-link tag='div' :to='"/detail/"+item.id' class="item" v-for='item in recommend' :key='item.id'>
			<div class="item-img">
				<img :src="item.imgUrl" alt="">
			</div>
			<div class="item-info">
				<h3>{{ item.title }}</h3>
				<p>{{ item.desc }}</p>
				<span>查看详情</span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name:"Home-Recommend",
	props:['recommend']
}
</script>

<style lang="stylus" scoper>
@import '~@/assets/styles/mixins.styl'
.recommed-container
	.title
		line-height:.8rem
		background:#eee
		margin-top:.2rem
		text-indent:.2rem

	.item
		display:flex
		height:1.9rem
		overflow:hidden

		.item-img
			width:1.7rem
			height:1.7rem
			padding:.1rem
			img
				width:100%
				height:100%
		.item-info
			flex:1
			min-width:0

			h3
				line-height:.54rem
				font-size:.32rem
				ellipsis()

			p
				line-height:.4rem
				color:#ccc
				ellipsis()

			span
				margin-top:.4rem
				padding: 0 .1rem
				background:#ff9300
				line-height:.44rem
				border-radius:.06rem
				color:#fff
</style>