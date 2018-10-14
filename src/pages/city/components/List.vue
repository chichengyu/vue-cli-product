<template>
	<div class="list" ref='wrapper'>
		<div class="content">
			<!-- 当前城市 -->
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="city-list">
					<div class="btn-list">
						<div class="btn-city">{{ this.$store.state.currentCity }}</div>
					</div>
				</div>
			</div>
			<!-- 热门城市 -->
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="city-list">
					<div class="btn-list" v-for='item in cities.hotCities' :key='item.id'>
						<div @click='handelCityClick(item.name)' class="btn-city">{{ item.name }}</div>
					</div>
				</div>
			</div>
			<!-- 字母查找城市 -->
			<div class="area" v-for='(item,key) in cities.cities' :key='key' :ref='key'>
				<div class="title border-topbottom">{{ key }}</div>
				<div class="city-item-list" v-for='cityItem in item'>
					<div @click='handelCityClick(cityItem.name)' class="city-item border-bottom">{{ cityItem.name }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name:'city-list',
	props:['cities','CityAlphabetIndex'],
	mounted(){
		this.scroll = new BScroll(this.$refs.wrapper);
	},
	methods:{
		handelCityClick(city){
			this.$store.commit('getCurrentCity',city);
			this.$router.push({path:'/'});
		}
	},
	watch:{
		CityAlphabetIndex(){
			if (this.CityAlphabetIndex) {
				// console.log(this.$refs)
				const currentElementCity = this.$refs[this.CityAlphabetIndex][0];
				this.scroll.scrollToElement(currentElementCity,1500);
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.border-topbottom{
	&::before{
		border-color:#ccc
	}
	&::after{
		border-color:#ccc
	}
}
.border-bottom{
	&::before{
		border-color:#ccc
	}
}
.list{
	overflow:hidden
	position:absolute
	top:1.58rem
	left:0
	right:0
	bottom:0

	.title{
		line-height:.54rem
		background:#eee
		padding-left:.2rem
		font-size:.26rem
		color:#666
	}
	.city-list{
		overflow:hidden
		padding:.1rem .6rem .1rem .1rem
		
		.btn-list{
			float:left
			width:33.33%

			.btn-city{
				margin:.1rem
				padding:.1rem
				text-align:center
				border:.02rem solid #ccc
				border-radius:.1rem
			}
		}
	}
	.city-item-list{
		.city-item{
			line-height:.76rem
			padding-left:.2rem
		}
	}
}
</style>