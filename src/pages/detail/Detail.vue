<template>
	<div class="detail-container">
		<detail-banner :bannerData='bannerData'></detail-banner>
		<detail-header></detail-header>
		<detail-list :listData='listData'></detail-list>
	</div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
	name:'Detail',
	components:{
		DetailHeader,
		DetailBanner,
		DetailList
	},
	data () {
		return {
			bannerData:{
				sightName:'',
				bannerImg:'',
				gallaryImgs:[],
				categoryList:[]
			},
			listData:[
				//  格式如下：递归组件数据
				// {
				// 	title:'学生票',
				// 	children:[
				// 		{
				// 			title:'学生票123',
				// 			children:[
				// 				{
				// 					title:'学生票456',
				// 				}
				// 			]
				// 		}
				// 	]
				// },
				// {title:'成人票'},
				// {title:'老人票'},
			]
		}
	},
	methods:{
		getDetailInfo(){
			axios.get('/api/detail.json',{
				params:{
					id:this.$route.params.id
				}
			}).then(this.getDetailInfoSuccess);
		},
		getDetailInfoSuccess(res){
			var data = res.data.data;
			if (res.data.ret && data) {
				this.bannerData.sightName = data.sightName;
				this.bannerData.bannerImg = data.bannerImg;
				this.bannerData.gallaryImgs = data.gallaryImgs;
				this.bannerData.categoryList = data.categoryList;
				// 递归组件数据
				this.listData = data.categoryList;
			}
		}
	},
	mounted () {
		this.getDetailInfo();
	}
}
</script>

<style lang="stylus" scoped>
	
</style>