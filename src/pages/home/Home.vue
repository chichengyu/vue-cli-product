<template>
	<div class="home-container">
		<!-- header -->
		<home-header></home-header>
			
		<!-- banner -->
		<home-swiper :swiper='swiperList'></home-swiper>
		<home-icons :icons='iconsList'></home-icons>
		<home-recommed :recommend='recommendList'></home-recommed>
		<home-weekend :weekend='weekendList'></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommed from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'

export default {
	name:'Home',
	data(){
		return {
			swiperList:[],
			iconsList:[],
			recommendList:[],
			weekendList:[],
			lastCity:''
		}
	},
	components:{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommed,
		HomeWeekend
	},
	mounted(){
		this.lastCity = this.$store.state.currentCity;
		this.gethomeInfo();
	},
	// 优化
	activated(){
		var city = this.$store.state.currentCity;
		if (this.lastCity !== city) {
			// 更新前一次选择的城市
			this.lastCity = city;
			// 选择不同的城市，请求不同的数据
			this.gethomeInfo();
		}
	},
	methods:{
		gethomeInfo(){
			var city = this.$store.state.currentCity;
			axios.get('/api/index.json?city=' + city,{
				headers:{
					token:1000000000000000000
				}
			}).then(this.gethomeInfoData)
		},
		gethomeInfoData(res){
			var dataList = res.data.data;
			if (res.data.ret && dataList) {
				this.swiperList = dataList.swiperList;
				this.iconsList = dataList.iconList;
				this.recommendList = dataList.recommendList;
				this.weekendList = dataList.weekendList;
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	
</style>