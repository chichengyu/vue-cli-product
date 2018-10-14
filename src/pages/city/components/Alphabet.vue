<template>
	<div class="city-right">
		<div class="item"
			v-for='item in citiesRightes'
			:key='item'
			:ref='item'
			@touchstart.prevent='handleStart'
			@touchmove='handleMove'
			@touchend='handleEnd'
			@click='scrollToDom(item)'
		>
		{{ item }}
		</div>
	</div>
</template>

<script>
export default {
	name:'city-right',
	props:['citiesRight'],
	data(){
		return {
			touchStatus:false,
			startY:0,
			timer:null
		}
	},
	computed:{
		citiesRightes(){
			var newCitiesRight = [];
			for (var key in this.citiesRight) {
				newCitiesRight.push(key);
			}
			return newCitiesRight;
		}
	},
	// 优化
	updated(){
		this.startY = this.$refs['A'][0].offsetTop
	},
	methods:{
		scrollToDom(key){
			this.$emit('clickScrollEvent',key);
		},
		handleStart(e){
			this.touchStatus = true;
			// if (!this.startY) {
			// 	this.startY = this.$refs['A'][0].offsetTop;
			// }
		},
		handleMove(e){
			if (this.touchStatus) {
				if (this.timer) {
					clearTimeout(this.timer);
				}
				// 优化
				this.timer = setTimeout(()=>{
					// var startY = this.$refs['A'][0].offsetTop;
					var t = e.touches[0].clientY - 79 - this.startY,
						index = Math.floor(t / 20);// 求索引

					if (index >= 0 && index < this.citiesRightes.length) {
						this.$emit('clickScrollEvent',this.citiesRightes[index]);
					}
				},16);
				
			}
		},
		handleEnd(e){
			this.touchStatus = false;
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.city-right{
	position:absolute
	top:1.58rem
	right:0
	bottom:0
	display:flex
	flex-direction:column
	justify-content:center

	.item{
		width:.4rem
		line-height:.32rem
		text-align:center
		color:$bgColor
	}
}
</style>