<template>
	<div class="gallary-container" @click='closeGallary'>
		<!-- 撑出一个正方形的 -->
		<div class="gallary-wapper">
			<swiper :options="swiperOption">
			    <!-- slides -->
			    <swiper-slide v-for='(item,index) in gallaryImgs' :key='index'>
			    	<img class="swiper-img" :src="item" alt="">
			    </swiper-slide>
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
export default {
	name:'Gallary',
	props:['gallaryImgs'],
	data () {
		return {
			swiperOption:{
				pagination:'.swiper-pagination',
				paginationType : 'fraction',
				// 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
				observer:true,
				// 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
				observeParents:true,
			}
		}
	},
	methods:{
		closeGallary(){
			this.$emit('showGallary');
		}
	}
}
</script>

<style lang="stylus" scoped>
.swiper-container{
	overflow:inherit;
	
	.swiper-pagination{
		bottom:-1rem
		color:#fff
	}
}
.gallary-container{
	overflow:hidden
	display:flex
	flex-direction:column
	justify-content:center
	position:absolute
	top:0
	left:0
	right:0
	bottom:0
	z-index:99
	background:#000

	.gallary-wapper{
		height:0
		width:100%
		padding-bottom:100%

		.swiper-img{
			width:100%
		}
	}
}
</style>