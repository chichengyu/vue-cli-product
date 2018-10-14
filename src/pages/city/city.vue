<template>
	<div class="city">
		<city-header></city-header>
		<city-search :cities='cities.cities'></city-search>
		<city-list :cities='cities' :CityAlphabetIndex='CityAlphabetIndex'></city-list>
		<city-alphabet :citiesRight='cities.cities' @clickScrollEvent='scrollToDom'></city-alphabet>
	</div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
export default {
	name:'city',
	data(){
		return {
			cities:{
				hotCities:[],
				cities:''
			},
			// 传递点击字母选择城市时的索引
			CityAlphabetIndex:''
		}
	},
	components:{
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	methods:{
		getCityInfo(){
			axios.get('/api/city.json').then(this.getCityInfoSuccess);
		},
		getCityInfoSuccess(res){
			var data = res.data
			if (data.ret && data.data) {
				this.cities.hotCities = data.data.hotCities;
				this.cities.cities = data.data.cities;
			}
		},
		// 选择城市，字母滚动到点击的字母处
		scrollToDom(index){
			this.CityAlphabetIndex = index;
		}
	},
	mounted(){
		this.getCityInfo();
	}
}
</script>

<style lang="stylus" scoped>

</style>