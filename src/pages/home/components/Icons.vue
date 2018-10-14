<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide class='page-swiper' v-for='(pageItem,i) in page' :key='i'>
				<div v-for='(item,index) in pageItem' class="icon-item" :key='index'>
					<div class="item-img">
						<img :src="item.imgUrl" alt="">
					</div>
					<p class="item-txt">{{ item.desc }}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	name:'Home-Icons',
	props:['icons'],
	data () {
		return {
			swiperOption:{},
		}
	},
	computed:{
		page(){
			const pages = [];
			this.icons.forEach(function(item,index) {
				// 计算在第几页
				var page = Math.floor(index / 8 );
				// 第 8 个时，在第二页
				if (!pages[page]) {
					// 存第二页的数据
					pages[page] = [];
				}
				pages[page].push(item);
			})
			return pages;
		}
	}
}
</script>

<style lang="stylus" scoped>
.icons
	overflow:hidden
	height:0
	padding-bottom:50%
	.icon-item
		position:relative
		float:left
		width:25%
		padding-bottom:25%
		box-sizing:border-box
		.item-img
			position absolute
			top:0
			left:0
			right:0
			bottom:.44rem
			padding:.2rem .3rem
			img
				display:block
				margin:0 auto
				width:100%
				height:100%
				border-radius:.1rem
		.item-txt
			position:absolute
			bottom:0
			left:0
			right:0
			height:.44rem
			line-height:.44rem
			text-align:center
			color:#333

</style>