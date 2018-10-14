<template>
	<div class="detail-banner">
		<div class="banner" @click='showGallary'>
			<div class="banner-img">
				<img :src="bannerData.bannerImg" alt="">
			</div>
			<div class="banner-info">
				<div class="banner-title">
					{{ bannerData.sightName }}
				</div>
				<div class="banner-number">
					<span class="iconfont">&#xe692;</span>
					39
				</div>
			</div>
		</div>
		<!-- 图片查看器 -->
		<fade-animation>
			<!-- 插槽是为了有淡入淡出的效果 -->
			<detail-gallary slot='fadeIn' v-show='flag' :gallaryImgs='bannerData.gallaryImgs'  @showGallary='showGallary'></detail-gallary>
		</fade-animation>
	</div>
</template>

<script>
import DetailGallary from '@/common/gallary/gallary.vue'
import FadeAnimation from '@/common/fadeIn/FadeAnimation.vue'
export default {
	name:'Detail-Banner',
	props:['bannerData'],
	components:{
		DetailGallary,
		FadeAnimation
	},
	data () {
		return {
			flag: false
		}
	},
	methods:{
		showGallary(){
			this.flag = !this.flag;
		}
	}
}
</script>

<style lang="stylus" scoped>
.banner{
	overflow:hidden
	height:0
	padding-bottom:55%
	position:relative

	.banner-img{
		img{
			width:100%
		}
	}

	.banner-info{
		display:flex
		position:absolute
		left:0
		right:0
		bottom:0
		line-height:.6rem
		background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5))
		color:#fff

		.banner-title{
			flex:1
			font-size:.32rem
			padding:0 .2rem
		}

		.banner-number{
			height:.32rem
			line-height:.32rem
			margin-top:.14rem
			padding:0 .4rem
			background:rgba(0,0,0,.8)
			border-radius:.2rem
			font-size:.24rem

			span{
				font-size:.24rem
			}
		}
	}
}
</style>