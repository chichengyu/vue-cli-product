<template>
	<div class="detail-header">
		<router-link v-show='flag' to='/' tag='div' class="header-abs">
			<span class="iconfont header-icon">&#xe624;</span>
		</router-link>
		<div v-show='!flag' :style='opcityStyle' class="header-title">
			景点详情
			<router-link class="header-left" to='/' tag='div'>
				<span class="iconfont header-back">&#xe624;</span>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name:'Detail-Heder',
	data () {
		return {
			flag:true,
			opcityStyle:{
				opacity:0
			}
		}
	},
	methods:{
		handleScroll () {
			const top = document.documentElement.scrollTop;
			if (top > 60) {
				const opacity = top / 140 ;
				this.opcityStyle.opacity = opacity > 1 ? 1 : opacity;
				this.flag = false;
			} else {
				this.flag = true;
			}
		}
	},
	// 进入页面的时候执行
	activated(){
		window.addEventListener('scroll',this.handleScroll)
	},
	// 页面消失的时候执行
	deactivated(){
		window.removeEventListener('scroll',this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.detail-header{

	.header-abs{
		position:absolute
		top:.2rem
		left:.2rem
		width:.8rem
		height:.8rem
		line-height:.8rem
		background:rgba(0,0,0,.6)
		border-radius:50%
		text-align:center

		.header-icon{
			color:#fff
			font-size:.4rem
		}
	}

	.header-title{
		position:fixed
		top:0
		left:0
		right:0
		height:$headerHeight
		line-height:$headerHeight
		text-align:center
		background:$bgColor
		color:#fff
		font-size:.32rem

		.header-left{
			position:absolute
			top:0
			left:.04rem
			width:.64rem
			height:.64rem
		}
	}
}
</style>