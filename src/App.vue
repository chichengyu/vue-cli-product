<template>
  <div>
     <!-- 显示当前路由所对应的内容 -->
    <!-- <router-view></router-view> -->
    <transition name='run' mode='out-in' appear>
      <!-- 优化 keep-alive 缓存 
        exclude='组件名称' 排序不需要缓存的组件
      -->
    	<keep-alive exclude='Detail'>
        <router-view /> 
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
.run-enter{
	transform:translateX(100%)
	opacity:0
}
.run-leave-to{
	transform:translateX(-100%)
	opacity:0
}
.run-enter-active,.run-leave-active{
	transition:all .5s ease
}
</style>