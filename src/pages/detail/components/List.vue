<template>
	<div class="list">
		<div class="item" v-for='(item,index) in listData' :key='index'>
			<div class="item-title  border-bottom">
				<span class="item-title-icon"></span>
				{{ item.title }}
			</div>
			<!-- 递归组件：调用自己 -->
			<div v-if='item.children' class="item-chilren">
				<detail-list :listData='item.children'></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'DetailList',
	props:['listData']
}
</script>

<style lang="stylus" scoped>
.list{
	.item{

		.item-title{
			line-height:.8rem
			font-size:.32rem
			padding:0 .2rem
			
			.item-title-icon{
				display:inline-block;
				width:.36rem;
				height:.36rem;
				position:relative;
				top:.06rem;
				left:.06rem;
				background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
				margin-right:.1rem
				background-size:.4rem 1rem;
			}
		}
		
		.item-chilren{
			padding:0 .2rem
		}
	}
}
</style>