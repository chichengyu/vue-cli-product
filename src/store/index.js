import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	// mutations 里面的方法是 同步
	// mutations 中的方法的第一个参数是 state 属性对象
	mutations,
	// actios 里面的方法是 异步
	// actions 中的方法的第一个参数是 store 实例对象
	// actions:{
	// 	getCurrentCity(store,city){
	// 		store.commit('getCity',city);
	// 	}
	// }
});