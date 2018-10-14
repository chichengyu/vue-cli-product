<template>
	<div class="search-box">
		<div class="search">
			<input v-model='keywords' type="text" class="search-input" placeholder="请输入城市名称或拼音">
		</div>
		<div class="search-content" ref='searchContent' v-show='keywords'>
			<ul>
				<li @click='handelCityClick(item.name)' class="item border-bottom" v-for='item in list' :key='item.id'>{{ item.name }}</li>
				<li class="item border-bottom txt-center" v-show='hasCityShow'>无搜索结果</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name:'city-search',
	props:['cities'],
	data () {
		return {
			keywords:'',
			list:[],
			timer:null
		}
	},
	methods:{
		handelCityClick(city){
			this.$store.commit('getCurrentCity',city);
			this.$router.push({path:'/'});
		}
	},
	computed:{
		hasCityShow(){
			return !this.list.length;
		}
	},
	mounted(){
		this.scroll = new BScroll(this.$refs.searchContent);
	},
	watch:{
		keywords(){
			this.timer && clearTimeout(this.timer);
			this.timer = setTimeout(() => {
				var result = [];
				for (var key in this.cities) {
					this.cities[key].forEach((item) => {
						if (item.name.indexOf(this.keywords) > -1 || item.spell.indexOf(this.keywords) > -1) {
							result.push(item);
						}
					})
				}
				this.list = result;
			},100);
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.txt-center{
	text-align:center
}
.search{
	height:.72rem
	background:$bgColor
	padding:0 .1rem
	
	.search-input{
		box-sizing:border-box
		padding:0 .1rem
		width:100%
		height:.62rem
		line-height:.62rem
		color:#666
		text-align:center
	}
}
.search-content{
	position:absolute
	top:1.58rem
	left:0
	right:0
	bottom:0
	background:#fff
	z-index:1
	overflow:hidden

	.item{
		line-height:.76rem
		padding-left:.2rem
	}
}
</style>