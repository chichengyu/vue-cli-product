<template>
	<div class="swiper">
		<swiper :options="swiperOption" v-if='showSwiper'>
		    <!-- slides -->
		    <swiper-slide v-for='item in swiper' :key='item.id' class='swiper-slide'>
		    	<img :src="item.imgUrl" alt="">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		 </swiper>
	</div>
</template>

<script>
export default {
	name:'Home-Swiper',
	props:['swiper'],
	data:function() {
		return {
			list:[
				{src:'http://cdn.xiaochiwz.cn/jsonp.jpg'},
				{src:'http://cdn.xiaochiwz.cn/wampserver.jpg'}
			],
			swiperOption:{
				pagination:'.swiper-pagination',
				loop:true,
				autoplay:2000
			}
		}
	},
	computed:{
		showSwiper(){
			return this.swiper.length
		}
	}
}
</script>
s
<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
	background:#fff

.swiper
	width:100%
	background #eee

	.swiper-slide
		height:2rem;
		overflow:hidden
		background:red

		img
			width:100%
			height:100%
	
	

</style>